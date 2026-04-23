---
layout: lesson
title: "نهايات الدوال كثيرات الحدود والدوال الناطقة"
permalink: /polynomial_limits/
mathJax: true
graph: true
lessonID: "poly-limits"

previous_title: "العمليات على النهايات"
previous_url: /ops_limits/
next_title: "حالات عدم التعيين (0/0)"
next_url: /indet_0_over_0/

elements:
  - h3: "1. نهاية دالة كثير حدود عند اللانهاية"
    id: "poly-inf"

  - parags:
      - rtl: "عندما يؤول $x$ إلى $+\\infty$ أو $-\\infty$، فإن سلوك دالة كثير الحدود يُختصر في سلوك أقوى حد فيها. بقية الحدود تصبح مهملة أمام قوة الحد ذو الدرجة (الأس) الأكبر."
  - NB:
      title: "قاعدة:"
      NBs:
        - rtl: "نهاية دالة كثير حدود عند اللانهاية هي نهاية حدها ذو الدرجة الأعلى."

  - tableLines:
      dir: rtl
      lines:
        - - th: "المثال"
          - th: "الحد ذو الدرجة الأعلى"
          - th: "النتيجة النهائية"
        - - td: "$f(x) = 3x^2 - 5x + 1$"
          - td: "$\\lim\\limits_{x \\to +\\infty} 3x^2$"
          - td: "$+\\infty$"
        - - td: "$g(x) = -2x^3 + x^2$"
          - td: "$\\lim\\limits_{x \\to +\\infty} -2x^3$"
          - td: "$-\\infty$"

  - h3: "2. نهاية دالة ناطقة عند اللانهاية"
    id: "rational-inf"

  - parags:
      - rtl: "الدالة الناطقة هي كسر يتكون من كثيري حدود. عند اللانهاية، نطبق قاعدة 'الأقوى على الأقوى'."
    
  - NB:
      title: "القاعدة:"
      NBs:
        - rtl: "</strong>نهاية دالة ناطقة عند اللانهاية هي نهاية حاصل قسمة الحدين الأعلى درجة في البسط والمقام."

  - tableLines:
      dir: rtl
      lines:
        - - th: "الدالة الناطقة"
          - th: "أخذ أكبر حد على أكبر حد"
          - th: "التبسيط والنتيجة"
        - - td: "$f(x) = \\frac{2x^2 + 1}{x^2 - 5}$"
          - td: "$\\lim\\limits_{x \\to \\pm\\infty} \\frac{2x^2}{x^2}$"
          - td: "$2$"
        - - td: "$g(x) = \\frac{x + 3}{x^2 + 1}$"
          - td: "$\\lim\\limits_{x \\to \\pm\\infty} \\frac{x}{x^2} = \\lim\\limits_{x \\to \\pm\\infty} \\frac{1}{x}$"
          - td: "$0$"
        - - td: "$h(x) = \\frac{x^3}{x + 1}$"
          - td: "$\\lim\\limits_{x \\to \\pm\\infty} \\frac{x^3}{x}$ = $\\lim\\limits_{x \\to \\pm\\infty} x^2$"
          - td: "$+\\infty$"

  - NB:
      NBs:
        - rtl: " هذه القاعدة (أكبر حد) تُطبق <strong>فقط </strong> عند $+\\infty$ أو $-\\infty$. لا يجوز بتاتاً استخدامها عند حساب النهاية عند عدد حقيقي $a$."

  - h3: "3. أمثلة تطبيقية:"
    id: "poly-examples"

  - exemple:
      title: "1.3. دراسة نهاية دالة ناطقة تؤول لعدد ثابت"
      exemID: "ex-poly-001"
  - exemple:
      title: "2.3. حالة دالة ناطقة درجتها في البسط أكبر من المقام"
      exemID: "ex-poly-002"
---








