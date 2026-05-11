---
layout: lesson
title: "المرافق وخواصه"
subtitle: "المرآة الحسابية للعدد المركب"
permalink: /complex_conjugate/
mathJax: true
lessonID: "comp-02"

previous_url: "/complex_definition/"
next_url: "/complex_trig/"

elements:
  - h3: "1. تعريف المرافق (The Conjugate)"
  - parags:
      - rtl: "إذا كان $z = a + bi$ عدداً مركباً، فإن مرافقه ونرمز له بـ $\\bar{z}$ هو العدد:"
      - center: "$\\bar{z} = a - bi$"
      - rtl: "أي نقوم بتغيير إشارة الجزء التخيلي فقط."

  - h3: "2. الخصائص الحسابية"
  - parags:
      - rtl: "المرافق يتوزع على جميع العمليات الحسابية:"
      - rtl: "• مرافق المجموع: $\\overline{z + z'} = \\bar{z} + \\bar{z}'$"
      - rtl: "• مرافق الجداء: $\\overline{z \\times z'} = \\bar{z} \\times \\bar{z}'$"
      - rtl: "• مرافق القوة: $\\overline{(z^n)} = (\\bar{z})^n$"

  - h3: "3. خاصية الجداء الأساسية (التربيع)"
  - parags:
      - rtl: "أهم خاصية للمرافق هي أن جداء العدد في مرافقه يعطي دائماً عدداً حقيقياً موجباً:"
      - center: "$z \\times \\bar{z} = a^2 + b^2$"
      - rtl: "نستخدم هذه الخاصية للتخلص من $i$ في المقام (تنطيق المقام)."

  - h3: "4. المقلوب (The Inverse)"
  - parags:
      - rtl: "لحساب مقلوب عدد مركب $\\frac{1}{z}$، نضرب البسط والمقام في المرافق $\\bar{z}$:"
      - center: "$\\frac{1}{z} = \\frac{\\bar{z}}{z \\bar{z}} = \\frac{a - bi}{a^2 + b^2}$"

  - graph:
      id: "conjugate-reflection"
      data-graph-config: >
        {
          "type": "geometry-reflection",
          "point_z": [3, 2],
          "point_z_bar": [3, -2],
          "axis": "Real Axis",
          "annotations": [{"label": "المرافق هو تناظر بالنسبة لمحور الفواصل"}]
        }

  - NB:
      title: "قاعدة ذهبية:"
      type: "info"
      NBs:
        - rtl: "يكون $z$ عدداً حقيقياً إذا وفقط إذا كان $z = \\bar{z}$."
        - rtl: "يكون $z$ تخيلياً صرفاً (Pure Imaginary) إذا وفقط إذا كان $z = -\\bar{z}$."
---
