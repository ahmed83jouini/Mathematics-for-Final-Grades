---
layout: lesson
title: "المتتالية الحسابية"
subtitle: "الخطوة الثابتة والنمو المنتظم"
permalink: /arithmetic_seq/
mathJax: true
lessonID: "seq-03"

previous_title: "تعريف المتتاليات بين الصراحة والتراجع"
previous_url: "/seq_generation/"
next_title: "المتتالية الهندسية"
next_url: "/geometric_seq/"

elements:
  - h3: "1. التعريف"
  - parags:
      - rtl: "نسمي متتالية حسابية كل متتالية ننتقل فيها من حد إلى الحد الذي يليه بإضافة عدد ثابت $r$ يسمى الأساس."
      - center: "$u_{n+1} = u_n + r$"

  - graph-container:
      id: "arith-viz"
      data-graph-config: >
        {
          "xDomain": [-1, 6],
          "yDomain": [-1, 10],
          "points": [
            {"x": 0, "y": 2},
            {"x": 1, "y": 3.5},
            {"x": 2, "y": 5},
            {"x": 3, "y": 6.5},
            {"x": 4, "y": 8}
          ],
          "annotations": [{"label": "خطوة ثابتة (r=1.5)"}]
        }

  - h3: "2. عبارة الحد العام"
  - parags:
      - rtl: "تسمح لنا بحساب أي حد مباشرة دون الحاجة للحدود السابقة:"
      - center: "$u_n = u_p + (n-p)r$"
      - rtl: "إذا كان الحد الأول هو $u_0$، فإن العبارة تصبح: $u_n = u_0 + nr$."

  - h3: "3. اتجاه التغير"
  - tableLines:
      dir: rtl
      lines:
        - - th: "قيمة الأساس $r$"
          - th: "اتجاه تغير المتتالية $(u_n)$"
        - - td: "$r > 0$"
          - td: "متزايدة تماماً"
        - - td: "$r < 0$"
          - td: "متناقصة تماماً"
        - - td: "$r = 0$"
          - td: "ثابتة"

  - h3: "4. الوسط الحسابي"
  - parags:
      - rtl: "إذا كانت $a, b, c$ ثلاثة حدود متتابعة من متتالية حسابية، فإن:"
      - center: "$2b = a + c$"
---
