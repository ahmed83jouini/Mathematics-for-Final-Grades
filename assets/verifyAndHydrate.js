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

