---
layout: lesson
title: "الشكل المثلثي والأسّي"
subtitle: "من الإحداثيات الديكارتية إلى القطبية"
permalink: /complex_exponential/
mathJax: true
lessonID: "comp-04"

previous_url: "/complex_trig/"
next_url: "/moivre_theorem/"

elements:
  - h3: "1. الشكل المثلثي (Trigonometric Form)"
  - parags:
      - rtl: "باستخدام الطويلة $r$ والعمدة $\theta$، يمكننا كتابة $z$ كالتالي:"
      - center: "$z = r (\\cos \\theta + i \\sin \\theta)$"
      - rtl: "هذا الشكل يربط مباشرة بين قيمة العدد وموقعه الهندسي في الدائرة."

  - h3: "2. الترميز الأسي (Exponential Form)"
  - parags:
      - rtl: "بناءً على صيغة أويلر (Euler's Formula)، نرمز لـ $(\\cos \\theta + i \\sin \\theta)$ بالرمز $e^{i\\theta}$."
      - rtl: "يصبح الشكل الأسي للعدد المركب هو الأكثر اختصاراً وقوة:"
      - center: "$z = r e^{i\\theta}$"

  - h3: "3. قوة الشكل الأسي في الحسابات"
  - parags:
      - rtl: "تتحول خصائص الأعداد المركبة إلى خصائص القوى العادية:"
      - rtl: "• <b>الجداء:</b> $(r e^{i\\theta}) \\times (r' e^{i\\theta'}) = (rr') e^{i(\\theta+\\theta')}$ (نجمع العمد)."
      - rtl: "• <b>القسمة:</b> $\\frac{r e^{i\\theta}}{r' e^{i\\theta'}} = \\frac{r}{r'} e^{i(\\theta-\\theta')}$ (نطرح العمد)."
      - rtl: "• <b>المرافق:</b> $\\overline{r e^{i\\theta}} = r e^{-i\\theta}$."

  - graph:
      id: "complex-forms-conversion"
      data-graph-config: >
        {
          "type": "flow-chart",
          "steps": [
            {"label": "الشكل الجبري: a + bi"},
            {"label": "حساب r و theta"},
            {"label": "الشكل المثلثي: r(cos + i sin)"},
            {"label": "الشكل الأسي: r e^(i theta)"}
          ]
        }

  - NB:
      title: "ملاحظة:"
      type: "info"
      NBs:
        - rtl: "الشكل الأسي ليس مجرد زينة؛ هو المحرك الحقيقي للتعامل مع الدورانات والقوى في المسائل الشاملة. تذكر دائماً: عند الضرب نجمع الزوايا، وعند القسمة نطرحها."
---
