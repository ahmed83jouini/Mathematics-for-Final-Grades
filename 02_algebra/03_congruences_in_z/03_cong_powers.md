---
layout: lesson
title: "تلاؤم الموافقات مع القوى"
subtitle: "التعامل مع الأسس الطبيعية"
permalink: /cong_powers/
mathJax: true
lessonID: "cong-03"

previous_url: "/cong_properties/"
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

  - graph-container:
      id: "power-reduction"
      data-graph-config: >
        {
          "type": "flow-diagram",
          "steps": [
            {"label": "الأساس (a)"},
            {"label": "تبسيط الأساس إلى (b)"},
            {"label": "رفع (b) للأس k"},
            {"label": "النتيجة النهائية"}
          ],
          "annotations": [{"label": "التبسيط قبل التربيع أو التكعيب يوفر جهداً هائلاً"}]
        }

  - NB:
      title: "تنبيه الأرتيزان:"
      type: "danger"
      NBs:
        - rtl: "تذكر دائماً: نحن نبسط <b>الأساس</b> فقط. <b>الأس</b> (الرقم العلوي) لا يمكن تعويضه بباقي قسمته مباشرة؛ سنتعلم كيفية التعامل معه في درس 'الدوريات'."
---
