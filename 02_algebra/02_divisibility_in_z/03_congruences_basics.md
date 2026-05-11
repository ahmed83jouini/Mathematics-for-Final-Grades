---
layout: lesson
title: "الموافقات في Z"
subtitle: "لغة البواقي والحساب النمطي"
permalink: /congruences_basics/
mathJax: true
lessonID: "arith-03"

previous_url: "/divisors_multiples/"
next_url: "/periodic_powers/"

elements:
  - h3: "1. التعريف"
  - parags:
      - rtl: "نقول أن العددين الصحيحين $a$ و $b$ <b>متوافقان بترديد $n$</b> (حيث $n$ عدد طبيعي أكبر من 1) إذا كان لهما نفس باقي القسمة الإقليدية على $n$."
      - rtl: "ونكتب:"
      - center: "$a \\equiv b \\pmod{n}$"
      - rtl: "وهذا يكافئ رياضياً أن $n$ يقسم الفرق $(a - b)$."

  - h3: "2. الخواص الأساسية (قواعد اللعبة)"
  - parags:
      - rtl: "الموافقات 'تتلاءم' تماماً مع العمليات الحسابية، مما يسهل تبسيط الأعداد الكبيرة:"
      - rtl: "• <b>التلاؤم مع الجمع:</b> إذا كان $a \\equiv b \\pmod{n}$ و $c \\equiv d \\pmod{n}$، فإن:"
      - center: "$a + c \\equiv b + d \\pmod{n}$"
      - rtl: "• <b>التلاؤم مع الضرب:</b>"
      - center: "$a \\times c \\equiv b \\times d \\pmod{n}$"
      - rtl: "• <b>التلاؤم مع القوى:</b> من أجل كل عدد طبيعي $k$:"
      - center: "$a^k \\equiv b^k \\pmod{n}$"

  - h3: "3. تطبيقات عملية للتبسيط"
  - parags:
      - rtl: "لإيجاد باقي قسمة $11^{100}$ على $10$، لا نحسب العدد، بل نستخدم الموافقات:"
      - rtl: "بما أن $11 \\equiv 1 \\pmod{10}$، فإن:"
      - center: "$11^{100} \\equiv 1^{100} \\pmod{10} \\implies 11^{100} \\equiv 1 \\pmod{10}$"

  - graph-container:
      id: "clock-arithmetic"
      data-graph-config: >
        {
          "type": "modular-clock",
          "modulo": 12,
          "points": [1, 13, 25],
          "annotations": [{"label": "جميع هذه الأعداد تشير إلى نفس النقطة (1) بترديد 12"}]
        }

  - NB:
      title: "تنبيه هام:"
      type: "warning"
      NBs:
        - rtl: "الموافقات <b>لا تتلاءم مع القسمة</b> بشكل مباشر. لا يمكننا القسمة على طرفي الموافقة إلا بشروط خاصة (مبرهنة غوص)."
---
