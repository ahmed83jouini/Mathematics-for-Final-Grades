document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.graph-container');

    containers.forEach(container => {
        try {
            const rawData = container.getAttribute('data-graph-config');
            if (!rawData) return;
            const config = JSON.parse(rawData);

            const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
            
            // 1. تحضير المنحنيات (Traces)
            const traces = (config.functions || []).map(f => {
                let xValues = [], yValues = [];
                const step = (config.xDomain[1] - config.xDomain[0]) / 200;
                
                for (let x = config.xDomain[0]; x <= config.xDomain[1]; x += step) {
                    xValues.push(x);
                    try {
                        // معالجة الصيغة الرياضية بشكل آمن
                        let expr = f.fn.replace(/x/g, `(${x})`).replace(/\^/g, '**').replace(/sqrt/g, 'Math.sqrt');
                        yValues.push(eval(expr));
                    } catch(e) { yValues.push(null); }
                }

                return {
                    x: xValues, y: yValues,
                    mode: 'lines',
                    line: { color: f.color || '#0d6efd', width: 3 },
                    name: f.label || ''
                };
            });

            // 2. إضافة النقاط (Points) كطبقة مستقلة
            if (config.points) {
                traces.push({
                    x: config.points.map(p => p.x),
                    y: config.points.map(p => p.y),
                    mode: 'markers+text',
                    text: config.points.map(p => p.label || ''),
                    textposition: 'top center',
                    marker: { size: 10, color: isDark ? '#ffc107' : '#d9534f' },
                    type: 'scatter'
                });
            }

            // 3. إعدادات المظهر (Layout) بمنطق "الكبار"
            const layout = {
                paper_bgcolor: 'transparent',
                plot_bgcolor: 'transparent',
                showlegend: false,
                margin: { t: 20, r: 20, b: 40, l: 40 },
                xaxis: {
                    range: config.xDomain,
                    gridcolor: isDark ? '#333' : '#eee',
                    zerolinecolor: isDark ? '#888' : '#333',
                    tickfont: { color: isDark ? '#ccc' : '#444' }
                },
                yaxis: {
                    range: config.yDomain,
                    gridcolor: isDark ? '#333' : '#eee',
                    zerolinecolor: isDark ? '#888' : '#333',
                    tickfont: { color: isDark ? '#ccc' : '#444' }
                },
                // التسميات (Annotations) - ثابتة وواضحة
                annotations: (config.annotations || []).map(ann => ({
                    x: ann.x, y: ann.y,
                    text: ann.label || ann.text,
                    showarrow: false,
                    font: { color: isDark ? '#fff' : '#000', size: 13 },
                    bgcolor: isDark ? 'rgba(0,0,0,0.5)' : 'rgba(255,255,255,0.8)'
                }))
            };

            // 4. التنفيذ مع تفعيل التفاعل الكامل
            Plotly.newPlot(container.id, traces, layout, {
                responsive: true,
                displayModeBar: false,
                scrollZoom: true
            });

        } catch (e) {
            console.error("خطأ في المحرك العملاق: ", e);
        }
    });
});
