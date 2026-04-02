/**
 * الدالة الأم: وظيفتها إدارة التدفق المنطقي فقط (Orchestration)
 * لا يوجد هنا كود معالجة، فقط استدعاءات لوظائف متخصصة.
 */
function verify(exerciseID) {
    alert('دخلنا verify ');
    // 2. تقييم الإجابات (صواب/خطأ) بناءً على القيم المدخلة
    const evaluation = evaluateAnswers(exerciseID);
    alert('خرجنا من evaluateAnswers ');
    if (evaluation.noAnswer){
        alert("أجب أولا");
        return;
    }
    // 3. تحديث قاعدة البيانات المحلية (LocalStorage) بالنتائج الجديدة
    const updatedRecord = syncWithLocalStorage(exerciseID, evaluation.score);
    
    // 4. تقديم التغذية الراجعة البصرية (تلوين، تلميحات، شريط التقدم)
    renderVisualFeedback(exerciseID, evaluation, updatedRecord.avg);
    
    // 5. إدارة حالة الأزرار والعناصر (قفل المدخلات، تفعيل "أعد المحاولة")
    finalizeExerciseState(exerciseID);
    
    
}


/**
 * 2. تقييم الإجابات (Evaluation - All or Nothing)
 * تقيم كل جزء (p1, p2...) ككتلة واحدة صائبة أو خاطئة
 */
function evaluateAnswers(exerciseID) {
    // 1. تجميع العناصر حسب "الجزء" (p1, p2...)
    const partsMap = {};
    const allElements = document.querySelectorAll(`.${exerciseID}`);
    
    allElements.forEach(el => {
        if (!partsMap[el.name]) partsMap[el.name] = [];
        partsMap[el.name].push(el);
    });

    const totalParts = Object.keys(partsMap).length;
    let correctPartsCount = 0;
    const details = [];

    // 2. تقييم كل جزء على حدة
    for (const partName in partsMap) {
        const elements = partsMap[partName];
        let partIsCorrect = true;
        let hadAnswered = false;

        for (const el of elements) {
            if (el.type === 'radio' || el.type === 'checkbox') {
                // القاعدة: (مختار وصحيح) أو (غير مختار وخاطئ) -> هذا هو الصواب
                const shouldBeSelected = el.value === "1";
                if (el.checked) hadAnswered = true;
                if (el.checked !== shouldBeSelected) {
                    partIsCorrect = false;
                    break; 
                }
            } else if (el.type === 'number') {
                const correctAnswer = parseFloat(el.getAttribute('data-answer'));
                const userVal = parseFloat(el.value);
                if (el.value !== '') hadAnswered = true;
                if (isNaN(userVal) || Math.abs(userVal - correctAnswer) >= 0.01) {
                    partIsCorrect = false;
                    break;
                }
            }
        }

        if (partIsCorrect) correctPartsCount++;
        
        details.push({
            name: partName,
            isCorrect: partIsCorrect,
            type: elements[0].type // نوع الجزء بناءً على أول عنصر فيه
        });
    }
    
    if(!hadAnswered) return {
        noAnswer: hadAnswered;
    };
    
    const attemptScore = totalParts > 0 ? (correctPartsCount / totalParts) * 100 : 0;
    /*
    // --- كود فحص هيكل الـ details (للمصفوفات) ---
    let partsReport = "score : " + attemptScore + "\n";
    partsReport += `تفاصيل التصحيح (details):\n`;

    // استخدم for...of للمصفوفات للوصول للكائن مباشرة
    for (const part of details) {
        partsReport += `\n📦 القسم [${part.name}] | صحيح: (${part.isCorrect}) | نوعه: ${part.type}\n`;
    }

    alert(partsReport);
    // ---------------------------------------
     */
    return {
        score: attemptScore,
        details: details
    };
}


/**
 * 3. التزامن مع التخزين المحلي (Persistence)
 * تطبيق المعادلة: (المعدل القديم * عدد المحاولات + العلامة الجديدة) / (العدد + 1)
 */
function syncWithLocalStorage(exerciseID, attemptScore) {
    // 1. جلب البيانات الحالية من localStorage (أو إنشاء سجل جديد إذا كان أول مرة)
    let profile = JSON.parse(localStorage.getItem('userProfile')) || { info: {}, records: {} };
    
    // إذا لم يكن للتمرين سجل سابق، ننشئ واحداً افتراضياً
    if (!profile.records[exerciseID]) {
        profile.records[exerciseID] = {
            avg: 0,
            attempts: 0,
            lastAttempt: null,
            isLocked: false
        };
    }

    let record = profile.records[exerciseID];

    // 2. تطبيق المعادلة الحسابية للمعدل التراكمي
    const oldTotal = record.avg * record.attempts;
    record.attempts += 1;
    record.avg = (oldTotal + attemptScore) / record.attempts;

    // 3. تحديث البيانات الزمنية والحالة
    record.lastAttempt = new Date().toISOString();
    record.isLocked = true; // قفل التمرين بعد التحقق
    
    // تحديث تاريخ آخر نشاط عام للمستخدم
    profile.info.lastActive = new Date().toISOString();

    // 4. الحفظ النهائي في localStorage
    localStorage.setItem('userProfile', JSON.stringify(profile));

    // إرجاع السجل المحدث لاستخدامه في تحديث الواجهة (UI)
    return record;
}


/**
 * 4. التغذية الراجعة البصرية (Rendering)
 * إظهار التلميحات، تلوين الأجزاء، وتحديث شريط التقدم
 */
function renderVisualFeedback(exerciseID, evaluation, averageScore) {
    // 1. تحديث شريط التقدم (بأمان)
    const progressBar = document.getElementById(`${exerciseID}-bar`);
    const progressVal = document.getElementById(`${exerciseID}-val`);

    if (progressBar) progressBar.style.width = averageScore + "%";
    if (progressVal) progressVal.innerText = Math.round(averageScore) + "%";

    // 2. تلوين الأجزاء وإظهار التلميحات
    if (evaluation && evaluation.details) {
        evaluation.details.forEach(part => {
            // جلب عناصر التلميحات
            const successHint = document.getElementById(`${part.name}-hintSuccess`);
            const errorHint = document.getElementById(`${part.name}-hintError`);

            if (part.isCorrect) {
                if (successHint) successHint.classList.remove('d-none');
                if (errorHint) errorHint.classList.add('d-none');
            } else {
                if (errorHint) errorHint.classList.remove('d-none');
                if (successHint) successHint.classList.add('d-none');
            }

            // تلوين العناصر نفسها (Inputs & Labels)
            const inputs = document.querySelectorAll(`[name="${part.name}"]`);
            inputs.forEach(el => {
                if (el.type === 'number') {
                    el.classList.add(part.isCorrect ? 'is-valid' : 'is-invalid');
                } else {
                    // تلوين النص (Label) المرتبط بالراديو أو التشيك بوكس
                    const label = document.querySelector(`label[for="${el.id}"]`);
                    if (label) {
                        label.style.color = part.isCorrect ? /*'#198754'*/ 'green': /*'#dc3545'*/'red'; // ألوان Bootstrap
                        label.classList.add('fw-bold');
                    }
                }
            });
        });
    }
}


/**
 * وظيفة مساعدة لتلوين العناصر (تغيير الحدود أو الخلفية)
 */
function highlightPart(exerciseID, partName, status) {
    const elements = document.querySelectorAll(`[name="${exerciseID}-${partName}"]`);
    
    elements.forEach(el => {
        if (el.type === 'number') {
            // الحقول الرقمية نلون إطارها
            el.classList.remove('border-success', 'border-danger');
            el.classList.add(`border-${status}`, 'border-2');
        } else {
            // الراديو والتشيك بوكس نلون النص التابع لها (Label)
            const label = document.querySelector(`label[for="${el.id}"]`);
            if (label) {
                label.classList.remove('text-success', 'text-danger', 'fw-bold');
                label.classList.add(`text-${status}`, 'fw-bold');
            }
        }
    });
}



/**
 * 5. إدارة الحالة النهائية (Finalization)
 * قفل المدخلات وتبديل حالة الأزرار (Inhiber/Désinhiber)
 */
/**
 * 5. إدارة الحالة النهائية (النسخة الصافية)
 */
function finalizeExerciseState(exerciseID) {
    // أ. قفل كافة المدخلات في التمرين
    const inputs = document.querySelectorAll(`.${exerciseID}`);
    inputs.forEach(input => {
        input.disabled = true;
    });

    // ب. الوصول للأزرار باستخدام المعرفات (IDs)
    const btnVerify = document.getElementById(`${exerciseID}-btnVerify`);
    const btnRetry = document.getElementById(`${exerciseID}-btnRetry`);

    // ج. تعطيل زر "تحقق" وتغيير مظهره
    if (btnVerify) {
        btnVerify.disabled = true;
        btnVerify.classList.add('opacity-50');
        btnVerify.innerHTML = `تم التحقق <i class="bi bi-check-all"></i>`;
    }

    // د. تحرير زر "أعد المحاولة" (Inhiber -> Activer)
    if (btnRetry) {
        btnRetry.disabled = false; // تفعيل الزر برمجياً
        btnRetry.classList.remove('disabled'); // إزالة كلاسات التعطيل
        btnRetry.classList.add('shadow-sm'); // تلوينه ليكون جذاباً
        
        // إضافة مستمع حدث (Event Listener) للزر إذا لم يكن موجوداً
        // ليقوم بتحديث الصفحة أو تصفير التمرين عند الضغط عليه
        /*btnRetry.onclick = function() {
            location.reload(); // أبسط طريقة لإعادة المحاولة حالياً هي تحديث الصفحة
        };*/
    }
}
/*
function finalizeExerciseState(exerciseID) {
    // أ. قفل كافة المدخلات (Inputs) لمنع التلاعب بعد التصحيح
    const inputs = document.querySelectorAll(`.${exerciseID}`);
    inputs.forEach(input => {
        input.disabled = true;
    });

    // ب. إدارة الأزرار (Control Buttons)
    const btnVerify = document.getElementById(`${exerciseID}-btnVerify`);
    const btnRetry = document.getElementById(`${exerciseID}-btnRetry`);

    if (btnVerify) {
        // تعطيل زر التحقق وإضافة لمسة بصرية (شفافية بسيطة)
        btnVerify.disabled = true;
        btnVerify.classList.add('opacity-50');
    }

    if (btnRetry) {
        // تفعيل زر "أعد المحاولة" (Désinhiber)
        btnRetry.disabled = false;
        btnRetry.classList.remove('d-none'); // نضمن ظهوره إذا كان مخفياً
    }
}
*/
/**
 * دالة إعادة المحاولة: تصفير التمرين برمجياً وبصرياً
 */
function resetExercice(exerciseID){
    alert("resetExercice ");
    // 1. جلب كافة العناصر والمدخلات
    const allElements = document.querySelectorAll(`.${exerciseID}`);
    const btnVerify = document.getElementById(`${exerciseID}-btnVerify`);
    const btnRetry = document.getElementById(`${exerciseID}-btnRetry`);

    // 2. تصفير المدخلات وإعادة تفعيلها
    allElements.forEach(el => {
        el.disabled = false; // فك القفل
        if (el.type === 'number') {
            el.value = ''; // مسح الرقم
            el.classList.remove('is-valid', 'is-invalid'); // مسح ألوان الحدود
        } else if (el.type === 'radio' || el.type === 'checkbox') {
            el.checked = false; // إلغاء الاختيار
            // إعادة لون النص الأصلي (Label)
            const label = document.querySelector(`label[for="${el.id}"]`);
            if (label) {
                label.style.color = ''; 
                label.classList.remove('fw-bold');
            }
        }
    });

    // 3. إخفاء التلميحات (Hints)
    const hints = document.querySelectorAll(`[id^="${exerciseID}"][id$="HintSuccess"], [id^="${exerciseID}"][id$="HintError"]`);
    hints.forEach(h => h.classList.add('d-none'));

    // 4. إدارة الأزرار
    if (btnVerify) {
        btnVerify.disabled = false;
        btnVerify.classList.remove('opacity-50');
        btnVerify.innerHTML = `تحقق <i class="bi bi-check-circle ms-1"></i>`;
    }
    if (btnRetry) {
        btnRetry.disabled = true; // يعود للتعطيل حتى يتم الحل مجدداً
    }

    // 5. تحديث الذاكرة (فتح القفل برمجياً)
    let profile = JSON.parse(localStorage.getItem('userProfile'));
    if (profile && profile.records[exerciseID]) {
        profile.records[exerciseID].isLocked = false;
        localStorage.setItem('userProfile', JSON.stringify(profile));
    }

}



/**
 * وظيفة الاسترجاع (Hydration): تعيد الحياة للتمرين من الذاكرة
 */
function hydrateExercise(exerciseID) {
    try {
        const data = localStorage.getItem('userProfile');
        if (!data) return;

        const profile = JSON.parse(data);
        const record = profile.records ? profile.records[exerciseID] : null;

        if (record && record.isLocked) {
            // 1. تقييم سريع لتحديد الألوان بناءً على الاختيارات الحالية
           // const evaluation = evaluateAnswers(exerciseID);
            
            // 2. تلوين الواجهة وتحديث شريط التقدم
            //renderVisualFeedback(exerciseID, evaluation, record.avg);
            
            // 3. قفل الأزرار وتحرير زر "أعد المحاولة"
            //finalizeExerciseState(exerciseID);
        }
    } catch (e) {
        alert("خطأ في استرجاع البيانات: ", e);
    }
}

/**
 * صيد الحدث (Event Catch): تشغيل الاسترجاع فور تحميل الصفحة
 */
document.addEventListener('DOMContentLoaded', () => {
    // ضع هنا الـ ID الخاص بالتمرين (يمكنك تكرار السطر لتمارين أخرى)
    const currentEx = "anal-limits-pra-ex001"; 
    
   // hydrateExercise(currentEx);
});















