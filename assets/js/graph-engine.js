/* محرك الرسم المبسط - نسخة "الإلمام والوضوح"
   الهدف: رسم سهل، فهم عميق، وتعديل يسير.
*/

document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.graph-container');

    containers.forEach(container => {
        try {
            // 1. جلب البيانات (كما هي في YAML)
            const config = JSON.parse(container.getAttribute('data-graph-config'));
            const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';

            // 2. تجهيز الخطوط (المنحنيات)
            const traces = [];

            if (config.functions) {
                config.functions.forEach(f => {
                    let xPoints = [];
                    let yPoints = [];
                    
                    // توليد نقاط الدالة ببساطة من -10 إلى 10 (مدى واسع للوضوح)
                    for (let i = -10; i <= 10; i += 0.1) {
                        xPoints.push(i);
                        // تحويل النص الرياضي إلى نتيجة حسابية
                        let result = eval(f.fn.replaceAll('x', `(${i})`).replaceAll('^', '**'));
                        yPoints.push(result);
                    }

                    traces.push({
                        x: xPoints,
                        y: yPoints,
                        mode: 'lines',
                        line: { color: f.color || 'blue', width: 3 },
                        name: f.label || ''
                    });
                });
            }

            // 3. تجهيز النقاط المنفصلة (u0, u1...)
            if (config.points) {
                traces.push({
                    x: config.points.map(p => p.x),
                    y: config.points.map(p => p.y),
                    mode: 'markers+text',
                    text: config.points.map(p => p.label || ''),
                    textposition: 'top center',
                    marker: { size: 10, color: 'orange' },
                    type: 'scatter'
                });
            }

            // 4. إعداد مظهر الرسم (بأقل قدر من التعقيد)
            const layout = {
                paper_bgcolor: 'transparent',
                plot_bgcolor: 'transparent',
                showlegend: false,
                dragmode: 'pan', // السحب هو الأساس لراحة اليد
                xaxis: { 
                    range: config.xDomain, 
                    gridcolor: isDark ? '#444' : '#eee',
                    zerolinecolor: isDark ? '#888' : '#333'
                },
                yaxis: { 
                    range: config.yDomain, 
                    gridcolor: isDark ? '#444' : '#eee',
                    zerolinecolor: isDark ? '#888' : '#333'
                }
            };

            // 5. الرسم النهائي مع تفعيل الزوم باللمس
            Plotly.newPlot(container.id, traces, layout, { 
                responsive: true, 
                scrollZoom: true, 
                displayModeBar: false 
            });

        } catch (e) {
            console.error("عذراً، وقع خطأ بسيط في الرسم: ", e);
        }
    });
});
