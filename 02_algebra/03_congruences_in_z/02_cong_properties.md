---
layout: lesson
title: "الخواص الأساسية للموافقات"
subtitle: "الجمع، الطرح، والضرب في Z"
permalink: /cong_properties/
mathJax: true
lessonID: "cong-02"

previous_url: "/cong_definition/"
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

  - graph-container:
      id: "congruence-ops"
      data-graph-config: >
        {
          "type": "operation-flow",
          "operation": "multiplication",
          "steps": [
            {"label": "17 mod 5 = 2"},
            {"label": "22 mod 5 = 2"},
            {"label": "الناتج: 2 * 2 = 4"}
          ],
          "annotations": [{"label": "التعويض بالبواقي يختصر الحسابات المعقدة"}]
        }

  - NB:
      title: "قاعدة ذهبية:"
      type: "success"
      NBs:
        - rtl: "في حساب الموافقات، هدفك دائماً هو <b>تصغير الأعداد</b>. قبل أن تضرب أو تجمع، عوض كل عدد بباقي قسمته أولاً لتسهل على نفسك المأمورية."
---
