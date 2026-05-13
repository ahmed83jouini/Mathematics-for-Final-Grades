---
layout: lesson
title: "الاستمرارية عند نقطة"
permalink: /continuity_at_point/
mathJax: true
graph: true
lessonID: "cont-pt"

previous_title: "المفهوم الهندسي"
previous_url: /continuity_concept/
next_title: "الاستمرارية يميناً ويساراً"
next_url: /continuity_side/

elements:
  - h3: "1. الشروط الثلاثة للاستمرارية"
    id: "cont-conditions"

  - parags:
      - rtl: "نقول عن الدالة $f$ أنها مستمرة عند العدد $a$ إذا وفقط إذا تحققت الشروط التالية معاً:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الشرط"
          - th: "التفسير الرياضي"
          - th: "المعنى بلساننا"
        - - th: "1. الوجود"
          - td: "$a \\in D_f$"
          - td: "الدالة معرفة عند $a$ (توجد صورة $f(a)$)."
        - - th: "2. النهاية"
          - td: "$\\lim\\limits_{x \\to a} f(x) = L$"
          - td: "النهاية موجودة وتساوي عدداً حقيقياً $L$."
        - - th: "3. التطابق"
          - td: "$\\lim\\limits_{x \\to a} f(x) = f(a)$"
          - td: "النهاية تساوي الصورة (الطريق موصول)." 

  - h3: "2. متى تفشل الاستمرارية؟"
    id: "cont-failure"

  - parags:
      - rtl: "تكون الدالة <strong> غير مستمرة</strong> عند $a$ (منفصلة) في الحالات التالية:"
      - rtl: "- إذا كانت الدالة غير معرفة عند $a$.
      - rtl: "- إذا كانت النهاية عند $a$ تؤول للانهاية.
      - rtl: "- إذا كانت النهاية موجودة لكنها لا تساوي الصورة."

  - h3: "3. مثال تطبيقي (فحص الاستمرارية)"
    id: "cont-ex-point"

  - parags:
      - rtl: "لتكن الدالة:"
      - center: "$f(x) = \\begin{cases} \\frac{x^2 - 4}{x - 2} \\text{ عندما: } x \\neq 2 \\\\ f(2) = 4 \\end{cases}$."
      - rtl: "هل $f$ مستمرة عند $2$؟"

  - tableLines:
      dir: rtl
      lines:
        - - th: "المرحلة"
          - th: "الحساب"
          - th:  "النتيجة"
        - - th: "حساب الصورة"
          - td: "$f(2) = 4$"
          - td: "موجودة"
        - - th: "حساب النهاية"
          - td: "$\\lim\\limits_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim\\limits_{x \\to 2} (x + 2) = 4$"
          - td: "موجودة"
        - - td: "المقارنة"
          - td: "$\\lim\\limits_{x \\to 2} f(x) = f(2) = 4$"
          - td: "الشرط محقق"

  - NB:
      type: success
      title: "خلاصة"
      NBs:
        - rtl: "الدالة مستمرة عند $2$ لأننا ملأنا 'الثقب' الموجود في الدالة الناطقة بإعطائه قيمة الصورة المناسبة."

  - h3: "4. تطبيقات حسابية"
    id: "app-cont-pt"

  - exemple:
      title: "1.4. فحص استمرارية دالة ناطقة عند قيمة ممنوعة"
      exemID: "ex-cont-001"
  - exemple:
      title: "2.4. إيجاد قيمة مجهول لكي تكون الدالة مستمرة"
      exemID: "ex-cont-002"
---
