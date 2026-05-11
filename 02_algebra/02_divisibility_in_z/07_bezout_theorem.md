---
layout: lesson
title: "مبرهنة بيزو (Bézout)"
subtitle: "المعادلات الخطية والقواسم المشتركة"
permalink: /bezout_theorem/
mathJax: true
lessonID: "arith-07"

previous_url: "/coprime_numbers/"
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

  - graph-container:
      id: "bezout-line"
      data-graph-config: >
        {
          "type": "linear-combination",
          "a": 5,
          "b": 3,
          "target": 1,
          "u": 2,
          "v": -3,
          "annotations": [{"label": "5(2) + 3(-3) = 10 - 9 = 1"}]
        }

  - NB:
      title: "تنبيه الأرتيزان:"
      type: "warning"
      NBs:
        - rtl: "المعاملات $u$ و $v$ <b>ليست وحيدة</b>. إذا وجدت زوجاً يحقق المعادلة، فهناك مالا نهاية من الأزواج الأخرى التي تحققها."
---
