---
layout: lesson
title: "الاستمرارية وصورة مجال"
permalink: /cont_image/
mathJax: true
graph: true
lessonID: "cont-img"

previous_title: "تطبيقات الحصر"
previous_url: /mvt_apps/
next_title: "التمثيل البياني والدالة العكسية"
next_url: /cont_graph/

elements:
  - h3: "1. قاعدة التحويل (صورة مجال)"
    id: "img-rule"

  - parags:
      - rtl: "صورة مجال $I$ بواسطة دالة مستمرة $f$ هي أيضاً مجال $J$. طبيعة هذا المجال (مغلق، مفتوح، أو نصف مفتوح) تعتمد على رتابة الدالة وسلوكها عند النهايات."

  - h3: "2. أثر الرتابة على صورة المجال"
    id: "monotony-effect"

  - parags:
      - rtl: "الرتابة هي التي تحدد ترتيب أطراف المجال الناتج. إليك كيف تتغير الصور حسب اتجاه التغير:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "المجال $I$"
          - th: "إذا كانت $f$ متزايدة تماماً"
          - th: "إذا كانت $f$ متناقصة تماماً"
        - - td: "$[a, b]$"
          - td: "$[f(a), f(b)]$"
          - td: "$[f(b), f(a)]$"
        - - td: "$]a, b[$"
          - td: "$]\\lim\\limits_{x \\to a} f(x), \\lim\\limits_{x \\to b} f(x)[$"
          - td: "$]\\lim\\limits_{x \\to b} f(x), \\lim\\limits_{x \\to a} f(x)[$"
        - - td: "$[a, +\\infty[$"
          - td: "$[f(a), \\lim\\limits_{x \\to +\\infty} f(x)[$"
          - td: "$]\\lim\\limits_{x \\to +\\infty} f(x), f(a)]$"

  - h3: "3. لماذا نغير الترتيب عند التناقص؟"
    id: "why-reverse"

  - parags:
      - rtl: "في الرياضيات، يجب أن يكون الطرف الأصغر دائماً على اليسار. بما أن الدالة المتناقصة تعكس الترتيب، فإن صورة الطرف الأكبر ($b$) تصبح هي القيمة الصغرى، وصورة الطرف الأصغر ($a$) تصبح هي القيمة الكبرى."

  - h3: "4. مثال تطبيقي (من جدول التغيرات)"
    id: "img-example"

  - parags:
      - rtl: "لتكن $f$ دالة مستمرة ومتناقصة تماماً على $]1, +\\infty[$ حيث $\\lim\\limits_{x \\to 1} f(x) = 5$ و $\\lim\\limits_{x \\to +\\infty} f(x) = -\\infty$."

  - tableLines:
      dir: rtl
      lines:
        - - th: "العملية"
          - th: "النتيجة"
        - - th: "تحديد صورة المجال"
          - td: "$f(]1, +\\infty[) = ]\\lim\\limits_{x \\to +\\infty} f(x), \\lim\\limits_{x \to 1} f(x)[$"
        - - th: "التعويض بالقيم"
          - td: "$f(]1, +\\infty[) = ]-\\infty, 5[$"

  - NB:
      title: "تنبيه تقني:"
      NBs:
        - rtl: "إذا كانت الدالة غير رتيبة (تتزايد ثم تتناقص)، فإن صورة المجال هي $[m, M]$ حيث $m$ هي القيمة الدنيا المطلقة و $M$ هي القيمة القصوى المطلقة للدالة على ذلك المجال."

  - h3: "5. تطبيقات بيانية"
    id: "img-app-list"

  - exemple:
      title: "1.5. إيجاد صورة مجال انطلاقاً من منحنى بياني"
      exemID: "ex-img-001"
  - exemple:
      title: "2.5. حل متراجحات باستخدام صورة مجال"
      exemID: "ex-img-002"
---
