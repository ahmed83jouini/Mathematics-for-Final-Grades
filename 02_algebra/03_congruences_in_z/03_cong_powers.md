---
layout: lesson
title: "المبحث 3: تلاؤم الموافقات مع القوى"
subtitle: "التعامل مع الأسس الطبيعية"
permalink: /cong_powers/
mathJax: true
graph: true
lessonID: "cong-03"

previous_title: "المبحث 2: الخواص الأساسية (الجمع والضرب)"
previous_url: "/cong_properties/"
next_title: "المبحث 4: دراسة دوريات بواقي القوى"
next_url: "/cong_cycles/"

elements:
  - h3: "1. الخاصية الأساسية"
  - parags:
      - rtl: "إذا كان $a \\equiv b \\pmod{n}$، فإن من أجل كل عدد طبيعي $k$ يكون:"
      - center: "$a^k \\equiv b^k \\pmod{n}$"
      - rtl: "هذه الخاصية تعني أننا نستطيع تعويض الأساس <b>بباقي قسمته</b> قبل رفع الأس."

  - h3: "2. القوة السحرية للرقمين 1 و -1"
  - parags:
      - rtl: "أهم استراتيجية في الموافقات هي محاولة الوصول إلى الباقي $1$ أو $-1$ لأن رفعهما لأي أس يبقى سهلاً:"
      - rtl: "• $1^k \\equiv 1 \\pmod{n}$"
      - rtl: "• $(-1)^k \\equiv 1 \\pmod{n}$ إذا كان $k$ زوجياً."
      - rtl: "• $(-1)^k \\equiv -1 \\pmod{n}$ إذا كان $k$ فردياً."

  - h3: "3. مثال تطبيقي"
  - parags:
      - rtl: "لنحسب باقي قسمة $4^{10}$ على $3$:"
      - rtl: "بما أن $4 \\equiv 1 \\pmod{3}$، فإن:"
      - center: "$4^{10} \\equiv 1^{10} \\pmod{3} \\implies 4^{10} \\equiv 1 \\pmod{3}$"
      - rtl: "<b>مثال آخر:</b> باقي قسمة $2^{10}$ على $3$:"
      - rtl: "بما أن $2 \\equiv -1 \\pmod{3}$، فإن:"
      - center: "$2^{10} \\equiv (-1)^{10} \\pmod{3} \\implies 2^{10} \\equiv 1 \\pmod{3}$ (لأن 10 زوجي)."

  - graph:
      id: "power-reduction"
      class: "graph-container"
      xDomain: [-2, 11]
      yDomain: [-1, 4]
      elements:
        # مخطط مسار اختزال القوى (Power Reduction Flowchart)
        # المرحلة 1: الأساس الأصلي الضخم
        - { type: "line", points: [[0, 2], [2, 2]], color: "gray" }
        - { type: "text", content: "الأساس a", x: 0.2, y: 2.3, color: "gray" }
        
        # سهم التصفية الأول (التعويض بالباقي)
        - { type: "line", points: [[2, 2], [4, 2]], color: "blue", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "تبسيط الأساس", x: 2.1, y: 2.5, color: "blue" }
        
        # المرحلة 2: الأساس المصغر المستقر (ويفضل 1 أو -1)
        - { type: "point", x: 4, y: 2, strokeColor: "orange", fillColor: "orange", size: 3 }
        - { type: "text", content: "الباقي b", x: 3.7, y: 1.4, color: "orange" }
        
        # سهم التصفية الثاني (رفع الأس للعدد المصغر)
        - { type: "line", points: [[4, 2], [7, 2]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "text", content: "رفع الأس k", x: 4.8, y: 2.5, color: "orange" }
        
        # المرحلة 3: الناتج النهائي بأقل جهد حسابي
        - { type: "point", x: 7, y: 2, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "النتيجة bᵏ", x: 7.2, y: 2.2, color: "#168574" }
        
        # نص توضيحي بيداغوجي لترسيخ القاعدة
        - { type: "text", content: "التبسيط قبل التربيع أو التكعيب يوفر جهداً هائلاً ويمنع تضخم الأعداد", x: -0.5, y: -0.5, color: "#eee" }

  - NB:
      title: "تنبيه الأرتيزان:"
      type: "danger"
      NBs:
        - rtl: "تذكر دائماً: نحن نبسط <b>الأساس</b> فقط. <b>الأس</b> (الرقم العلوي) لا يمكن تعويضه بباقي قسمته مباشرة؛ سنتعلم كيفية التعامل معه في درس 'الدوريات'."
---
