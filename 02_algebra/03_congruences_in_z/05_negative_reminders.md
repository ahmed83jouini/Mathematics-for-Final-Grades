---
layout: lesson
title: "البحث عن الباقي الصغير"
subtitle: "استخدام القيم السالبة للتبسيط"
permalink: /negative_reminders/
mathJax: true
lessonID: "cong-05"

previous_url: "/cong_cycles/"
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

  - graph-container:
      id: "negative-mod-viz"
      data-graph-config: >
        {
          "type": "number-line-focus",
          "modulo": 5,
          "point": 4,
          "alternative": -1,
          "annotations": [{"label": "التقدم بـ 4 خطوات هو نفسه الرجوع بخطوة واحدة"}]
        }

  - NB:
      title: "تنبيه:"
      type: "warning"
      NBs:
        - rtl: "عند كتابة النتيجة النهائية، يجب دائماً العودة إلى الباقي الموجب الأصغر من الترديد."
---
