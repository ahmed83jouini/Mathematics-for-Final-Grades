---
layout: lesson
title: "المبحث 4: الشكل المثلثي والشكل الأسّي"
subtitle: "الانتقال الإجرائي من الإحداثيات الديكارتية إلى النظم القطبية"
permalink: /complex_exponential/
mathJax: true
graph: true
lessonID: "comp-04"

previous_title: "المبحث 3: الطويلة والعمدة وقوانين المساحات"
previous_url: "/complex_trig/"
next_title: "المبحث 5: دستور موآفر وتطبيقاته الجبرية"
next_url: "/moivre_theorem/"

elements:
  - h3: "1. الشكل المثلثي للعدد المركب (Trigonometric / Polar Form)"
  - parags:
      - rtl: "باستخدام مقياسي الطويلة $r$ والعمدة $\\theta$ اللذين استخرجناهما في المبحث السابق، يمكننا تفكيك وإعادة كتابة العدد المركب $z$ من شكله الديكارتي الخطي إلى صيغته المثلثية (القطبية) الدائرية كالتالي:"
      - center: "$z = r (\\cos \\theta + i \\sin \\theta)$"
      - rtl: "هذا الشكل الهندسي يربط مباشرة وبصورة مرئية بين القيمة المطلقة للعدد وموقعه التناظري الدقيق على محيط الدائرة المثلثية."

  - h3: "2. الترميز والشكل الأسّي النموذجي (Exponential Form)"
  - parags:
      - rtl: "بناءً على مبرهنة وصيغة أويلر الشهيرة (Euler's Identity)، نقوم باختزال العبارة المثلثية $(\\cos \\theta + i \\sin \\theta)$ وترميزها ميكانيكياً بالرمز الأسّي المختصر الخاطف $e^{i\\theta}$."
      - rtl: "بذلك، يصبح الشكل الأسّي للعدد المركب هو الأداة الأكثر اختصاراً وقوة وقدرة على المناورة الحسابية في التمارين:"
      - center: "$z = r e^{i\\theta}$"

  - h3: "3. القوة الإجرائية للشكل الأسّي في تبسيط العمليات"
  - parags:
      - rtl: "بفضل هذا الابتكار، تتحول الخواص الهندسية المعقدة للعمد والزوايا إلى خواص القوى العادية المألوفة لدى الأرتيزان، مما يسحق تعقيد الجداءات والقسمة الحسابية:"
      - rtl: "• <b>ميكانيكية الجداء:</b> $(r e^{i\\theta}) \\times (r' e^{i\\theta'}) = (rr') e^{i(\\theta+\\theta')}$ $\\implies$ (نضرب الطويلتين ونجمع العمدتين حتماً)."
      - rtl: "• <b>ميكانيكية القسمة:</b> $\\frac{r e^{i\\theta}}{r' e^{i\\theta'}} = \\frac{r}{r'} e^{i(\\theta-\\theta')}$ $\\implies$ (نقسم الطويلتين ونطرح العمدتين حتماً)."
      - rtl: "• <b>ميكانيكية صياغة المرافق:</b> $\\overline{r e^{i\\theta}} = r e^{-i\\theta}$ $\\implies$ (تبقى الطويلة ثابتة وتنعكس إشارة زاوية العمدة)."

  - graph:
      id: "complex-forms-conversion"
      class: "graph-container"
      xDomain: [-2, 11]
      yDomain: [-1, 6]
      elements:
        # رسم مخطط التدفق الانتقالي لأشكال العدد المركب (Complex Forms Conversion Flowchart)
        # 1. محطة البداية: الشكل الجبري الديكارتي
        - { type: "line", points: [[0, 4.5], [3, 4.5]], color: "blue" }
        - { type: "line", points: [[3, 4.5], [3, 3.5]], color: "blue" }
        - { type: "line", points: [[3, 3.5], [0, 3.5]], color: "blue" }
        - { type: "line", points: [[0, 3.5], [0, 4.5]], color: "blue" }
        - { type: "text", content: "الشكل الجبري الديكارتي", x: 0.3, y: 4.1, color: "blue" }
        - { type: "text", content: "z = a + bi", x: 0.9, y: 3.7, color: "blue" }
        
        # سهم المعالجة والتحويل الأول
        - { type: "line", points: [[3, 4], [4.5, 4]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "حساب r و θ", x: 3.3, y: 4.2, color: "orange" }
        
        # 2. محطة الفرز والتحويل القطبي
        - { type: "line", points: [[4.5, 5], [8.5, 5]], color: "orange" }
        - { type: "line", points: [[8.5, 5], [8.5, 3]], color: "orange" }
        - { type: "line", points: [[8.5, 3], [4.5, 3]], color: "orange" }
        - { type: "line", points: [[4.5, 3], [4.5, 5]], color: "orange" }
        - { type: "text", content: "الشكل المثلثي (القطبي)", x: 4.8, y: 4.6, color: "orange" }
        - { type: "text", content: "r(cos θ + i sin θ)", x: 4.7, y: 3.8, color: "orange" }
        
        # سهم الاختزال الأسّي الخاطف عبر أويلر
        - { type: "line", points: [[6.5, 3], [6.5, 1.5]], color: "#168574", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "صيغة أويلر (Euler)", x: 6.7, y: 2.3, color: "#168574" }
        
        # 3. محطة النتيجة النهائية الصافية المختصرة
        - { type: "point", x: 6.5, y: 1.5, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "الشكل الأسّي المكثف الحاسم:", x: 4, y: 1.1, color: "#168574" }
        - { type: "text", content: "z = r e^(i θ)", x: 4.8, y: 0.5, color: "#168574" }
        
        # نص توضيحي بيداغوجي ثابت سفلي
        - { type: "text", content: "مخطط التدفق الميكانيكي يوضح مسار الانتقال البنيوي للعدد المركب من التمثيل الخطي الديكارتي إلى الاختزال الأسّي", x: -1.5, y: -0.6, color: "#eee" }

  - NB:
      title: "ملاحظة الأرتيزان التقنية:"
      type: "info"
      NBs:
        - rtl: "إن الشكل الأسّي للعدد المركب ليس مجرد زينة أو ترف رمزي؛ بل هو المحرك الحركي الحقيقي والوحيد والفعال للتعامل مع الدورانات، التحويلات النقطية، وسحق الأسس العملاقة في المسائل الشاملة. تذكر دائماً لتسريع أدائك البرمجي والجبري: <b>عند الضرب نجمع الزوايا (العمد) ميكانيكياً، وعند القسمة نطرحها مباشرة</b>."
---
