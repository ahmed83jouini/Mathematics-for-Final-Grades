---
layout: lesson
title: "القسمة الإقليدية في Z"
subtitle: "البنية الأساسية للأعداد الصحيحة"
permalink: /euclidean_division/
mathJax: true
lessonID: "arith-01"

previous_url: "/arithmetic_hub/"
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

  - graph-container:
      id: "div-viz"
      data-graph-config: >
        {
          "xDomain": [-20, 20],
          "yDomain": [-2, 2],
          "type": "number-line",
          "markers": [
            {"x": -17, "label": "a = -17", "color": "red"},
            {"x": -20, "label": "5 * (-4)", "color": "blue"},
            {"x": -15, "label": "5 * (-3)", "color": "gray"}
          ],
          "annotations": [{"label": "الباقي هو المسافة الموجبة من المضاعف الأقل"}]
        }

  - NB:
      title: "تنبيه تقني:"
      type: "danger"
      NBs:
        - rtl: "في البرمجة (مثل Python أو C)، قد تختلف نتيجة باقي القسمة للأعداد السالبة. لكن في <b>الرياضيات</b>، الباقي $r$ دائماً محصور بين $0$ و $b-1$."
---
