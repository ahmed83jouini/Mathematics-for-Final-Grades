// كود رسم الدالة f(x) = (sqrt(x+1)-1)/x
function drawLimitsGraph() {
  functionPlot({
    target: "#graph-limits", // مكان الرسم (الـ ID الذي اخترناه)
    width: 600,  // عرض الرسم (يتكيف تلقائياً مع الهواتف بفضل math-wrapper)
    height: 400, // طول الرسم
    disableZoom: false, // السماح للتلميذ بعمل Zoom
    
    // إعدادات المحاور (x من -1 إلى 1) و (y من 0 إلى 1) كما في الكتاب
    xAxis: {
      domain: [-1, 1],
      label: 'x',
      color: '#444' // لون أسود خفيف للمحور
    },
    yAxis: {
      domain: [0, 1],
      label: 'f(x)',
      color: '#444'
    },
    
    // شبكة الإحداثيات
    grid: true,
    
    // الداتا (عبارة الدالة والمنحنى)
    data: [{
      // عبارة الدالة البرمجية (Math.js syntax)
      fn: "(sqrt(x + 1) - 1) / x",
      
      // لون المنحنى (الأزرق الرسمي لموقعك)
      color: "#0d6efd",
      strokeWidth: 3, // سمك المنحنى
      
      // منع رسم النقاط المنفصلة لجعل المنحنى ناعماً
      sampler: 'builtIn', 
      graphType: 'polyline'
    }],
    
    // إضافة "النقطة المستهدفة" (0, 0.5) بلون أحمر كما في الكتاب
    annotations: [{
      x: 0,
      y: 0.5,
      color: '#dc3545', // لون أحمر للتنبيه
      text: 'النهاية (0.5)'
    }]
  });
}

// تنفيذ الرسم عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function() {
  // ننتظر قليلاً لضمان تحميل المكتبة بالكامل
  setTimeout(drawLimitsGraph, 100);
});


// كود ذكي يتكيف مع الوضع القاتم
function drawLimitsGraph() {
  // تحديد الألوان بناءً على وضع الصفحة الحالي
  const isDark = document.documentElement.getAttribute('data-bs-theme') === 'dark';
  const axisColor = isDark ? '#aaaaaa' : '#444444'; // لون المحاور
  const gridColor = isDark ? '#333333' : '#eeeeee'; // لون الشبكة

  functionPlot({
    target: "#graph-limits",
    // ... بقية الإعدادات السابقة ...
    xAxis: { domain: [-1, 1], color: axisColor },
    yAxis: { domain: [0, 1], color: axisColor },
    grid: true,
    data: [{
      fn: "(sqrt(x + 1) - 1) / x",
      color: isDark ? "#66b2ff" : "#0d6efd", // أزرق فاتح في الليل
      // ... بقية الإعدادات ...
    }],
    // ... annotations ...
  });
}


