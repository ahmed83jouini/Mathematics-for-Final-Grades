/* محرك "السيادة الرياضية" - الإصدار 2.5 (النسخة البصرية الفائقة)
   الميزات: شبكة خافتة، نصوص بيضاء للمود الليلي، تدريج واضح، وتوسيع المساحة.
*/

const MathSovereign = {
    getTheme: () => document.documentElement.getAttribute('data-bs-theme') === 'dark',

    init: function(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        const config = JSON.parse(container.getAttribute('data-graph-config'));
        const isDark = this.getTheme();

        const board = JXG.JSXGraph.initBoard(containerId, {
            boundingbox: [config.xDomain[0], config.yDomain[1], config.xDomain[1], config.yDomain[0]],
            axis: false, 
            grid: {
                strokeColor: isDark ? '#333' : '#eee', // شبكة خافتة جداً
                opacity: 0.5,
                gridX: 1, // توسيع المربعات (مربع لكل وحدة)
                gridY: 1
            },
            showCopyright: false,
            pan: { enabled: true, needShift: false },
            zoom: { wheel: true, factor: 1.2 }
        });

        // إعدادات المحاور والتدريج (أبيض في المود الليلي ليكون مرئياً)
        const axisStyle = { 
            strokeColor: isDark ? '#fff' : '#333', 
            strokeWidth: 1.5,
            ticks: {
                label: { 
                    strokeColor: isDark ? '#fff' : '#333', // لون الأرقام (0, 1, 2...)
                    fontSize: 12 
                },
                drawLabels: true,
                insertTicks: false,
                minorTicks: 0 // إلغاء التدريجات الصغيرة لتخفيف الزحام
            }
        };

        board.create('axis', [[0, 0], [1, 0]], axisStyle);
        board.create('axis', [[0, 0], [0, 1]], axisStyle);

        const elements = config.elements || [];
        elements.forEach(el => {
            switch(el.type) {
                case 'function':
                    board.create('functiongraph', [x => eval(el.fn.replaceAll('^', '**').replaceAll('x', `(${x})`))], {
                        strokeColor: el.color, strokeWidth: 3, name: el.label || '', withLabel: !!el.label,
                        label: { color: el.color, fontSize: 16, fontWeight: 'bold' }
                    });
                    break;
                
                case 'point':
                    board.create('point', [el.x, el.y], {
                        size: 4, color: el.color, name: el.label || '', withLabel: !!el.label,
                        fixed: true, strokeColor: '#fff', strokeWidth: 1,
                        label: { color: isDark ? '#fff' : el.color, offset: [10, 10] }
                    });
                    break;

                case 'path':
                    board.create('polyline', el.points, {
                        strokeColor: el.color, strokeWidth: 2, dash: el.style === 'dashed' ? 2 : 0
                    });
                    break;

                case 'text':
                    board.create('text', [el.x, el.y, el.content], {
                        color: el.color || (isDark ? '#fff' : '#000'),
                        fontSize: 16, fontWeight: 'bold'
                    });
                    break;
            }
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.graph-container').forEach(c => MathSovereign.init(c.id));
});
