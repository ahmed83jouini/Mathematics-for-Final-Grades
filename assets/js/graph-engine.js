/* محرك "السيادة الرياضية" - الإصدار النهائي 1.1 
   تحقيق دفتر الشروط: الألوان الآلية، المحاور الثابتة، وتناسق المسارات.
*/

const MathSovereign = {
    // مصفوفة ألوان Minimalist متناغمة
    palette: ['#0d6efd', '#198754', '#d63384', '#fd7e14', '#6610f2'],
    
    getTheme: () => document.documentElement.getAttribute('data-bs-theme') === 'dark',

    init: function(containerId) {
        const container = document.getElementById(containerId);
        const config = JSON.parse(container.getAttribute('data-graph-config'));
        const isDark = this.getTheme();

        // 1. إعداد اللوحة (Board) بنمط السبورة
        const board = JXG.JSXGraph.initBoard(containerId, {
            boundingbox: [config.xDomain[0], config.yDomain[1], config.xDomain[1], config.yDomain[0]],
            axis: false, grid: true, showCopyright: false,
            pan: { enabled: true, needShift: false },
            zoom: { wheel: true, factor: 1.1 }
        });

        // 2. المحاور الثابتة (الشرط رقم 5)
        const axisStyle = { strokeColor: isDark ? '#555' : '#333', strokeWidth: 1 };
        board.create('axis', [[0, 0], [1, 0]], { ...axisStyle, ticks: { drawZero: true, label: {offset: [-5, -15]} } });
        board.create('axis', [[0, 0], [0, 1]], { ...axisStyle, ticks: { drawZero: false, label: {offset: [-20, 5]} } });

        // 3. تسيير المنحنيات والألوان آلياً (الشرط رقم 3)
        if (config.functions) {
            config.functions.forEach((f, i) => {
                const color = f.color || this.palette[i % this.palette.length];
                board.create('functiongraph', [x => {
                    try {
                        return eval(f.fn.replaceAll('^', '**').replaceAll('x', `(${x})`));
                    } catch(e) { return null; }
                }], {
                    strokeColor: color, strokeWidth: 3, name: f.label || '', withLabel: true,
                    label: { color: color, fontSize: 16, fontWeight: 'bold', cssClass: 'math-label' }
                });
            });
        }

        // 4. تسيير النقاط والمسارات (الشرط رقم 4)
        if (config.points) {
            config.points.forEach((p, i) => {
                const color = isDark ? '#ffc107' : '#d32f2f';
                board.create('point', [p.x, p.y], {
                    name: p.label || '', size: 3, color: color, fixed: true,
                    label: { color: isDark ? '#fff' : '#000', offset: [5, 12], fontSize: 14 }
                });
                
                // إذا وجد مسار (Path) سيتم رسمه بخطوط متقطعة متناسقة
                if (p.drawTo) {
                   board.create('segment', [[p.x, p.y], [p.drawTo.x, p.drawTo.y]], {
                       dash: 2, strokeColor: color, strokeWidth: 1
                   });
                }
            });
        }
        
        return board;
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.graph-container').forEach(c => MathSovereign.init(c.id));
});
