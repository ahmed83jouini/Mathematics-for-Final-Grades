---
layout: lesson
title: "حل معادلات الدرجة الثانية في C"
subtitle: "وداعاً للحلول المستحيلة"
permalink: /complex_equations/
mathJax: true
lessonID: "comp-06"

previous_url: "/moivre_theorem/"
next_url: "/complex_geometry/"

elements:
  - h3: "1. تذكير بالمميز (The Discriminant)"
  - parags:
      - rtl: "لحل المعادلة $az^2 + bz + c = 0$ (حيث $a, b, c$ أعداد حقيقية)، نحسب المميز:"
      - center: "$\\Delta = b^2 - 4ac$"

  - h3: "2. الحالات الثلاث للمميز"
  - parags:
      - rtl: "• <b>إذا كان $\\Delta > 0$:</b> يوجد حلان حقيقيان متمايزان (كما في $\\mathbb{R}$)."
      - rtl: "• <b>إذا كان $\\Delta = 0$:</b> يوجد حل حقيقي مضاعف $z_0 = -\\frac{b}{2a}$."
      - rtl: "• <b>إذا كان $\\Delta < 0$:</b> يوجد حلان مركبان مترافقان."

  - h3: "3. التعامل مع المميز السالب"
  - parags:
      - rtl: "عندما يكون $\\Delta$ سالباً، نكتبه على الشكل: $\\Delta = i^2 |\\4Delta|$."
      - rtl: "وبذلك يكون الجذران التربيعيان للمميز هما $i\\sqrt{|\\Delta|}$ و $-i\\sqrt{|\\Delta|}$."
      - rtl: "<b>الحلان هما:</b>"
      - center: "$z_1 = \\frac{-b - i\\sqrt{|\\Delta|}}{2a}, \\quad z_2 = \\frac{-b + i\\sqrt{|\\Delta|}}{2a}$"

  - h4: "مثال تطبيقي: حل $z^2 - 2z + 5 = 0$"
  - parags:
      - rtl: "1. $\\Delta = (-2)^2 - 4(1)(5) = 4 - 20 = -16$."
      - rtl: "2. بما أن $\\Delta < 0$، نكتب $\\Delta = 16i^2$."
      - rtl: "3. الحل الأول: $z_1 = \\frac{2 - 4i}{2} = 1 - 2i$."
      - rtl: "4. الحل الثاني: $z_2 = 1 + 2i$ (المرافق)."

  - graph:
      id: "equation-solutions-viz"
      data-graph-config: >
        {
          "type": "parabola-vs-roots",
          "delta_sign": "negative",
          "roots": ["z1 = a-bi", "z2 = a+bi"],
          "annotations": [{"label": "الحلول تقع خارج محور الفواصل وتكون متناظرة بالنسبة له"}]
        }

  - NB:
      title: "قاعدة هامة:"
      type: "success"
      NBs:
        - rtl: "في المعادلات ذات المعاملات الحقيقية، إذا كان $z$ حلاً فإن $\\bar{z}$ هو الحل الآخر دائماً. هذه الخاصية تساعدك في التأكد من صحة حساباتك."
---
