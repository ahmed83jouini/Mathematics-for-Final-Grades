---
layout: lesson
title: "المبحث 1: تعريف الموافقة بترديد n"
subtitle: "الأساس الرياضي للحساب النمطي"
permalink: /cong_definition/
mathJax: true
graph: true
lessonID: "cong-01"

previous_title: "خارطة طريق حساب الموافقات"
previous_url: "/congruences_hub/"
next_title: "المبحث 2: الخواص الأساسية (الجمع والضرب)"
next_url: "/cong_properties/"

elements:
  - h3: "1. التعريف الرياضي"
  - parags:
      - rtl: "ليكن $n$ عدداً طبيعياً أكبر تماماً من $1$. نقول أن العددين الصحيحين $a$ و $b$ <b>متوافقان بترديد $n$</b> إذا وفقط إذا كان لهما نفس باقي القسمة الإقليدية على $n$."
      - rtl: "ونعبر عن ذلك بالرمز:"
      - center: "$a \\equiv b \\pmod{n}$"

  - h3: "2. التكافؤات الأساسية"
  - parags:
      - rtl: "القول بأن $a \\equiv b \\pmod{n}$ يكافئ منطقياً ورياضياً:"
      - rtl: "• الفرق $(a - b)$ يقبل القسمة على $n$ (أي $n$ قاسم لـ $a-b$)."
      - rtl: "• يوجد عدد صحيح $k$ بحيث: $a = b + kn$."

  - h3: "3. حالات خاصة"
  - parags:
      - rtl: "• كل عدد $a$ يوافق باقي قسمته $r$ بترديد $n$:"
      - center: "$a \\equiv r \\pmod{n} \\quad \\text{حيث} \\quad 0 \\le r < n$"
      - rtl: "• إذا كان $a$ مضاعفاً لـ $n$، فإن:"
      - center: "$a \\equiv 0 \\pmod{n}$"

  - graph:
      id: "congruence-mod"
      class: "graph-container"
      xDomain: [-2, 15]
      yDomain: [-2, 3]
      elements:
        # رسم المحور العددي المستقيم لتوضيح القفزات المنتظمة للترديد 5 (Modulo Visualization)
        - { type: "line", points: [[-2, 0], [15, 0]], color: "gray" }
        
        # النقطة المرجعية الأولى 2
        - { type: "point", x: 2, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "2", x: 2, y: -0.6, color: "#168574" }
        
        # قفزة بطول 5 للوصول إلى 7
        - { type: "line", points: [[2, 0.5], [7, 0.5]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "+5", x: 4.2, y: 0.8, color: "blue" }
        - { type: "point", x: 7, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "7", x: 7, y: -0.6, color: "#168574" }
        
        # قفزة ثانية بطول 5 للوصول إلى 12
        - { type: "line", points: [[7, 0.5], [12, 0.5]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "+5", x: 9.2, y: 0.8, color: "blue" }
        - { type: "point", x: 12, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "12", x: 12, y: -0.6, color: "#168574" }
        
        # نصوص بيداغوجية توضح أن المسافة بين النماذج ثابتة وهي مضاعفات الترديد
        - { type: "text", content: "2 ≡ 7 ≡ 12 [5] لأن الفروق بينها من مضاعفات 5 تماماً", x: 0, y: 1.8, color: "#eee" }

  - NB:
      title: "تذكير الأرتيزان:"
      type: "info"
      NBs:
        - rtl: "الموافقة هي علاقة <b>تكافؤ</b>؛ فهي انعكاسية ($a \\equiv a$)، وتناظرية (إذا كان $a \\equiv b$ فإن $b \\equiv a$)، ومتعدية."
---
