---
layout: lesson
title: "الموافقات في Z (التعريف والخواص)"
subtitle: "لغة البواقي والحساب النمطي"
permalink: /congruences_basics/
mathJax: true
graph: true
lessonID: "arith-03"

previous_title: "المبحث 2: القواسم والمضاعفات وخواصها"
previous_url: "/divisors_multiples/"
next_title: "المبحث 4: دوريات قوى عدد طبيعي وبواقي القسمة"
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
      - rtl: "الموافقات <b>تتلاءم</b> تماماً مع العمليات الحسابية، مما يسهل تبسيط الأعداد الكبيرة:"
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

  - graph:
      id: "clock-arithmetic"
      class: "graph-container"
      xDomain: [-3, 3]
      yDomain: [-3, 3]
      elements:
        # رسم دائرة الحساب النمطي (ساعة الترديد 4 كمثال مبسط لبناء زوايا دقيقة)
        - { type: "circle", center: [0, 0], radius: 2, color: "gray", dash: 2 }
        # النقطة (0) في الأعلى
        - { type: "point", x: 0, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "text", content: "0 [4]", x: -0.2, y: 2.3, color: "#168574" }
        # النقطة (1) على اليمين والتي توافق 1، 5، 9، 13...
        - { type: "point", x: 2, y: 0, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "text", content: "1 ≡ 5 ≡ 9 [4]", x: 2.2, y: 0, color: "blue" }
        # النقطة (2) في الأسفل
        - { type: "point", x: 0, y: -2, strokeColor: "gray", fillColor: "none", size: 2 }
        - { type: "text", content: "2 [4]", x: -0.2, y: -2.4, color: "gray" }
        # النقطة (3) على اليسار
        - { type: "point", x: -2, y: 0, strokeColor: "gray", fillColor: "none", size: 2 }
        - { type: "text", content: "3 [4]", x: -2.5, y: 0, color: "gray" }
        # نص بيداغوجي توضيحي للفكرة الدورية
        - { type: "text", content: "الحساب النمطي يشبه حركة الساعة: الأعداد المختلفة تلتقي في نفس النقطة", x: -2.8, y: -2.8, color: "#eee" }

  - NB:
      title: "تنبيه هام:"
      type: "warning"
      NBs:
        - rtl: "الموافقات <b>لا تتلاءم مع القسمة</b> بشكل مباشر. لا يمكننا القسمة على طرفي الموافقة إلا بشروط خاصة (مبرهنة غوص)."
---
