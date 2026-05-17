---
layout: lesson
title: "المبحث 8: حل المعادلات من الدرجة الأولى في الموافقات"
subtitle: "البحث عن المجهول x في Z"
permalink: /cong_equations/
mathJax: true
graph: true
lessonID: "cong-08"

previous_title: "المبحث 7: مبرهنة فيرما الصغرى في الموافقات"
previous_url: "/fermat_congruence/"
next_title: "المبحث 9: إثبات قابلية القسمة على عدد ثابت"
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
      - rtl: "بما أن $PGCD(3, 5) = 1$، يمكننا القسمة على 3 حسب مبرهنة غوص:"
      - center: "$x \\equiv 2 \\pmod{5}$"
      - rtl: "إذن الحلول هي من الشكل: $x = 5k + 2$ (حيث $k \\in \\mathbb{Z}$)."

  - graph:
      id: "linear-congruence"
      class: "graph-container"
      xDomain: [-2, 16]
      yDomain: [-2, 3]
      elements:
        # رسم المحور الرياضي المستقيم لبيان تباعد الحلول الدوري (Solution Set Visualization)
        - { type: "line", points: [[-2, 0], [16, 0]], color: "gray" }
        
        # الحل النموذجي الأول (الأساسي الخاص): x = 2
        - { type: "point", x: 2, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "x₀ = 2", x: 1.8, y: -0.6, color: "#168574" }
        
        # قفزة دورية منتظمة بمقدار الترديد 5 للوصول للحل التالي 7
        - { type: "line", points: [[2, 0.5], [7, 0.5]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "+5 (k=1)", x: 4, y: 0.8, color: "blue" }
        - { type: "point", x: 7, y: 0, strokeColor: "orange", fillColor: "orange", size: 3 }
        - { type: "text", content: "7", x: 7, y: -0.6, color: "orange" }
        
        # قفزة دورية ثانية للوصول للحل 12
        - { type: "line", points: [[7, 0.5], [12, 0.5]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "+5 (k=2)", x: 9, y: 0.8, color: "blue" }
        - { type: "point", x: 12, y: 0, strokeColor: "orange", fillColor: "orange", size: 3 }
        - { type: "text", content: "12", x: 12, y: -0.6, color: "orange" }
        
        # نص توضيحي هندسي للمجموعة الحلولية المتكررة
        - { type: "text", content: "نقاط الحلول تتكرر بانتظام ميكانيكي هندسي على طول المحور بفارق خطوة الترديد (5k)", x: -1, y: 1.8, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "danger"
      NBs:
        - rtl: "لا تحاول أبداً القسمة في الموافقات إلا إذا كان العدد الذي تقسم عليه أولياً مع الترديد."
---
