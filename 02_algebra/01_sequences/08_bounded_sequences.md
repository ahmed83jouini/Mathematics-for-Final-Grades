---
layout: lesson
title: "المتتاليات المحدودة"
subtitle: "الأسوار الرياضية: القيد العلوي والقيد السفلي"
permalink: /bounded_sequences/
mathJax: true
lessonID: "seq-07"

previous_url: "/induction_proof/"
next_url: "/sequence_convergence/" # المبحث القادم: التقارب

elements:
  - h3: "1. المتتالية المحدودة من الأعلى"
  - parags:
      - rtl: "نقول أن المتتالية $(u_n)$ محدودة من الأعلى إذا وجد عدد حقيقي $M$ بحيث:"
      - center: "$u_n \\leq M$ لكل عدد طبيعي $n$"
      - rtl: "يسمى العدد $M$ **عنصراً حاداً من الأعلى** (Majorant)."

  - h3: "2. المتتالية المحدودة من الأسفل"
  - parags:
      - rtl: "نقول أن المتتالية $(u_n)$ محدودة من الأسفل إذا وجد عدد حقيقي $m$ بحيث:"
      - center: "$u_n \\geq m$ لكل عدد طبيعي $n$"
      - rtl: "يسمى العدد $m$ <b> عنصراً حاداً من الأسفل</b> (Minorant)."

  - h3: "3. المتتالية المحدودة"
  - parags:
      - rtl: "تكون المتتالية <b>محدودة</b> إذا كانت محدودة من الأعلى ومن الأسفل في آن واحد، أي:"
      - center: "$m \\leq u_n \\leq M$"

  - graph-container:
      id: "bounded-viz"
      data-graph-config: >
        {
          "xDomain": [-1, 8],
          "yDomain": [-1, 5],
          "lines": [
            {"y": 4, "style": "dashed", "color": "red", "label": "M (سقف)"},
            {"y": 1, "style": "dashed", "color": "blue", "label": "m (أرضية)"}
          ],
          "points": [
            {"x": 0, "y": 1.5},
            {"x": 1, "y": 3.2},
            {"x": 2, "y": 2.1},
            {"x": 3, "y": 3.8},
            {"x": 4, "y": 1.2},
            {"x": 5, "y": 2.5},
            {"x": 6, "y": 3.5}
          ],
          "annotations": [{"label": "الحدود محصورة بين السقف والأرضية"}]
        }

  - NB:
      title: "علاقة هامة (مبرهنة التقارب):"
      type: "danger"
      NBs:
        - rtl: "كل متتالية **متزايدة** ومحدودة من **الأعلى** هي متتالية **متقاربة**."
        - rtl: "كل متتالية **متناقصة** ومحدودة من **الأسفل** هي متتالية **متقاربة**."
---
