---
layout: lesson
title: "خوارزمية إقليدس والـ PGCD"
subtitle: "البحث عن القاسم المشترك الأكبر بنجاعة"
permalink: /pgcd_algorithm/
mathJax: true
lessonID: "arith-05"

previous_url: "/periodic_powers/"
next_url: "/coprime_numbers/"

elements:
  - h3: "1. القاسم المشترك الأكبر (PGCD)"
  - parags:
      - rtl: "القاسم المشترك الأكبر لعددين صحيحين $a$ و $b$ (غير معدومين) هو أكبر عدد صحيح يقسمهما معاً، ونرمز له بـ $PGCD(a, b)$."

  - h4: "خواص هامة:"
  - parags:
      - rtl: "$PGCD(a, b) = PGCD(b, r)$ حيث $r$ هو باقي القسمة الإقليدية لـ $a$ على $b$."
      - rtl: "$PGCD(a, b) = PGCD(a, a-b)$."

  - h3: "2. خوارزمية إقليدس (القسمات المتتالية)"
  - parags:
      - rtl: "تعتمد الخوازمية على تكرار القسمة الإقليدية حتى نصل إلى باقي معدوم. <b>الـ PGCD هو آخر باقي غير معدوم</b>."
      - rtl: "<b>مثال:</b> حساب $PGCD(252, 105)$:"
      - center: "$252 = 105 \\times 2 + 42$"
      - center: "$105 = 42 \\times 2 + 21$"
      - center: "$42 = 21 \\times 2 + 0$"
      - rtl: "آخر باقي غير معدوم هو 21، إذن: $PGCD(252, 105) = 21$."

  - h3: "3. الخواص الجبرية للـ PGCD"
  - parags:
      - rtl: "• $PGCD(ka, kb) = k \\times PGCD(a, b)$ (حيث $k$ عدد طبيعي)."
      - rtl: "• إذا كان $d = PGCD(a, b)$، فإنه يوجد عددان $a'$ و $b'$ أوليان فيما بينهما بحيث:"
      - center: "$a = da' \\quad \\text{و} \\quad b = db'$"

  - graph-container:
      id: "euclidean-algorithm-viz"
      data-graph-config: >
        {
          "type": "rect-filling",
          "width": 252,
          "height": 105,
          "step_labels": ["42", "21"],
          "annotations": [{"label": "الـ PGCD هو طول ضلع أكبر مربع يمكنه ملء المستطيل تماماً"}]
        }

  - NB:
      title: "نصيحة الأرتيزان:"
      type: "info"
      NBs:
        - rtl: "خوارزمية إقليدس هي المفتاح الذي سيفتح لنا باب <b>مبرهنة بيزو</b> لاحقاً. تعلم كيف تكتبها بشكل عكسي (Remonter l'algorithme) للحصول على المعاملات."
---
