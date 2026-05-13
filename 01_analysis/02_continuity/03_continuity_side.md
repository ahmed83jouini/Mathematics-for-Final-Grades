---
layout: lesson
title: "الاستمرارية على اليمين وعلى اليسار"
permalink: /continuity_side/
mathJax: true
graph: true
lessonID: "cont-side"

previous_title: "الاستمرارية عند نقطة"
previous_url: /continuity_at_point/
next_title: "الاستمرارية على مجال"
next_url: /continuity_interval/

elements:
  - h3: "1. متى نحتاج لدراسة الاستمرارية من الجهتين؟"
    id: "when-side-cont"

  - parags:
      - rtl: "نحتاج لهذا النوع من الدراسة عندما تتغير عبارة الدالة عند وصولها للقيمة $a$. هنا لا يكفي حساب نهاية واحدة، بل يجب التأكد من أن 'القفزة' غير موجودة."

  - h3: "2. شروط الاستمرارية الكاملة"
    id: "side-conditions"

  - parags:
      - rtl: "تكون الدالة $f$ مستمرة عند العدد $a$ إذا وفقط إذا كانت:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الشرط"
          - th: "التعبير الرياضي"
        - - td: "1. مستمرة على اليمين"
          - td: "$\\lim\\limits_{x \\to a^+} f(x) = f(a)$"
        - - td: "2. مستمرة على اليسار"
          - td: "$\\lim\\limits_{x \\to a^-} f(x) = f(a)$"
        - - td: "3. النتيجة"
          - td: "النهاية يميناً = النهاية يساراً = الصورة"

  - h3: "3. مثال توضيحي (الدالة المنشطرة)"
    id: "split-example"

  - parags:
      - rtl: "الدالة <b> الدستوري أو المنشطرة</> كترجمة مباشرة ل split-function، هي دالة بأكثر من عبارة جبرية على مجالات مختلفة."
      - rtl: "لتكن الدالة $f$ المعرفة بـ:
      - center: $f(x) = \\begin{cases} x+1$ \\text{    ,   } x \\ge 1. \\\\ f(x) = x^2 \\text{    ,   } x < 1. \\end{cases}$"

  - tableLines:
      dir: rtl
      lines:
        - - th: "المرحلة"
          - th: "الحساب"
          - th: "النتيجة"
        - - td: "الصورة $f(1)$"
          - td: "$1 + 1 = 2$"
          - td: "موجودة (من العبارة الأولى)"
        - - td: "النهاية يميناً"
          - td: "$\\lim\\limits_{x \\to 1^+} (x+1) = 2$"
          - td: "تساوي الصورة"
        - - td: "النهاية يساراً"
          - td: "$\\lim\\limits_{x \\to 1^-} (x^2) = 1$"
          - td: "لا تساوي الصورة"

  - NB:
      type: success
      title: "خلاصة:"
      NBs:
        - rtl: " الدالة $f(x)$ مستمرة على اليمين عند $1$ لكنها غير مستمرة على اليسار، وبالتالي هي <strong>غير مستمرة</strong> عند $1$ (يوجد انقطاع في الرسم)."

  - h3: "4. تطبيقات عملية"
    id: "app-side-cont"

  - exemple:
      title: "1.4. دراسة استمرارية دالة تتضمن القيمة المطلقة"
      exemID: "ex-side-001"
  - exemple:
      title: "2.4.تعيين قيمة وسيط حقيقي $k$ لجعل الدالة مستمرة"
      exemID: "ex-side-002"
---
