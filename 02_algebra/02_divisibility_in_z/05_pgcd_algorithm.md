---
layout: lesson
title: "المبحث 5: خوارزمية إقليدس والـ PGCD"
subtitle: "البحث عن القاسم المشترك الأكبر بنجاعة"
permalink: /pgcd_algorithm/
mathJax: true
graph: true
lessonID: "arith-05"

previous_title: "المبحث 4: دوريات قوى عدد طبيعي وبواقي القسمة"
previous_url: "/periodic_powers/"
next_title: "المبحث 6: الأعداد الأولية فيما بينها"
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

  - graph:
      id: "euclidean-algorithm-viz"
      class: "graph-container"
      xDomain: [-10, 270]
      yDomain: [-10, 120]
      elements:
        # رسم المستطيل الكبير (252 × 105) لتمثيل خوارزمية ملء المستطيل بالمربعات هندسياً
        - { type: "line", points: [[0, 0], [252, 0]], color: "gray" }
        - { type: "line", points: [[252, 0], [252, 105]], color: "gray" }
        - { type: "line", points: [[252, 105], [0, 105]], color: "gray" }
        - { type: "line", points: [[0, 105], [0, 0]], color: "gray" }
        # المربع الأول (105 × 105)
        - { type: "line", points: [[105, 0], [105, 105]], color: "blue", dash: 1 }
        - { type: "text", content: "مربع 105", x: 30, y: 50, color: "blue" }
        # المربع الثاني (105 × 105) ابتداءً من 105 إلى 210
        - { type: "line", points: [[210, 0], [210, 105]], color: "blue", dash: 1 }
        - { type: "text", content: "مربع 105", x: 135, y: 50, color: "blue" }
        # المستطيل المتبقي (42 × 105) من 210 إلى 252، نملأه بمربعين (42 × 42)
        # المربع الأول في الباقي (42 × 42) في الأسفل
        - { type: "line", points: [[210, 42], [252, 42]], color: "orange", dash: 1 }
        - { type: "text", content: "42", x: 225, y: 20, color: "orange" }
        # المربع الثاني في الباقي (42 × 42) في الأعلى
        - { type: "line", points: [[210, 84], [252, 84]], color: "orange", dash: 1 }
        - { type: "text", content: "42", x: 225, y: 60, color: "orange" }
        # الجزء الأخير المتبقي (42 × 21) يملأه تماماً مربعان طول ضلعهما 21 وهو الـ PGCD
        - { type: "text", content: "21", x: 225, y: 92, color: "#168574" }
        - { type: "text", content: "الـ PGCD هو ضلع أصغر مربع يملأ المساحة تماماً: 21", x: 10, y: -8, color: "#eee" }

  - NB:
      title: "نصيحة الأرتيزان:"
      type: "info"
      NBs:
        - rtl: "خوارزمية إقليدس هي المفتاح الذي سيفتح لنا باب <b>مبرهنة بيزو</b> لاحقاً. تعلم كيف تكتبها بشكل عكسي (Remonter l'algorithme) للحصول على المعاملات."
---
