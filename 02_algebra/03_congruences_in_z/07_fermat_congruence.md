---
layout: lesson
title: "مبرهنة فيرما الصغرى"
subtitle: "تبسيط القوى مع الترديدات الأولية"
permalink: /fermat_congruence/
mathJax: true
lessonID: "cong-07"

previous_url: "/big_numbers_calc/"
next_url: "/cong_equations/"

elements:
  - h3: "1. نص المبرهنة"
  - parags:
      - rtl: "ليكن $p$ عدداً أولياً، و $a$ عدداً صحيحاً لا يقبل القسمة على $p$ (أي $PGCD(a, p) = 1$)."
      - rtl: "تقول المبرهنة أن:"
      - center: "$a^{p-1} \\equiv 1 \\pmod{p}$"

  - h3: "2. صيغة بديلة"
  - parags:
      - rtl: "من أجل كل عدد صحيح $a$، فإن:"
      - center: "$a^p \\equiv a \\pmod{p}$"

  - h3: "3. مثال تطبيقي"
  - parags:
      - rtl: "لحساب باقي قسمة $3^{2026}$ على $7$:"
      - rtl: "بما أن 7 عدد أولي و 3 لا يقسمه، فحسب فيرما:"
      - center: "$3^{7-1} = 3^6 \\equiv 1 \\pmod{7}$"
      - rtl: "نقسم الأس 2026 على 6: $2026 = 6 \\times 337 + 4$."
      - center: "$3^{2026} = (3^6)^{337} \\times 3^4 \\equiv 1^{337} \\times 81 \\pmod{7}$"
      - center: "$81 \\equiv 4 \\pmod{7} \\implies 3^{2026} \\equiv 4 \\pmod{7}$"

  - graph-container:
      id: "fermat-logic"
      data-graph-config: >
        {
          "type": "math-logic-map",
          "condition": "p is prime",
          "action": "a^(p-1) mod p = 1",
          "benefit": "reduces large exponents quickly"
        }

  - NB:
      title: "تنبيه:"
      type: "warning"
      NBs:
        - rtl: "لا يمكن استخدام هذه المبرهنة إذا كان الترديد عدداً غير أولي (مثل 4، 6، 9...)."
---
