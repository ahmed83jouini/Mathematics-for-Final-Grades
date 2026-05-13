const MathSovereign = {
    init: function(id) {
        const c = document.getElementById(id);
        if (!c) return;
        try { JXG.JSXGraph.freeBoard(JXG.JSXGraph.getBoardByContainerId(id)); } catch(e) {}
        
        const config = JSON.parse(c.getAttribute('data-graph-config'));
        const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
        const axisColor = isDark ? '#ffffff' : '#333';

        const b = JXG.JSXGraph.initBoard(id, {
            boundingbox: [config.xDomain[0], config.yDomain[1], config.xDomain[1], config.yDomain[0]],
            axis: false, showCopyright: false,
            grid: { strokeColor: isDark ? '#444' : '#eee', opacity: 0.2, gridX: 1, gridY: 1 }
        });

        // رسم المحاور (مع إزاحة الأرقام لضمان الوضوح)
        b.create('axis', [[0, 0], [1, 0]], { strokeColor: axisColor, ticks: { label: { offset: [-5, -15], strokeColor: axisColor } } });
        b.create('axis', [[0, 0], [0, 1]], { strokeColor: axisColor, ticks: { label: { offset: [-25, 0], anchorX: 'right', strokeColor: axisColor } } });

        if (config.elements) {
            config.elements.forEach(el => {
                if (el.type === 'function') {
                    // التعطيل الصريح للـ label التلقائي المشوه
                    b.create('functiongraph', [x => eval(el.fn.replace(/\^/g, '**').replace(/x/g, `(${x})`))], { 
                        strokeColor: el.color, 
                        strokeWidth: 3,
                        withLabel: false // هذا سيحذف y=; فوراً
                    });
                } else if (el.type === 'path') {
                    b.create('polyline', el.points, { strokeColor: el.color, strokeWidth: 2, dash: el.style === 'dashed' ? 2 : 0 });
                } else if (el.type === 'point') {
                    b.create('point', [el.x, el.y], { size: 4, color: el.color, strokeColor: '#fff', withLabel: false });
                } else if (el.type === 'text') {
                    // نعتمد على النصوص اليدوية فقط للتحكم الكامل
                    b.create('text', [el.x, el.y, el.content], { color: el.color || axisColor, fontSize: 16 });
                }
            });
        }
    }
};

window.onload = () => document.querySelectorAll('.graph-container').forEach(c => MathSovereign.init(c.id));
