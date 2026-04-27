---
layout: lesson
title: "الاشتقاقية: مشتقات الدوال المرجعية"
permalink: /basic_derivatives/
mathJax: true
graph: true
lessonID: "reference-derivatives"

previous_title: "الاشتقاقية: التقريب التآلفي المحلي"
previous_url: /linear_approximation/
next_title: "العمليات على المشتقات"
next_url: "/derivative_ops/"

elements:
  - h3: "1. من التعريف إلى القواعد الجاهزة"
    id: "rules-intro"

  - parags:
      - rtl: "بعد أن تعلمنا حساب المشتقة باستخدام 'نهاية نسبة التغير'، سننتقل الآن إلى استخدام قواعد مباشرة تم استنتاجها مسبقاً لتسهيل العمل وتسريعه."

  - h3: "2. جدول مشتقات الدوال المألوفة"
    id: "derivatives-table"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الدالة $f(x)$"
          - th: "المشتقة $f'(x)$"
          - th: "مجال الاشتقاق"
        - - th: "$k$ (ثابت)"
          - td: "$0$"
          - td: "$\\mathbb{R}$"
        - - th: "$ax + b$"
          - td: "$a$"
          - td: "$\\mathbb{R}$"
        - - th: "$x^n$ ($n \\geq 1$)"
          - td: "$n x^{n-1}$"
          - td: "$\\mathbb{R}$"
        - - th: "$\\frac{1}{x}$"
          - td: "$-\\frac{1}{x^2}$"
          - td: "$\\mathbb{R}^*$"
        - - th: "$\\sqrt{x}$"
          - td: "$\\frac{1}{2\\sqrt{x}}$"
          - td: "$]0; +\\infty[$"

  - NB:
      title: "تنبيه هام جداً:"
      type: "danger"
      NBs:
        - rtl: "الدالة الجذرية $\\sqrt{x}$ معرفة عند $0$، ولكنها <strong>غير قابلة للاشتقاق</strong> عنده. لاحظ كيف تغير المجال في الجدول ليصبح مفتوحاً عند الصفر."

  - h3: "3. حالات خاصة للدوال المثلثية"
    id: "trig-derivatives"

  - parags:
      - rtl: "الدوال المثلثية دورية، ومشتقاتها تتبع نمطاً دائرياً يسهل تذكره:"

  - tableLines:
      dir: ltr
      lines:
        - - td: "$\\sin(x)$"
          - td: "$\\cos(x)$"
          - td: "$\\mathbb{R}$"
        - - td: "$\\cos(x)$"
          - td: "$-\\sin(x)$"
          - td: "$\\mathbb{R}$"

  - h3: "4. أمثلة سريعة"
    id: "quick-examples"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الدالة"
          - th: "المشتقة"
          - th: "القاعدة المستخدمة"
        - - td: "$f(x) = 5$"
          - td: "$f'(x) = 0$"
          - td: "مشتق الثابت"
        - - td: "$g(x) = x^4$"
          - td: "$g'(x) = 4x^3$"
          - td: "قوة $n$"
        - - td: "$h(x) = \\frac{1}{x}$"
          - td: "$h'(x) = -\\frac{1}{x^2}$"
          - td: "مشتق المقلوب"

  - notes:
      - rtl: "تذكر دائماً أن الاشتقاق هو عملية 'تنقيص' درجة واحدة من أس الدالة القوية (Power functions)."

---
