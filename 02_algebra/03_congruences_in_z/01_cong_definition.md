---
layout: lesson
title: "تعريف الموافقة بترديد n"
subtitle: "الأساس الرياضي للحساب النمطي"
permalink: /cong_definition/
mathJax: true
lessonID: "cong-01"

previous_url: "/congruences_hub/"
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

  - graph-container:
      id: "congruence-mod"
      data-graph-config: >
        {
          "type": "modulo-visualization",
          "modulo": 5,
          "values": [2, 7, 12],
          "annotations": [{"label": "الأعداد 2، 7، 12 كلها متوافقة بترديد 5"}]
        }

  - NB:
      title: "تذكير الأرتيزان:"
      type: "info"
      NBs:
        - rtl: "الموافقة هي علاقة <b>تكافؤ</b>؛ فهي انعكاسية ($a \\equiv a$)، وتناظرية (إذا كان $a \\equiv b$ فإن $b \\equiv a$)، ومتعدية."
---
