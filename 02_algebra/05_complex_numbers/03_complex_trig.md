---
layout: lesson
title: "المبحث 3: الطويلة والعمدة وقوانين المساحات"
subtitle: "القياسات القطبية والتحليل الشعاعي للعدد المركب"
permalink: /complex_trig/
mathJax: true
graph: true
lessonID: "comp-03"

previous_title: "المبحث 2: مرافق العدد المركب ومقلوبه"
previous_url: "/complex_conjugate/"
next_title: "المبحث 4: الشكل المثلثي والشكل الأسّي"
next_url: "/complex_exponential/"

elements:
  - h3: "1. طويلة العدد المركب (The Magnitude / Module)"
  - parags:
      - rtl: "طويلة العدد المركب $z = a + bi$ تمثل هندسياً وميكانيكياً المسافة الصافية بين مبدأ معلم المستوي المركب $O(0,0)$ والنقطة الصورة $M(a, b)$."
      - rtl: "نرمز لها اصطلاحاً بالرمز $|z|$ أو الحرف $r$، وتُحسب بتطبيق نظرية فيثاغورس الكلاسيكية تحت الراديكال:"
      - center: "$|z| = r = \\sqrt{a^2 + b^2}$"
      - rtl: "• <b>من الخواص الحاكمة:</b> الطويلة قيمة حقيقية موجبة دائماً وأبداً ($|z| \\ge 0$)، وتتميز بالتطابق التالي: $|z| = |-\\bar{z}| = |\\bar{z}| = |-z|$."

  - h3: "2. عمدة العدد المركب (The Argument)"
  - parags:
      - rtl: "عمدة العدد المركب غير المعدوم $z$ هي قيس الزاوية الموجهة المحصورة بين شعاع الوحدة لمحور الفواصل الأول $\\vec{u}$ وشعاع الموضع الصورة $\\vec{OM}$."
      - rtl: "نرمز لها بالرمز $arg(z)$ أو $\\theta$، وتُستخرج قيمتها ميكانيكياً من خلال تسوية جملة المعادلتين المثلثيتين التاليتين:"
      - center: "$\\cos(\\theta) = \\frac{a}{|z|}, \\quad \\sin(\\theta) = \\frac{b}{|z|}$"
      - rtl: "حيث تكون العمدة $\\theta$ معرفة بترديد الدورة الكاملة $2\\pi$، ونكتب: $\\theta \\equiv arg(z) \\pmod{2\\pi}$."

  - h3: "3. المقاييس العمدة لبعض الحالات الهندسية الخاصة"
  - parags:
      - rtl: "تسمح لنا الطبيعة المحورية للأعداد بفصل وحصر عمدة الحالات الحقيقية والتخيلية الصرفة مباشرة دون عناء حسابي:"
      - rtl: "• إذا كان $z$ عدداً حقيقياً موجباً تماماً (ينتمي لمحور الفواصل الموجب): $arg(z) \\equiv 0 \\pmod{2\\pi}$"
      - rtl: "• إذا كان $z$ عدداً حقيقياً سالباً تماماً (ينتمي لمحور الفواصل السالب): $arg(z) \\equiv \\pi \\pmod{2\\pi}$"
      - rtl: "• إذا كان $z$ تخيلياً صرفاً موجباً تماماً (ينتمي لمحور التراتيب الفوقي): $arg(z) \\equiv \\frac{\\pi}{2} \\pmod{2\\pi}$"
      - rtl: "• إذا كان $z$ تخيلياً صرفاً سالباً تماماً (ينتمي لمحور التراتيب السفلي): $arg(z) \\equiv -\\frac{\\pi}{2} \\pmod{2\\pi}$"

  - graph:
      id: "module-arg-viz"
      class: "graph-container"
      xDomain: [-1, 6]
      yDomain: [-1, 5]
      elements:
        # رسم هندسي للتمثيل القطبي (Polar Coordinates Representation Diagram)
        # 1. محاور المستوي المركب
        - { type: "line", points: [[-0.5, 0], [5.5, 0]], color: "gray" } # Re Axis
        - { type: "line", points: [[0, -0.5], [0, 4.5]], color: "gray" } # Im Axis
        - { type: "text", content: "Re (a)", x: 5.1, y: -0.4, color: "gray" }
        - { type: "text", content: "Im (b)", x: 0.2, y: 4.2, color: "gray" }
        
        # 2. خطوط الإسقاط الجبري المتقطعة لـ a و b
        - { type: "line", points: [[4, 0], [4, 3]], color: "orange" } # إسقاط عمودي
        - { type: "line", points: [[0, 3], [4, 3]], color: "orange" } # إسقاط أفقي
        - { type: "text", content: "a", x: 3.9, y: -0.4, color: "orange" }
        - { type: "text", content: "b", x: -0.3, y: 2.9, color: "orange" }
        
        # 3. شعاع الموضع OM المقاس بالطويلة r
        - { type: "line", points: [[0, 0], [4, 3]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "point", x: 4, y: 3, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "text", content: "M (a, b) صورة العدد z", x: 4.2, y: 3.2, color: "blue" }
        - { type: "text", content: "الطويلة r = |z|", x: 1.8, y: 1.8, color: "blue" }
        
        # 4. قوس الزاوية الموجهة للعمدة theta
        - { type: "line", points: [[1, 0], [0.9, 0.4]], color: "#168574" }
        - { type: "line", points: [[0.9, 0.4], [0.8, 0.6]], color: "#168574" }
        - { type: "text", content: "θ = arg(z)", x: 1.2, y: 0.4, color: "#168574" }
        
        # نصوص بيداغوجية حرة لشرح الرسم
        - { type: "text", content: "الطويلة تمثل هندسياً طول شعاع الموضع المتجه، بينما العمدة تحصر زاوية الميل الانحرافي للشعاع", x: -0.5, y: -0.8, color: "#eee" }

  - NB:
      title: "تنبيه الأرتيزان الحسابي:"
      type: "warning"
      NBs:
        - rtl: "عند البحث الجبري عن قيس العمدة $\\theta$، إياك أن تكتفي بالاعتماد الصرف على مخرجات الآلة الحاسبة عبر زر الظل التراجعي (Inverse Tan / Shift Tan)؛ لأنها مبرمجة ميكانيكياً على إعطاء قيم زوايا محصورة في الربع الأول أو الرابع فقط. يجب عليك دائماً تحديد 'الربع الهندسي' الحقيقي الذي تقع فيه النقطة الصورة بناءً على توليفة إشارتي المركبتين $a$ و $b$ ثم مطابقتها مع الدائرة المثلثية."
---
