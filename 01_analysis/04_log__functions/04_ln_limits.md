---
layout: lesson
title: "اللوغاريتم: النهايات المرجعية للدالة ln"
permalink: /ln_limits/
mathJax: true
graph: true
lessonID: "ln-limits-base"

# روابط الاتصال
previous_title: "المعادلات والمتراجحات اللوغاريتمية"
previous_url: "/ln_equations/"

next_title: "التزايد المقارن"
next_url: "/ln_growth_comparison/"

elements:
  - h3: "1. النهايات عند أطراف مجال التعريف"
    id: "boundary-limits"

  - parags:
      - rtl: "بما أن الدالة $\\ln$ معرفة على $]0; +\\infty[$، فنحن نهتم بسلوكها عند الصفر (بقيم أكبر) وعند الزائد ما لا نهاية."

  - tableLines:
      dir: ltr
      lines:
        - - th: "النقطة"
          - th: "النهاية المرجعية"
          - th: "التفسير الهندسي"
        - - td: "عند $+\\infty$"
          - td: "$\\lim\\limits_{x \\to +\\infty} \\ln(x) = +\\infty$"
          - td: "فرع قطع مكافئ باتجاه $(Ox)$"
        - - td: "عند $0^+$"
          - td: "$\\lim\\limits_{x \\to 0^+} \\ln(x) = -\\infty$"
          - td: "مستقيم مقارب عمودي معادلته $x=0$"

  - h3: "2. نهايات شهيرة (تُستعمل في التبسيط)"
    id: "special-limits"

  - parags:
      - rtl: "هذه النهايات ناتجة عن العدد المشتق عند $1$، وهي أساسية لإزالة حالات عدم التعيين من الشكل $\\frac{0}{0}$"

  - tableLines:
      dir: ltr
      lines:
        - - td: "1"
          - td: "$\\lim\\limits_{x \\to 1} \\frac{\\ln(x)}{x - 1} = 1$"
        - - td: "2"
          - td: "$\\lim\\limits_{h \\to 0} \\frac{\\ln(1+h)}{h} = 1$"

  - NB:
      title: "تنبيه (السرعة):"
      type: "info"
      NBs:
        - rtl: "الدالة $\\ln$ تؤول إلى $+\\infty$ ببطء شديد جداً مقارنة بالدوال القوية ($x$, $x^2$). هذا الفهم هو مفتاح الدرس القادم (التزايد المقارن)."

  - h3: "3. كيف نتعامل مع النهايات المركبة؟"
    id: "composite-limits"

  - parags:
      - rtl: "لحساب $\\lim \\ln(u(x))$، نحسب أولاً نهاية ما داخل القوس $u(x)$، ثم نطبق نهايات اللوغاريتم المرجعية على النتيجة."

  - tableLines:
      dir: rtl
      lines:
        - - td: "إذا كان $\\lim u(x) = 0^+$"
          - td: "فإن $\\lim \\ln(u(x)) = -\\infty$"
        - - td: "إذا كان $\\lim u(x) = +\\infty$"
          - td: "فإن $\\lim \\ln(u(x)) = +\\infty$"

  - NB:
      type: info
      title: "ليس غير الحفظ، ينفعك!"
      NBs:
        - rtl: "عندما تجد $\\ln(0)$ في مسودتك، تذكر فوراً أن النتيجة هي $-\\infty$. وعندما تجد $\\ln(+\\infty)$، فالنتيجة هي $+\\infty$."

---
