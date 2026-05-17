---
layout: lesson
title: "المبحث 4: دوريات قوى عدد طبيعي وبواقي القسمة"
subtitle: "اكتشاف التكرار المنتظم للبواقي"
permalink: /periodic_powers/
mathJax: true
graph: true
lessonID: "arith-04"

previous_title: "المبحث 3: الموافقات في Z (التعريف والخواص)"
previous_url: "/congruences_basics/"
next_title: "المبحث 5: خوارزمية إقليدس والـ PGCD"
next_url: "/pgcd_algorithm/"

elements:
  - h3: "1. مفهوم الدورية (Périodicité)"
  - parags:
      - rtl: "عند دراسة بواقي قسمة القوى المتتالية $a^n$ على $b$، نلاحظ أن البواقي تبدأ في التكرار بعد عدد معين من الخطوات $k$. هذا العدد $k$ يسمى <b>دور المتتالية</b>."
      - rtl: "<b>مثال:</b> دراسة بواقي قسمة $3^n$ على $10$:"
      - center: "$3^0 \\equiv 1 \\pmod{10}$"
      - center: "$3^1 \\equiv 3 \\pmod{10}$"
      - center: "$3^2 \\equiv 9 \\pmod{10}$"
      - center: "$3^3 \\equiv 27 \\equiv 7 \\pmod{10}$"
      - center: "$3^4 \\equiv 81 \\equiv 1 \\pmod{10}$"
      - rtl: "نلاحظ أننا عدنا للقيمة 1، إذن الدور هو <b>k = 4</b>."

  - h3: "2. جدول البواقي"
  - parags:
      - rtl: "لتلخيص الدراسة، نستخدم جدولاً يربط قيم $n$ بالبواقي الموافقة لها:"

  - table:
      headers: ["قيمة $n$", "$4k$", "$4k+1$", "$4k+2$", "$4k+3$"]
      rows:
          - ["باقي قسمة $3^n$ على $10$", "$1$", "$3$", "$9$", "$7$"]

  - h3: "3. التعامل مع الأسس الضخمة"
  - parags:
      - rtl: "لحساب باقي قسمة $3^{2026}$ على $10$، نقسم الأس 2026 على الدور 4:"
      - center: "$2026 = 4 \\times 506 + 2$"
      - rtl: "بما أن الباقي هو 2، فإننا ننظر إلى الخانة $4k+2$ في الجدول:"
      - center: "$3^{2026} \\equiv 3^2 \\equiv 9 \\pmod{10}$"

  - graph:
      id: "power-cycle-viz"
      class: "graph-container"
      xDomain: [-3, 3]
      yDomain: [-3, 3]
      elements:
        # رسم الحلقة الدورية الرباعية للبواقي (1 -> 3 -> 9 -> 7)
        - { type: "circle", center: [0, 0], radius: 1.8, color: "gray", dash: 2 }
        # الباقي 1
        - { type: "point", x: 1.8, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "1 (n=4k)", x: 2.0, y: 0.2, color: "#168574" }
        # الباقي 3
        - { type: "point", x: 0, y: 1.8, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "text", content: "3 (n=4k+1)", x: -0.5, y: 2.1, color: "blue" }
        # الباقي 9
        - { type: "point", x: -1.8, y: 0, strokeColor: "orange", fillColor: "orange", size: 3 }
        - { type: "text", content: "9 (n=4k+2)", x: -2.8, y: -0.3, color: "orange" }
        # الباقي 7
        - { type: "point", x: 0, y: -1.8, strokeColor: "purple", fillColor: "purple", size: 3 }
        - { type: "text", content: "7 (n=4k+3)", x: -0.5, y: -2.2, color: "purple" }
        # أسهم التوجيه لتوضيح مسار الحركة الدورية
        - { type: "line", points: [[1.3, 1.3], [0.2, 1.7]], color: "green", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[-1.3, 1.3], [-1.7, 0.2]], color: "green", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[-1.3, -1.3], [-0.2, -1.7]], color: "green", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[1.3, -1.3], [1.7, -0.2]], color: "green", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "مسار التكرار الدوري للبواقي (الدور k = 4)", x: -2.5, y: -2.8, color: "#eee" }

  - NB:
      title: "قاعدة ذهبية:"
      type: "success"
      NBs:
        - rtl: "بواقي قسمة قوى عدد طبيعي $a$ على $b$ هي دائماً <b>دورية</b> ابتداءً من رتبة معينة."
        - rtl: "دائماً ابحث عن أول $k$ يجعل $a^k \\equiv 1 \\pmod{b}$ لتسهيل الحساب."
---
