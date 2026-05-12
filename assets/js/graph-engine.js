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
            zoom: { wheel: true, factor: 1.2 }
        });

        const axisStyle = { strokeColor: isDark ? '#888' : '#333', strokeWidth: 1 };
        board.create('axis', [[0, 0], [1, 0]], { ...axisStyle, ticks: { label: {offset: [-5, -15]} } });
        board.create('axis', [[0, 0], [0, 1]], { ...axisStyle, ticks: { label: {offset: [-20, 5]} } });

        // التعديل الجوهري: التأكد من وجود المصفوفة قبل الحلقة
        const elements = config.elements || []; 
        
        elements.forEach(el => {
            if (el.type === 'function') {
                board.create('functiongraph', [x => eval(el.fn.replaceAll('^', '**').replaceAll('x', `(${x})`))], {
                    strokeColor: el.color, strokeWidth: 3, name: el.label || '', withLabel: !!el.label,
                    label: { color: el.color, fontSize: 16, fontWeight: 'bold' }
                });
            } else if (el.type === 'path') {
                board.create('polyline', el.points, {
                    strokeColor: el.color, strokeWidth: 1.5, dash: el.style === 'dashed' ? 2 : 0
                });
            } else if (el.type === 'text') {
                board.create('text', [el.x, el.y, el.content], {
                    color: el.color || (isDark ? '#fff' : '#000'),
                    fontSize: 14, fontWeight: 'bold'
                });
            } else if (el.type === 'point') { // دعم النقاط المنفصلة
                board.create('point', [el.x, el.y], {
                    color: el.color, size: 3, name: el.label || '', withLabel: !!el.label
                });
            }
        });
    }
};
