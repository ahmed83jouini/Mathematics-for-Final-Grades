---
layout: lesson
title: "مبرهنة غوص (Gauss)"
subtitle: "قاعدة الاستنتاج في الجداءات"
permalink: /gauss_primes/
mathJax: true
lessonID: "prime-06"

previous_url: "/relatively_prime/"
next_url: "/fermat_primes/"

elements:
  - h3: "1. نص المبرهنة"
  - parags:
      - rtl: "لتكن $a$ و $b$ و $c$ أعداداً صحيحة غير معدومة."
      - rtl: "إذا كان العدد $a$ يقسم الجداء $bc$، وكان $a$ أولياً مع $b$ ($PGCD(a, b) = 1$)، فإن <b>$a$ يقسم $c$ حتماً</b>."
      - center: "$\\begin{cases} a \\mid bc \\\\ PGCD(a, b) = 1 \\end{cases} \\implies a \\mid c$"

  - h3: "2. الأهمية في حل المعادلات"
  - parags:
      - rtl: "تستخدم هذه المبرهنة بشكل أساسي لحل المعادلات من الشكل $ax = by$. إذا كان $a$ و $b$ أوليين فيما بينهما، فإن غوص تخبرنا أن $x$ هو مضاعف لـ $b$، و $y$ هو مضاعف لـ $a$."
      - rtl: "<b>مثال:</b> حل في $\\mathbb{Z}$ المعادلة $5x = 3y$."
      - rtl: "بما أن 5 يقسم الجداء $3y$ و 5 أولي مع 3، فحسب مبرهنة غوص: <b>5 يقسم $y$</b>."
      - rtl: "أي يوجد $k \\in \\mathbb{Z}$ بحيث $y = 5k$. وبالتعويض نجد $x = 3k$."

  - h3: "3. نتائج المبرهنة"
  - parags:
      - rtl: "• إذا كان عدد $n$ يقسم $a$ ويقسم $b$، وكان $a$ و $b$ أوليين فيما بينهما، فإن $n$ يقسم جداءهما $ab$."
      - rtl: "• إذا كان $p$ عدداً أولياً يقسم الجداء $ab$، فإنه يقسم $a$ أو يقسم $b$ (خاصية إقليدس)."

  - graph-container:
      id: "gauss-logic-flow"
      data-graph-config: >
        {
          "type": "logic-gate-viz",
          "input": "a divides (b * c)",
          "condition": "GCD(a, b) = 1",
          "result": "a must divide c",
          "annotations": [{"label": "بوابة غوص: المرور مسموح فقط عبر العامل المستقل"}]
        }

  - NB:
      title: "شرط لا غنى عنه:"
      type: "danger"
      NBs:
        - rtl: "لا يمكن تطبيق مبرهنة غوص إذا لم يكن $a$ و $b$ أوليين فيما بينهما. مثال: 6 يقسم جداء $4 \\times 3$ (أي 12)، لكن 6 لا يقسم 4 ولا يقسم 3، لأن 6 ليس أولياً مع 4."
---
