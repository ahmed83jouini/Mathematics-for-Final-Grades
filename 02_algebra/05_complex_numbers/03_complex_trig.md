---
layout: lesson
title: "الطويلة والعمدة"
subtitle: "القياسات القطبية للعدد المركب"
permalink: /complex_trig/
mathJax: true
lessonID: "comp-03"

previous_url: "/complex_conjugate/"
next_url: "/complex_exponential/"

elements:
  - h3: "1. الطويلة (The Module)"
  - parags:
      - rtl: "طويلة العدد المركب $z = a + bi$ هي المسافة بين مبدأ المعلم $O$ والنقطة $M(a, b)$."
      - rtl: "نرمز لها بـ $|z|$ أو $r$ وتُحسب بالقانون:"
      - center: "$|z| = \\sqrt{a^2 + b^2}$"
      - rtl: "<b>خواصها:</b> $|z| = |\\bar{z}|$، ودائماً $|z| \\ge 0$."

  - h3: "2. العمدة (The Argument)"
  - parags:
      - rtl: "عمدة العدد المركب $z$ (غير المعدوم) هي قيس الزاوية الموجهة $(\\vec{u}, \\vec{OM})$."
      - rtl: "نرمز لها بـ $arg(z)$ وتُحسب من خلال جملة المعادلتين:"
      - center: "$\\cos(\theta) = \\frac{a}{|z|}, \\quad \\sin(\theta) = \\frac{b}{|z|}$"
      - rtl: "حيث $\\theta$ هي العمدة، وتكون معرفة بترديد $2\\pi$."

  - h3: "3. العمدة لبعض الحالات الخاصة"
  - parags:
      - rtl: "• إذا كان $z$ حقيقياً موجباً: $arg(z) = 0$"
      - rtl: "• إذا كان $z$ حقيقياً سالباً: $arg(z) = \\pi$"
      - rtl: "• إذا كان $z$ تخيلياً صرفاً موجباً: $arg(z) = \\frac{\\pi}{2}$"
      - rtl: "• إذا كان $z$ تخيلياً صرفاً سالباً: $arg(z) = -\\frac{\\pi}{2}$"

  - graph:
      id: "module-arg-viz"
      data-graph-config: >
        {
          "type": "polar-coordinates",
          "point": [3, 4],
          "vector": "OM",
          "angle": "theta",
          "radius": "r",
          "annotations": [{"label": "الطويلة هي طول المتجه، والعمدة هي زاويته"}]
        }

  - NB:
      title: "تنبيه حسابي:"
      type: "warning"
      NBs:
        - rtl: "عند البحث عن العمدة، لا تكتفِ بالآلة الحاسبة (Shift Tan) لأنها تعطي زاوية في الربع الأول أو الرابع فقط. يجب دائماً تحديد 'الربع' الذي تقع فيه النقطة بناءً على إشارة $a$ و $b$."
---
