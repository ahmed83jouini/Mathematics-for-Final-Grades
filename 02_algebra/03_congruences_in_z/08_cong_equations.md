---
layout: lesson
title: "المعادلات من الدرجة الأولى"
subtitle: "البحث عن المجهول x في Z"
permalink: /cong_equations/
mathJax: true
lessonID: "cong-08"

previous_url: "/fermat_congruence/"
next_url: "/divisibility_proof/"

elements:
  - h3: "1. الشكل العام للمعادلة"
  - parags:
      - rtl: "تكتب المعادلة من الدرجة الأولى بمجهول واحد $x$ في $\\mathbb{Z}$ على الشكل:"
      - center: "$ax \\equiv b \\pmod{n}$"
      - rtl: "حيث $a$ و $b$ أعداد صحيحة و $n$ عدد طبيعي أكبر من 1."

  - h3: "2. شرط وجود الحلول"
  - parags:
      - rtl: "تقبل المعادلة $ax \\equiv b \\pmod{n}$ حلولاً إذا وفقط إذا كان القاسم المشترك الأكبر لـ $a$ و $n$ يقسم العدد $b$."
      - center: "$PGCD(a, n) \\mid b$"
      - rtl: "إذا كان $PGCD(a, n) = 1$، فإن المعادلة تقبل حلاً وحيداً بترديد $n$."

  - h3: "3. طريقة الحل"
  - parags:
      - rtl: "• <b>التبسيط:</b> نحاول تبسيط $a$ و $b$ بترديد $n$."
      - rtl: "• <b>البحث عن حل خاص:</b> نجرب قيماً صغيرة لـ $x$ أو نستخدم مبرهنة بيزو."
      - rtl: "• <b>مثال:</b> حل المعادلة $3x \\equiv 1 \\pmod{5}$:"
      - rtl: "نبحث عن مضاعف لـ 5 إذا أضفناه لـ 1 يقبل القسمة على 3: $1 + 5 = 6$."
      - center: "$3x \\equiv 6 \\pmod{5}$"
      - rtl: "بما أن $PGCD(3, 5) = 1$، يمكننا القسمة على 3:"
      - center: "$x \\equiv 2 \\pmod{5}$"
      - rtl: "إذن الحلول هي من الشكل: $x = 5k + 2$ (حيث $k \\in \\mathbb{Z}$)."

  - graph-container:
      id: "linear-congruence"
      data-graph-config: >
        {
          "type": "solution-set-viz",
          "equation": "3x = 1 (mod 5)",
          "solutions": [2, 7, 12, 17],
          "annotations": [{"label": "الحلول تتكرر بانتظام كل 5 خطوات"}]
        }

  - NB:
      title: "تنبيه:"
      type: "danger"
      NBs:
        - rtl: "لا تحاول أبداً القسمة في الموافقات إلا إذا كان العدد الذي تقسم عليه أولياً مع الترديد."
---
