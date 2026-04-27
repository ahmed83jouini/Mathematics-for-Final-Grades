---
layout: lesson
title: "الاشتقاقية: قواعد الاشتقاق (الدوال المرجعية والعمليات)"
permalink: /basic_derivatives/
mathJax: true
graph: true
lessonID: "derivative-rules"

next_title: "مشتقة الدالة المركبة"
next_url: "/chain_rule/"

elements:
  - h3: "1. مشتقات الدوال المرجعية"
    id: "reference-derivatives"

  - parags:
      - rtl: "بدلاً من حساب النهاية في كل مرة، نستخدم قواعد جاهزة تم استنتاجها مسبقاً لكل نوع من الدوال."

  - tableLines:
      dir: ltr
      lines:
        - - th: "الدالة $f(x)$"
          - th: "المشتقة $f'(x)$"
          - th: "مجال الاشتقاق"
        - - td: "$k$ (ثابت)"
          - td: "$0$"
          - td: "$\\mathbb{R}$"
        - - td: "$x^n$"
          - td: "$n x^{n-1}$"
          - td: "$\\mathbb{R}$"
        - - td: "$\\frac{1}{x}$"
          - td: "$-\\frac{1}{x^2}$"
          - td: "$\\mathbb{R}^*$"
        - - td: "$\\sqrt{x}$"
          - td: "$\\frac{1}{2\\sqrt{x}}$"
          - td: "$]0; +\\infty[$"

  - NB:
      title: "تنبيه لمجال الاشتقاق:"
      type: "danger"
      NBs:
        - rtl: "لاحظ أن الدالة الجذرية قابلة للاشتقاق على $]0; +\\infty[$ فقط، فهي غير قابلة للاشتقاق عند الصفر (المماس يكون عمودياً)."

  - h3: "2. العمليات على المشتقات"
    id: "derivative-ops"

  - parags:
      - rtl: "عندما تكون الدالة عبارة عن مجموع أو ضرب أو قسمة دوال، نطبق القواعد التالية:"

  - tableLines:
      dir: ltr
      lines:
        - - th: "العملية"
          - th: "القاعدة"
        - - td: "المجموع ($u+v$)"
          - td: "$u' + v'$"
        - - td: "الضرب في ثابت ($k \\cdot u$)"
          - td: "$k \\cdot u'$"
        - - td: "جداء دالتين ($u \\cdot v$)"
          - td: "$u'v + v'u$"
        - - td: "مقلوب دالة ($\\frac{1}{v}$)"
          - td: "$-\\frac{v'}{v^2}$"
        - - td: "قسمة دالتين ($\\frac{u}{v}$)"
          - td: "$\\frac{u'v - v'u}{v^2}$"

  - h3: "3. مثال تطبيقي شامل"
    id: "comprehensive-example"

  - parags:
      - rtl: "لنحسب مشتقة الدالة المعرفة بـ: $f(x) = \\frac{x^2+1}{x}$"

  - tableLines:
      dir: rtl
      lines:
        - - th: "المرحلة"
          - th: "التطبيق"
        - - td: "1. تحديد $u$ و $v$"
          - td: "$u = x^2+1 \\implies u'=2x$ <br> $v = x \\implies v'=1$"
        - - td: "2. تطبيق قانون القسمة"
          - td: "$f'(x) = \\frac{(2x)(x) - (1)(x^2+1)}{x^2}$"
        - - td: "3. التبسيط"
          - td: "$f'(x) = \\frac{2x^2 - x^2 - 1}{x^2} = \\frac{x^2 - 1}{x^2}$"

  - NB:
      title: "نصيحة ذهبية:"
      type: "success"
      NBs:
        - rtl: "دائماً اترك المقام كما هو (مربع) ولا تقم بنشره؛ لأننا سنحتاج إشارته لاحقاً لدراسة تغيرات الدالة."

---
