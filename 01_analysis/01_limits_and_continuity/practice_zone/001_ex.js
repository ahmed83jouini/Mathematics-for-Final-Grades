// دالة رسم منحنى الدالة f(1) = (sqrt(x+1)-1)/x
function drawLimitsGraph() {
    const container = document.getElementById('graph-limits');
    if (!container) return;

    // 1. تحديد هل الوضع ليلي أم لا
    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    
    // 2. إعدادات الألوان الصارمة لضمان الوضوح
    const textColor = isDark ? '#ffffff' : '#333333'; // أبيض ناصع في الليل
    const axisColor = isDark ? '#666666' : '#cccccc';
    const lineColor = isDark ? '#66b2ff' : '#0d6efd';

    container.innerHTML = '';

    functionPlot({
        target: "#graph-limits",
        width: container.offsetWidth > 500 ? 500 : container.offsetWidth - 20,
        height: 350,
        grid: true,
        xAxis: { 
            domain: [-1.5, 1.5], 
            label: 'x',
            color: axisColor // لون المحور
        },
        yAxis: { 
            domain: [-0.2, 1.2], 
            label: 'f(x)',
            color: axisColor 
        },
        tip: {
            xLine: true,    // خطوط مساعدة عند التمرير
            yLine: true,
            renderer: function (x, y) {
                return 'x: ' + x.toFixed(3) + ' , f(x): ' + y.toFixed(3);
            }
        },
        data: [{
            fn: "(sqrt(x + 1) - 1) / x",
            color: lineColor,
            strokeWidth: 3,
            sampler: 'builtIn',
            graphType: 'polyline',
            // منع الخط من القفز عند الصفر
            skipTip: true,
            attr: { "stroke-linecap": "round" }
        }],
        annotations: [{
            x: 0,
            y: 0.5,
            color: '#ff4d4d',
            text: 'y = 0.5'
        }]
    });

    // 3. كود سحري لتعديل ألوان النصوص داخل الـ SVG (لأن المكتبة لا تدعمها مباشرة أحياناً)
    const svgText = container.querySelectorAll('text');
    svgText.forEach(text => {
        text.style.fill = textColor;
        text.style.fontSize = "12px";
    });
}


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
                initGraphExercise1();
            }
        });
    });
    observer.observe(document.documentElement, { attributes: true });
});

function verify(inputName) {
    
    const res = getExerciseResults(inputName);
    
    display_universal_validation(
        res, 
        'hint-2-1-1',
        "لقد فهمت التكافؤ بين الكتابة $\\mathbb{R}^*$ و اتحاد المجالات.",
        "انتبه إلى اتجاه المعقوفتين وإقصاء الصفر."
    );
    
    if (res.errorCount === 0) {let score = res.correctCount * 6;}
    updateScores(inputName, score);
    
}



















    

