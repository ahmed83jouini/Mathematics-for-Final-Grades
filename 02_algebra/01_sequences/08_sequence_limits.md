---
layout: lesson
title: "نهاية متتالية والتقارب"
subtitle: "تحديد المستقر النهائي للمتتالية"
permalink: /sequence_limits/
mathJax: true
lessonID: "seq-08"

previous_url: "/bounded_sequences/"
next_url: "/sequences_summary/" # ملخص شامل أو تمارين

elements:
  - h3: "1. مفهوم التقارب (Convergence)"
  - parags:
      - rtl: "نقول عن متتالية $(u_n)$ أنها <b>متقاربة</b> إذا كانت نهايتها عند $+\\infty$ هي عدد حقيقي $L$."
      - center: "$\\lim_{n \\to +\\infty} u_n = L$"
      - rtl: "إذا كانت النهاية غير موجودة أو تساوي $\\pm\\infty$، نقول أن المتتالية <b>متباعدة</b> (Divergente)."

  - h4: "نهايات شهيرة:"
  - parags:
      - center: "$\\lim_{n \\to +\\infty} \\frac{1}{n} = 0$"
      - center: "$\\lim_{n \\to +\\infty} n^2 = +\\infty$"

  - h3: "2. نهاية المتتالية الهندسية"
  - parags:
      - rtl: "تعتمد نهاية المتتالية الهندسية $u_n = u_0 \\times q^n$ على قيمة الأساس $q$:"
  - tableLines:
      dir: rtl
      lines:
        - - th: "قيمة الأساس $q$"
          - th: "النهاية $\\lim_{n \\to +\\infty} q^n$"
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

  - graph-container:
      id: "limit-viz"
      data-graph-config: >
        {
          "xDomain": [-1, 15],
          "yDomain": [-1, 5],
          "lines": [
            {"y": 2, "style": "dashed", "color": "green", "label": "L = 2 (المستقر)"}
          ],
          "points": [
            {"x": 0, "y": 4.5},
            {"x": 1, "y": 3.2},
            {"x": 2, "y": 2.6},
            {"x": 3, "y": 2.3},
            {"x": 4, "y": 2.15},
            {"x": 6, "y": 2.05},
            {"x": 10, "y": 2.01}
          ],
          "annotations": [{"label": "النقاط تقترب من الخط الأخضر دون لمسه"}]
        }

  - NB:
      title: "قاعدة ذهبية:"
      type: "success"
      NBs:
        - rtl: "المتتالية المحدودة والرتيبة (متزايدة أو متناقصة) هي حتماً <b>متقاربة</b>."
---
