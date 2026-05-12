/* محرك "السيادة الرياضية" - الإصدار 2.7
   التحديث: إصلاح إزاحة محور التراتيب + تفعيل المسارات والتسميات + التشغيل التلقائي.
*/

const MathSovereign = {
    getTheme: () => document.documentElement.getAttribute('data-bs-theme') === 'dark',

    init: function(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // تنظيف أي لوحة سابقة لمنع التداخل
        JXG.JSXGraph.freeBoard(JXG.JSXGraph.getBoardByContainerId(containerId));
        
        const config = JSON.parse(container.getAttribute('data-graph-config'));
        const isDark = this.getTheme();
        const axisColor = isDark ? '#ffffff' : '#333';

        const board = JXG.JSXGraph.initBoard(containerId, {
            boundingbox: [config.xDomain[0], config.yDomain[1], config.xDomain[1], config.yDomain[0]],
            axis: false, 
            grid: { strokeColor: isDark ? '#333' : '#eee', opacity: 0.3, gridX: 1, gridY: 1 },
            showCopyright: false,
            pan: { enabled: true, needShift: false },
            zoom: { wheel: true, factor: 1.2 }
        });

        // 1. محور الفواصل (Les Abscisses)
        board.create('axis', [[0, 0], [1, 0]], {
            strokeColor: axisColor, strokeWidth: 1.5,
            ticks: { 
                label: { strokeColor: axisColor, fontSize: 14, offset: [-5, -15] }, 
                drawLabels: true, majorHeight: 8 
            }
        });

        // 2. محور التراتيب (Les Ordonnées) - مع الإزاحة الجانبية للوضوح
        board.create('axis', [[0, 0], [0, 1]], {
            strokeColor: axisColor, strokeWidth: 1.5,
            ticks: { 
                label: { 
                    strokeColor: axisColor, fontSize: 14, 
                    offset: [-20, 0], // إزاحة الأرقام لليسار
                    anchorX: 'right' 
                }, 
                drawLabels: true, majorHeight: 8 
            }
        });

        // 3. مفسر العناصر (The Elements Interpreter)
        if (config.elements) {
            config.elements.forEach(el => {
                if (el.type === 'function') {
                    board.create('functiongraph', [x => eval(el.fn.replaceAll('^', '**').replaceAll('x', `(${x})`))], {
                        strokeColor: el.color, strokeWidth: 3, name: el.label || '', withLabel: !!el.label,
                        label: { color: el.color, fontSize: 16, fontWeight: 'bold', offset: [10, 10] }
                    });
                } else if (el.type === 'path') {
                    board.create('polyline', el.points, {
                        strokeColor: el.color, strokeWidth: 2, dash: el.style === 'dashed' ? 2 : 0
                    });
                } else if (el.type === 'text') {
                    board.create('text', [el.x, el.y, el.content], {
                        color: el.color || axisColor, fontSize: 16, fontWeight: 'bold'
                    });
                } else if (el.type === 'point') {
                    board.create('point', [el.x, el.y], {
                        size: 4, color: el.color, name: el.label || '', withLabel: !!el.label,
                        strokeColor: '#fff', strokeWidth: 1,
                        label: { color: isDark ? '#fff' : el.color, offset: [10, 10] }
                    });
                }
            });
        }
    }
};

// الجزء الذي كان ناقصاً: تشغيل المحرك لكل الحاويات فور تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.graph-container').forEach(c => {
        MathSovereign.init(c.id);
    });
});
