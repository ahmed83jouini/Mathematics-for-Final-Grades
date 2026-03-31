// دالة رسم منحنى الدالة f(1) = (sqrt(x+1)-1)/x
function drawLimitsGraph() {
    const container = document.getElementById('graph-limits');
    if (!container) return;

    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    
    // إعدادات الألوان المحسنة
    const gridColor = isDark ? 'rgba(255, 255, 255, 0.1)' : '#eee'; // شبكة مرئية في الظلام
    const axisColor = isDark ? '#888' : '#333';
    const lineColor = isDark ? '#66b2ff' : '#0d6efd';

    container.innerHTML = '';

    functionPlot({
        target: "#graph-limits",
        width: container.offsetWidth - 20,
        height: 400,
        grid: true,
        xAxis: { 
            domain: [-1.2, 2], // وسعنا المجال قليلاً لرؤية ما بعد 1
            color: axisColor 
        },
        yAxis: { 
            domain: [-0.2, 1.5], 
            color: axisColor 
        },
        data: [
            {
                // رسم الدالة مع استثناء الصفر برمجياً لتجنب الخط الرأسي
                fn: "(sqrt(x + 1) - 1) / x",
                color: lineColor,
                strokeWidth: 3,
                sampler: 'builtIn',
                graphType: 'polyline',
                // السر في فصل المنحنى:
                skipTip: true,
                attr: { "stroke-linecap": "round" }
            }
        ],
        annotations: [
            // 1. رسم الدائرة الفارغة عند (0, 0.5)
            {
                x: 0,
                y: 0.5,
                color: '#dc3545',
                fill: isDark ? '#1a1a1a' : '#ffffff', // نفس لون الخلفية لتبدو فارغة
                radius: 20,
                type: 'circle',
                text: 'فجوة (غير معرفة)'
            },
            // 2. خط مساعدة يوضح التقارب
            {
                y: 0.5,
                color: 'rgba(220, 53, 69, 0.3)',
                dash: [5, 5]
            }
            {
                x: 0,
                color: 'rgba(220, 53, 69, 0.3)',
                dash: [5, 5]
            }
        ]
    });

    // تحسين ظهور أرقام المحاور في الوضع القاتم
    if (isDark) {
        const labels = container.querySelectorAll('text');
        labels.forEach(l => l.style.fill = '#aaa');
    }
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
    let score=0;
    display_universal_validation(
        res, 
        'hint-ex',
        "لقد فهمت التكافؤ بين الكتابة $\\mathbb{R}^*$ و اتحاد المجالات.",
        "انتبه إلى اتجاه المعقوفتين وإقصاء الصفر."
    );
    
    if (res.errorCount === 0) { score = res.correctCount * 6;}
    updateScores(inputName, score);
    
}



















    

