---
layout: lesson
title: "المبحث 7: مبرهنة فيرما الصغرى في الموافقات"
subtitle: "تبسيط القوى مع الترديدات الأولية"
permalink: /fermat_congruence/
mathJax: true
graph: true
lessonID: "cong-07"

previous_title: "المبحث 6: حساب باقي قسمة أعداد ضخمة"
previous_url: "/big_numbers_calc/"
next_title: "المبحث 8: حل المعادلات من الدرجة الأولى في الموافقات"
next_url: "/cong_equations/"

elements:
  - h3: "1. نص المبرهنة (Fermat's Little Theorem)"
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

  - graph:
      id: "fermat-logic"
      class: "graph-container"
      xDomain: [-2, 10]
      yDomain: [-1, 5]
      elements:
        # المربع العلوي الأيسر: الشرط الأول
        - { type: "line", points: [[0, 3.5], [3, 3.5]], color: "gray" }
        - { type: "line", points: [[3, 3.5], [3, 4.5]], color: "gray" }
        - { type: "line", points: [[3, 4.5], [0, 4.5]], color: "gray" }
        - { type: "line", points: [[0, 4.5], [0, 3.5]], color: "gray" }
        - { type: "text", content: "الشرط: p أولي", x: 0.4, y: 3.9, color: "blue" }

        # المربع السفلي الأيسر: الشرط الثاني
        - { type: "line", points: [[0, 1.5], [3, 1.5]], color: "gray" }
        - { type: "line", points: [[3, 1.5], [3, 2.5]], color: "gray" }
        - { type: "line", points: [[3, 2.5], [0, 2.5]], color: "gray" }
        - { type: "line", points: [[0, 2.5], [0, 1.5]], color: "gray" }
        - { type: "text", content: "الشرط: a لا يقسم p", x: 0.2, y: 1.9, color: "blue" }

        # أسهم الالتقاء نحو بوابة الاستنتاج
        - { type: "line", points: [[3, 4], [4.5, 3.2]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[3, 2], [4.5, 2.8]], color: "orange", arrowStart: false, arrowEnd: true }

        # مربع النتيجة المركزية الكبرى
        - { type: "line", points: [[4.5, 2.3], [9, 2.3]], color: "#168574" }
        - { type: "line", points: [[9, 2.3], [9, 3.7]], color: "#168574" }
        - { type: "line", points: [[9, 3.7], [4.5, 3.7]], color: "#168574" }
        - { type: "line", points: [[4.5, 3.7], [4.5, 2.3]], color: "#168574" }
        - { type: "text", content: "a^(p-1) ≡ 1 [p]", x: 5.2, y: 2.9, color: "#168574" }

        # نص توضيحي بيداغوجي سفلي عن الفائدة الإجرائية للمبرهنة
        - { type: "text", content: "المفتاح المباشر لاختزال الأسس العملاقة خطوة واحدة نحو الواحد المرجعي", x: 0, y: -0.5, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "warning"
      NBs:
        - rtl: "لا يمكن استخدام هذه المبرهنة إذا كان الترديد عدداً غير أولي (مثل 4، 6، 9...)."
---
