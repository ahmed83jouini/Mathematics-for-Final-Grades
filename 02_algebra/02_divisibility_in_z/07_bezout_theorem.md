---
layout: lesson
title: "المبحث 7: مبرهنة بيزو (Bézout) والمعادلات"
subtitle: "المعادلات الخطية والقواسم المشتركة"
permalink: /bezout_theorem/
mathJax: true
graph: true
lessonID: "arith-07"

previous_title: "المبحث 6: الأعداد الأولية فيما بينها"
previous_url: "/coprime_numbers/"
next_title: "المبحث 8: مبرهنة غوص (Gauss) وتطبيقاتها"
next_url: "/gauss_theorem/"

elements:
  - h3: "1. نص المبرهنة (L'identité de Bézout)"
  - parags:
      - rtl: "ليكن $a$ و $b$ عددين صحيحين غير معدومين، وليكن $d = PGCD(a, b)$. فإنه يوجد عددان صحيحان $u$ و $v$ بحيث:"
      - center: "$au + bv = d$"
      - rtl: "هذان العددان $u$ و $v$ يسميان <b>معاملي بيزو</b>، ويمكن إيجادهما باستعمال خوارزمية إقليدس عكسياً."

  - h3: "2. مبرهنة بيزو العكسية (Théorème de Bézout)"
  - parags:
      - rtl: "هذه هي الصيغة الأكثر استخداماً في التمارين لإثبات أن عددين أوليين فيما بينهما:"
      - rtl: "يكون العددين $a$ و $b$ <b>أوليين فيما بينهما</b> إذا وفقط إذا وجد عددان صحيحان $u$ و $v$ بحيث:"
      - center: "$au + bv = 1$"

  - h4: "مثال تطبيقي:"
  - parags:
      - rtl: "لإثبات أن $n$ و $n+1$ أوليان فيما بينهما من أجل كل عدد طبيعي $n$:"
      - center: "$(n+1)(1) + (n)(-1) = n + 1 - n = 1$"
      - rtl: "بما أننا وجدنا المعاملات ($u=1, v=-1$)، فحسب مبرهنة بيزو: $PGCD(n, n+1) = 1$."

  - h3: "3. حل المعادلة $au + bv = c$"
  - parags:
      - rtl: "تقبل المعادلة $au + bv = c$ حلولاً في $\\mathbb{Z}^2$ إذا وفقط إذا كان $PGCD(a, b)$ <b>يقسم</b> العدد $c$."

  - graph:
      id: "bezout-line"
      class: "graph-container"
      xDomain: [-2, 12]
      yDomain: [-2, 4]
      elements:
        # تمثيل التشكيلة الخطية هندسياً على المحور للمثال 5(2) + 3(-3) = 1
        - { type: "line", points: [[-2, 0], [12, 0]], color: "gray" }
        # القفزة الأولى للأمام: 5 × 2 = 10
        - { type: "point", x: 10, y: 0, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "text", content: "5 × (2) = 10", x: 8.5, y: 0.8, color: "blue" }
        - { type: "line", points: [[0, 0.4], [10, 0.4]], color: "blue", arrowStart: false, arrowEnd: true }
        
        # القفزة الثانية للخلف: 3 × (-3) = -9 لتستقر عند النقطة 1
        - { type: "point", x: 1, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "الهدف دقيق: 1", x: 0.8, y: -0.8, color: "#168574" }
        - { type: "line", points: [[10, 1.2], [1, 1.2]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "3 × (-3) = -9", x: 4, y: 1.6, color: "orange" }
        
        # نص بيداغوجي توضيحي
        - { type: "text", content: "المعاملات u و v هي خطوات توجيهية للوصول إلى الـ PGCD على المحور العددي", x: -1, y: -1.8, color: "#eee" }

  - NB:
      title: "تنبيه الأرتيزان:"
      type: "warning"
      NBs:
        - rtl: "المعاملات $u$ و $v$ <b>ليست وحيدة</b>. إذا وجدت زوجاً يحقق المعادلة، فهناك مالا نهاية من الأزواج الأخرى التي تحققها."
---
