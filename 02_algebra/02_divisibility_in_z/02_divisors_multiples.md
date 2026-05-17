---
layout: lesson
title: "القواسم والمضاعفات وخواصها"
subtitle: "علاقة القابلية وبنية الأعداد"
permalink: /divisors_multiples/
mathJax: true
graph: true
lessonID: "arith-02"

previous_title: "المبحث 1: القسمة الإقليدية في Z"
previous_url: "/euclidean_division/"
next_title: "المبحث 3: الموافقات في Z (التعريف والخواص)"
next_url: "/congruences_basics/"

elements:
  - h3: "1. التعريف"
  - parags:
      - rtl: "نقول أن العدد الصحيح غير المعدوم $b$ <b>قاسم</b> للعدد الصحيح $a$ (أو $a$ مضاعف لـ $b$) إذا وجد عدد صحيح $k$ بحيث:"
      - center: "$a = k \\times b$"
      - rtl: "ونرمز لذلك بالرمز: $b \\mid a$."

  - h3: "2. الخواص الأساسية"
  - parags:
      - rtl: "تعتبر هذه الخواص <b>أدوات الصيانة</b> التي نستخدمها في البراهين:"
      - rtl: "• <b>التعدي:</b> إذا كان $a \\mid b$ و $b \\mid c$ فإن $a \\mid c$."
      - rtl: "• <b>القواسم والجمع:</b> إذا كان $d$ يقسم $a$ ويقسم $b$، فإن $d$ يقسم أي تشكيلة خطية منهما $(ma + nb)$."
      - center: "$d \\mid a \\text{ و } d \\mid b \\implies d \\mid (ma + nb)$"
      - rtl: "• <b>خاصية الحصر:</b> إذا كان $b \\mid a$ و $a \\neq 0$، فإن $|b| \\leq |a|$."

  - h3: "3. البحث عن قواسم عدد طبيعي"
  - parags:
      - rtl: "لإيجاد مجموعة قواسم عدد $n$، نختبر قابليته للقسمة على الأعداد التي مربعاتها أقل من أو تساوي $n$."
      - rtl: "<b>مثال:</b> قواسم العدد 12 هي: $\\{1, 2, 3, 4, 6, 12\\}$."

  - graph:
      id: "divisors-grid"
      class: "graph-container"
      xDomain: [-1, 7]
      yDomain: [-1, 5]
      elements:
        # الشبكة التوضيحية لتفكيك العدد 12 (التوزيع الأول: 4 × 3)
        # الصف الأول
        - { type: "point", x: 0, y: 3, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 1, y: 3, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 2, y: 3, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 3, y: 3, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        # الصف الثاني
        - { type: "point", x: 0, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 1, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 2, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 3, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        # الصف الثالث
        - { type: "point", x: 0, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 1, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 2, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        - { type: "point", x: 3, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 2 }
        # إطار المضلع المحيط بالشبكة لإظهار المساحة المقسمة بالتساوي 4x3
        - { type: "line", points: [[-0.3, 3.3], [3.3, 3.3]], color: "gray", dash: 2 }
        - { type: "line", points: [[3.3, 3.3], [3.3, 0.7]], color: "gray", dash: 2 }
        - { type: "line", points: [[3.3, 0.7], [-0.3, 0.7]], color: "gray", dash: 2 }
        - { type: "line", points: [[-0.3, 0.7], [-0.3, 3.3]], color: "gray", dash: 2 }
        # نصوص توضيحية هندسية مرئية للطلبّة
        - { type: "text", content: "توزيع منتظم: 4 أعمدة × 3 أسطر = 12", x: 0, y: 4, color: "#168574" }
        - { type: "text", content: "القاسم يقسم العدد إلى أجزاء متساوية تماماً دون باقٍ", x: 0, y: -0.5, color: "#eee" }

  - NB:
      title: "ملاحظة هامة:"
      type: "info"
      NBs:
        - rtl: "العدد <b>1</b> يقسم جميع الأعداد الصحيحة."
        - rtl: "العدد <b>0</b> لا يقسم أي عدد باستثناء نفسه (في بعض السياقات)، لكن جميع الأعداد تقسم 0 لأن $0 = n \\times 0$."
---
