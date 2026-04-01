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
