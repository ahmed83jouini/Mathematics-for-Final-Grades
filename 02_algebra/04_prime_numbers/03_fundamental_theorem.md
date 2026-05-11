---
layout: lesson
title: "المبرهنة الأساسية في الحساب"
subtitle: "تفكيك العدد إلى عوامله الأولية"
permalink: /fundamental_theorem/
mathJax: true
lessonID: "prime-03"

previous_url: "/primes_sieve/"
next_url: "/divisors_multiples/"

elements:
  - h3: "1. نص المبرهنة"
  - parags:
      - rtl: "كل عدد طبيعي $n$ أكبر تماماً من $1$ يمكن كتابته على شكل جداء عوامل أولية."
      - rtl: "هذه الكتابة <b>وحيدة</b> (باستثناء ترتيب العوامل). ونسميها التحليل إلى عوامل أولية."
      - center: "$n = p_1^{\\alpha_1} \\times p_2^{\\alpha_2} \\times \\dots \\times p_k^{\\alpha_k}$"

  - h3: "2. طريقة التحليل (العمودية)"
  - parags:
      - rtl: "لتحليل عدد، نقسمه على أصغر عدد أولي يقبل القسمة عليه، ثم نقسم الحاصل على أصغر عدد أولي وهكذا حتى نصل إلى العدد 1."
      - rtl: "<b>مثال:</b> تحليل العدد 60:"
      - rtl: "• $60 \\div 2 = 30$"
      - rtl: "• $30 \\div 2 = 15$"
      - rtl: "• $15 \\div 3 = 5$"
      - rtl: "• $5 \\div 5 = 1$"
      - center: "$60 = 2^2 \\times 3 \\times 5$"

  - h3: "3. الأهمية الرياضية"
  - parags:
      - rtl: "هذا التفكيك هو المفتاح لحساب القواسم، المضاعفات، وتبسيط الجذور والكسور."

  - graph:
      id: "factor-tree-viz"
      data-graph-config: >
        {
          "type": "tree-diagram",
          "root": 60,
          "levels": [
            {"node": 60, "children": [2, 30]},
            {"node": 30, "children": [2, 15]},
            {"node": 15, "children": [3, 5]}
          ],
          "annotations": [{"label": "الأطراف النهائية (Leaves) هي دائماً أعداد أولية"}]
        }

  - NB:
      title: "ملاحظة:"
      type: "info"
      NBs:
        - rtl: "تخيل الأعداد الأولية كأنها 'ذرات' كيميائية، والتحليل هو 'الصيغة الجزيئية' للعدد. لا يمكن لعددين مختلفين امتلاك نفس التفكيك."
---
