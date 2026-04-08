/*الترتيب المتفق عليه: 
[0: score, 
 1: date, 
 2: values, 
 3: count, 
 4: version]
 لاحظ: 
 evaluation.avgScore هو المعدل التراكمي الذي حسبناه في الدالة السابقة
*/
//___________________________________________________
/**
 * الدالة المركزية للتحقق، تعمل في حالتين: 
 * 1. عند النقر (حفظ + تلوين)
 * 2. عند التحميل (تلوين فقط)
 */
function verify(exID, isInitialLoad = false, version = 1) {
    
    const allElements = document.querySelectorAll(`.${exID}`);
    
    // 1. فحص فوري: هل لمس المستخدم أي شيء في التمرين؟
    const isAnythingAnswered = Array.from(allElements).some(el => {
        if (el.type === 'radio' || el.type === 'checkbox') return el.checked;
        if (el.type === 'number') return el.value.trim() !== '';
        return false;
    });
    if (!isAnythingAnswered) {
        alert("أجب أولا من فضلك...");
        return;
    }
    // 1. حساب النتيجة بناءً على ما هو موجود في الحقول حالياً
    const evaluation = evaluateAnswers(exID, allElements);

    // 2. تطبيق الألوان والرسائل (الجزء البصري)
    applyVisuals(exID, evaluation, allElements);

    // 3. الحفظ في الذاكرة يحدث فقط إذا لم يكن "تحميل أولي"
    if (!isInitialLoad) {
        const currentValues = getExerciseValues(exID, allElements);
        // نمرر نسخة التمرين (مثلاً 1)
        updateExerciseRecord(exID, currentValues, evaluation, version);
        updateParentsScore(exID, evaluation.delta);
        
    }
    finalizeExerciseState(exID, allElements);
}

//____<________________________________

/**
 * مسح الصفحة بحثاً عن كل "علامات التمارين" وتفعيلها
 */

function scanAndHydrate() {
    // التقاط كل التمارين الموجودة في الصفحة الحالية
    const markers = document.querySelectorAll('.exercise-marker');
    
    // جلب البروفايل لمرة واحدة (خارج الحلقة) للأداء
    const profile = getOrCreateProfile();

    markers.forEach(marker => {
        const trueExID = marker.getAttribute('data-ex-id');

        if (trueExID) {
            // 1. إذا كان التمرين مسجلاً سابقاً في "ex"
            if (profile.ex && profile.ex[trueExID]) {
                
                // أ. إعادة ملء الخانات بالقيم المخزنة (Hydrate)
                // المصفوفة: [0:score, 1:date, 2:values, 3:count, 4:version]
                const savedValues = profile.ex[trueExID][2]; 
                hydrateExercise(trueExID, savedValues);

                // ب. استدعاء verify بوضعية "التحميل الأولي"
                // هذا سيقوم بتلوين الخانات، إظهار التلميحات، وقفل التمرين
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
function updateExerciseRecord(exID, valuesStr, evaluation, version) {
    // 1. جلب الملف الحالي
    let profile = getOrCreateProfile();
    
    // 2. تحديث أو إنشاء متابعة التمرين
    profile.ex[exID] = [
        evaluation.avgScore, // المعدل التراكمي (0-100)
        Date.now(),           // التاريخ الطويل (بالميلي ثانية)
        valuesStr,            // السلسلة النصية للقيم (مثلاً: 1-0,2,null)
        evaluation.attempts,  // عدد المحاولات الكلي
        version               // رقم نسخة التمرين
    ];

    // 5. حفظ التغييرات في المتصفح
    localStorage.setItem('userProfile', JSON.stringify(profile));
    
    console.log(`تم حفظ التمرين ${exID} بنجاح. المحاولة رقم: ${evaluation.attempts}`);
}
//____________________________


/**
 * جلب الملف الشخصي للمستخدم أو إنشاؤه ببنية أولية إذا كان أول دخول
 */
function getOrCreateProfile(storageKey = 'userProfile') {
    let profile = localStorage.getItem(storageKey);

    if (!profile) {
        // البنية الأولية 
        const initialProfile = {
            jDate: Date.now(), // لحظة الانفجار العظيم (تاريخ التسجيل بالطريقة الطويلة)
            ex: {}             // مستودع التمارين (خالٍ حالياً)
        };
        localStorage.setItem(storageKey, JSON.stringify(initialProfile));
        return initialProfile;
    }

    return JSON.parse(profile);
}
//____________________________
/**
 * دالة جلب أو إنشاء سجل التقدم العام (LMS Scoreboard)
 * تقوم بإنشاء جدول بيانات يحتوي على: [النقاط القصوى الممكنة، النقاط الحالية المكتسبة]
 * @param {string} storageKey - المفتاح المستخدم في LocalStorage
 * @returns {Object} - كائن يحتوي على مصفوفات التقدم لكل محور
 */
function getOrCreateProgressResume(storageKey = 'progressResume') {
    // محاولة جلب البيانات المخزنة مسبقاً
    let storedData = localStorage.getItem(storageKey);

    // إذا كانت هذه المرة الأولى (لا توجد بيانات)، نقوم بالتعريف الابتدائي
    if (!storedData) {
        /**
         * مصفوفة التعريف (Definitions):
         * [المفتاح المختصر، سقف النقاط الابتدائي الممكن الحصول عليه]
         * ملاحظة: الاختصارات مكونة من 5 أحرف لتسهيل التعرف عليها وتوفير المساحة
         */
        const totalScoreDefinition = [
            // --- المادة ككل ---
            ['maths', 100],      // المجموع العام للرياضيات (Mathematics Global)
            
            // --- فرع التحليل (Analysis) ---
            ['analy', 100],       // التحليل الرياضي (Analysis General)
            ['limit', 100],       // النهايات (Limits)
            ['conti', 0],       // الاستمرارية (Continuity)
            ['deriv', 0],       // الاشتقاق (Derivatives)
            ['logFu', 0],       // الدالة اللوغاريتمية (Logarithmic Function)
            ['expFu', 0],       // الدالة الأسية (Exponential Function)
            ['groCo', 0],       // التزايد المقارن (Growth Comparison)
            ['priFu', 0],       // الدوال الأصلية (Primitive Functions)
            ['intCa', 0],       // حساب التكامل (Integral Calculus)

            // --- فرع الجبر (Algebra) ---
            ['algeb', 0],       // الجبر (Algebra General)
            ['seque', 0],       // المتتاليات (Sequences)
            ['diviZ', 0],       // القسمة في Z (Division in Z)
            ['congZ', 0],       // الموافقات (Congruence in Z)
            ['primN', 0],       // الأعداد الأولية (Primary Numbers)
            ['compN', 0],       // الأعداد المركبة (Complex Numbers)

            // --- فرع الاحتمالات والإحصاء ---
            ['proSt', 0],       // الاحتمالات والإحصاء (Probabilities and Statistics)
            ['conPr', 0],       // الاحتمالات الشرطية (Conditional Probabilities)
            ['proDi', 0],       // التوزيع الاحتمالي (Probability Distribution)

            // --- فرع الهندسة المستوية ---
            ['plGeo', 0],       // الهندسة المستوية (Plane Geometry)
            ['dirSi', 0],       // التشابه المباشر (Direct Similitude)
            ['scaPr', 0],       // الجداء السلمي (Scalar Product)

            // --- فرع الهندسة الفضائية ---
            ['soGeo', 0],       // الهندسة الفضائية (Solid Geometry)
            ['liPlS', 0],       // المستقيمات والمستويات (Lines and Planes in Space)
            ['plSeS', 0],       // المقاطع المستوية للسطوح (Planar Sections)

            // --- حلول البكالوريا (BAC Solutions) ---
            ['bacSo', 0],       // حلول البكالوريا العامة
            ['expSc', 0],       // شعبة علوم تجريبية (Experimental Sciences)
            ['mathe', 0],       // شعبة رياضيات (Mathematics Branch)
            ['tecMat', 0]       // شعبة تقني رياضي (Technical Mathematics)
        ];
                      
        const initialProgressResume = {};
        
        // بناء الكائن النهائي من مصفوفة التعريف
        totalScoreDefinition.forEach(el => {
            // الهيكل: { 'اختصار': [الحد الأقصى للنقاط، النقاط المحققة حالياً] }
            initialProgressResume[el[0]] = [el[1], 0]; 
        });
    
        // حفظ النسخة الابتدائية في ذاكرة المتصفح
        localStorage.setItem(storageKey, JSON.stringify(initialProgressResume));
        return initialProgressResume;
    }

    // إذا كانت البيانات موجودة، نقوم بتحويلها من نص (JSON) إلى كائن (Object) وإرجاعها
    return JSON.parse(storedData);
}


//____________________________________________

/**
 * استرجاع حالة التمرين من الذاكرة وتعبئة العناصر
 * @param {string} exID - معرف التمرين
 */

function hydrateExercise(exID, valuesStr) {
    if (!valuesStr || valuesStr === "") return;

    const allElements = document.querySelectorAll(`.${exID}`);
    const partsArray = valuesStr.split(','); // تفكيك الأسئلة
    
    // تجميع العناصر حسب الاسم (نفس منطق التجميع السابق)
    const partsMap = {};
    allElements.forEach(el => {
        if (!partsMap[el.name]) partsMap[el.name] = [];
        partsMap[el.name].push(el);
    });

    const partNames = Object.keys(partsMap);

    partNames.forEach((name, index) => {
        const elements = partsMap[name];
        const val = partsArray[index]; // القيمة المخزنة لهذا السؤال

        if (!val || val === "null") return;

        const firstEl = elements[0];

        if (firstEl.type === 'checkbox') {
            const cbStates = val.split('-'); // تفكيك 1-0-1
            elements.forEach((cb, i) => {
                cb.checked = (cbStates[i] === "1");
            });
        } 
        else if (firstEl.type === 'radio') {
            const selectedIdx = parseInt(val) - 1; // تحويل "2" إلى الفهرس 1
            if (selectedIdx >= 0 && elements[selectedIdx]) {
                elements[selectedIdx].checked = true;
            }
        } 
        else {
            // للنصوص والأرقام
            firstEl.value = val;
        }
    });
}


//___________________________________________

/**
 * جمع إجابات التلميذ من الواجهة وتحويلها إلى سلسلة نصية مضغوطة
 * @param {string} exID - معرف التمرين
 * @returns {string} - السلسلة الناتجة (مثل "1-0-1,2,6.5")
 */
function getExerciseValues(exID, allElements) {
    
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
function evaluateAnswers(exID,  allElements) {
    // 1. تجميع العناصر حسب "الجزء" (p1, p2...)
    const partsMap = {};
    
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

    
    // 2. نتيجة المحاولة الحالية (Current Attempt)
    const attemptScore = (correctPartsCount === totalParts) ? 100 : 0;

    // 3. جلب السجل القديم لحساب "المتوسط التراكمي"
    const profile = getOrCreateProfile();
    // تذكر: مصفوفة التوفير [Score, Date, Values, Count]
    const oldRecord = profile.ex[exID] || [0, 0, "", 0]; 
    
    const oldAverage = oldRecord[0]; // المعدل السابق
    const oldCount = oldRecord[3];   // عدد المحاولات السابقة
    const newCount = oldCount + 1;   // المحاولة الحالية

    // 4. معادلة المتوسط التراكمي (Moving Average Formula)
    // المعدل الجديد = ((المعدل القديم * عدد المرات) + النتيجة الحالية) / العدد الكلي
    const newCumulativeAverage = ((oldAverage * oldCount) + attemptScore) / newCount;
    const delta = newCumulativeAverage - oldAverage;
    // --- كود فحص هيكل الـ details (للمصفوفات) ---
    let partsReport = "score : " + attemptScore + "\n";
    partsReport += `تفاصيل التصحيح (details):\n`;

    // استخدم for...of للمصفوفات للوصول للكائن مباشرة
    for (const part of details) {
        partsReport += `القسم [${part.name}] | صحيح: (${part.isCorrect}) | نوعه: ${part.type}\n`;
    }

    console.log(partsReport);
    // ---------------------------------------
     
    return {
        score: attemptScore,
        avgScore: parseFloat(newCumulativeAverage.toFixed(2)), // المعدل الذي سيظهر في الواجهة ويحفظ
        details: details,
        attempts: newCount,
        delta : delta
    };
}
//_____________________________________
/**
 * 3. تطبيق التأثيرات البصرية (Visuals)
 * تلوين الحقول وقفلها بناءً على نتائج التقييم
 */
function applyVisuals(exID, evaluation, allElements) {
    // 1. تحديث شريط التقدم (بأمان)
    const progressBar = document.getElementById(`${exID}-bar`);
    const progressVal = document.getElementById(`${exID}-val`);
    console.log("بروقرس بار ويدث قبل التغيير: " + progressBar.style.width);
    if (progressBar) progressBar.style.width = evaluation.avgScore+ "%";
    if (progressVal) progressVal.innerText = Math.round(evaluation.avgScore) + "%";
    console.log("بروقرس بار ويدث بعد التغيير: " + progressBar.style.width);
    
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
                const hint = document.getElementById(`${part.name}-hintSuccess`);
                if (hint) hint.classList.remove('d-none');
    
                el.classList.add('is-valid');
                
            } else {
                // إظهار تلميح الخطأ الخاص بالقسم(Hints)
                const hint = document.getElementById(`${part.name}-hintError`);
                if (hint) hint.classList.remove('d-none');
    
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
        el.classList.remove('is-valid', 'is-invalid'); // مسح ألوان الحدود
        if (el.type === 'number') {
            el.value = ''; // مسح الرقم
        } else if (el.type === 'radio' || el.type === 'checkbox') {
            el.checked = false; // إلغاء الاختيار
        }
    });

    // 3. إخفاء التلميحات (Hints)
    let hints = document.querySelectorAll(`.${exID}-hint`);
    hints.forEach(hint => {hint.classList.add('d-none')});
    
    // 4. إدارة الأزرار
    if (btnVerify) {
        //btnVerify.disabled = false;
        btnVerify.classList.remove('d-none');
       // btnVerify.innerHTML = `تحقق <i class="bi bi-check-circle ms-1"></i>`;
    }
    if (btnRetry) {
        btnRetry.classList.add('d-none'); // يعود للتعطيل حتى يتم الحل مج
    }

}
//___________________________________________


/**
 * 5. إدارة الحالة النهائية (Finalization)
 * قفل المدخلات وتبديل حالة الأزرار (Inhiber/Désinhiber)
 */
function finalizeExerciseState(exID, inputs) {
    // أ. قفل كافة المدخلات في التمرين
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
//________________________________<<<
/**
 * تحديث شجرة التقدم مع تجاهل الوسوم التقنية (pra, exem)
 */

function updateParentsScore(exID, deltaPercent) {
    // 1. جلب لوحة الأهداف
    let resume = getOrCreateProgressResume(); 
    
    // 2. تفكيك المسار إلى قطع
    const path = exID.split('-'); 

    // 3. المرور على كل قطعة في المسار
    path.forEach(key => {
        // إذا كانت القطعة موجودة في لوحة الأهداف (وليست وسماً تقنياً)
        if (resume[key]) {
            // إضافة الفرق (النسبة المئوية) مباشرة
            resume[key][1] += deltaPercent;

            // حماية السقف (لا تتجاوز الحد الأقصى) والقاع
            if (resume[key][1] > resume[key][0] && resume[key][0] > 0) {
                resume[key][1] = resume[key][0];
            }
            if (resume[key][1] < 0) resume[key][1] = 0;

            // تقريب لكسرين عشريين للنظافة
            resume[key][1] = parseFloat(resume[key][1].toFixed(2));
        }
    });

    // 4. حفظ اللوحة المحدثة
    localStorage.setItem('progressResume', JSON.stringify(resume));
    console.log("تم تحديث شجرة الآباء بنجاح");
}
//________________________________
/**
*الحصول على رقم التمرين من معرفه
*لتفادي التكرار في nextExercise و prevExercise
*/
function getExNumber(exID){
    // 1. استخراج الجزء الرقمي من الـ ID (مثلاً 001 من maths-analy-limit-pra-ex001)
    // نفترض أن الرقم دائماً في آخر 3 خانات قبل أي ملحقات
    let parts = exID.split('-');
    let lastPart = parts[parts.length - 1]; // سيأخذ ex001
    return lastPart.replace('ex', ''); // سيتبقى 001
}
//________________________________
/**
*الإنتقال إلى التمرينوالموالي
*/
function nextExercise(currentExID) {
    // 2. تحويل النص إلى رقم وزيادته
    let nextNumber = parseInt(getExNumber(currentExID), 10) + 1;
    
    // 3. إعادة صياغة الرقم ليكون بثلاث خانات (مثلاً 2 تصبح 002)
    let nextNumberStr = nextNumber.toString().padStart(3, '0');
    
    // 4. تركيب اسم الملف الجديد
    // ملاحظة: بما أنك تستخدم Jekyll، الروابط غالباً تكون بدون .html أو تعتمد هيكل المجلدات
    let nextFileName = nextNumberStr + "_ex.html";
    
    // 5. الانتقال
    window.location.href = nextFileName;
}

//____^______________<______________
/**
*الرجوع إلى التمرين السلبق
*/
function prevExercise(currentExID) {
    
    let currentNumber = parseInt(getExNumber(currentExID), 10);

    // شرط الأمان: إذا كنا في التمرين الأول، لا نفعل شيئاً أو نعود لصفحة الفهرس
    if (currentNumber <= 1)  return;

    let prevNumber = currentNumber - 1;
    let prevNumberStr = prevNumber.toString().padStart(3, '0');
    
    // تركيب اسم الملف السابق
    let prevFileName = prevNumberStr + "_ex.html";
    
    window.location.href = prevFileName;
}











