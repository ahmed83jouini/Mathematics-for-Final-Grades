---
layout: lesson
title: "النهايات المثلثية (الدوال الجيبية)"
permalink: /trig_limits/
mathJax: true
graph: true
lessonID: "trig-limits"

previous_title: "حالات اللانهاية"
previous_url: /indet_inf_inf/
next_title: "مبرهنة الحصر (الدرك)"
next_url: /squeeze_theorem/

elements:
  - h3: "1. سلوك الدوال المثلثية عند اللانهاية"
    id: "trig-nature"

  - parags:
      - rtl: "الدوال $\\sin(x)$ و $\\cos(x)$ دوال دورية، قيمها محصورة دائماً بين $-1$ و $1$. لذلك، عندما يؤول $x$ إلى اللانهاية، لا تستقر الدالة عند قيمة معينة، فنقول أن
        <strong>النهاية غير موجودة</strong>."

  - h3: "2. النهايات الشهيرة (عند الصفر)"
    id: "famous-trig"

  - parags:
      - rtl: "هناك نهايات أساسية نعتبرها 'حقائق' رياضية وننطلق منها لحل أعقد التمارين:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "النهاية الشهيرة"
          - th: "القيمة"
          - th: "التفسير الهندسي"
        - - td: "$\\lim\\limits_{x \\to 0} \\frac{\\sin(x)}{x}$"
          - td: "$1$"
          - td: "عند الصفر، يتصرف الجيب تماماً كالمستقيم $y=x$."
        - - td: "$\\lim\\limits_{x \\to 0} \\frac{\\tan(x)}{x}$"
          - td: "$1$"
          - td: "الظل والزاوية يتطابقان بجوار الصفر."
        - - td: "$\\lim\\limits_{x \\to 0} \\frac{1 - \\cos(x)}{x^2}$"
          - td: "$\\frac{1}{2}$"
          - td: "نهاية هامة تُستنتج من القوانين المثلثية."

  - h3: "3. تقنية تغيير المتغير"
    id: "variable-change"

  - parags:
      - rtl: "إذا كانت النهاية تؤول إلى عدد $a$ غير الصفر، نلجأ غالباً لفرض $X = x - a$ لنعيد النهاية إلى 'الحالة الشهيرة' عند الصفر."

  - tableLines:
      dir: rtl
      lines:
        - - th: "المرحلة"
          - th: "الإجراء"
        - - th: "1. الملاحظة"
          - td: "إذا وجدت $\\sin(u)$ و $u$ يؤول للصفر."
        - - th: "2. الهدف"
          - td: "يجب توفير نفس المقدار $u$ في المقام."
        - - th: "3. التنفيذ"
          - td: "نضرب ونقسم في $u$ لنحصل على الشكل $\\frac{\\sin(u)}{u}$."

  - h3: "4. مثال تطبيقي مشروح"
    id: "trig-example"

  - parags:
      - rtl: "حساب: $\\lim\\limits_{x \\to 0} \\frac{\\sin(3x)}{x}$"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الخطوات"
          - th: "الحساب"
        - - td: "نقص المقام"
          - td: "المقام يحتاج إلى $3$ ليطابق ما داخل الجيب."
        - - td: "الموازنة"
          - td: "$\\lim\\limits_{x \\to 0} 3 \\times \\frac{\\sin(3x)}{3x}$"
        - - td: "التطبيق"
          - td: "$3 \\times 1 = 3$"

  - NB:
      title: " تحذير:"
      NBs:
        - rtl: " هذه النهايات صالحة فقط عندما تكون الزاوية مقدرة بـ <strong>الراديان </stong>. إذا كانت بالدرجات، يجب التحويل أولاً."

  - h3: "5. للإستزادة:"
    id: "trig-adv"

  - exemple:
      title: "1.5. نهاية تتضمن الظل والجيب معاً"
      exemID: "ex-trig-001"
  - exemple:
      title: "2.5. استخدام دستور ضعف الزاوية لفك النهاية"
      exemID: "ex-trig-002"
---
