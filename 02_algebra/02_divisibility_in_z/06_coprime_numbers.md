---
layout: lesson
title: "المبحث 6: الأعداد الأولية فيما بينها"
subtitle: "الاستقلالية التامة في القواسم"
permalink: /coprime_numbers/
mathJax: true
graph: true
lessonID: "arith-06"

previous_title: "المبحث 5: خوارزمية إقليدس والـ PGCD"
previous_url: "/pgcd_algorithm/"
next_title: "المبحث 7: مبرهنة بيزو (Bézout) والمعادلات"
next_url: "/bezout_theorem/"

elements:
  - h3: "1. التعريف"
  - parags:
      - rtl: "نقول عن عددين صحيحين $a$ و $b$ أنهما <b>أوليان فيما بينهما</b> إذا كان قاسمهما المشترك الأكبر يساوي 1."
      - center: "$PGCD(a, b) = 1$"
      - rtl: "<b>مثال:</b> العددين 8 و 15. قواسم 8 هي $\\{1, 2, 4, 8\\}$ وقواسم 15 هي $\\{1, 3, 5, 15\\}$. القاسم المشترك الوحيد هو 1."

  - h3: "2. كسر غير قابل للاختزال"
  - parags:
      - rtl: "يكون الكسر $\\frac{a}{b}$ <b>غير قابل للاختزال</b> إذا وفقط إذا كان $a$ و $b$ أوليين فيما بينهما."
      - rtl: "هذه الخاصية هي التي تضمن لنا الوصول إلى أبسط صورة ممكنة لأي علاقة عددية."

  - h3: "3. كيفية جعل عددين أوليين فيما بينهما"
  - parags:
      - rtl: "من أجل أي عددين $a$ و $b$ بوضع $d = PGCD(a, b)$، فإن العددين الناتجين عن القسمة على $d$ يكونان حتماً أوليين فيما بينهما:"
      - center: "$PGCD(\\frac{a}{d}, \\frac{b}{d}) = 1$"

  - graph:
      id: "coprime-viz"
      class: "graph-container"
      xDomain: [-4, 4]
      yDomain: [-3, 3]
      elements:
        # المجموعات التوضيحية (شكل فين مبسط للمجموعات المنفصلة تقاطرياً إلا في 1)
        # الدائرة اليسرى: قواسم 8
        - { type: "circle", center: [-1.2, 0], radius: 1.8, color: "blue", dash: 2 }
        - { type: "text", content: "قواسم 8", x: -2.5, y: 1.5, color: "blue" }
        - { type: "text", content: "2، 4، 8", x: -2.0, y: 0, color: "blue" }
        
        # الدائرة اليمنى: قواسم 15
        - { type: "circle", center: [1.2, 0], radius: 1.8, color: "orange", dash: 2 }
        - { type: "text", content: "قواسم 15", x: 1.2, y: 1.5, color: "orange" }
        - { type: "text", content: "3، 5، 15", x: 1.2, y: 0, color: "orange" }
        
        # منطقة التقاطع المحصورة التي تحتوي على 1 فقط
        - { type: "point", x: 0, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "1", x: -0.1, y: 0.3, color: "#168574" }
        
        # نصوص توضيحية بيداغوجية
        - { type: "text", content: "التقاطع لا يحتوي إلا على القاسم المشترك الوحيد: 1", x: -2.8, y: -2.5, color: "#eee" }

  - NB:
      title: "ملاحظة هامة:"
      type: "info"
      NBs:
        - rtl: "لا تخلط بين <b>العدد الأولي</b> والأعداد <b>الأولية فيما بينها</b>. فالعدد 8 ليس أولياً، والعدد 15 ليس أولياً، لكنهما أوليان فيما بينهما."
---
