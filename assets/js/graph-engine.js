/* محرك JSXGraph - نسخة الإحكام الرياضي 
   الحلول: ثبات مطلق، دقة متناهية، وانسيابية ألمانية.
*/

function powerParser(fn) {
    if (!fn) return "";
    return fn.replaceAll('^', '**').replace(/sqrt/g, 'Math.sqrt');
}

document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.graph-container');

    containers.forEach(container => {
        // تأمين ظهور الحاوية
        container.style.height = '400px';
        container.style.width = '100%';

        try {
            const rawData = container.getAttribute('data-graph-config');
            if (!rawData) return;
            const config = JSON.parse(rawData);
            const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';

            // 1. إنشاء اللوحة (Board)
            const board = JXG.JSXGraph.initBoard(container.id, {
                boundingbox: [config.xDomain[0], config.yDomain[1], config.xDomain[1], config.yDomain[0]],
                axis: true,
                showCopyright: false,
                pan: { enabled: true, needShift: false },
                zoom: { wheel: true, factor: 1.2 }
            });

            // 2. رسم الدوال ككيانات رياضية (Function Graphs)
            if (config.functions) {
                config.functions.forEach(f => {
                    board.create('functiongraph', [function(x) {
                        try {
                            let expr = powerParser(f.fn).replaceAll('x', `(${x})`);
                            return eval(expr);
                        } catch(e) { return null; }
                    }], {
                        strokeColor: f.color || '#0d6efd',
                        strokeWidth: 2,
                        name: f.label || '',
                        withLabel: !!f.label,
                        label: { color: f.color || (isDark ? '#fff' : '#000'), position: 'urt' }
                    });
                });
            }

            // 3. رسم النقاط (Points)
            if (config.points) {
                config.points.forEach(p => {
                    board.create('point', [p.x, p.y], {
                        name: p.label || '',
                        size: 3,
                        color: isDark ? '#ffc107' : '#d9534f',
                        fixed: true, // لتبقى في مكانها الرياضي
                        withLabel: true,
                        label: { color: isDark ? '#fff' : '#000', offset: [5, 10] }
                    });
                });
            }

        } catch (e) {
            console.error("عطل في محرك JSXGraph: ", e);
        }
    });
});
