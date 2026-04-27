---
layout: lesson
title: "اللوغاريتم: اشتقاق الدالة ln والدوال من الشكل ln(u)"
permalink: /ln_derivatives/
mathJax: true
graph: true
lessonID: "ln-differentiation"

# روابط الاتصال
previous_title: "التزايد المقارن"
previous_url: "/ln_growth_comparison/"

next_title: "اتجاه التغير وجدول التغيرات"
next_url: "/ln_variation_table/"

elements:
  - h3: "1. مشتقة الدالة الأم (ln x)"
    id: "basic-ln-deriv"

  - parags:
      - rtl: "القاعدة المرجعية بسيطة ومباشرة: مشتقة الدالة اللوغاريتمية هي دالة المقلوب."
      - center: "$(\\ln x)' = \\frac{1}{x}$"
      - rtl: "بشرط أن يكون $x > 0$."

  - h3: "2. مشتقة مركب دالّة $\\ln(u)$"
    id: "composite-ln-deriv"

  - parags:
      - rtl: "عندما يكون ما داخل اللوغاريتم دالة $u(x)$، نطبق القاعدة الذهبية: <strong>مشتق ما داخل اللوغاريتم على ما داخل اللوغاريتم نفسه</strong>."
      - center: "$(\\ln[u(x)])' = \\frac{u'(x)}{u(x)}$"

  - NB:
      title: "قاعدة (الكسر النظيف):"
      type: "success"
      NBs:
        - rtl: "لاحظ أن اللوغاريتم 'يختفي' تماماً بعد الاشتقاق، تاركاً خلفه كسرًا ناطقًا."

  - h3: "3. أمثلة تطبيقية"
    id: "deriv-examples"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الدالة $f(x)$"
          - th: "المشتقة $f'(x)$"
          - th: "التفسير"
        - - td: "$\\ln(3x + 1)$"
          - td: "$\\frac{3}{3x + 1}$"
          - td: "$u'=3$ و $u=3x+1$"
        - - td: "$\\ln(x^2 + x)$"
          - td: "$\\frac{2x + 1}{x^2 + x}$"
          - td: "$u'=2x+1$ و $u=x^2+x$"
        - - td: "$\\ln(\\cos x)$"
          - td: "$\\frac{-\\sin x}{\\cos x} = -\\tan x$"
          - td: "مشتق الكوسينوس هو ناقص سينوس"

  - h3: "4. حالة خاصة: $\\ln|u(x)|$"
    id: "absolute-ln"

  - parags:
      - rtl: "في بعض الأحيان نجد القيمة المطلقة لضمان أن ما داخل اللوغاريتم موجب. القاعدة تبقى نفسها:"
      - center: "$(\\ln|u|)' = \\frac{u'}{u}$"

  - NB:
      title: "تنبيه:"
      type: "danger"
      NBs:
        - rtl: "قبل البدء في الاشتقاق، اسأل نفسك: هل يمكنني تبسيط العبارة باستخدام خصائص اللوغاريتم؟"
        - rtl: "مثال: اشتقاق "
        - center: "$\\ln(x^5)$"
        - rtl: "سيكون أسهل بكثير لو حولتها الى:"
        - center: "$5\\ln x$"
        - rtl: "المشتقة مباشرة هي:"
        - center: "$\\frac{5}{x}$"

  - NB:
      type: info
      tutle: "إشارة المشتقة."
      NBs:
        - rtl: "إشارة المشتقة:"
        - center: "$\\frac{u'}{u}$"
        - rtl: "تعتمد غالباً على $u'$ لأن $u$ يجب أن يكون موجباً دائماً لكي تكون الدالة معرفة."

---
