---
layout: lesson
title: "المتتالية الهندسية"
subtitle: "النمو المتسارع والضرب المتكرر"
permalink: /geometric_seq/
mathJax: true
lessonID: "seq-04"

previous_title: "المتتالية الحسابية"
previous_url: "/arithmetic_seq/"
next_title: "المتتاليات: النهاية والتقارب"
next_url: "/sequence_limits/" # سنجهزه لاحقاً

elements:
  - h3: "1. التعريف"
  - parags:
      - rtl: "نقول عن متتالية أنها هندسية إذا انتقلنا من حد إلى الذي يليه بالضرب في عدد ثابت $q$ يسمى الأساس."
      - center: "$u_{n+1} = u_n \\times q$"

  - graph-container:
      id: "geo-viz"
      data-graph-config: >
        {
          "xDomain": [-1, 6],
          "yDomain": [-1, 15],
          "points": [
            {"x": 0, "y": 0.5},
            {"x": 1, "y": 1},
            {"x": 2, "y": 2},
            {"x": 3, "y": 4},
            {"x": 4, "y": 8}
          ],
          "annotations": [{"label": "تضاعف مستمر (q=2)"}]
        }

  - h3: "2. عبارة الحد العام"
  - parags:
      - center: "$u_n = u_p \\times q^{(n-p)}$"
      - rtl: "إذا بدأنا من $u_0$ تكون العبارة: $u_n = u_0 \\times q^n$."

  - NB:
      title: "ملاحظة حول اتجاه التغير:"
      type: "warning"
      NBs:
        - rtl: "هنا الأمر أعقد من الحسابية، فإشارة الحد الأول $u_0$ وقيمة $q$ (أكبر أو أصغر من 1) هما من يحددان المنحى."
---
