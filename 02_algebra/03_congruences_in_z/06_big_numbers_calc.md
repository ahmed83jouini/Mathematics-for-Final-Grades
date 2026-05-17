---
layout: lesson
title: "المبحث 6: حساب باقي قسمة أعداد ضخمة"
subtitle: "منهجية التفكيك والتبسيط"
permalink: /big_numbers_calc/
mathJax: true
graph: true
lessonID: "cong-06"

previous_title: "المبحث 5: البحث عن الباقي الصغير (القيم السالبة)"
previous_url: "/negative_reminders/"
next_title: "المبحث 7: مبرهنة فيرما الصغرى في الموافقات"
next_url: "/fermat_congruence/"

elements:
  - h3: "1. تبسيط الأساس أولاً"
  - parags:
      - rtl: "القاعدة الأولى والأساسية هي تبسيط ما بداخل الأقواس (الأساس) قبل التفكير في الأس."
      - rtl: "<b>مثال:</b> لحساب $1447^{2026} \\pmod{7}$:"
      - center: "$1447 = 7 \\times 206 + 5 \\implies 1447 \\equiv 5 \\pmod{7}$"
      - rtl: "أو الأفضل استخدام الباقي السالب القريب: $1447 \\equiv -2 \\pmod{7}$."

  - h3: "2. استغلال القوى الشهيرة"
  - parags:
      - rtl: "نبحث دائماً عن قوة للأساس تعطي باقياً يساوي $1$ أو $-1$."
      - rtl: "<b>مثال:</b> حساب $2^{30} \\pmod{7}$:"
      - center: "$2^3 = 8 \\equiv 1 \\pmod{7}$"
      - center: "$2^{30} = (2^3)^{10} \\equiv 1^{10} \\equiv 1 \\pmod{7}$"

  - h3: "3. التعامل مع المجموع والجداء"
  - parags:
      - rtl: "في حالة وجود عبارة مثل $A = a^n + b^m + c$، نحسب باقي كل طرف على حدة ثم نجمع البواقي في النهاية."

  - graph:
      id: "big-number-strategy"
      class: "graph-container"
      xDomain: [-2, 10]
      yDomain: [-1, 5]
      elements:
        # المربع الأول: تبسيط الأساس
        - { type: "line", points: [[0, 3.5], [3, 3.5]], color: "gray" }
        - { type: "line", points: [[3, 3.5], [3, 4.5]], color: "gray" }
        - { type: "line", points: [[3, 4.5], [0, 4.5]], color: "gray" }
        - { type: "line", points: [[0, 4.5], [0, 3.5]], color: "gray" }
        - { type: "text", content: "1. اختزال الأساس", x: 0.3, y: 3.9, color: "blue" }

        # سهم الرابط الأول
        - { type: "line", points: [[1.5, 3.5], [1.5, 2.5]], color: "orange", arrowStart: false, arrowEnd: true }

        # المربع الثاني: اختيار الباقي الأمثل
        - { type: "line", points: [[0, 1.5], [3, 1.5]], color: "gray" }
        - { type: "line", points: [[3, 1.5], [3, 2.5]], color: "gray" }
        - { type: "line", points: [[3, 2.5], [0, 2.5]], color: "gray" }
        - { type: "line", points: [[0, 2.5], [0, 1.5]], color: "gray" }
        - { type: "text", content: "2. الباقي الأصغر", x: 0.3, y: 1.9, color: "blue" }

        # سهم الرابط الأفقي لمركز القرار
        - { type: "line", points: [[3, 2], [5, 2]], color: "orange", arrowStart: false, arrowEnd: true }

        # المربع الثالث: البحث عن المحطة الإيجابية 1 أو -1
        - { type: "line", points: [[5, 1.5], [8, 1.5]], color: "gray" }
        - { type: "line", points: [[8, 1.5], [8, 2.5]], color: "gray" }
        - { type: "line", points: [[8, 2.5], [5, 2.5]], color: "gray" }
        - { type: "line", points: [[5, 2.5], [5, 1.5]], color: "gray" }
        - { type: "text", content: "3. قوة تعطي ±1", x: 5.3, y: 1.9, color: "orange" }

        # سهم الرابط الأخير صعوداً للنتيجة
        - { type: "line", points: [[6.5, 2.5], [6.5, 3.5]], color: "orange", arrowStart: false, arrowEnd: true }

        # المربع الرابع: معالجة الأس
        - { type: "line", points: [[5, 3.5], [8, 3.5]], color: "#168574" }
        - { type: "line", points: [[8, 3.5], [8, 4.5]], color: "#168574" }
        - { type: "line", points: [[8, 4.5], [5, 4.5]], color: "#168574" }
        - { type: "line", points: [[5, 4.5], [5, 3.5]], color: "#168574" }
        - { type: "text", content: "4. تفكيك الأس", x: 5.4, y: 3.9, color: "#168574" }

        # نص توضيحي سفلي للخطوات المتسلسلة
        - { type: "text", content: "الخوارزمية المنهجية لتفكيك وتطويع الأعداد الضخمة دون تضخم حسابي", x: 0, y: -0.5, color: "#eee" }

  - NB:
      title: "تنبيه تقني:"
      type: "info"
      NBs:
        - rtl: "إذا كان الباقي النهائي سالباً، أضف إليه الترديد مرة واحدة ليصبح موجباً."
        - rtl: "مثال: $A \\equiv -3 \\pmod{5} \\implies A \\equiv (-3+5) \\equiv 2 \\pmod{5}$."
---
