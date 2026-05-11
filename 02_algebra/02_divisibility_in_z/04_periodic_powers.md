---
layout: lesson
title: "دوريات قوى عدد طبيعي"
subtitle: "اكتشاف التكرار المنتظم للبواقي"
permalink: /periodic_powers/
mathJax: true
lessonID: "arith-04"

previous_url: "/congruences_basics/"
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
  - tableLines:
      dir: rtl
      lines:
        - - th: "قيمة $n$"
          - td: "$4k$"
          - td: "$4k+1$"
          - td: "$4k+2$"
          - td: "$4k+3$"
        - - th: "باقي قسمة $3^n$ على $10$"
          - td: "$1$"
          - td: "$3$"
          - td: "$9$"
          - td: "$7$"

  - h3: "3. التعامل مع الأسس الضخمة"
  - parags:
      - rtl: "لحساب باقي قسمة $3^{2026}$ على $10$، نقسم الأس 2026 على الدور 4:"
      - center: "$2026 = 4 \\times 506 + 2$"
      - rtl: "بما أن الباقي هو 2، فإننا ننظر إلى الخانة $4k+2$ في الجدول:"
      - center: "$3^{2026} \\equiv 3^2 \\equiv 9 \\pmod{10}$"

  - graph-container:
      id: "power-cycle-viz"
      data-graph-config: >
        {
          "type": "cycle-diagram",
          "modulo": 10,
          "sequence": [1, 3, 9, 7],
          "annotations": [{"label": "الدورة تتكرر كل 4 خطوات"}]
        }

  - NB:
      title: "قاعدة ذهبية:"
      type: "success"
      NBs:
        - rtl: "بواقي قسمة قوى عدد طبيعي $a$ على $b$ هي دائماً <b>دورية</b> ابتداءً من رتبة معينة."
        - rtl: "دائماً ابحث عن أول $k$ يجعل $a^k \\equiv 1 \\pmod{b}$ لتسهيل الحساب."
---
