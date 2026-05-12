
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

        // 1. المحاور (ثابتة ومنسجمة مع المود)
        const axisStyle = { strokeColor: isDark ? '#666' : '#333', strokeWidth: 1.2 };
        board.create('axis', [[0, 0], [1, 0]], { ...axisStyle, ticks: { label: {offset: [-5, -15]} } });
        board.create('axis', [[0, 0], [0, 1]], { ...axisStyle, ticks: { label: {offset: [-20, 5]} } });

        // 2. المفسر الشامل للعناصر
        const elements = config.elements || [];
        elements.forEach(el => {
            switch(el.type) {
                case 'function':
                    board.create('functiongraph', [x => eval(el.fn.replaceAll('^', '**').replaceAll('x', `(${x})`))], {
                        strokeColor: el.color, strokeWidth: 3, name: el.label || '', withLabel: !!el.label,
                        label: { color: el.color, fontSize: 16, fontWeight: 'bold' }
                    });
                    break;
                
                case 'point': // دعم الرسم الأول (الحد العام)
                    board.create('point', [el.x, el.y], {
                        size: 3, color: el.color, name: el.label || '', withLabel: !!el.label,
                        fixed: true, strokeColor: 'white', strokeWidth: 1
                    });
                    break;

                case 'path': // دعم الرسم الثاني (الدرج)
                    board.create('polyline', el.points, {
                        strokeColor: el.color, strokeWidth: 1.5, dash: el.style === 'dashed' ? 2 : 0
                    });
                    break;

                case 'text': // التسميات الرياضية
                    board.create('text', [el.x, el.y, el.content], {
                        color: el.color || (isDark ? '#fff' : '#000'),
                        fontSize: 15, fontWeight: 'bold', cssClass: 'math-label'
                    });
                    break;
            }
        });
    }
};

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.graph-container').forEach(c => MathSovereign.init(c.id));
});
