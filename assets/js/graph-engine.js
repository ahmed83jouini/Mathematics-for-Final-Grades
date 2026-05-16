/*
طريقة الإدخال

- graph:
      id: "seq_generation-graph-2"
      class: "graph-container"
      xDomain: [-0.5, 4.5]
      yDomain: [-0.5, 4.5]
      elements:
        - { type: "function", fn: "0.5*x + 1", color: "#0d6efd" }
        - { type: "function", fn: "x", color: "#198754" }
        - type: "path"
          points: [[0, 0], [0, 1], [1, 1], [1, 1.5], [1.5, 1.5]]
          color: "red"
          style: "dashed"
        - { type: "text", content: "u_0", x: 0, y: -0.3, color: "red" }
        - { type: "point", x: 0, y: 0, color: "red", size: 2 }
        - { type: "text", content: "u_1", x: 1, y: -0.3, color: "red" }
        - { type: "point", x: 1, y: 0, color: "red", size: 2 }
        - { type: "text", content: "u_2", x: 1.5, y: -0.3, color: "red" }
        - { type: "point", x: 1.5, y: 0, color: "red", size: 2 }
        - { type: "text", content: "y=x (المستقيم المنصف)", x: 3, y: 3.8, color: "#198754" }
        - { type: "text", content: "C_f", x: 3.5, y: 3, color: "#0d6efd" }
        - { type: "line", points: [[x1, y1], [x2, y2]], color: "#28a745", dash: 0 }

*/
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
            axis: false, 
            showCopyright: false,

            grid: { 
                strokeColor: isDark ? '#444' : '#eee', 
                opacity: 0.2, 
                majorStep: 1, // بدلاً من gridX
                minorStep: 0.2 // (اختياري) للتحكم في الخطوط الثانوية
            }
        });


        // رسم المحاور (مع إزاحة الأرقام لضمان الوضوح)
        b.create('axis', [[0, 0], [1, 0]], { strokeColor: axisColor, fixed: true, ticks: { label: { offset: [-5, -15], strokeColor: axisColor } } });
        b.create('axis', [[0, 0], [0, 1]], { strokeColor: axisColor, fixed: true, ticks: { label: { offset: [-25, 0], anchorX: 'right', strokeColor: axisColor } } });

        if (config.elements) {
            config.elements.forEach(el => {
                if (el.type === 'function') {
                    // التعطيل الصريح للـ label التلقائي المشوه
                    b.create('functiongraph', [x => eval(el.fn.replace(/\^/g, '**').replace(/x/g, `(${x})`))], { 
                        strokeColor: el.strokeColor || "blue", 
                        strokeWidth: el.strokeWidth || 3,
                        dash: el.dash || 0,
                        withLabel: false // هذا سيحذف y=; فوراً
                    });
                } else if (el.type === 'path') {
                    try {
                        let px = el.points.map(p => p[0]);
                        let py = el.points.map(p => p[1]);
        
                        b.create('curve', [px, py], {
                            strokeColor: el.color || '#ff0000',
                            strokeWidth: 2,
                            dash: el.dash || 0,
                            fixed: el.fixed || true
                        });
                    } catch(e) { console.log('path drawing error : ' + e ); };
                      
                } else if (el.type === 'point') {
                    try { b.create('point', [el.x, el.y], { 
                          size: el.size || 4, 
                          strokeColor: el.strokeColor || "red", 
                          fillColor: el.fillColor || 'red', 
                          withLabel: false, 
                          fixed: el.fixed || true 
                    }); } catch(e) { console.log('point drawing error :' + e ); };
                      
                } else if (el.type === 'text') {
                    // نعتمد على النصوص اليدوية فقط للتحكم الكامل
                    try { b.create('text', 
                        [el.x, el.y, el.content], {
                              color: el.color || axisColor, 
                              fontSize: 16, 
                              fixed: el.fixed || true }); 
                        } catch(e) { console.log('text drawing error :' + e ); };
                      
                } else if (el.type === 'line') {
                    try { b.create('line', el.points, {
                          strokeColor: el.color || "blue", 
                          strokeWidth: el.width || 2, 
                          fixed: el.fixed || true, 
                          dash: el.dash || 0, 
                          name: el.name || '', 
                          withLabel: !!el.name, 
                          label: { 
                                offset: [10, 10], 
                                color: el.color || "blue"
                          }})} catch (e) { 
                             console.log ("line drawing error :", e); 
                    };
                } else if (el.type === 'bar') {
                    try {
                        // نمرر عبر مصفوفة البيانات لرسم كل عمود على حدة
                        el.data.forEach(item => {
                          // حساب إحداثيات الرؤوس الأربعة للعمود (بافتراض عرض العمود = 1)
                          // يمكنك جعل العرض متغيرًا في اليامل إذا أردت (مثال: el.width)
                          const width = el.barWidth || 1;
                          const xLeft = item.x - width / 2;
                          const xRight = item.x + width / 2;
                          const yBottom = 0; // يبدأ من محور الفواصل
                          const yTop = item.y;

                         // إنشاء نقاط المضلع الأربعة
                         const p1 = b.create('point', [xLeft, yBottom], { visible: false });
                         const p2 = b.create('point', [xLeft, yTop], { visible: false });
                         const p3 = b.create('point', [xRight, yTop], { visible: false });
                         const p4 = b.create('point', [xRight, yBottom], { visible: false });

                         // رسم العمود كمضلع (Polygon)
                         b.create('polygon', [p1, p2, p3, p4], {
                               fillColor: el.color || '#168574',
                               fillOpacity: el.opacity || 0.6,
                               strokeColor: el.strokeColor || el.color || '#168574',
                               strokeWidth: el.strokeWidth || 1,
                               highlight: false, // لمنع تفاعل العمود مع السحب
                               fixed: el.fixed || true
                         });

                         // إضافة التسمية (u0, u1...) فوق العمود إذا وجدت
                         if (item.label) {
                             b.create('text', [item.x, yTop + (el.yDomain[1] * 0.02), item.label], {
                                   anchorX: 'middle',
                                   anchorY: 'bottom',
                                   strokeColor: el.labelColor || '#eee',
                                   fontSize: 14,
                                   fixed: true
                              });
                          }
                        });
                  } catch (e) {
                       console.error("خطأ في رسم الأعمدة (bar): ", e, el);
                  } 
                }
            });
        }
    }
};

window.onload = () => document.querySelectorAll('.graph-container').forEach(c => MathSovereign.init(c.id));






//
