---
layout: lesson
title: "المبحث 10: التحليل إلى عوامل أولية وعدد القواسم"
subtitle: "تفكيك العدد إلى لبناته الأساسية"
permalink: /prime_factorization/
mathJax: true
graph: true
lessonID: "arith-10"

previous_title: "المبحث 9: الأعداد الأولية ومبرهنة فيرما الصغرى"
previous_url: "/prime_numbers_fermat/"
next_title: "خارطة طريق حساب الموافقات"
next_url: "/congruences_hub/"

elements:
  - h3: "1. المبرهنة الأساسية في الحساب"
  - parags:
      - rtl: "كل عدد طبيعي $n$ أكبر من $1$ يمكن كتابته بشكل <b>وحيد</b> كجداء عوامل أولية:"
      - center: "$n = p_1^{\\alpha_1} \\times p_2^{\\alpha_2} \\times ... \\times p_k^{\\alpha_k}$"
      - rtl: "حيث $p_i$ أعداد أولية مختلفة و $\\alpha_i$ أعداد طبيعية."

  - h3: "2. حساب عدد قواسم عدد طبيعي"
  - parags:
      - rtl: "إذا كان تفكيك العدد $n$ هو كما سبق، فإن عدد قواسم $n$ هو حاصل ضرب (الأسس + 1):"
      - center: "$N = (\\alpha_1 + 1)(\\alpha_2 + 1) \\times ... \\times (\\alpha_k + 1)$"
      - rtl: "<b>مثال:</b> $12 = 2^2 \\times 3^1$. عدد القواسم هو $(2+1)(1+1) = 3 \\times 2 = 6$."

  - h3: "3. الـ PGCD والـ PPCM بالتفكيك"
  - parags:
      - rtl: "• <b>PGCD:</b> نأخذ العوامل الأولية <b>المشتركة فقط</b> وبأصغر أس."
      - rtl: "• <b>PPCM:</b> نأخذ جميع العوامل الأولية (المشتركة وغير المشتركة) وبأكبر أس."

  - graph:
      id: "factorization-tree"
      class: "graph-container"
      xDomain: [-2, 6]
      yDomain: [-1, 5]
      elements:
        # شجرة تفكيك العدد 12 هندسياً (Factorization Tree)
        # الجذع الرئيسي: العدد 12
        - { type: "point", x: 2, y: 4, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "text", content: "12", x: 2.2, y: 4.2, color: "blue" }
        
        # التفرع الأول: 2 × 6
        - { type: "line", points: [[2, 4], [0.5, 2.5]], color: "gray" }
        - { type: "line", points: [[2, 4], [3.5, 2.5]], color: "gray" }
        
        # العامل الأولي الأول (2)
        - { type: "point", x: 0.5, y: 2.5, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "2 (أولي)", x: -0.5, y: 2.5, color: "#168574" }
        
        # العدد المركب المتبقي (6)
        - { type: "point", x: 3.5, y: 2.5, strokeColor: "orange", fillColor: "none", size: 2 }
        - { type: "text", content: "6", x: 3.8, y: 2.6, color: "orange" }
        
        # التفرع الثاني للعدد 6: 2 × 3
        - { type: "line", points: [[3, 2.5], [2.5, 1]], color: "gray" }
        - { type: "line", points: [[3, 2.5], [4.5, 1]], color: "gray" }
        
        # العامل الأولي الثاني (2)
        - { type: "point", x: 2.5, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "2 (أولي)", x: 1.8, y: 0.7, color: "#168574" }
        
        # العامل الأولي الثالث (3)
        - { type: "point", x: 4.5, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "3 (أولي)", x: 4.8, y: 0.7, color: "#168574" }
        
        # نص توضيحي بيداغوجي سفلي
        - { type: "text", content: "التفكيك النهائي: 12 = 2² × 3¹", x: 0.5, y: -0.5, color: "#eee" }

  - NB:
      title: "قاعدة الأرتيزان:"
      type: "success"
      NBs:
        - rtl: "التحليل إلى عوامل أولية هو بمثابة <b>المخطط الهندسي</b> للعدد؛ بمجرد امتلاكه، يمكنك معرفة كل شيء عن سلوكه وقواسمه ومضاعفاته."
---
