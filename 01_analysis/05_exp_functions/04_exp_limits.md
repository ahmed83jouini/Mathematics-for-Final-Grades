---
layout: lesson
title: "الأسية: النهايات المرجعية للدالة exp"
permalink: /exp_limits/
mathJax: true
graph: true
lessonID: "exp-limits-base"

# روابط الاتصال
previous_title: "المعادلات والمتراجحات الأسية"
previous_url: "/exp_equations/"

next_title: "التزايد المقارن"
next_url: "/exp_growth_comparison/"

elements:
  - h3: "1. النهايات عند أطراف مجال التعريف"
    id: "boundary-limits-exp"

  - parags:
      - rtl: "بما أن الدالة الأسية معرفة على $\\mathbb{R}$، فنحن نهتم بسلوكها عند $-\\infty$ وعند $+\\infty$."

  - tableLines:
      dir: ltr
      lines:
        - - th: "النقطة"
          - th: "النهاية المرجعية"
          - th: "التفسير الهندسي"
        - - td: "عند $+\\infty$"
          - td: "$\\lim\\limits_{x \\to +\\infty} e^x = +\\infty$"
          - td: "فرع قطع مكافئ باتجاه $(Oy)$"
        - - td: "عند $-\\infty$"
          - td: "$\\lim\\limits_{x \\to -\\infty} e^x = 0$"
          - td: "مستقيم مقارب أفقي معادلته $y=0$ (محور الفواصل)"

  - h3: "2. نهايات شهيرة (العدد المشتق)"
    id: "special-limits-exp"

  - parags:
      - rtl: "هذه النهاية ناتجة عن تعريف العدد المشتق للدالة الأسية عند $x=0$، وهي أساسية لإزالة حالات عدم التعيين من الشكل $\\frac{0}{0}$."

  - tableLines:
      dir: ltr
      lines:
        - - td: "النهاية المرجعية"
          - td: "$\\lim\\limits_{x \\to 0} \\frac{e^x - 1}{x} = 1$"

  - NB:
      title: "تنبيه (الصفر الموجب):"
      type: "info"
      NBs:
        - rtl: "تذكر دائماً أن $e^x$ تؤول إلى $0$ عند $-\\infty$لكنها تبقى دوماً <strong>موجبة</strong> ($0^+$). هذا التدقيق مهم جداً عند دراسة نهايات الدوال الكسرية التي مقامها أسية."

  - h3: "3. نهايات الدوال المركبة $e^{u(x)}$"
    id: "composite-exp-limits"

  - parags:
      - rtl: "لحساب $\\lim e^{u(x)}$، نطبق قاعدة 'نهاية المركب':"

  - tableLines:
      dir: rtl
      lines:
        - - td: "إذا كان $\\lim u(x) = +\\infty$"
          - td: "فإن $\\lim e^{u(x)} = +\\infty$"
        - - td: "إذا كان $\\lim u(x) = -\\infty$"
          - td: "فإن $\\lim e^{u(x)} = 0$"
        - - td: "إذا كان $\\lim u(x) = L$"
          - td: "فإن $\\lim e^{u(x)} = e^L$"

  - notes:
      - rtl: "في المسودة، يمكنك تخيل الأمر كالتالي: $e^{+\\infty} \\to +\\infty$ و $e^{-\\infty} \\to 0$. هذه الصور الذهنية تسهل عليك توقع النتائج بسرعة."

---
