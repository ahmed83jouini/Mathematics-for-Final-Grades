// دالة رسم منحنى
/*function drawLimitsGraph() {
    const container = document.getElementById('graph-limits');
    if (!container) return;

    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    const axisColor = isDark ? '#888' : '#333';
    const lineColor = isDark ? '#66b2ff' : '#0d6efd';

    container.innerHTML = '';

    const plot = functionPlot({
        target: "#graph-limits",
        width: container.offsetWidth - 20,
        height: 400,
        grid: true,
        xAxis: { domain: [-1.2, 2], color: axisColor },
        yAxis: { domain: [-0.2, 1.5], color: axisColor },
        data: [
            {
                // 1. رسم المنحنى الأساسي
                fn: "(sqrt(x + 1) - 1) / x",
                color: lineColor,
                strokeWidth: 3,
                sampler: 'builtIn',
                graphType: 'polyline',
                skipTip: true
            },
            {
                // 2. رسم الدائرة المفرغة كـ "نقطة" مستقلة
                points: [[0, 0.5]],
                fnType: 'points',
                graphType: 'scatter',
                color: '#dc3545',
                attr: {
                    "r": 3,
                    "fill": isDark ? "#1a1a1a" : "#ffffff",
                    "stroke": "#dc3545",
                    "stroke-width": 2
                }
            }
        ],
        annotations: [
            // سنستخدم الـ annotations للخطوط فقط وسنقوم بتقطيعها برمجياً أسفل الكود
            { y: 0.5, color: '#dc3545', text: 'y = 0.5' },
            { x: 0, color: '#dc3545', text: 'y = 0' },
            { y: 0, color: '#dc3545', text: 'x = 0' },
        ]
    });

    // --- السحر البرمجي لإصلاح الـ Dash والوضوح ---
    const svg = container.querySelector('svg');
    if (svg) {
        // 1. جعل خطوط الـ annotations متقطعة
        const lines = svg.querySelectorAll('.annotations line');
        lines.forEach(line => {
            line.setAttribute('stroke-dasharray', '5,5');
            line.setAttribute('opacity', '0.5');
        });

        // 2. إصلاح مكان النصوص (labels) لتجنب التصادم في الأعلى
        const texts = svg.querySelectorAll('.annotations text');
        texts.forEach(text => {
            text.setAttribute('x', '10'); // إزاحة النص قليلاً عن المحور y
            text.style.fill = isDark ? '#ffaaaa' : '#dc3545';
            text.style.fontSize = "12px";
        });

        // 3. تحسين ألوان الشبكة في الوضع القاتم
        if (isDark) {
            svg.querySelectorAll('.grid line').forEach(l => l.style.stroke = 'rgba(255,255,255,0.1)');
            svg.querySelectorAll('.axis text').forEach(t => t.style.fill = '#aaa');
        }
    }
}
*/

function drawLimitsGraph() {
    const container = document.getElementById('graph-limits');
    if (!container) return;

    // 1. تحديد الوضع بدقة
    const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
    
    // 2. مصفوفة الألوان الصارمة
    const colors = {
        axis: isDark ? '#888' : '#333',
        grid: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.05)',
        line: isDark ? '#66b2ff' : '#0d6efd',
        helper: isDark ? '#ffaaaa' : '#dc3545',
        text: isDark ? '#eee' : '#333',
        bg: isDark ? '#1a1a1a' : '#ffffff'
    };

    container.innerHTML = '';

    try {
        const instance = functionPlot({
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
                { x: 0, color: colors.helper, text: 'x = 0' },
                { y: 0, color: colors.helper, text: 'y = 0' }، 
            ]
        });

        // --- التعديل اليدوي الإجباري بعد الرسم لضمان الظهور ---
        const svg = container.querySelector('svg');
        if (svg) {
            // أ. إظهار خطوط الشبكة (Grid)
            svg.querySelectorAll('.grid line').forEach(l => {
                l.style.stroke = colors.grid;
                l.style.strokeOpacity = "1";
            });

            // ب. إظهار النصوص (Labels) وتلوينها حسب الوضع
            svg.querySelectorAll('text').forEach(t => {
                t.style.fill = colors.text;
                t.style.fontSize = "12px";
            });

            // ج. تقطيع الخطوط المساعدة (Annotations)
            svg.querySelectorAll('.annotations line').forEach(l => {
                l.setAttribute('stroke-dasharray', '5,5');
                l.setAttribute('stroke', colors.helper);
                l.setAttribute('opacity', '0.7');
            });

            // د. تصحيح نصوص المساعدة
            svg.querySelectorAll('.annotations text').forEach(t => {
                t.style.fill = colors.helper;
                t.setAttribute('x', '15'); // إزاحة عن المحور
            });
        }
    } catch (e) { console.error(e); }
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



















    

