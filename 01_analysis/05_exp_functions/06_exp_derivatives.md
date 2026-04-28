---
layout: lesson
title: "الأسية: اشتقاق الدالة exp والدوال من الشكل exp(u)"
permalink: /exp_derivatives/
mathJax: true
graph: true
lessonID: "exp-differentiation"

# روابط الاتصال
previous_title: "التزايد المقارن"
previous_url: "/exp_growth_comparison/"

next_title: "اتجاه التغير وجدول التغيرات"
next_url: "/exp_variation_table/"

elements:
  - h3: "1. مشتقة الدالة الأم (e^x)"
    id: "basic-exp-deriv"

  - parags:
      - rtl: "هذه هي الدالة الوحيدة التي 'لا تتغير' بالاشتقاق، فهي دالة وفية لنفسها:"
      - center: "$(e^x)' = e^x$"

  - h3: "2. مشتقة مركب دالّة $e^{u(x)}$"
    id: "composite-exp-deriv"

  - parags:
      - rtl: "عندما يكون فوق الـ $e$ دالة $u(x)$، نطبق القاعدة الذهبية: <strong>نشتق ما فوق الأس ونضربه في الدالة كما هي</strong>."
      - center: "$(e^{u(x)})' = u'(x) \\cdot e^{u(x)}$"

  - NB:
      title: "قاعدة (الحارس الأمين):"
      type: "success"
      NBs:
        - rtl: "الدالة الأسية $e^{u(x)}$ تبقى دائماً كما هي في المشتقة، لا تحذفها ولا تغير أسها؛ فقط أخرج مشتقة الأس كـ 'حارس' يسبقها."

  - h3: "3. أمثلة تطبيقية"
    id: "exp-deriv-examples"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الدالة $f(x)$"
          - th: "المشتقة $f'(x)$"
          - th: "التفسير"
        - - td: "$e^{5x + 3}$"
          - td: "$5e^{5x + 3}$"
          - td: "$u' = 5$"
        - - td: "$e^{x^2}$"
          - td: "$2x \\cdot e^{x^2}$"
          - td: "$u' = 2x$"
        - - td: "$e^{-x}$"
          - td: "$-e^{-x}$"
          - td: "مشتقة $-x$ هي $-1$"

  - h3: "4. اشتقاق الجداء (الحالة الأكثر شيوعاً)"
    id: "product-exp-deriv"

  - parags:
      - rtl: "في البكالوريا، غالباً ما تأتي الأسية مضروبة في دالة أخرى $P(x) \\cdot e^{u(x)}$. هنا نطبق قانون جداء دالتين:"
      - center: "$(uv)' = u'v + v'u$"
      - rtl: <strong>نصيحة:</strong> بعد الاشتقاق، أخرج $e^{u(x)}$ دائماً كعامل مشترك لتسهيل دراسة الإشارة."

  - notes:
      - rtl: "بما أن $e^{u(x)} > 0$ تماماً، فإن إشارة المشتقة تعتمد كلياً على إشارة الجزء المضروب فيها ($u'$ أو العبارة الناتجة من الجداء)."

---
