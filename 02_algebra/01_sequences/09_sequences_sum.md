---
layout: lesson
title: "حساب مجموع حدود متتابعة"
subtitle: "تجميع الحدود من البداية إلى النهاية"
permalink: /sequences_sum/
mathJax: true
lessonID: "seq-09"

previous_url: "/sequence_limits/"
next_url: "/sequences_review/" # المراجعة الشاملة

elements:
  - h3: "1. المجموع في المتتالية الحسابية"
  - parags:
      - rtl: "لحساب المجموع $S_n = u_0 + u_1 + ... + u_n$ في متتالية حسابية، نطبق القاعدة التالية:"
      - center: "$S = \\frac{\\text{عدد الحدود}}{2} \\times (\\text{الحد الأول} + \\text{الحد الأخير})$"
      - rtl: "حيث عدد الحدود يحسب بالعلاقة: <b>(دليل الحد الأخير - دليل الحد الأول + 1)</b>."

  - h3: "2. المجموع في المتتالية الهندسية"
  - parags:
      - rtl: "في حالة متتالية هندسية أساسها $q \\neq 1$، يكون المجموع:"
      - center: "$S = \\text{الحد الأول} \\times \\frac{1 - q^{\\text{عدد الحدود}}}{1 - q}$"

  - h4: "مثال توضيحي:"
  - parags:
      - rtl: "إذا كانت المتتالية هندسية أساسها $q = 2$ وحدها الأول $u_0 = 1$، فإن مجموع أول 5 حدود هو:"
      - center: "$S = 1 \\times \\frac{1 - 2^5}{1 - 2} = 1 \\times \\frac{-31}{-1} = 31$"

  - graph-container:
      id: "sum-viz"
      data-graph-config: >
        {
          "xDomain": [-1, 6],
          "yDomain": [-1, 20],
          "type": "bar",
          "points": [
            {"x": 0, "y": 1, "label": "u0"},
            {"x": 1, "y": 2, "label": "u1"},
            {"x": 2, "y": 4, "label": "u2"},
            {"x": 3, "y": 8, "label": "u3"}
          ],
          "annotations": [{"label": "المجموع هو تراكم مساحات هذه الأعمدة"}]
        }

  - NB:
      title: "حالة خاصة:"
      type: "info"
      NBs:
        - rtl: "إذا كان $q = 1$ في المتتالية الهندسية، فإن المجموع هو ببساطة: <b>الحد الأول × عدد الحدود</b>."
---
