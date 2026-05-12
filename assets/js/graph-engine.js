const MathSovereign = {
    getTheme: () => document.documentElement.getAttribute('data-bs-theme') === 'dark',

    init: function(containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;
        
        // تنظيف اللوحة بأمان صلب
        try { JXG.JSXGraph.freeBoard(JXG.JSXGraph.getBoardByContainerId(containerId)); } catch(e) {}
        
        const config = JSON.parse(container.getAttribute('data-graph-config'));
        const isDark = this.getTheme();
        const axisColor = isDark ? '#ffffff' : '#333';

        const board = JXG.JSXGraph.initBoard(containerId, {
            boundingbox: [config.xDomain[0], config.yDomain[1], config.xDomain[1], config.yDomain[0]],
            axis: false, 
            grid: { strokeColor: isDark ? '#444' : '#eee', opacity: 0.2, gridX: 1, gridY: 1 },
            showCopyright: false,
            pan: { enabled: true, needShift: false },
            zoom: { wheel: true, factor: 1.2 }
        });

        // رسم المحاور مع ضمان وضوح الأرقام الجانبية
        board.create('axis', [[0, 0], [1, 0]], {
            strokeColor: axisColor,
            ticks: { label: { strokeColor: axisColor, fontSize: 13, offset: [-5, -15] }, drawLabels: true }
        });
        board.create('axis', [[0, 0], [0, 1]], {
            strokeColor: axisColor,
            ticks: { 
                label: { strokeColor: axisColor, fontSize: 13, offset: [-25, 0], anchorX: 'right' }, 
                drawLabels: true 
            }
        });

        // المفسر الموثوق للعناصر
        if (config.elements) {
            config.elements.forEach(el => {
                if (el.type === 'function') {
                    board.create('functiongraph', [x => {
                        return eval(el.fn.replace(/\^/g, '**').replace(/x/g, `(${x})`));
                    }], { strokeColor: el.color, strokeWidth: 3, name: el.label || '', withLabel: !!el.label });
                } 
                else if (el.type === 'path') {
                    board.create('polyline', el.points, { strokeColor: el.color, strokeWidth: 2, dash: el.style === 'dashed' ? 2 : 0 });
                } 
                else if (el.type === 'point') {
                    board.create('point', [el.x, el.y], { size: 4, color: el.color, name: el.label || '', withLabel: !!el.label, strokeColor: '#fff' });
                } 
                else if (el.type === 'text') {
                    board.create('text', [el.x, el.y, el.content], { color: el.color || axisColor, fontSize: 16, fontWeight: 'bold' });
                }
            });
        }
    }
};

// تشغيل المحرك فور الجاهزية
window.addEventListener('load', () => {
    document.querySelectorAll('.graph-container').forEach(c => MathSovereign.init(c.id));
});
