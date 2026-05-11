---
layout: lesson
title: "المتتاليات المتجاورة"
subtitle: "متتاليتان تتقاربان نحو نفس الهدف"
permalink: /adjacent_sequences/
mathJax: true
lessonID: "seq-10"

previous_url: "/sequences_sum/"
next_url: "/sequences_review/" # المراجعة النهائية لكل المتتاليات

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

  - graph-container:
      id: "adjacent-viz"
      data-graph-config: >
        {
          "xDomain": [-1, 15],
          "yDomain": [-1, 6],
          "lines": [
            {"y": 3, "style": "dashed", "color": "green", "label": "النهاية المشتركة L"}
          ],
          "points": [
            {"x": 0, "y": 1, "color": "blue", "label": "u0"},
            {"x": 2, "y": 2, "color": "blue"},
            {"x": 5, "y": 2.7, "color": "blue"},
            {"x": 10, "y": 2.9, "color": "blue"},
            {"x": 0, "y": 5, "color": "red", "label": "v0"},
            {"x": 2, "y": 4, "color": "red"},
            {"x": 5, "y": 3.3, "color": "red"},
            {"x": 10, "y": 3.1, "color": "red"}
          ],
          "annotations": [{"label": "المتتاليتان تحصران النهاية بينهما"}]
        }

  - NB:
      title: "تطبيق عملي:"
      type: "info"
      NBs:
        - rtl: "تستخدم المتتاليات المتجاورة لإثبات وجود أعداد حقيقيّة معينة أو لحساب قيم تقريبيّة للجذور واللوغاريتمات."
---
