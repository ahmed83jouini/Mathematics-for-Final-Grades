---
layout: lesson
title: "المبحث 2: الخواص الأساسية (الجمع والضرب)"
subtitle: "الجمع، الطرح، والضرب في Z"
permalink: /cong_properties/
mathJax: true
graph: true
lessonID: "cong-02"

previous_title: "المبحث 1: تعريف الموافقة بترديد n"
previous_url: "/cong_definition/"
next_title: "المبحث 3: تلاؤم الموافقات مع القوى"
next_url: "/cong_powers/"

elements:
  - h3: "1. تلاؤم الموافقة مع الجمع والطرح"
  - parags:
      - rtl: "إذا كان لدينا $a \\equiv b \\pmod{n}$ و $c \\equiv d \\pmod{n}$، فإنه يمكننا جمع أو طرح الطرفين مباشرة:"
      - center: "$a + c \\equiv b + d \\pmod{n}$"
      - center: "$a - c \\equiv b - d \\pmod{n}$"
      - rtl: "<b>مثال:</b> إذا كان $x \\equiv 1 \\pmod{5}$ فإن $x + 4 \\equiv 1 + 4 \\equiv 0 \\pmod{5}$."

  - h3: "2. تلاؤم الموافقة مع الضرب"
  - parags:
      - rtl: "تسمح الموافقات بضرب الأطراف في بعضها أو في عدد صحيح $k$ دون أن تتغير صحة العلاقة:"
      - center: "$a \\times c \\equiv b \\times d \\pmod{n}$"
      - center: "$k \\times a \\equiv k \\times b \\pmod{n}$"
      - rtl: "<b>تنبيه:</b> الضرب مسموح دائماً، لكن <b>القسمة</b> ممنوعة إلا بشروط مبرهنة غوص."

  - h3: "3. خاصية التعويض"
  - parags:
      - rtl: "يمكننا تعويض أي عدد بباقي قسمته في أي عبارة تتضمن جمعاً أو ضرباً."
      - rtl: "<b>مثال:</b> لنحسب باقي قسمة $(17 \\times 22)$ على $5$:"
      - rtl: "بما أن $17 \\equiv 2 \\pmod{5}$ و $22 \\equiv 2 \\pmod{5}$، فإن:"
      - center: "$17 \\times 22 \\equiv 2 \\times 2 \\equiv 4 \\pmod{5}$"

  - graph:
      id: "congruence-ops"
      class: "graph-container"
      xDomain: [-2, 10]
      yDomain: [-1, 5]
      elements:
        # رسم مخطط تدفق خطة التعويض الحسابي (Operation Flow Diagram)
        # القناة العلوية: تصفية العدد 17
        - { type: "line", points: [[0, 4], [2, 4]], color: "gray" }
        - { type: "text", content: "17", x: 0.5, y: 4.3, color: "gray" }
        - { type: "line", points: [[2, 4], [4, 3]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "≡ 2 [5]", x: 2.2, y: 3.8, color: "blue" }

        # القناة السفلية: تصفية العدد 22
        - { type: "line", points: [[0, 1], [2, 1]], color: "gray" }
        - { type: "text", content: "22", x: 0.5, y: 1.3, color: "gray" }
        - { type: "line", points: [[2, 1], [4, 2]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "≡ 2 [5]", x: 2.2, y: 1.2, color: "blue" }

        # مركز الدمج والضرب الجدائي للبواقي المصغرة
        - { type: "point", x: 4, y: 2.5, strokeColor: "orange", fillColor: "orange", size: 3 }
        - { type: "text", content: "×", x: 3.9, y: 2.7, color: "orange" }
        - { type: "line", points: [[4, 2.5], [7, 2.5]], color: "#168574", arrowStart: false, arrowEnd: true }
        
        # الناتج النهائي الدقيق والمختصر للمطابقة
        - { type: "text", content: "النتيجة: 2 × 2 = 4", x: 4.5, y: 2.8, color: "#168574" }
        - { type: "text", content: "التعويض بالبواقي يختصر العبارات والجداءات الضخمة مباشرة", x: 0, y: -0.5, color: "#eee" }

  - NB:
      title: "قاعدة ذهبية:"
      type: "success"
      NBs:
        - rtl: "في حساب الموافقات، هدفك دائماً هو <b>تصغير الأعداد</b>. قبل أن تضرب أو تجمع، عوض كل عدد بباقي قسمته أولاً لتسهيل المأمورية."
---
