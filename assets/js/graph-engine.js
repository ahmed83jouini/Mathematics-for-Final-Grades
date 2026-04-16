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

            functionPlot({
                target: "#" + container.id,
                width: container.offsetWidth || 400,
                height: 400,
                grid: true,
                xAxis: { domain: config.xDomain || [-10, 10] },
                yAxis: { domain: config.yDomain || [-10, 10] },
                data: [
                    {
                        fn: config.fn,
                        color: colors.line,
                        strokeWidth: 3,
                        sampler: 'builtIn',
                        graphType: 'polyline'
                    },
                    {
                        points: config.points ? config.points.map(p => [p.x, p.y]) : [],
                        fnType: 'points',
                        graphType: 'scatter',
                        color: colors.helper
                    }
                ],
                annotations: config.annotations || []
            });
        } catch (e) {
            console.error("خطأ في رسم البيان: " + container.id, e);
        }
    });
});
