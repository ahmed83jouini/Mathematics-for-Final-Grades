/*مثال لإدخال المعطيات
  - graph:
      id: "recursive-visual-final"
      xDomain: [-0.5, 4]
      yDomain: [-0.5, 4]
      functions:
        - fn: "sqrt(x + 2)"   # المنحنى Cf
          color: "#0d6efd"
          label: "C_f"
          labelX: 3
          labelY: 2.3
        - fn: "x"             # المنصف الأول (الحل لمشكلتنا)
          color: "#dc3545"
          label: "y = x"
          labelX: 3.5
          labelY: 3.5
      points:
        - x: 0
          y: 0
          color: "blue"       # نقطة u0
*/

document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.graph-container');

    containers.forEach(container => {
        try {
            // 1. استخراج البيانات من YAML
            const rawData = container.getAttribute('data-graph-config');
            if (!rawData) return;
            const config = JSON.parse(rawData);

            // 2. إعدادات الألوان (دعم الوضع الليلي)
            const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
            // تعريف "باليت" ألوان قوية تفرض نفسها في المودين
            const themeColors = {
                text: isDark ? '#ffffff' : '#000000',      // نص أبيض في المظلم، أسود في المضيء
                helper: isDark ? '#FFD700' : '#d9534f',    // ذهبي في المظلم، أحمر غامق في المضيء للوضوح
                grid: isDark ? '#444' : '#eee'
            };

            // 3. تحضير نقاط التشتت (Scatter Data) للحدود u0, u1, u2...
            const scatterData = config.points ? config.points.map((p, i) => ({
                id: `point-${i}`,
                points: [[p.x, p.y]],
                fnType: 'points',
                graphType: 'scatter',
                attr: {
                    r: p.r || 3,
                    fill: p.color || colors.helper,
                    stroke: p.color || colors.helper,
                    "stroke-width": 2
                }
            })) : [];

            // تحضير التسميات مع إجبارية اللون
            const allAnnotations = [
                ...((config.functions || [])
                    .filter(f => f.label)
                    .map(f => ({
                        x: f.labelX || 0,
                        y: f.labelY || 0,
                        text: f.label,
                        color: f.color || themeColors.text // إذا لم يحدد لون، استخدم لون التباين
                  }))),
                ...(config.annotations || []).map(ann => ({
                    ...ann,
                        color: ann.color || themeColors.helper, // فرض لون مساعد قوي
                  }))
              ];

            // 5. التنفيذ النهائي للرسم
            functionPlot({
                target: "#" + container.id,
                width: container.offsetWidth || 400,
                height: 400,
                grid: true,
                xAxis: { domain: config.xDomain || [-1, 10] },
                yAxis: { domain: config.yDomain || [-1, 10] },
                data: [
                    // رسم قائمة الدوال الممرة (المنحنى، المنصف، إلخ)
                    ...(config.functions || []).map(f => ({
                        fn: f.fn,
                        color: f.color || colors.line,
                        strokeWidth: f.strokeWidth || 3,
                        sampler: 'builtIn',
                        graphType: 'polyline',
                        attr: {
                            "stroke": f.color || colors.line,
                            "stroke-width": f.strokeWidth || 3
                        }
                    })),
                    // دمج النقاط (Scatter)
                    ...scatterData
                ].filter(Boolean),
                annotations: allAnnotations
            });

            console.log(`تم رسم البيان بنجاح: ${container.id}`);

        } catch (e) {
            console.error("خطأ في معالجة بيانات الرسم: " + container.id, e);
        }
    });
});











