/* محرك "السيادة الرياضية" - الإصدار 2.0 
   يدعم: المعادلات، المسارات المتصلة، وتنسيق السبورة.
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
            axis: false, grid: true, showCopyright: false,
            pan: { enabled: true, needShift: false },
            zoom: { wheel: true, factor: 1.1 }
        });

        // رسم المحاور الثابتة
        const axisStyle = { strokeColor: isDark ? '#888' : '#333', strokeWidth: 1 };
        board.create('axis', [[0, 0], [1, 0]], { ...axisStyle, ticks: { label: {offset: [-5, -15]} } });
        board.create('axis', [[0, 0], [0, 1]], { ...axisStyle, ticks: { label: {offset: [-20, 5]} } });

        // المفسر الجديد لـ elements
        if (config.elements) {
            config.elements.forEach(el => {
                switch(el.type) {
                    case 'function':
                        board.create('functiongraph', [x => {
                            try {
                                return eval(el.fn.replaceAll('^', '**').replaceAll('x', `(${x})`));
                            } catch(e) { return null; }
                        }], {
                            strokeColor: el.color, strokeWidth: 3, name: el.label || '', withLabel: !!el.label,
                            label: { color: el.color, fontSize: 16, fontWeight: 'bold' }
                        });
                        break;

                    case 'path':
                        board.create('polyline', el.points, {
                            strokeColor: el.color, strokeWidth: 1.5, dash: el.style === 'dashed' ? 2 : 0
                        });
                        break;

                    case 'text':
                        board.create('text', [el.x, el.y, el.content], {
                            color: el.color || (isDark ? '#fff' : '#000'),
                            fontSize: 14, fontWeight: 'bold'
                        });
                        break;
                }
            });
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.graph-container').forEach(c => MathSovereign.init(c.id));
});
