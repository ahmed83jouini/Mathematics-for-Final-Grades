---
layout: lesson
title: "المبحث 5: البحث عن الباقي الصغير (القيم السالبة)"
subtitle: "استخدام القيم السالبة للتبسيط"
permalink: /negative_reminders/
mathJax: true
graph: true
lessonID: "cong-05"

previous_title: "المبحث 4: دراسة دوريات بواقي القوى"
previous_url: "/cong_cycles/"
next_title: "المبحث 6: حساب باقي قسمة أعداد ضخمة"
next_url: "/big_numbers_calc/"

elements:
  - h3: "1. فكرة الباقي السالب"
  - parags:
      - rtl: "في الموافقات، يمكننا طرح الترديد $n$ من الباقي الموجب للحصول على قيمة سالبة مكافئة."
      - center: "$a \\equiv r \\pmod{n} \\iff a \\equiv (r - n) \\pmod{n}$"
      - rtl: "<b>مثال:</b> $4 \\equiv -1 \\pmod{5}$ (لأن $4 - 5 = -1$)."

  - h3: "2. فائدة التبسيط"
  - parags:
      - rtl: "استخدام $-1$ أسهل بكثير من استخدام عدد كبير عند الرفع لقوة."
      - rtl: "<b>تطبيق:</b> حساب باقي $4^{2026}$ على $5$:"
      - center: "$4 \\equiv -1 \\pmod{5}$"
      - center: "$4^{2026} \\equiv (-1)^{2026} \\pmod{5}$"
      - center: "$4^{2026} \\equiv 1 \\pmod{5}$ (لأن الأس زوجي)."

  - h3: "3. قاعدة الانتقال"
  - parags:
      - rtl: "إذا كان الباقي $r$ أكبر من نصف الترديد، يفضل تحويله إلى قيمة سالبة:"
      - rtl: "• $10 \\equiv -1 \\pmod{11}$"
      - rtl: "• $16 \\equiv -1 \\pmod{17}$"

  - graph:
      id: "negative-mod-viz"
      class: "graph-container"
      xDomain: [-3, 7]
      yDomain: [-2, 3]
      elements:
        # رسم المحور العددي لتوضيح التكافؤ بين التقدم والرجوع (Number Line Focus)
        - { type: "line", points: [[-3, 0], [7, 0]], color: "gray" }
        
        # النقطة المرجعية صفر
        - { type: "point", x: 0, y: 0, strokeColor: "gray", fillColor: "gray", size: 2 }
        - { type: "text", content: "0", x: 0, y: -0.6, color: "gray" }
        
        # القفزة الموجبة الطويلة للأمام: +4 خطوات للوصول إلى 4
        - { type: "line", points: [[0, 0.5], [4, 0.5]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "+4 خطوات", x: 1.5, y: 0.8, color: "blue" }
        - { type: "point", x: 4, y: 0, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "text", content: "4", x: 4, y: -0.6, color: "blue" }
        
        # القفزة السالبة القصيرة للخلف: -1 خطوة للوصول إلى -1
        - { type: "line", points: [[0, 1.4], [-1, 1.4]], color: "#168574", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "-1 خطوة", x: -1.2, y: 1.7, color: "#168574" }
        - { type: "point", x: -1, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "-1", x: -1, y: -0.6, color: "#168574" }
        
        # نصوص بيداغوجية تشرح الاستقرار في نفس الفئة النمطية بترديد 5
        - { type: "text", content: "التقدم بـ 4 خطوات إلى الأمام يكافئ تماماً الرجوع بـ 1 خطوة إلى الخلف بترديد 5", x: -2.5, y: -1.5, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "warning"
      NBs:
        - rtl: "عند كتابة النتيجة النهائية، يجب دائماً العودة إلى الباقي الموجب الأصغر من الترديد."
---
