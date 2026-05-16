---
layout: lesson
title: "اتجاه التغير"
subtitle: "دراسة سلوك المتتالية (صعوداً أو نزولاً)"
permalink: /sequence_variation/
mathJax: true
lessonID: "seq-05"

previous_url: "/geometric_seq/"
next_url: "/induction_proof/"

elements:
  - h3: "الطرق الأساسية لدراسة التغير"
  
  - h4: "1. طريقة الفرق (الأكثر شيوعاً)"
    parags:
      - rtl: "نقوم بحساب الفرق $u_{n+1} - u_n$ ودراسة إشارته:"
      - rtl: "• إذا كان $u_{n+1} - u_n > 0$: المتتالية **متزايدة**."
      - rtl: "• إذا كان $u_{n+1} - u_n < 0$: المتتالية **متناقصة**."
      - rtl: "• إذا كان $u_{n+1} - u_n = 0$: المتتالية **ثابتة**."

  - h4: "2. طريقة النسبة (للمتتاليات ذات الحدود الموجبة)"
    parags:
      - rtl: "نقارن النسبة $\frac{u_{n+1}}{u_n}$ مع العدد **1**:"
      - rtl: "• إذا كان $\frac{u_{n+1}}{u_n} > 1$: المتتالية **متزايدة**."
      - rtl: "• إذا كان $\frac{u_{n+1}}{u_n} < 1$: المتتالية **متناقصة**."

  - h4: "3. طريقة الدالة المرفقة"
    parags:
      - rtl: "إذا كانت $u_n = f(n)$، فإن اتجاه تغير $(u_n)$ هو نفس اتجاه تغير الدالة $f$ على المجال $[0, +\\infty[$."

  - graph-container:
      id: "variation-viz"
      data-graph-config: >
        {
          "xDomain": [-1, 6],
          "yDomain": [-1, 10],
          "points": [
            {"x": 0, "y": 8, "color": "red"},
            {"x": 1, "y": 6, "color": "red"},
            {"x": 2, "y": 4.5, "color": "red"},
            {"x": 3, "y": 3.5, "color": "red"},
            {"x": 4, "y": 3, "color": "red"}
          ],
          "annotations": [{"label": "مثال لمتتالية متناقصة"}]
        }
---
