---
layout: lesson
title: "المبحث 8: مبرهنة غوص (Gauss) وتطبيقاتها"
subtitle: "الاستنتاج المنطقي للقواسم"
permalink: /gauss_theorem/
mathJax: true
graph: true
lessonID: "arith-08"

previous_title: "المبحث 7: مبرهنة بيزو (Bézout) والمعادلات"
previous_url: "/bezout_theorem/"
next_title: "المبحث 9: الأعداد الأولية ومبرهنة فيرما الصغرى"
next_url: "/prime_numbers_fermat/"

elements:
  - h3: "1. نص المبرهنة (Gauss's Theorem)"
  - parags:
      - rtl: "ليكن $a$، $b$ و $c$ أعداداً صحيحة غير معدومة."
      - rtl: "إذا كان $a$ يقسم الجذاء $bc$ (أي $a \\mid bc$) وكان $a$ <b>أولياً مع</b> $b$ ($PGCD(a, b) = 1$)، فإن:"
      - center: "$a \\mid c$"

  - h4: "مثال توضيحي:"
  - parags:
      - rtl: "إذا كان $5 \\mid 3x$. بما أن $PGCD(5, 3) = 1$، فإن مبرهنة غوص تؤكد أن:"
      - center: "$5 \\mid x$"

  - h3: "2. التطبيق في حل المعادلات $ax + by = c$"
  - parags:
      - rtl: "تستخدم مبرهنة غوص لعزل المجهول $x$ أو $y$ بعد إيجاد حل خاص $(x_0, y_0)$."
      - rtl: "من المعادلة $a(x-x_0) = b(y_0-y)$، وبما أن $a$ و $b$ أوليان فيما بينهما (بعد القسمة على الـ PGCD)، نستنتج أن $a$ يقسم $(y_0-y)$."

  - h3: "3. نتائج هامة"
  - parags:
      - rtl: "إذا كان عدد $n$ يقبل القسمة على $a$ وعلى $b$ وكان $PGCD(a, b) = 1$، فإن $n$ يقبل القسمة على الجذاء $ab$."
      - center: "$a \\mid n \\text{ و } b \\mid n \\implies ab \\mid n$"

  - graph:
      id: "gauss-logic"
      class: "graph-container"
      xDomain: [-2, 10]
      yDomain: [-2, 4]
      elements:
        # رسم المخطط المنطقي لانتقال القابلية (Logic Flow Diagram)
        # الصندوق الأول: المدخلات
        - { type: "line", points: [[0, 2], [3, 2]], color: "gray" }
        - { type: "line", points: [[3, 2], [3, 3]], color: "gray" }
        - { type: "line", points: [[3, 3], [0, 3]], color: "gray" }
        - { type: "line", points: [[0, 3], [0, 2]], color: "gray" }
        - { type: "text", content: "a | (b × c)", x: 0.5, y: 2.4, color: "blue" }
        
        # سهم المرور العابر المشروط بالأولية
        - { type: "line", points: [[3, 2.5], [6, 2.5]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "بشرط: PGCD(a,b) = 1", x: 3.2, y: 2.8, color: "orange" }
        
        # الصندوق الثاني: الاستنتاج الحتمي
        - { type: "line", points: [[6, 2], [9, 2]], color: "#168574" }
        - { type: "line", points: [[9, 2], [9, 3]], color: "#168574" }
        - { type: "line", points: [[9, 3], [6, 3]], color: "#168574" }
        - { type: "line", points: [[6, 3], [6, 2]], color: "#168574" }
        - { type: "text", content: "إذن حتماً: a | c", x: 6.5, y: 2.4, color: "#168574" }
        
        # نص توضيحي سفلي للمثال المضاد عند غياب الشرط
        - { type: "text", content: "بدون شرط الأولية المبرهنة خاطئة: 4 يقسم (2×6) لكن 4 لا يقسم 2 ولا يقسم 6", x: -0.5, y: -0.5, color: "red" }

  - NB:
      title: "تنبيه الأرتيزان:"
      type: "danger"
      NBs:
        - rtl: "لا تنسَ أبداً ذكر شرط <b>الأولية فيما بينهما</b> قبل تطبيق غوص. بدون هذا الشرط، المبرهنة خاطئة تماماً (مثلاً: 4 يقسم 2×6، لكن 4 لا يقسم 2 ولا يقسم 6)."
---
