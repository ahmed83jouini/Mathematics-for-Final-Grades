---
layout: lesson
title: "المبحث 3: المبرهنة الأساسية في الحساب (التفكيك)"
subtitle: "تفكيك العدد إلى عوامله الأولية"
permalink: /fundamental_theorem/
mathJax: true
graph: true
lessonID: "prime-03"

previous_title: "المبحث 2: كيفية اختبار أولية عدد (غربال إراتوستين)"
previous_url: "/primes_sieve/"
next_title: "المبحث 4: استخراج القواسم والمضاعفات بالتفكيك"
next_url: "/divisors_multiples/"

elements:
  - h3: "1. نص المبرهنة الأساسية"
  - parags:
      - rtl: "كل عدد طبيعي $n$ أكبر تماماً من $1$ يمكن كتابته على شكل جداء عوامل أولية."
      - rtl: "هذه الكتابة <b>وحيدة (Unique)</b> تماماً باستثناء ترتيب العوامل. ونسميها التحليل أو التفكيك النموذجي إلى عوامل أولية:"
      - center: "$n = p_1^{\\alpha_1} \\times p_2^{\\alpha_2} \\times \\dots \\times p_k^{\\alpha_k}$"

  - h3: "2. طريقة التحليل الخوارزمية (العمودية)"
  - parags:
      - rtl: "لتحليل عدد، نقسمه على أصغر عدد أولي يقبل القسمة عليه دون باقٍ، ثم نقسم حاصل القسمة الناتج على أصغر عدد أولي يقبل القسمة عليه مجدداً، ونكرر الخطوات ميكانيكياً حتى نصل إلى الحاصل المساوي لـ 1."
      - rtl: "<b>مثال:</b> تفكيك العدد 60 عمودياً:"
      - rtl: "• $60 \\div 2 = 30$"
      - rtl: "• $30 \\div 2 = 15$"
      - rtl: "• $15 \\div 3 = 5$"
      - rtl: "• $5 \\div 5 = 1$"
      - center: "$60 = 2^2 \\times 3 \\times 5$"

  - h3: "3. الأهمية الرياضية والعملية"
  - parags:
      - rtl: "هذا التفكيك النموذجي هو المفتاح والأداة الأسرع لحساب القواسم المشتركة ($PGCD$)، المضاعفات المشتركة ($PPCM$)، وتبسيط الجذور الصماء واختزال الكسور الجبرية الضخمة."

  - graph:
      id: "factor-tree-viz"
      class: "graph-container"
      xDomain: [-3, 9]
      yDomain: [-1, 5]
      elements:
        # شجرة التفكيك الجدائية للعدد 60 (Factor Tree Architectural Diagram)
        # المستوى 0: الجذر الرئيسي للعدد
        - { type: "point", x: 3, y: 4, strokeColor: "gray", fillColor: "gray", size: 3 }
        - { type: "text", content: "60", x: 2.8, y: 4.3, color: "gray" }
        
        # تفرع المستوى الأول
        - { type: "line", points: [[3, 4], [1, 2.5]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[3, 4], [5, 2.5]], color: "gray", arrowStart: false, arrowEnd: true }
        - { type: "point", x: 1, y: 2.5, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "2 (أولي)", x: 0.2, y: 2.4, color: "#168574" }
        - { type: "point", x: 5, y: 2.5, strokeColor: "gray", fillColor: "gray", size: 2 }
        - { type: "text", content: "30", x: 5.3, y: 2.4, color: "gray" }
        
        # تفرع المستوى الثاني
        - { type: "line", points: [[5, 2.5], [3, 1]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[5, 2.5], [7, 1]], color: "gray", arrowStart: false, arrowEnd: true }
        - { type: "point", x: 3, y: 1, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "2 (أولي)", x: 2.2, y: 0.9, color: "#168574" }
        - { type: "point", x: 7, y: 1, strokeColor: "gray", fillColor: "gray", size: 2 }
        - { type: "text", content: "15", x: 7.3, y: 0.9, color: "gray" }
        
        # تفرع المستوى الثالث والأخير
        - { type: "line", points: [[7, 1], [6, -0.5]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "line", points: [[7, 1], [8, -0.5]], color: "orange", arrowStart: false, arrowEnd: true }
        - { type: "point", x: 6, y: -0.5, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "3", x: 5.5, y: -0.6, color: "#168574" }
        - { type: "point", x: 8, y: -0.5, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "5", x: 8.3, y: -0.6, color: "#168574" }
        
        # نصوص بيداغوجية ثابتة لتفسير البنية الشجرية للتفكيك
        - { type: "text", content: "العناصر البرتقالية النهائية (الأوراق) تمثل البصمة الذرية الأولية الصافية للعدد: 2 × 2 × 3 × 5", x: -2, y: -1.2, color: "#eee" }

  - NB:
      title: "تذكير الأرتيزان:"
      type: "info"
      NBs:
        - rtl: "تخيل الأعداد الأولية دائماً كأنها 'الذرات الكيميائية الصافية' في الحساب، والتفكيك هو 'الصيغة الجزيئية الميكانيكية' الفريدة لكل عدد؛ حيث يستحيل منطقياً لعددين طبيعيين مختلفين أن يمتلكا نفس البصمة التفكيكية على الإطلاق."
---
