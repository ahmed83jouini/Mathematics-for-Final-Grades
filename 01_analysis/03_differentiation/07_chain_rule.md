---
layout: lesson
title: "الاشتقاقية: اشتقاق الدوال المركبة"
permalink: /chain_rule/
mathJax: true
graph: true
lessonID: "chain-rule-derivative"

previous_title: "الاشتقاقية: العمليات على المشتقات"
previous_url: /derivative_ops/
next_title: "العلاقة بين الاشتقاق والاستمرارية"
next_url: "/diff_cont_relation/"

elements:
  - h3: "1. مفهوم الدالة المركبة"
    id: "composite-concept"

  - parags:
      - rtl: "الدالة المركبة هي دالة داخل دالة، مثل $f(x) = \\sqrt{u(x)}$. لكي نشتقها، لا يكفي اشتقاق الغلاف الخارجي فقط، بل يجب ضربه في مشتقة ما بداخله."

  - h3: "2. قاعدة السلسلة (القانون العام)"
    id: "general-chain-rule"

  - parags:
      - rtl: "إذا كانت $f = v \\circ u$، فإن مشتقة هذا التركيب هي:"
      - center: "$(v \\circ u)'(x) = u'(x) \\cdot v'(u(x))$"

  - h3: "3. قواعد مشتقات التركيب المألوفة"
    id: "common-comp-rules"

  - tableLines:
      dir: ltr
      lines:
        - - th: "الشكل"
          - th: "القاعدة"
        - - td: "$[u(x)]^n$"
          - td: "$n \\cdot u'(x) \\cdot [u(x)]^{n-1}$"
        - - td: "$\\sqrt{u(x)}$"
          - td: "$\\frac{u'(x)}{2\\sqrt{u(x)}}$"
        - - td: "$\\sin(ax+b)$"
          - td: "$a \\cdot \\cos(ax+b)$"
        - - td: "$\\cos(ax+b)$"
          - td: "$-a \\cdot \\sin(ax+b)$"

  - NB:
      title: "تنبيه (مبدأ البصلة):"
      type: "primary"
      NBs:
        - rtl: "تخيل الدالة المركبة كالبصلة؛ ابدأ باختراق القشرة الخارجية (اشتقاق الدالة الكبرى) ثم انتقل للداخل (اضرب في مشتقة ما داخل الأقواس أو الجذور)."

  - h3: "4. مثال تطبيقي (الدالة الجذرية)"
    id: "sqrt-comp-example"

  - parags:
      - rtl: "لنحسب مشتقة الدالة: $f(x) = \\sqrt{x^2 + 3}$"

  - tableLines:
      dir: rtl
      lines:
        - - td: "1. تحديد الدالة الداخلية $u$"
          - td: "$u = x^2 + 3 \\implies u' = 2x$"
        - - td: "2. تطبيق قانون الجدر"
          - td: "$f'(x) = \\frac{u'}{2\\sqrt{u}} = \\frac{2x}{2\\sqrt{x^2 + 3}}$"
        - - td: "3. الاختزال"
          - td: "$f'(x) = \\frac{x}{\\sqrt{x^2 + 3}}$"

  - NB:
      title: "خلاصة المرحلة الثانية:"
      type: "success"
      NBs:
        - rtl: "بإتقانك لهذا المبحث، أصبحت تملك 'المفتاح الشامل' لحساب مشتقة أي دالة تواجهك في المقرر الدراسي."

---
