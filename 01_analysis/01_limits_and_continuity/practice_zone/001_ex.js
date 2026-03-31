
function showLog(msg, isError = false) {
    const statusDiv = document.getElementById('debug-status');
    if (statusDiv) {
        statusDiv.style.backgroundColor = isError ? "#f8d7da" : "#d1ecf1";
        statusDiv.style.color = isError ? "#721c24" : "#0c5460";
        statusDiv.innerHTML = (isError ? "⚠️ خطأ: " : "ℹ️ نظام: ") + msg;
    }
}





function drawLimitsGraph() {
    try {
        const container = document.getElementById('graph-limits');
        if (!container) throw new Error("لم يتم العثور على حاوية الرسم graph-limits");

        const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
        const colors = {
            axis: isDark ? '#888' : '#333',
            grid: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.05)',
            line: isDark ? '#66b2ff' : '#0d6efd',
            helper: isDark ? '#ffaaaa' : '#dc3545',
            text: isDark ? '#eee' : '#333',
            bg: isDark ? '#1a1a1a' : '#ffffff'
        };

        container.innerHTML = '';

        functionPlot({
            target: "#graph-limits",
            width: container.offsetWidth - 20,
            height: 400,
            grid: true,
            xAxis: { domain: [-1.2, 2], color: colors.axis },
            yAxis: { domain: [-0.2, 1.5], color: colors.axis },
            data: [
                {
                    fn: "(sqrt(x + 1) - 1) / x",
                    color: colors.line,
                    strokeWidth: 3,
                    sampler: 'builtIn',
                    graphType: 'polyline',
                    skipTip: true
                },
                {
                    points: [[0, 0.5]],
                    fnType: 'points',
                    graphType: 'scatter',
                    color: colors.helper,
                    attr: { r: 3, fill: colors.bg, stroke: colors.helper, "stroke-width": 2 }
                }
            ],
            annotations: [
                { y: 0.5, color: colors.helper, text: 'y = 0.5' },
                { x: 0, color: colors.helper }
            ]
        });

        // تحسين الـ SVG يدوياً
        const svg = container.querySelector('svg');
        if (svg) {
            svg.querySelectorAll('.grid line').forEach(l => l.style.stroke = colors.grid);
            svg.querySelectorAll('text').forEach(t => t.style.fill = colors.text);
            svg.querySelectorAll('.annotations line').forEach(l => {
                l.setAttribute('stroke-dasharray', '5,5');
                l.setAttribute('opacity', '0.7');
            });
        }
        showLog("تم رسم البيان وتحديث النظام بنجاح.");
    } catch (e) {
        showLog("فشل الرسم: " + e.message, true);
    }
}
// مراقبة تغيير الوضع (Dark/Light) لإعادة الرسم تلقائياً
const themeObserver = new MutationObserver(() => drawLimitsGraph());
themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });



function getAllandCorrectAnswers(exerciseId, totalQuestions) {
    let score = 0;
    
    // حساب الإجابات الصحيحة بناءً على الراديو بوتون
    for (let i = 1; i <= totalQuestions; i++) {
        const selected = document.querySelector(`input[name="${exerciseId}_q${i}"]:checked`);
        if (selected && selected.value === "1") {
            score++;
        }
    }

    // حساب النسبة المئوية
    const percentage = Math.round((score / totalQuestions) * 100);

    // تحديث الواجهة (البروغرس بار والنص)
    const progressBar = document.getElementById(`${exerciseId}-progress-bar`);
    const scoreText = document.getElementById(`${exerciseId}-score-text`);
    
    if (progressBar) progressBar.style.width = percentage + "%";
    if (scoreText) scoreText.innerText = percentage + "%";

    // منطق الاستحقاق (فتح التمرين الموالي إذا كانت النتيجة >= 70)
    const nextZone = document.getElementById('next-level-zone');
    if (percentage >= 70) {
        if (nextZone) nextZone.classList.remove('d-none');
        // هنا يمكنك استدعاء دالة من scores.js لتحديث السجل العام
        if (typeof updateGlobalScore === "function") {
            updateGlobalScore(exerciseId, percentage);
        }
    } else {
        alert("النتيجة " + percentage + "% دون عتبة الاستحقاق (70%). راجع خطواتك وحاول مجدداً!");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // تشغيل الرسم البياني
    drawLimitsGraph();

    // مراقبة تغيير الوضع القاتم لإعادة رسم المنحنى بالألوان المناسبة
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'data-bs-theme') {
                drawLimitsGraph();
            }
        });
    });
    observer.observe(document.documentElement, { attributes: true });
});

/*function verify(exerciseID) {
    
    const res = getExerciseResults(exerciseID);
    let score=0;
    display_universal_validation(
        res, 
        'hint-ex',
         "الدالة تقترب من 0.5 كلما اقترب x من الصفر، جوبك ينم عن دقة فهم رائعة.",
         ​"لقد استوعبت مفهوم تقارب الصور f(x) عندما يقترب x من الصفر."
    );
    
    if (res.errorCount === 0) { score = res.correctCount * 6;}
    updateScores(exerciseID, score);
    
}*/

 function verify(exerciseID) {
    try {
        if (typeof getExerciseResults !== 'function') throw new Error("دالة getExerciseResults غير معرفة! تأكد من ملف script.js");

        const res = getExerciseResults(exerciseID);
        let score = 0;
        
        const successMsg = "ممتاز! لقد استوعبت مفهوم تقارب الصور f(x) عندما يقترب x من الصفر.";
        const errorMsg = "تأمل جيداً في الرسم.. عندما يقترب x من 0، أين تستقر قيمة f(x)؟";

        display_universal_validation(res, 'hint-ex', successMsg, errorMsg);
        
        if (res.errorCount === 0 && res.correctCount === res.totalExpected) { 
            score = res.correctCount * 6;
        }
        updateScores(exerciseID, score);
        showLog("تم التحقق وتحديث النقاط.");
    } catch (e) {
        showLog("خطأ في التحقق: " + e.message, true);
    }
}




















    

