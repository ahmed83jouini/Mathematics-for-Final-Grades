---
layout: lesson
title: "الأسية: الدوال الأصلية التي تشمل exp"
permalink: /exp_primitives/
mathJax: true
graph: false
lessonID: "exp-primitives"

# روابط الاتصال
previous_title: "الدوال الأسية ذات الأساس a"
previous_url: "/exp_base_a/"

next_title: "المسائل الشاملة (البكالوريات)"
next_url: "/exp_full_problems/"

elements:
  - h3: "1. القاعدة الأساسية"
    id: "primitive-exp-base"

  - parags:
      - rtl: "بما أن $(e^x)' = e^x$، فإن العملية العكسية هي الأبسط في الرياضيات:"
      - center: "الدالة الأصلية لـ $f(x) = e^x$ هي $F(x) = e^x + c$"

  - h3: "2. الشكل العام للأصلية $u' e^u$"
    id: "general-primitive-exp"

  - parags:
      - rtl: "عندما تكون الأسية مركبة، نبحث دائماً عن مشتقة الأس لتكون مضروبة في الدالة:"
      - center: "الدالة الأصلية لـ $f(x) = u'(x) \\cdot e^{u(x)}$ هي $F(x) = e^{u(x)} + c$"

  - h3: "3. حالات شائعة وتعديلات:"
    id: "exp-primitive-cases"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الدالة $f(x)$"
          - th: "التعديل المطلوب"
          - th: "الدالة الأصلية $F(x)$"
        - - td: "$e^{ax+b}$"
          - td: "نحتاج $a$ في البسط"
          - td: "$\\frac{1}{a} e^{ax+b} + c$"
        - - td: "$e^{-x}$"
          - td: "نحتاج $-1$"
          - td: "$-e^{-x} + c$"
        - - td: "$x e^{x^2}$"
          - td: "نحتاج $2$ (مشتقة $x^2$)"
          - td: "$\\frac{1}{2} e^{x^2} + c$"

  - NB:
      title: "قاعدة (الموازنة):"
      type: "success"
      NBs:
        - rtl: "إذا وجدت الأسية وبجانبها 'نقص' في ثابت عددي، قم بضرب الدالة وقسمتها على ذلك الثابت لتوفير $u'$ ثم استخرج الأصلية مباشرة."

  - h3: "4. تكاملات خاصة"
    id: "special-exp-integrals"

  - parags:
      - rtl: "في الكسور التي مقامها يتضمن أسية، غالباً ما نحاول إظهار الشكل $u'/u$ لتكون الأصلية لوغاريتمية:"
      - center: "$\\frac{e^x}{e^x + 1} \\xrightarrow{\\text{Primitive}} \\ln(e^x + 1) + c$"

  - notes:
      - rtl: "لاحظ أننا لا نحتاج للقيمة المطلقة في $\\ln(e^x+1)$ لأن $e^x+1$ موجب تماماً دوماً. هذه لمسة إتقان يحبها المصححون."

---
