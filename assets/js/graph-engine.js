/* محرك الرسم المطور - نسخة الإحكام النهائي
   الحلول: تثبيت التسميات، تثبيت الإطار، وانسيابية الحركة (Anti-Jitter).
*/

// دالة مساعدة لمعالجة الصيغ الرياضية (الأس والجذر)
function powerParser(fn) {
    if (!fn) return "";
    return fn.replaceAll('^', '**')
             .replace(/sqrt\(([^)]+)\)/g, 'Math.sqrt($1)');
}

document.addEventListener("DOMContentLoaded", function() {
    // 1. تثبيت طول وعرض الإطار قسراً لضمان عدم التقلص
    const plotContainerStyle = document.createElement('style');
    plotContainerStyle.innerHTML = `
        .graph-container {
            width: 100% !important;
            height: 400px !important; /* طول محدد لثبات النافذة */
            max-width: 100%;
        }
    `;
    document.head.appendChild(plotContainerStyle);

    const containers = document.querySelectorAll('.graph-container');

    containers.forEach(container => {
        try {
            const rawData = container.getAttribute('data-graph-config');
            if (!rawData) return;
            const config = JSON.parse(rawData);
            const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
            
            const traces = [];
            const annotations = []; // مصفوفة مستقلة للتسميات (u0, Cf, etc.)

            // 2. رسم الدوال (المنحنيات) بقوة Plotly (أكثر انسيابية)
            if (config.functions) {
                config.functions.forEach(f => {
                    let xPoints = [], yPoints = [];
                    // نطاق واسع لضمان الامتداد حتى لو صغرنا (لا يسبب ارتعاشاً)
                    const range = (config.xDomain[1] - config.xDomain[0]) * 10;
                    const startX = config.xDomain[0] - range;
                    const endX = config.xDomain[1] + range;

                    // رسم نقاط كافية لتبدو الدالة سلسلة، لكن ليس آلافاً (Anti-Jitter)
                    for (let i = startX; i <= endX; i += 0.1) {
                        xPoints.push(i);
                        // معالجة آمنة للصيغة الرياضية
                        try {
                            const scope = { x: i, Math: Math };
                            let result = eval(powerParser(f.fn).replaceAll('x', `(${i})`));
                            yPoints.push(result);
                        } catch(e) { yValues.push(null); }
                    }

                    traces.push({
                        x: xPoints, y: yPoints,
                        mode: 'lines',
                        line: { color: f.color || '#0d6efd', width: 3 },
                        name: f.label || '',
                        hoverinfo: 'none'
                    });

                    // إضافة تسمية الدالة (Cf, y=x) كمصفوفة تسميات مستقلة
                    if (f.label) {
                        annotations.push({
                            x: f.labelX, y: f.labelY,
                            text: f.label,
                            showarrow: false,
                            font: { color: f.color || (isDark ? '#fff' : '#000'), size: 14, weight: 'bold' }
                        });
                    }
                });
            }

            // 3. رسم النقاط (u0, u1, u2...) كتسميات مستقلة (أفضل للأداء)
            if (config.points) {
                config.points.forEach((p, i) => {
                    annotations.push({
                        x: p.x, y: p.y,
                        text: p.label || '',
                        showarrow: false,
                        xanchor: 'center', yanchor: 'bottom',
                        yshift: 10, // إزاحة التسمية للأعلى قليلاً
                        font: { color: isDark ? '#ffc107' : '#d9534f', size: 14, weight: 'bold' }
                    });
                });

                traces.push({
                    x: config.points.map(p => p.x),
                    y: config.points.map(p => p.y),
                    mode: 'markers',
                    marker: { size: 12, color: isDark ? '#ffc107' : '#d9534f' },
                    type: 'scatter'
                });
            }

            // 4. إعدادات المظهر (Layout) المصفاة
            const layout = {
                paper_bgcolor: 'transparent',
                plot_bgcolor: 'transparent',
                showlegend: false,
                margin: { t: 20, r: 20, b: 40, l: 40 },
                dragmode: 'pan', // السحب هو الأساس لراحة اليد
                xaxis: { 
                    range: config.xDomain, 
                    gridcolor: isDark ? '#333' : '#eee',
                    zerolinecolor: isDark ? '#666' : '#222'
                },
                yaxis: { 
                    range: config.yDomain, 
                    gridcolor: isDark ? '#333' : '#eee',
                    zerolinecolor: isDark ? '#666' : '#222'
                },
                // دمج مصفوفة التسميات المستقلة (هذا هو مفتاح النصر)
                annotations: annotations
            };

            // 5. الرسم النهائي مع تفعيل الانسيابية
            Plotly.newPlot(container.id, traces, layout, { 
                responsive: true, scrollZoom: true, displayModeBar: false 
            });

        } catch (e) {
            console.error("عطل في المحرك المطور: ", e);
        }
    });
});
