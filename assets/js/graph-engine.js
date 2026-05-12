/*
  بروتوكول الرسم المطور - نسخة الإحكام النهائي
  الوظيفة: رسم الدوال، المنصف الأول، النقاط u0, u1.. والتسميات بتباين عالٍ.
*/

document.addEventListener("DOMContentLoaded", function() {
    const containers = document.querySelectorAll('.graph-container');

    containers.forEach(container => {
        try {
            // 1. استخراج البيانات من YAML
            const rawData = container.getAttribute('data-graph-config');
            if (!rawData) return;
            const config = JSON.parse(rawData);

            // 2. إعدادات الألوان الديناميكية
            const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
            
            const themeColors = {
                text: isDark ? '#ffffff' : '#000000',      // نص أبيض في المظلم
                helper: isDark ? '#ffc107' : '#d9534f',    // ذهبي للمظلم، أحمر داكن للمضيء
                line: isDark ? '#66b2ff' : '#0d6efd',      // أزرق متوافق مع المود
                grid: isDark ? '#333333' : '#eeeeee'
            };

            // 3. تحضير التسميات والخطوط المساعدة (Annotations)
            // نستخدم مصفوفة واحدة ونوحد الخصائص لضمان قبول المكتبة لها
            const allAnnotations = [
                // أ- تسميات الدوال (مثل Cf و y=x)
                ...((config.functions || [])
                    .filter(f => f.label)
                    .map(f => ({
                        x: f.labelX !== undefined ? f.labelX : 0,
                        y: f.labelY !== undefined ? f.labelY : 0,
                        text: f.label,
                        color: f.color || themeColors.text
                    }))),
                // ب- الخطوط المساعدة (x=0, y=0, u0...)
                ...(config.annotations || []).map(ann => ({
                    ...ann,
                    label: ann.label || ann.text, // دعم المسميين لضمان التوافق
                    color: ann.color || themeColors.helper
                }))
            ];

            // 4. تحضير البيانات الرسمية (Data Array)
            const graphData = [
                // أولاً: رسم الدوال (polyline)
                ...(config.functions || []).map(f => ({
                    fn: f.fn,
                    color: f.color || themeColors.line,
                    strokeWidth: 3,
                    sampler: 'builtIn',
                    graphType: 'polyline'
                })),
                // ثانياً: رسم النقاط المنفصلة (u0, u1...)
                ...(config.points || []).map((p, i) => ({
                    points: [[p.x, p.y]],
                    fnType: 'points',
                    graphType: 'scatter',
                    color: p.color || themeColors.helper,
                    attr: { r: 5 } // تكبير النقطة للرؤية على الجوال
                }))
            ];

            // 5. التنفيذ النهائي باستخدام functionPlot
            functionPlot({
                target: "#" + container.id,
                width: container.offsetWidth || 400,
                height: 400,
                grid: true,
                disableZoom: true, // لمنع التداخل مع التمرير في الجوال
                xAxis: { 
                    domain: config.xDomain || [-1, 10],
                    label: 'x' 
                },
                yAxis: { 
                    domain: config.yDomain || [-1, 10],
                    label: 'y' 
                },
                data: graphData,
                annotations: allAnnotations
            });

            console.log(`%c تم إحكام الرسم: ${container.id}`, "color: green; font-weight: bold;");

        } catch (e) {
            console.error("خطأ في تنفيذ بروتوكول الرسم: ", e);
        }
    });
});
