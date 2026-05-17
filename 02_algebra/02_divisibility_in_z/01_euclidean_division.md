---
layout: lesson
title: "القسمة الإقليدية في Z"
subtitle: "البنية الأساسية للأعداد الصحيحة"
permalink: /euclidean_division/
mathJax: true
graph: true
lessonID: "arith-01"

previous_title: "خارطة طريق الأعداد والحساب"
previous_url: "/divisibility_in_Z_hub/"
next_title: "القواسم والمضاعفات وخواصها"
next_url: "/divisors_multiples/"

elements:
  - h3: "1. نص المبرهنة"
  - parags:
      - rtl: "من أجل كل عدد صحيح $a$ وعدد صحيح طبيعي غير معدوم $b$، يوجد زوج <b>وحيد</b> من الأعداد الصحيحة $(q, r)$ بحيث:"
      - center: "$a = bq + r$"
      - rtl: "مع الشرط الضروري والأساسي: $0 \\leq r < b$."
      - rtl: "حيث يسمى $q$ <b>الحاصل</b> و $r$ <b>الباقي</b>."

  - h3: "2. أهمية شرط الباقي"
  - parags:
      - rtl: "شرط الباقي $0 \\leq r < b$ هو ما يضمن <b>وحدانية</b> الحل. بدون هذا الشرط، يمكن إيجاد مالا نهاية من التمثيلات للعدد $a$."
      - rtl: "<b>مثال:</b> عند قسمة $17$ على $5$:"
      - center: "$17 = 5 \\times 3 + 2$"
      - rtl: "هنا $r=2$ وهو يحقق $0 \\leq 2 < 5$."

  - h3: "3. القسمة في حالة الأعداد السالبة"
  - parags:
      - rtl: "يجب الحذر عند التعامل مع $a < 0$. الباقي $r$ يجب أن يبقى دائماً <b>موجباً</b>."
      - rtl: "<b>مثال:</b> قسمة $-17$ على $5$:"
      - center: "$-17 = 5 \\times (-4) + 3$"
      - rtl: "نلاحظ أننا اخترنا $-4$ وليس $-3$ ليكون الباقي $3$ (موجب)."

  - graph:
      id: "div-viz"
      class: "graph-container"
      xDomain: [-25, 5]
      yDomain: [-2, 4]
      elements:
        # المحور الأفقي العددي
        - { type: "line", points: [[-25, 0], [5, 0]], color: "gray" }
        # تمثيل المضاعف الأدنى ومضاعف التجاوز والمقسوم
        - { type: "point", x: -20, y: 0, strokeColor: "blue", fillColor: "blue", size: 2 }
        - { type: "text", content: "5 × (-4) = -20", x: -20, y: -0.8, color: "blue" }
        - { type: "point", x: -17, y: 0, strokeColor: "red", fillColor: "red", size: 2 }
        - { type: "text", content: "a = -17", x: -17, y: 0.8, color: "red" }
        - { type: "point", x: -15, y: 0, strokeColor: "gray", fillColor: "none", size: 2 }
        - { type: "text", content: "5 × (-3) = -15", x: -15, y: -0.8, color: "gray" }
        # سهم يوضح المسافة الموجبة للباقي (من -20 إلى -17 طولها 3)
        - { type: "line", points: [[-20, 1.5], [-17, 1.5]], color: "green", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "الباقي r = 3 (المسافة الموجبة)", x: -18.5, y: 2, color: "green" }

  - NB:
      title: "تنبيه تقني:"
      type: "danger"
      NBs:
        - rtl: "في البرمجة (مثل Python أو C)، قد تختلف نتيجة باقي القسمة للأعداد السالبة. لكن في <b>الرياضيات</b>، الباقي $r$ دائماً محصور بين $0$ و $b-1$."
---
