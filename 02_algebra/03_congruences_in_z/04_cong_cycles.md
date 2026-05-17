---
layout: lesson
title: "المبحث 4: دراسة دوريات بواقي القوى"
subtitle: "نظام التكرار المنتظم للبواقي"
permalink: /cong_cycles/
mathJax: true
graph: true
lessonID: "cong-04"

previous_title: "المبحث 3: تلاؤم الموافقات مع القوى"
previous_url: "/cong_powers/"
next_title: "المبحث 5: البحث عن الباقي الصغير (القيم السالبة)"
next_url: "/negative_reminders/"

elements:
  - h3: "1. مفهوم الدور (The Period)"
  - parags:
      - rtl: "عند رفع عدد إلى أسس متتالية $n=0, 1, 2...$ وملاحظة باقي القسمة، نجد أن البواقي تتكرر حتماً بشكل دوري. أصغر عدد طبيعي غير معدوم $k$ تعود عنده البواقي للتكرار (أي يعطي الباقي 1) يسمى <b>الدور</b>."
      - rtl: "<b>مثال:</b> دراسة بواقي $2^n$ على $3$:"
      - center: "$2^0 \\equiv 1 \\pmod{3}$"
      - center: "$2^1 \\equiv 2 \\pmod{3}$"
      - center: "$2^2 \\equiv 4 \\equiv 1 \\pmod{3}$"
      - rtl: "نلاحظ أننا عدنا للرقم 1، إذن الدور هو $k=2$."

  - h3: "2. جدول البواقي العام"
  - parags:
      - rtl: "بدلاً من الحساب في كل مرة، نلخص النتائج حسب قيم $n$ بدلالة الدور $k$:"

  - table:
      headers: ["قيم $n$", "$2k$", "$2k+1$"]
      rows:
          - ["باقي $2^n$ على $3$", "$1$", "$2$"]

  - h3: "3. كيفية معالجة الأس المتغير"
  - parags:
      - rtl: "عندما يطلب منك باقي $a^n$ على $m$، اتبع الخطوات التالية:"
      - rtl: "1. احسب البواقي من أجل $n=0, 1, 2...$ حتى تعود للقيمة 1."
      - rtl: "2. حدد الدور $k$."
      - rtl: "3. صغ جدول البواقي بدلالة $k$."
      - rtl: "4. قسم الأس المعطى في التمرين على الدور $k$ لمعرفة الخانة المناسبة."

  - graph:
      id: "cycle-diagram"
      class: "graph-container"
      xDomain: [-3, 3]
      yDomain: [-2, 2]
      elements:
        # رسم حركة البواقي الترددية الثنائية بين 1 و 2 (Orbital Cycle Diagram)
        # القيمة المرجعية الاستهلالية: 1
        - { type: "point", x: -1.5, y: 0, strokeColor: "#168574", fillColor: "#168574", size: 3 }
        - { type: "text", content: "1 (n = 2k)", x: -2.3, y: 0.4, color: "#168574" }
        
        # القيمة الثانية: 2
        - { type: "point", x: 1.5, y: 0, strokeColor: "blue", fillColor: "blue", size: 3 }
        - { type: "text", content: "2 (n = 2k+1)", x: 1.1, y: 0.4, color: "blue" }
        
        # القوس العلوي المنتقل من 1 إلى 2 عند زيادة الأس بخطوة فردية
        - { type: "line", points: [[-1.2, 0.3], [0, 0.8], [1.2, 0.3]], color: "orange", arrowStart: false, arrowEnd: true }
        
        # القوس السفلي الراجع من 2 إلى 1 عند إتمام الدورة الزوجية
        - { type: "line", points: [[1.2, -0.3], [0, -0.8], [-1.2, -0.3]], color: "green", arrowStart: false, arrowEnd: true }
        
        # نصوص بيداغوجية توضيحية لآلية النبض الدوري للأسس
        - { type: "text", content: "الدور k=2 يعني التأرجح اللانهائي بين الحالتين", x: -2.0, y: -1.4, color: "#eee" }

  - NB:
      title: "تنبيه:"
      type: "success"
      NBs:
        - rtl: "في أغلب تمارين البكالوريا، يكون الهدف هو الوصول إلى $a^k \\equiv 1 \\pmod{n}$. بمجرد وصولك للواحد، فقد 'كسرت' شفرة العدد وأصبح الدور بين يديك."
---
