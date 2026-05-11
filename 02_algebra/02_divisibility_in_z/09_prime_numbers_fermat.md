---
layout: lesson
title: "الأعداد الأولية ومبرهنة فيرما"
subtitle: "اللبنات الأساسية للأعداد الصحيحة"
permalink: /prime_numbers_fermat/
mathJax: true
lessonID: "arith-09"

previous_url: "/gauss_theorem/"
next_url: "/prime_factorization/"

elements:
  - h3: "1. تعريف العدد الأولي"
  - parags:
      - rtl: "العدد الأولي هو كل عدد طبيعي يقبل <b>قاسمين فقط</b>: الواحد ونفسه."
      - rtl: "<b>ملاحظة:</b> العدد 1 ليس أولياً، والعدد 2 هو العدد الأولي الزوجي الوحيد."

  - h3: "2. مبرهنة فيرما الصغرى (Petit Théorème de Fermat)"
  - parags:
      - rtl: "تعتبر من أقوى الأدوات في الموافقات. إذا كان $p$ عدداً أولياً و $a$ عدداً صحيحاً لا يقبل القسمة على $p$، فإن:"
      - center: "$a^{p-1} \\equiv 1 \\pmod{p}$"

  - h4: "مثال سريع:"
  - parags:
      - rtl: "باقي قسمة $2^6$ على $7$ (بما أن 7 أولي و 2 لا يقسمه):"
      - center: "$2^{7-1} = 2^6 = 64 \\equiv 1 \\pmod{7}$"

  - graph-container:
      id: "primes-sieve"
      data-graph-config: >
        {
          "type": "sieve-of-eratosthenes",
          "limit": 30,
          "annotations": [{"label": "الأعداد الأولية هي التي تبقت بعد تصفية المضاعفات"}]
        }

  - NB:
      title: "فائدة المبرهنة:"
      type: "info"
      NBs:
        - rtl: "تساعد مبرهنة فيرما في تبسيط الأسس الضخمة جداً عندما يكون الترديد عدداً أولياً."
---
