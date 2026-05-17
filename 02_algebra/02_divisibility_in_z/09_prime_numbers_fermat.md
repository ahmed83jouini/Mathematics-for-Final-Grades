---
layout: lesson
title: "المبحث 9: الأعداد الأولية ومبرهنة فيرما الصغرى"
subtitle: "اللبنات الأساسية للأعداد الصحيحة"
permalink: /prime_numbers_fermat/
mathJax: true
graph: true
lessonID: "arith-09"

previous_title: "المبحث 8: مبرهنة غوص (Gauss) وتطبيقاتها"
previous_url: "/gauss_theorem/"
next_title: "المبحث 10: التحليل إلى عوامل أولية وعدد القواسم"
next_url: "/prime_factorization/"

elements:
  - h3: "1. تعريف العدد الأولي (Prime Number)"
  - parags:
      - rtl: "العدد الأولي هو كل عدد طبيعي يقبل <b>قاسمين فقط</b>: الواحد ونفسه."
      - rtl: "<b>ملاحظة:</b> العدد 1 ليس أولياً، والعدد 2 هو العدد الأولي الزوجي الوحيد."

  - h3: "2. مبرهنة فيرما الصغرى (Fermat's Little Theorem)"
  - parags:
      - rtl: "تعتبر من أقوى الأدوات في الموافقات. إذا كان $p$ عدداً أولياً و $a$ عدداً صحيحاً لا يقبل القسمة على $p$، فإن:"
      - center: "$a^{p-1} \\equiv 1 \\pmod{p}$"

  - h4: "مثال سريع:"
  - parags:
      - rtl: "باقي قسمة $2^6$ على $7$ (بما أن 7 أولي و 2 لا يقسمه):"
      - center: "$2^{7-1} = 2^6 = 64 \\equiv 1 \\pmod{7}$"

  - graph:
      id: "primes-sieve"
      class: "graph-container"
      xDomain: [-1, 6]
      yDomain: [-1, 6]
      elements:
        # تمثيل غربال إراتوستين للأعداد الطبيعية حتى 25 (Sieve of Eratosthenes)
        # الصف الأول (1 إلى 5)
        - { type: "text", content: "1", x: 0, y: 4, color: "gray" }
        - { type: "point", x: 1, y: 4, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "2", x: 1.2, y: 4.2, color: "#168574" }
        - { type: "point", x: 2, y: 4, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "3", x: 2.2, y: 4.2, color: "#168574" }
        - { type: "text", content: "4 (✕)", x: 3, y: 4, color: "gray" }
        - { type: "point", x: 4, y: 4, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "5", x: 4.2, y: 4.2, color: "#168574" }

        # الصف الثاني (6 إلى 10)
        - { type: "text", content: "6 (✕)", x: 0, y: 3, color: "gray" }
        - { type: "point", x: 1, y: 3, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "7", x: 1.2, y: 3.2, color: "#168574" }
        - { type: "text", content: "8 (✕)", x: 2, y: 3, color: "gray" }
        - { type: "text", content: "9 (✕)", x: 3, y: 3, color: "gray" }
        - { type: "text", content: "10 (✕)", x: 4, y: 3, color: "gray" }

        # الصف الثالث (11 إلى 15)
        - { type: "point", x: 0, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "11", x: 0.2, y: 2.2, color: "#168574" }
        - { type: "text", content: "12 (✕)", x: 1, y: 2, color: "gray" }
        - { type: "point", x: 2, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "13", x: 2.2, y: 2.2, color: "#168574" }
        - { type: "text", content: "14 (✕)", x: 3, y: 2, color: "gray" }
        - { type: "text", content: "15 (✕)", x: 4, y: 2, color: "gray" }

        # الصف الرابع (16 إلى 20)
        - { type: "text", content: "16 (✕)", x: 0, y: 1, color: "gray" }
        - { type: "point", x: 1, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "17", x: 1.2, y: 1.2, color: "#168574" }
        - { type: "text", content: "18 (✕)", x: 2, y: 1, color: "gray" }
        - { type: "point", x: 3, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "19", x: 3.2, y: 1.2, color: "#168574" }
        - { type: "text", content: "20 (✕)", x: 4, y: 1, color: "gray" }

        # نص توضيحي للغربال
        - { type: "text", content: "الأعداد البارزة باللون الأخضر هي لبنات أولية لا تقبل التصفية", x: -0.5, y: -0.5, color: "#eee" }

  - NB:
      title: "فائدة المبرهنة:"
      type: "info"
      NBs:
        - rtl: "تساعد مبرهنة فيرما في تبسيط الأسس الضخمة جداً عندما يكون الترديد عدداً أولياً."
---
