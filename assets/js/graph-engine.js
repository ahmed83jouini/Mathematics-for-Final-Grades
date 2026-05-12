document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.graph-container');

    containers.forEach(container => {
        try {
            const config = JSON.parse(container.getAttribute('data-graph-config'));
            
            // 1. إنشاء اللوحة (Board) - ثابتة وقوية
            const board = JXG.JSXGraph.initBoard(container.id, {
                boundingbox: [config.xDomain[0], config.yDomain[1], config.xDomain[1], config.yDomain[0]],
                axis: true,
                showCopyright: false,
                pan: { enabled: true, needShift: false }, // سحب انسيابي
                zoom: { wheel: true, factor: 1.2 }        // زوم حقيقي
            });

            // 2. رسم الدوال (ككائنات رياضية حقيقية)
            if (config.functions) {
                config.functions.forEach(f => {
                    board.create('functiongraph', [
                        function(x) { 
                            // تحويل الصيغة ببساطة
                            let expr = f.fn.replaceAll('^', '**').replace(/sqrt/g, 'Math.sqrt');
                            return eval(expr.replaceAll('x', `(${x})`));
                        }
                    ], { strokeColor: f.color || 'blue', strokeWidth: 2, name: f.label, withLabel: true });
                });
            }

            // 3. رسم النقاط (تتحرك مع الزوم بذكاء)
            if (config.points) {
                config.points.forEach(p => {
                    board.create('point', [p.x, p.y], {
                        name: p.label || '',
                        color: 'orange',
                        size: 3,
                        fixed: true // ثابتة رياضياً
                    });
                });
            }

        } catch (e) { console.error("خطأ في محرك JSXGraph: ", e); }
    });
});
