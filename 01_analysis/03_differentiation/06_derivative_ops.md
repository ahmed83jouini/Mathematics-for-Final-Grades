---
layout: lesson
title: "الاشتقاقية: العمليات على المشتقات"
permalink: /derivative_ops/
mathJax: true
graph: true
lessonID: "derivative-operations"

previous_title: "الاشتقاقية: قواعد الاشتقاق (الدوال المرجعية والعمليات)"
previous_url: /basic_derivatives/
next_title: "اشتقاق الدوال المركبة"
next_url: "/chain_rule/"

elements:
  - h3: "1. اشتقاق المجموع والضرب في ثابت"
    id: "sum-const-rule"

  - parags:
      - rtl: "الاشتقاق عملية 'خطية'؛ بمعنى أنها تتوزع بسهولة على الجمع والطرح، ولا تتأثر بالثوابت المضروبة."

  - tableLines:
      dir: ltr
      lines:
        - - th: "العملية"
          - th: "الدالة"
          - th: "المشتقة"
        - - td: "المجموع"
          - td: "$u + v$"
          - td: "$u' + v'$"
        - - td: "الضرب في ثابت"
          - td: "$k \\cdot u$"
          - td: "$k \\cdot u'$"

  - h3: "2. جداء وقسمة دالتين (القواعد الذهبية)"
    id: "product-quotient-rules"

  - parags:
      - rtl: "هنا يجب الحذر! مشتقة الجداء <strong>ليست</strong> جداء المشتقات، ومشتقة القسمة لها قانونها الخاص الذي يحفظ بدقة."

  - tableLines:
      dir: ltr
      lines:
        - - th: "العملية"
          - th: "الدالة"
          - th: "المشتقة"
        - - td: "الجداء"
          - td: "$u \\cdot v$"
          - td: "$u'v + v'u$"
        - - td: "المقلوب"
          - td: "$\\frac{1}{v}$"
          - td: "$-\\frac{v'}{v^2}$"
        - - td: "القسمة"
          - td: "$\\frac{u}{v}$"
          - td: "$\\frac{u'v - v'u}{v^2}$"

  - NB:
      title: "تنبيه الصيانة:"
      type: "danger"
      NBs:
        - rtl: "في قانون القسمة، نبدأ دائماً بمشتق البسط مضروباً في المقام ($u'v$) ثم نطرح العكس. ترتيب العناصر هنا مقدس لأن الطرح ليس تبديلياً."

  - h3: "3. مثال تطبيقي (الكسور الناطقة)"
    id: "ops-example"

  - parags:
      - rtl: "لنحسب مشتقة الدالة: $f(x) = \\frac{2x + 1}{x - 3}$"

  - tableLines:
      dir: rtl
      lines:
        - - td: "1. تعيين العناصر"
          - td: "$u = 2x+1 \\to u'=2$ <br> $v = x-3 \\to v'=1$"
        - - td: "2. تطبيق القانون"
          - td: "$f'(x) = \\frac{(2)(x-3) - (1)(2x+1)}{(x-3)^2}$"
        - - td: "3. التبسيط"
          - td: "$f'(x) = \\frac{2x - 6 - 2x - 1}{(x-3)^2} = \\frac{-7}{(x-3)^2}$"

  - NB:
      title: "قاعدة:"
      type: "success"
      NBs:
        - rtl: "عندما يكون البسط عدداً ثابتاً والمقام دالة، استخدم قانون 'المقلوب' مباشرة لتوفير الوقت والجهد."
---
