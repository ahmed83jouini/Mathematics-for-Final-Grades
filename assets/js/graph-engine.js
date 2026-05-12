document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.graph-container');

    containers.forEach(container => {
        try {
            const config = JSON.parse(container.getAttribute('data-graph-config'));
            const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';

            // 1. تجهيز الدوال (تسيير الألوان)
            const functionData = (config.functions || []).map(f => ({
                fn: f.fn.replaceAll('^', '**'),
                color: f.color || (isDark ? '#55aaff' : '#007bff'),
                graphType: 'polyline',
                // إضافة خاصية للابل ليتم التقاطها لاحقاً
                attr: { "data-label": f.label || "" } 
            }));

            // 2. تجهيز النقاط
            const pointsData = (config.points || []).map(p => ({
                points: [[p.x, p.y]],
                fnType: 'points',
                graphType: 'scatter',
                color: 'orange'
            }));

            // 3. بناء اللوحة
            const instance = functionPlot({
                target: '#' + container.id,
                width: container.offsetWidth || 500,
                height: 400,
                grid: true,
                disableZoom: false,
                xAxis: { domain: config.xDomain || [-2, 10] },
                yAxis: { domain: config.yDomain || [-2, 10] },
                data: [...functionData, ...pointsData]
            });

            // 4. "هندسة التسميات" - الرسم اليدوي فوق الـ SVG
            instance.on('all:draw', function() {
                const svg = d3.select(container).select('svg');
                svg.selectAll('.custom-math-label').remove(); // مسح القديم

                // رسم تسميات النقاط (u0, u1...)
                if (config.points) {
                    config.points.forEach(p => {
                        const xPos = instance.meta.xScale(p.x);
                        const yPos = instance.meta.yScale(p.y);

                        svg.append('text')
                            .attr('class', 'custom-math-label')
                            .attr('x', xPos + 8)
                            .attr('y', yPos - 8)
                            .text(p.label || '')
                            .attr('fill', isDark ? '#ffc107' : '#d32f2f')
                            .style('font-size', '14px')
                            .style('font-weight', 'bold')
                            .style('font-family', 'serif');
                    });
                }

                // رسم تسميات الدوال (Cf, y=x) عند أطراف المنحنيات
                if (config.functions) {
                    config.functions.forEach(f => {
                        // نضع التسمية عند نهاية النطاق المرئي لإحداثي x
                        const lastX = config.xDomain[1] * 0.9; 
                        const xPos = instance.meta.xScale(lastX);
                        // حساب قيمة y التقريبية للتسمية
                        const yVal = eval(f.fn.replaceAll('^', '**').replaceAll('x', `(${lastX})`));
                        const yPos = instance.meta.yScale(yVal);

                        svg.append('text')
                            .attr('class', 'custom-math-label')
                            .attr('x', xPos)
                            .attr('y', yPos - 10)
                            .text(f.label || '')
                            .attr('fill', f.color || (isDark ? '#fff' : '#000'))
                            .style('font-style', 'italic')
                            .style('font-weight', 'bold');
                    });
                }
            });

        } catch (e) {
            console.error("خطأ في محاولة العودة: ", e);
        }
    });
});
