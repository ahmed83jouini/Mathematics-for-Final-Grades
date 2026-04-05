//___________________________________________________
/**
 * الدالة المركزية للتحقق، تعمل في حالتين: 
 * 1. عند النقر (حفظ + تلوين)
 * 2. عند التحميل (تلوين فقط)
 */
function verify(exID, isInitialLoad = false) {
    // 1. حساب النتيجة بناءً على ما هو موجود في الحقول حالياً
    const evaluation = evaluateAnswers(exID);
    if (evaluation && evaluation.noAnswer === true) {
        alert("أجب أولا من فضلك...");
        return; // التوقف هنا وعدم إكمال الهيدرة (Hydration) أو التلوين
    }
    // 2. تطبيق الألوان والرسائل (الجزء البصري)
    applyVisuals(exID, evaluation);

    // 3. الحفظ في الذاكرة يحدث فقط إذا لم يكن "تحميل أولي"
    if (!isInitialLoad) {
        const currentValues = getExerciseValues(exID);
        // نمرر نسخة التمرين (مثلاً 1)
        updateExerciseRecord(exID, currentValues, evaluation.score, 1);
    }
    finalizeExerciseState(exID);
}



/**
 * مسح الصفحة بحثاً عن كل "علامات التمارين" وتفعيلها
 */
function scanAndHydrate() {
    // نلتقط كل العناصر التي تحمل كلاس العلامة
    const markers = document.querySelectorAll('.exercise-marker');

    markers.forEach(marker => {
        // استخراج المعرف من الـ data attribute
        const trueExID = marker.getAttribute('data-ex-id');

        if (trueExID) {
            
            // 1. إنعاش المدخلات (القيم)
            hydrateExercise(trueExID);

            // 2. التحقق من وجود سجل سابق (التلوين البصري)
            const profile = getOrCreateProfile();
            if (profile.r[trueExID]) {
                // استدعاء verify بوضعية "التحميل الأولي" (بدون حفظ محاولة جديدة)
                verify(trueExID, true); 
            }
        }
    });
}

//_____________________________________


/**
 * تحديث سجل تمرين معين داخل الملف الشخصي
 * @param {string} exID - معرف التمرين (مثل anal_lim_ex001)
 * @param {string} valuesStr - القيم مضغوطة (مثل "1-0-0,2,6.5")
 * @param {number} score - العلامة المحصل عليها
 * @param {number} version - نسخة التمرين الحالية
 */
function updateExerciseRecord(exID, valuesStr, score, version) {
    // 1. جلب الملف الحالي
    let profile = getOrCreateProfile();
    
    // 2. التحقق من وجود سجل سابق لهذا التمرين لجلب عدد المحاولات
    let prevRecord = profile.r[exID] || { n: 0 };
    let attemptCount = prevRecord.n + 1;

    // 3. الحصول على التاريخ الحالي بصيغة YYMMDD
    const now = new Date();
    const dateStr = now.toISOString().slice(2, 10).replace(/-/g, '');

    // 4. تحديث سجل التمرين (المحاولة الأخيرة)
    profile.r[exID] = {
        v: valuesStr,
        s: score,
        d: parseInt(dateStr), // تخزينه كرقم يوفر مساحة أكبر من النص
        n: attemptCount,
        ver: version
    };

    // 5. حفظ التغييرات في المتصفح
    localStorage.setItem('userProfile', JSON.stringify(profile));
    
    console.log(`تم حفظ التمرين ${exID} بنجاح. المحاولة رقم: ${attemptCount}`);
}
//____________________________


/**
 * جلب الملف الشخصي للمستخدم أو إنشاؤه ببنية أولية إذا كان أول دخول
 */
function getOrCreateProfile(storageKey = 'userProfile') {
    let profile = localStorage.getItem(storageKey);

    if (!profile) {
        // البنية الأولية الهرمية (المستوى العام -> المحاور -> السجلات)
        const initialProfile = {
            s: { t: 0, c: {} }, // s: stats, t: total, c: course
            r: {}               // r: records (التمارين)
        };
        localStorage.setItem(storageKey, JSON.stringify(initialProfile));
        return initialProfile;
    }

    return JSON.parse(profile);
}
//____________________________
/**
 * جلب أو إنشاء ملفك تقييم المادة، ومحاورها
 */
function getOrCreateProgressResume(storageKey = 'progressResume') {
    let progressResume = localStorage.getItem(storageKey);

    if (!progressResume) {
        const totalScoreDefinition = {
            ['maths'/*mathematics*/, 10], ['analy'/*analysis*/, 0], ['limit'/*limits*/, 0], ['conti'/*continuity*/, 0], ['deriv'/*derivatives*/, 0], ['logFu'/*logarithmic function*/, 0], ['expFu'/*exponential function*/, 0], ['groCo'/*growth comparesion*/, 0], ['priFu'/*primitive functions*/, 0], ['intCa'/*integral calculus*/, 0],
            ['algeb'/*algebra*/, 0], ['seque'/*sequences*/, 0], ['diviZ'/*division in Z*/, 0], ['congZ'/*congruence in Z*/, 0], ['primN'/*primary numbers*/, 0], ['compN'/*complexe numbers*/, 0],
            ['proSt'/*probabilities and statistics*/, 0], ['conPr'/*conditionalprobabilities*/, 0], ['proDi'/*probability distribution*/, 0],
            ['plGeo'/*plane geometry*/, 0], ['dirSi'/*direct similitude in the plane*/, 0], ['scaPr'/*scalar product*/, 0],
            ['soGeo'/*solid geometry*/, 0], ['liPlS'/*lines and planes in the space*/, 0], ['plSeS'/*planar sections of surfaces*/, 0],
            ['bacSo'/*BAC solutions*/, 0], ['expSc'/*experimental sciences*/, 0], ['mathe'/*mathematics*/, 0], ['tecMat'/*technical mathematics*/, 0],
        }
                      
        // البنية نحفظ لكل للمادة،مجموع كل النقاط الممكن الحصول عليها بإنجاز الأمثلة أو التمارين. نعتمد التصحيح من عشرة لكل تمرين.
        const initialProgressResume= {};
        totalScoreDefinition.forEach(el => {
            if (!initialProgressResume[el[0]]) initialProgressResume[el[0]] = [el[1], 0]; 
        });
    
        localStorage.setItem(storageKey, JSON.stringify(initialProgressResume));
        return initialProgressResume;
    }

    return JSON.parse(initialProgressResume);
}

//____________________________________________

/**
 * استرجاع حالة التمرين من الذاكرة وتعبئة العناصر
 * @param {string} exID - معرف التمرين
 */
function hydrateExercise(exID) {
    // 1. جلب الملف الشخصي (قراءة أو إنشاء)
    const profile = getOrCreateProfile();
    const record = profile.r[exID];

    // إذا لم يكن هناك سجل سابق، لا داعي لإكمال العملية
    if (!record || !record.v) return;

    // 2. تفكيك القيم المخزنة (مثال: "1-0-1,2,6.5" تصبح مصفوفة)
    const valuesArray = record.v.split(',');
    
    // 3. جلب كافة عناصر التمرين بنفس الترتيب الذي جُمعت به
    const allElements = document.querySelectorAll(`.${exID}`);

    // سنستخدم عداداً داخلياً لمتابعة مكاننا في المصفوفة المنفصلة
    let valueIndex = 0;

    // 4. توزيع القيم على الأجزاء (Parts)
    // ملاحظة: التحدي هنا أن الأجزاء قد تحتوي على عدة عناصر (مثل Checkbox)
    // لذا سنعتمد على منطق المجموعات (PartsMap) الذي استخدمناه في التصحيح
    const partsMap = {};
    allElements.forEach(el => {
        if (!partsMap[el.name]) partsMap[el.name] = [];
        partsMap[el.name].push(el);
    });

    // 5. عملية التعبئة الفعلية
    Object.keys(partsMap).forEach((partName) => {
        const elements = partsMap[partName];
        const storedValue = valuesArray[valueIndex];

        if (storedValue !== undefined) {
            const firstEl = elements[0];

            if (firstEl.type === 'checkbox') {
                // تفكيك حالة الـ checkbox (مثال: "1-0-1")
                const cbStates = storedValue.split('-');
                elements.forEach((cb, i) => {
                    cb.checked = cbStates[i] === '1';
                });
            } 
            else if (firstEl.type === 'radio') {
                // اختيار الراديو بناءً على الترتيب (مثال: "2")
                const radioIdx = parseInt(storedValue) - 1;
                if (elements[radioIdx]) elements[radioIdx].checked = true;
            } 
            else if (firstEl.type === 'number') {
                // وضع القيمة الرقمية مباشرة
                firstEl.value = storedValue;
            }
        }
        valueIndex++; // ننتقل للقيمة التالية في السجل المخزن
    });

    console.log(`تم إنعاش التمرين ${exID} بنجاح من محاولة تاريخها: ${record.d}`);
}

//___________________________________________

/**
 * جمع إجابات التلميذ من الواجهة وتحويلها إلى سلسلة نصية مضغوطة
 * @param {string} exID - معرف التمرين
 * @returns {string} - السلسلة الناتجة (مثل "1-0-1,2,6.5")
 */
function getExerciseValues(exID) {
    const allElements = document.querySelectorAll(`.${exID}`);
    const partsMap = {};
    const finalValues = [];

    // 1. تنظيم العناصر في مجموعات حسب الاسم (الأسئلة)
    allElements.forEach(el => {
        if (!partsMap[el.name]) partsMap[el.name] = [];
        partsMap[el.name].push(el);
    });

    // 2. المرور على كل سؤال وجمع قيمته
    Object.keys(partsMap).forEach(partName => {
        const elements = partsMap[partName];
        const firstEl = elements[0];
        let partValue = "";

        if (firstEl.type === 'checkbox') {
            // نجمع حالات الاختيار: "1" للمختار و "0" للفارغ، ونفصل بـ "-"
            partValue = elements.map(cb => cb.checked ? "1" : "0").join('-');
        } 
        else if (firstEl.type === 'radio') {
            // نجد ترتيب الخيار المختار (من 1 إلى ن)
            const selectedIdx = elements.findIndex(rb => rb.checked);
            partValue = selectedIdx !== -1 ? (selectedIdx + 1).toString() : "0";
        } 
        else if (firstEl.type === 'number') {
            // نأخذ القيمة المكتوبة مباشرة، وإذا كانت فارغة نضع علامة تدل على ذلك
            partValue = firstEl.value !== "" ? firstEl.value : "null";
        }

        finalValues.push(partValue);
    });

    // 3. دمج كل النتائج بفاصلة لإنتاج السلسلة النهائية
    return finalValues.join(',');
}

//____________________________

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
    let isAnythingAnswered = false;

    // 2. تقييم كل جزء على حدة
    for (const partName in partsMap) {
        const elements = partsMap[partName];
        let partIsCorrect = true;

        for (const el of elements) {
            if (el.type === 'radio' || el.type === 'checkbox') {
                // القاعدة: (مختار وصحيح) أو (غير مختار وخاطئ) -> هذا هو الصواب
                const shouldBeSelected = el.value === "1";
                if (el.checked) isAnythingAnswered = true;
                if (el.checked !== shouldBeSelected) {
                    partIsCorrect = false;
                    break; 
                }
            } else if (el.type === 'number') {
                const correctAnswer = parseFloat(el.getAttribute('data-answer'));
                const userVal = parseFloat(el.value);
                if (el.value.trim() !== '') isAnythingAnswered = true;
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
    
    if(!isAnythingAnswered) return {
        noAnswer: true
    };
    
    const attemptScore = totalParts > 0 ? (correctPartsCount / totalParts) * 100 : 0;
    
    // --- كود فحص هيكل الـ details (للمصفوفات) ---
    let partsReport = "score : " + attemptScore + "\n";
    partsReport += `تفاصيل التصحيح (details):\n`;

    // استخدم for...of للمصفوفات للوصول للكائن مباشرة
    for (const part of details) {
        partsReport += `القسم [${part.name}] | صحيح: (${part.isCorrect}) | نوعه: ${part.type}\n`;
    }

    alert(partsReport);
    // ---------------------------------------
     
    return {
        score: attemptScore,
        details: details,
        noAnswer: false
    };
}
//_____________________________________
/**
 * 3. تطبيق التأثيرات البصرية (Visuals)
 * تلوين الحقول وقفلها بناءً على نتائج التقييم
 */
function applyVisuals(exID, evaluation) {
    // إذا لم تكن هناك إجابة، لا نفعل شيئاً (أو نمسح الألوان القديمة)
    if (evaluation.noAnswer) return;
    // 1. تحديث شريط التقدم (بأمان)
    const progressBar = document.getElementById(`${exID}-bar`);
    const progressVal = document.getElementById(`${exID}-val`);
    alert("بروقرس بار ويدث قبل التغيير: " + progressBar.style.width);
    if (progressBar) progressBar.style.width = evaluation.score+ "%";
    if (progressVal) progressVal.innerText = Math.round(evaluation.score) + "%";
    alert("بروقرس بار ويدث بعد التغيير: " + progressBar.style.width);

    const allElements = document.querySelectorAll(`.${exID}`);
    
    // أولاً: تنظيف أي كلاسات ألوان سابقة لضمان التحديث الصحيح
    allElements.forEach(el => {
        el.classList.remove('is-valid', 'is-invalid');
    });

    // ثانياً: المرور على التفاصيل (details) وتلوين كل جزء
    evaluation.details.forEach(part => {
        const partElements = document.querySelectorAll(`.${exID}[name="${part.name}"]`);
        
        partElements.forEach(el => {
            if (part.isCorrect) {
                // إظهار تلميح الصح  الخاص بالقسم(Hints)
                const hint = document.getElementById(`${exID}-hintSuccess`);
                hint .forEach(h => h.classList.remove('d-none'));
    
                el.classList.add('is-valid');
                
            } else {
                // إظهار تلميح الخطأ الخاص بالقسم(Hints)
                const hint = document.getElementById(`${exID}-hintError`);
                hints.forEach(h => h.classList.remove('d-none'));
    
                el.classList.add('is-invalid');
            }
            
        });
    });
}

//_______________________________
document.addEventListener('DOMContentLoaded', () => {
    // السلحفاة تمسح الصفحة وتنعش التمارين القديمة آلياً
    scanAndHydrate();
});

//__________________<_________<
/**
 * دالة إعادة المحاولة: تصفير التمرين برمجياً وبصرياً
 */
function resetExercise(exID){
    // 1. جلب كافة العناصر والمدخلات
    const allElements = document.querySelectorAll(`.${exID}`);
    const btnVerify = document.getElementById(`${exID}-btnVerify`);
    const btnRetry = document.getElementById(`${exID}-btnRetry`);

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
    const hints = document.getElementById(`${exID}-hintSuccess`);
    hints.forEach(h => h.classList.add('d-none'));

    const hints = document.getElementById(`${exID}-hintError`);
    hints.forEach(h => h.classList.add('d-none'));
    
    // 4. إدارة الأزرار
    if (btnVerify) {
        //btnVerify.disabled = false;
        btnVerify.classList.remove('d-none');
       // btnVerify.innerHTML = `تحقق <i class="bi bi-check-circle ms-1"></i>`;
    }
    if (btnRetry) {
        btnRetry.classList.add('d-none'); // يعود للتعطيل حتى يتم الحل مجدداً
    }

    // 5. تحديث الذاكرة (فتح القفل برمجياً)
    let profile = JSON.parse(localStorage.getItem('userProfile'));
    if (profile && profile.r[exID]) {
        profile.r[exID].isLocked = false;
        localStorage.setItem('userProfile', JSON.stringify(profile));
    }

}
//___________________________________________


/**
 * 5. إدارة الحالة النهائية (Finalization)
 * قفل المدخلات وتبديل حالة الأزرار (Inhiber/Désinhiber)
 */
function finalizeExerciseState(exID) {
    // أ. قفل كافة المدخلات في التمرين
    const inputs = document.querySelectorAll(`.${exID}`);
    inputs.forEach(input => {
        input.disabled = true;
    });


    // ب. الوصول للأزرار باستخدام المعرفات (IDs)
    const btnVerify = document.getElementById(`${exID}-btnVerify`);
    const btnRetry = document.getElementById(`${exID}-btnRetry`);

    // ج. تعطيل زر "تحقق" وتغيير مظهره
    if (btnVerify) btnVerify.classList.add('d-none');

    // د. تحرير زر "أعد المحاولة"
    if (btnRetry) btnRetry.classList.remove('d-none'); 
       
}














