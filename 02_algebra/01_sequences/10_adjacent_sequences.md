---
layout: lesson
title: "المتتاليات المتجاورة"
subtitle: "متتاليتان تتقاربان نحو نفس الهدف"
permalink: /adjacent_sequences/
mathJax: true
graph: true
lessonID: "seq-10"

previous_title: "حساب مجموع حدود متتابعة"
previous_url: "/sequences_sum/"
next_title: "نظرة شمولية على المتتاليات"
next_url: "/sequences_review/"

elements:
  - h3: "1. التعريف"
  - parags:
      - rtl: "نقول عن متتاليتين $(u_n)$ و $(v_n)$ أنهما <b>متجاورتان</b> إذا تحقق ما يلي:"
      - rtl: "1. إحداهما <b>متزايدة</b> تماماً."
      - rtl: "2. الأخرى <b>متناقصة</b> تماماً."
      - center: "3. $\\lim_{n \\to +\\infty} (u_n - v_n) = 0$"

  - h3: "2. المبرهنة الأساسية"
  - parags:
      - rtl: "إذا كانت المتتاليتان $(u_n)$ و $(v_n)$ متجاورتين، فإنهما <b>متقاربتان</b> ولهما نفس النهاية $L$."
      - rtl: "إضافة إلى ذلك، يكون لكل $n$:"
      - center: "$u_n \\leq L \\leq v_n$"
      - rtl: "(بفرض أن $u_n$ هي المتزايدة)."

  - graph:
      id: "adjacent-viz"
      class: "graph-container"
      xDomain: [-1, 15]
      yDomain: [-1, 6]
      elements:
        - { type: "function", fn: "3", dash: 2, color: "green"}
        - { type: "text", content: "النهاية المشتركة L", x: , y: , color: "green"}
        - {type: "point", x: 0, y: 1, strokeColor: "blue", fillColor: "blue", size: 1}
        - { type: "text", content: "u_0", x: -0.2, y: 1.2, color: "blue"}
        - {type: "point", x: 2, y: 2, strokeColor: "blue", fillColor: "blue", size: 1}
        - { type: "text", content: "u_1", x: 1.8, y: 2.2, color: "blue"}
        - {type: "point", x: 5, y: 2.7, strokeColor: "blue", fillColor: "blue", size: 1}
        - { type: "text", content: "u_2", x: 4.8, y: 2.9, color: "blue"}
        - {type: "point", x: 10, y: 2.9, strokeColor: "blue", fillColor: "blue", size: 1}
        - { type: "text", content: "u_3", x: 9.8, y: 3.1, color: "blue"}
        - {type: "point", x: 0, y: 5, strokeColor: "red", fillColor: "red", size: 1}
        - { type: "text", content: "v_0", x: -0.2, y: 5.2, color: "red"}
        - {type: "point", x: 2, y: 4, strokeColor: "red", fillColor: "red", size: 1}
        - { type: "text", content: "v_1", x: 1.8, y: 4.2, color: "red"}
        - {type: "point", x: 5, y: 3.3, strokeColor: "red", fillColor: "red", size: 1}
        - { type: "text", content: "v_2", x: 4.8, y: 3.5, color: "red"}
        - {type: "point", x: 10, y: 3.1, strokeColor: "red", fillColor: "red", size: 1}
        - { type: "text", content: "v_3", x: 9.8, y: 3.3, color: "red"}
        - { type: "text", content: "المتتاليتان تحصران النهاية بينهما"}

  - NB:
      title: "تطبيق عملي:"
      type: "info"
      NBs:
        - rtl: "تستخدم المتتاليات المتجاورة لإثبات وجود أعداد حقيقيّة معينة أو لحساب قيم تقريبيّة للجذور واللوغاريتمات."
---
