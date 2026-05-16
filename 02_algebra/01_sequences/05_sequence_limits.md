---
layout: lesson
title: "المتتاليات، النهاية والتقارب"
subtitle: "تحديد المستقر النهائي للمتتالية"
permalink: /sequence_limits/
mathJax: true
graph: true
lessonID: "seq-08"

previous_title: "المتتالية الهندسية."
previous_url: "/geometric_seq/"
next_title: "المتتاليات: إتجاه التغير"
next_url: "/sequence_variation/" # ملخص شامل أو تمارين

elements:
  - h3: "1. مفهوم التقارب"
  - parags:
      - rtl: "نقول عن متتالية $(u_n)$ أنها <b>متقاربة</b> إذا كانت نهايتها عند $+\\infty$ هي عدد حقيقي $L$."
      - center: "$\\lim\\limits_{n \\to +\\infty} u_n = L$"
      - rtl: "إذا كانت النهاية غير موجودة أو تساوي $\\pm\\infty$، نقول أن المتتالية <b>متباعدة</b>."

  - h4: "نهايات شهيرة:"
  - parags:
      - center: "$\\lim\\limits_{n \\to +\\infty} \\frac{1}{n} = 0$"
      - center: "$\\lim\\limits_{n \\to +\\infty} n^2 = +\\infty$"

  - h3: "2. نهاية المتتالية الهندسية"
  - parags:
      - rtl: "تعتمد نهاية المتتالية الهندسية $u_n = u_0 \\times q^n$ على قيمة الأساس $q$:"
  - tableLines:
      dir: rtl
      lines:
        - - th: "قيمة الأساس $q$"
          - th: "النهاية $\\lim\\limits_{n \\to +\\infty} q^n$"
        - - td: "$q > 1$"
          - td: "$+\\infty$ (متباعدة)"
        - - td: "$-1 < q < 1$"
          - td: "$0$ (متقاربة)"
        - - td: "$q \\leq -1$"
          - td: "غير موجودة (متباعدة)"

  - h3: "3. مبرهنات الحصر (المقارنة)"
  - parags:
      - rtl: "تسمح لنا بإيجاد نهاية متتالية معقدة عن طريق حصرها بين متتاليتين معلومتين:"
      - rtl: "إذا كان $v_n \\leq u_n \\leq w_n$ وكانت $\\lim v_n = \\lim w_n = L$، فإن:"
      - center: "$\\lim u_n = L$"

  - graph:
      id: "limit-viz"
      class: "graph-container"
      xDomain: [-1, 15]
      yDomain: [-1, 5]
      elements:
        - { type: "function", fn: "2", dash: 2, strokeColor: "green", strokeWidth: 1}
        - { type: "text", content: "L = 2, النهاية", x: -0.5, y: 2.1, color: "green"}
        - { type: "point", x: 0, y: 4.5, size: 1}
        - { type: "point", x: 1, y: 3.2, size: 1}
        - { type: "point", x: 2, y: 2.6, size: 1}
        - { type: "point", x: 3, y: 2.3, size: 1}
        - { type: "point", x: 4, y: 2.15, size: 1}
        - { type: "point", x: 6, y: 2.05, size: 1}
        - { type: "point", x: 10, y: 2.01, size: 1}
        - { type: "text", content: "النقاط تقترب من المستقيم دون لمسه", x: -1, y: 1, fontSize: 16 }

  - NB:
      title: "قاعدة ذهبية:"
      type: "success"
      NBs:
        - rtl: "المتتالية المحدودة والرتيبة (متزايدة أو متناقصة) هي حتماً <b>متقاربة</b>."
---





