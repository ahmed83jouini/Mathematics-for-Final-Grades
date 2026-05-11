---
layout: lesson
title: "القواسم والمضاعفات وخواصها"
subtitle: "علاقة القابلية وبنية الأعداد"
permalink: /divisors_multiples/
mathJax: true
lessonID: "arith-02"

previous_url: "/euclidean_division/"
next_url: "/congruences_basics/"

elements:
  - h3: "1. التعريف"
  - parags:
      - rtl: "نقول أن العدد الصحيح غير المعدوم $b$ <b>قاسم</b> للعدد الصحيح $a$ (أو $a$ مضاعف لـ $b$) إذا وجد عدد صحيح $k$ بحيث:"
      - center: "$a = k \\times b$"
      - rtl: "ونرمز لذلك بالرمز: $b \\mid a$."

  - h3: "2. الخواص الأساسية"
  - parags:
      - rtl: "تعتبر هذه الخواص "أدوات الصيانة" التي نستخدمها في البراهين:"
      - rtl: "• <b>التعدي:</b> إذا كان $a \\mid b$ و $b \\mid c$ فإن $a \\mid c$."
      - rtl: "• <b>القواسم والجمع:</b> إذا كان $d$ يقسم $a$ ويقسم $b$، فإن $d$ يقسم أي تشكيلة خطية منهما $(ma + nb)$."
      - center: "$d \\mid a \\text{ و } d \\mid b \\implies d \\mid (ma + nb)$"
      - rtl: "• <b>خاصية الحصر:</b> إذا كان $b \\mid a$ و $a \\neq 0$، فإن $|b| \\leq |a|$."

  - h3: "3. البحث عن قواسم عدد طبيعي"
  - parags:
      - rtl: "لإيجاد مجموعة قواسم عدد $n$، نختبر قابليته للقسمة على الأعداد التي مربعاتها أقل من أو تساوي $n$."
      - rtl: "<b>مثال:</b> قواسم العدد 12 هي: $\\{1, 2, 3, 4, 6, 12\\}$."

  - graph-container:
      id: "divisors-grid"
      data-graph-config: >
        {
          "type": "grid-visualization",
          "total": 12,
          "groups": [
            {"size": 3, "count": 4, "label": "12 = 4 x 3"},
            {"size": 2, "count": 6, "label": "12 = 6 x 2"}
          ],
          "annotations": [{"label": "القاسم يقسم العدد إلى أجزاء متساوية تماماً"}]
        }

  - NB:
      title: "ملاحظة هامة:"
      type: "info"
      NBs:
        - rtl: "العدد <b>1</b> يقسم جميع الأعداد الصحيحة."
        - rtl: "العدد <b>0</b> لا يقسم أي عدد باستثناء نفسه (في بعض السياقات)، لكن جميع الأعداد تقسم 0 لأن $0 = n \\times 0$."
---
