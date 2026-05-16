---
layout: lesson
title: "المتتاليات المحدودة"
subtitle: "الأسوار الرياضية: القيد العلوي والقيد السفلي"
permalink: /bounded_sequences/
mathJax: true
lessonID: "seq-08"

previous_title: "البرهان بالتراجع"
previous_url: "/induction_proof/"
next_title: "مجموع حدود متتالية"
next_url: "/sequences_sum/"

elements:
  - h3: "1. المتتالية المحدودة من الأعلى"
  - parags:
      - rtl: "نقول أن المتتالية $(u_n)$ محدودة من الأعلى إذا وجد عدد حقيقي $M$ بحيث:"
      - center: "$u_n \\leq M$ لكل عدد طبيعي $n$"
      - rtl: "يسمى العدد $M$ **عنصراً حاداً من الأعلى** (Majorant)."

  - h3: "2. المتتالية المحدودة من الأسفل"
  - parags:
      - rtl: "نقول أن المتتالية $(u_n)$ محدودة من الأسفل إذا وجد عدد حقيقي $m$ بحيث:"
      - center: "$u_n \\geq m$ لكل عدد طبيعي $n$"
      - rtl: "يسمى العدد $m$ <b> عنصراً حاداً من الأسفل</b> (Minorant)."

  - h3: "3. المتتالية المحدودة"
  - parags:
      - rtl: "تكون المتتالية <b>محدودة</b> إذا كانت محدودة من الأعلى ومن الأسفل في آن واحد، أي:"
      - center: "$m \\leq u_n \\leq M$"

  - graph:
      id: "bounded-viz"
      class: "graph-container"
      xDomain: [-1, 8]
      yDomain: [-1, 5]
      elements:
        - { type: "function", fn: "4", dash: 2, color: "red"}
        - { type: "text", content: "M (سقف)", x: 1, y: 4.3, color: "red"}
        - { type: "function", fn: "1", dash: 2}
        - { type: "text", content: "m (أرضية)", x: 1, y: 0.7, color: "blue"}
        - { type: " point", x: 0, y: 1.5, size: 1}
        - { type: "point", x: 1, y: 3.2, size: 1}
        - { type: "point", x: 2, y: 2.1, size: 1}
        - { type: "point", x: 3, y: 3.8, size: 1}
        - { type: "point", x: 4, y: 1.2, size: 1}
        - { type: "point", x: 5, y: 2.5, size: 1}
        - { type: "point", x: 6, y: 3.5, size: 1}
        - { type: "text", content: "الحدود محصورة بين السقف والأرضية.", x: 0.2, y: 5}

  - NB:
      title: "علاقة هامة (مبرهنة التقارب):"
      type: "danger"
      NBs:
        - rtl: "كل متتالية <b>متزايدة</b> ومحدودة من <b> الأعلى</b> هي متتالية <b>متقاربة</b>."
        - rtl: "كل متتالية <b>متناقصة</b> ومحدودة من <b>الأسفل</b> هي متتالية <b>متقاربة</b>."
---
