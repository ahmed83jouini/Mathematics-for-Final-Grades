/**
 * الدالة الأم: وظيفتها إدارة التدفق المنطقي فقط (Orchestration)
 * لا يوجد هنا كود معالجة، فقط استدعاءات لوظائف متخصصة.
 */
function verify(exerciseID) {
    // 1. تجميع البيانات المدخلة من واجهة المستخدم
    const userInputs = collectInputs(exerciseID);

    // 2. تقييم الإجابات (صواب/خطأ) بناءً على القيم المدخلة
    const evaluation = evaluateAnswers(userInputs, exerciseID);

    // 3. تحديث قاعدة البيانات المحلية (LocalStorage) بالنتائج الجديدة
    const updatedRecord = syncWithLocalStorage(exerciseID, evaluation.score);

    // 4. تقديم التغذية الراجعة البصرية (تلوين، تلميحات، شريط التقدم)
    renderVisualFeedback(exerciseID, evaluation, updatedRecord.avg);

    // 5. إدارة حالة الأزرار والعناصر (قفل المدخلات، تفعيل "أعد المحاولة")
    finalizeExerciseState(exerciseID);
}

/**
 * 1. تجميع المدخلات (Data Collection)
 * تجلب العناصر بناءً على النوع (Number, Checkbox, Radio)
 */
function collectInputs(exerciseID) {
    const elements = document.querySelectorAll(`.${exerciseID}`);
    const inputsData = [];

    elements.forEach(el => {
        let entry = {
            name: el.name,      // المعرف الفريد للجزء (مثل p1, p2)
            type: el.type,      // نوع المدخل
            element: el         // المرجع المباشر للعنصر في الـ DOM
        };

        switch (el.type) {
            case 'number':
                // نأخذ القيمة الرقمية، ونتعامل مع الفراغ كقيمة null
                entry.value = el.value !== "" ? parseFloat(el.value) : null;
                inputsData.push(entry);
                break;

            case 'radio':
                // في الراديو، نهتم فقط بالعنصر الذي اختاره التلميذ
                if (el.checked) {
                    entry.value = el.value; // القيمة (1 أو 0)
                    inputsData.push(entry);
                }
                break;

            case 'checkbox':
                // المربعات قد تحتوي على عدة إجابات لنفس الجزء
                // لذا نخزن حالة الاختيار (true/false) والقيمة
                if (el.checked) {
                    entry.value = el.value;
                    inputsData.push(entry);
                }
                break;
        }
    });

    return inputsData;
}

/**
 * 2. تقييم الإجابات (Evaluation - All or Nothing)
 * تقيم كل جزء (p1, p2...) ككتلة واحدة صائبة أو خاطئة
 */
function evaluateAnswers(userInputs, exerciseID) {
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

        for (const el of elements) {
            if (el.type === 'radio' || el.type === 'checkbox') {
                // القاعدة: (مختار وصحيح) أو (غير مختار وخاطئ) -> هذا هو الصواب
                const shouldBeSelected = el.value === "1";
                if (el.checked !== shouldBeSelected) {
                    partIsCorrect = false;
                    break; 
                }
            } else if (el.type === 'number') {
                const correctAnswer = parseFloat(el.getAttribute('data-answer'));
                const userVal = parseFloat(el.value);
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

    const attemptScore = totalParts > 0 ? (correctPartsCount / totalParts) * 100 : 0;

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
    // أ. تحديث شريط التقدم والنسبة المئوية في الأعلى (المعدل التراكمي)
    const progressBar = document.getElementById(`${exerciseID}-bar`);
    const progressVal = document.getElementById(`${exerciseID}-val`);

    if (progressBar) progressBar.style.width = `${averageScore}%`;
    if (progressVal) progressVal.innerText = `${Math.round(averageScore)}%`;

    // ب. معالجة التلميحات والألوان لكل جزء (Part)
    evaluation.details.forEach(part => {
        const successHint = document.getElementById(`${exerciseID}-${part.name}-hintSuccess`);
        const errorHint = document.getElementById(`${exerciseID}-${part.name}-hintError`);

        if (part.isCorrect) {
            // حالة الإجابة الصحيحة
            if (successHint) successHint.classList.remove('d-none');
            if (errorHint) errorHint.classList.add('d-none');
            highlightPart(exerciseID, part.name, 'success');
        } else {
            // حالة الإجابة الخاطئة
            if (errorHint) errorHint.classList.remove('d-none');
            if (successHint) successHint.classList.add('d-none');
            highlightPart(exerciseID, part.name, 'danger');
        }
    });
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

















