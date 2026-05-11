// graph-engine.js
document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.graph-container');

    containers.forEach(container => {
        try {
            // استخراج البيانات الممررة من YAML عبر سمات HTML
            const rawData = container.getAttribute('data-graph-config');
            const config = JSON.parse(rawData);

            const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
            const colors = {
                axis: isDark ? '#888' : '#333',
                line: isDark ? '#66b2ff' : '#0d6efd',
                helper: '#dc3545',
                bg: isDark ? '#1a1a1a' : '#ffffff'
            };
            
            const scatterData = config.points ? config.points.map((p, i) => ({
                id: `point-${i}`, // إضافة معرف فريد لكل نقطة
                points: [[p.x, p.y]],
                fnType: 'points',
                graphType: 'scatter',
                attr: {
                    r: p.r || 2,
                    fill: colors.bg,
                    stroke: p.color || 'red',
                    "stroke-width": 2
                }
            })) : [];

            // تحضير جميع التسميات (الخاصة بالدوال والخاصة بالرسم العام)
            const allAnnotations = (config.functions || [])
                      .filter(f => f.label)
                      .map(f => ({
                            x: f.labelX || 0,
                            y: f.labelY || 0,
                            text: f.label,
                            color: f.color
                        })).concat(config.annotations || []);



            console.log("البيانات الممررة للرسم:", config);
            console.log("نقاط التشتت المحضرة:", scatterData);


            functionPlot({
                target: "#" + container.id,
                width: container.offsetWidth || 400,
                height: 400,
                grid: true,
                xAxis: { domain: config.xDomain || [-10, 10] },
                yAxis: { domain: config.yDomain || [-10, 10] },
                data: [
                    // أولاً: رسم الدوال
                    ...(config.functions || []).map(f => ({
                        fn: f.fn,
                        color: f.color || colors.line,
                        strokeWidth: f.strokeWidth || 3,
                        sampler: 'builtIn',
                        graphType: 'polyline'
                    })),
                    // ثانياً: رسم النقاط (u0, u1, u2...)
                    ...scatterData
                ].filter(Boolean),
                // ثالثاً: وضع التسميات المدمجة (لا تكرار هنا)
                annotations: allAnnotations
            });
        } catch (e) {
            console.error("خطأ في رسم البيان: " + container.id, e);
        }
    });
});











