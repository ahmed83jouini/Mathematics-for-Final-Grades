---
layout: lesson
title: "المبحث 1: تعريف العدد الأولي وخواصه"
subtitle: "حجر الزاوية في نظرية الأعداد"
permalink: /prime_definition/
mathJax: true
graph: true
lessonID: "prime-01"

previous_title: "خارطة طريق الأعداد الأولية"
previous_url: "/prime_numbers_hub/"
next_title: "المبحث 2: كيفية اختبار أولية عدد (غربال إراتوستين)"
next_url: "/primes_sieve/"

elements:
  - h3: "1. التعريف الرياضي"
  - parags:
      - rtl: "العدد الأولي هو كل عدد طبيعي <b>أكبر تماماً من 1</b>، يقبل قاسمين موجبین فقط هما: الواحد والعدد نفسه."
      - rtl: "• مجموعة الأعداد الأولية تبدأ بـ: $P = \\{2, 3, 5, 7, 11, 13, 17, ...\\}$."

  - h3: "2. ملاحظات هامة"
  - parags:
      - rtl: "• العدد <b>1 ليس أولياً</b> لأنه يملك قاسمًا واحداً فقط (وهو نفسه)."
      - rtl: "• العدد <b>2 هو العدد الأولي الزوجي الوحيد</b>؛ وكل الأعداد الأولية الأخرى هي أعداد فردية حتماً."
      - rtl: "• كل عدد طبيعي أكبر تماماً من 1 هو إما عدد أولي، أو عدد مؤلف (مركب) يمكن تفكيكه وبناؤه من الأعداد الأولية."

  - h3: "3. الخصائص الأساسية"
  - parags:
      - rtl: "• إذا كان $p$ عدداً أولياً، فإنه أولي مع كل عدد طبيعي لا يقسمه، أي: $PGCD(p, a) = 1$."
      - rtl: "• مبرهنة إقليدس (قاعدة الجداء): إذا كان $p$ عدداً أولياً يقسم الجداء $ab$، فإن $p$ يقسم $a$ أو $p$ يقسم $b$."

  - graph:
      id: "prime-vs-composite"
      class: "graph-container"
      xDomain: [-3, 13]
      yDomain: [-2, 5]
      elements:
        # جناح الأعداد الأولية (عدم إمكانية التجزئة المصفوفية)
        - { type: "line", points: [[0, 3], [4, 3]], color: "#168574" }
        - { type: "line", points: [[4, 3], [4, 4.5]], color: "#168574" }
        - { type: "line", points: [[4, 4.5], [0, 4.5]], color: "#168574" }
        - { type: "line", points: [[0, 4.5], [0, 3]], color: "#168574" }
        - { type: "text", content: "الأعداد الأولية: {2, 3, 5, 7}", x: 0.2, y: 3.6, color: "#168574" }
        
        # نقاط تمثيل هندسي للعدد 5 (بصمة خطية غير قابلة للرصف المستطيلي)
        - { type: "point", x: 0.5, y: 2.2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 1.2, y: 2.2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 1.9, y: 2.2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 2.6, y: 2.2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 3.3, y: 2.2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "text", content: "العدد 5: خطي صلب (قواسمه: 1، 5)", x: 0.2, y: 1.5, color: "gray" }

        # جناح الأعداد المركبة (بنية هندسية مصفوفية منتظمة)
        - { type: "line", points: [[7, 3], [11, 3]], color: "blue" }
        - { type: "line", points: [[11, 3], [11, 4.5]], color: "blue" }
        - { type: "line", points: [[11, 4.5], [7, 4.5]], color: "blue" }
        - { type: "line", points: [[7, 4.5], [7, 3]], color: "blue" }
        - { type: "text", content: "الأعداد المركبة: {4, 6, 8, 9}", x: 7.2, y: 3.6, color: "blue" }

        # شبكة تمثيل هندسي للعدد 6 (رصف مصفوفي متكامل 2×3)
        - { type: "point", x: 7.5, y: 2.2, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "point", x: 8.5, y: 2.2, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "point", x: 9.5, y: 2.2, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "point", x: 7.5, y: 1.6, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "point", x: 8.5, y: 1.6, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "point", x: 9.5, y: 1.6, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "text", content: "العدد 6: مصفوفة مرنة (2 × 3)", x: 7.2, y: 0.9, color: "gray" }

        # نص توضيحي بيداغوجي سفلي
        - { type: "text", content: "العدد الأولي هو لبنة أساسية صلبة لا يمكن إعادة رصفها في أبعاد مصفوفية داخلية", x: -1.5, y: -0.7, color: "#eee" }

  - NB:
      title: "تذكير الأرتيزان:"
      type: "info"
      NBs:
        - rtl: "لا تخلط أبداً بين العدد الأولي والعدد الفردي؛ فمثلاً العدد 9 فردي لكنه ليس أولياً (لأنه يقبل القسمة على 3 ولـه 3 قواسم)، بينما 2 زوجي وهو رأس الأعداد الأولية."
---
