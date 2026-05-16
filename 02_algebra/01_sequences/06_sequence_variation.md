---
layout: lesson
title: "اتجاه التغير"
subtitle: "دراسة سلوك المتتالية (صعوداً أو نزولاً)"
permalink: /sequence_variation/
mathJax: true
lessonID: "seq-05"

previous_title: "المتتاليات، النهاية والتقارب"
previous_url: "/sequence_limits/"
next_title: "البرهان بالتراجع"
next_url: "/induction_proof/"

elements:
  - h3: "الطرق الأساسية لدراسة التغير"
  
  - h4: "1. طريقة الفرق (الأكثر شيوعاً)"
    parags:
      - rtl: "نقوم بحساب الفرق $u_{n+1} - u_n$ ودراسة إشارته:"
      - rtl: "• إذا كان $u_{n+1} - u_n > 0$: المتتالية<b> متزايدة</b>."
      - rtl: "• إذا كان $u_{n+1} - u_n < 0$: المتتالية <b> متناقصة</b>."
      - rtl: "• إذا كان $u_{n+1} - u_n = 0$: المتتالية <b> ثابتة</b>."

  - h4: "2. طريقة النسبة (للمتتاليات ذات الحدود الموجبة)"
    parags:
      - rtl: "نقارن النسبة $\\frac{u_{n+1}}{u_n}$ مع العدد <b>1</b>:"
      - rtl: "• إذا كان $\\frac{u_{n+1}}{u_n} > 1$: المتتالية <b> متزايدة</b>."
      - rtl: "• إذا كان $\\frac{u_{n+1}}{u_n} < 1$: المتتالية <b> متناقصة</b>."

  - h4: "3. طريقة الدالة المرفقة"
    parags:
      - rtl: "إذا كانت $u_n = f(n)$، فإن اتجاه تغير $(u_n)$ هو نفس اتجاه تغير الدالة $f$ على المجال $[0, +\\infty[$."

  - graph:
      id: "variation-viz"
      class: "graph-container"
      xDomain: [-1, 6]
      yDomain: [-1, 10]
      elements:
        - { type: "point", x: 0, y: 8, size: 1}
        - { type: "point", x: 1, y: 6, size: 1}
        - { type: "point", x: 2, y: 4.5, size: 1}
        - { type: "point", x: 3, y: 3.5, size: 1}
        - { type: "point", x: 4, y: 3, size: 1}
        - { type: "text", content: "مثال لمتتالية متناقصة", x: 2, y: 2}
---










