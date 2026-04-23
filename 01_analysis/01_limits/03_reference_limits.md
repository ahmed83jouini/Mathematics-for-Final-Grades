---
layout: lesson
title: "النهايات: الدوال المرجعية"
permalink: /reference_limits/
mathJax: true
graph: true
lessonID: "limit"

previous_title: "القراءة البيانية"
previous_url: /limits_by_graph/
next_title: "العمليات على النهايات"
next_url: /ops_limits/

elements:
  - h3: "1. نهايات الدوال المألوفة"
    id: "basic-limits"

  - NB:
      title: تعلم!
      NBs:
        - rtl: "قبل البدء في الحسابات المعقدة، يجب أن نحفظ 'اللبنات الأساسية'. هذه النهايات تُقبل دون برهان في هذا المستوى وتُستخدم مباشرة."

  - h3: "2. الدالة المربع والدوال القوة ($x^n$)"
    id: "power-limits"

  - tableLines:
      dir: rtl
      lines:
        - - th: "العبارة"
          - th: "عند $-\\infty$"
          - th: "عند $+\\infty$"
        - - td: "$\\lim\\limits_{x \\to \\infty} x^2$"
          - td: "$+\\infty$"
          - td: "$+\\infty$"
        - - td: "$\\lim\\limits_{x \\to \\infty} x^3$"
          - td: "$-\\infty$"
          - td: "$+\\infty$"

  - parags:
      - rtl: "بصفة عامة: إذا كان $n$ زوجياً فإن النهاية عند الطرفين هي $+\\infty$. وإذا كان $n$ فردياً فإن النهاية تتبع إشارة اللانهاية."

  - h3: "3. الدالة مقلوب $x$: ($1/x$)"
    id: "inverse-limits"

  - parags:
      - rtl: "هذه أهم دالة لفهم مفهوم المستقيم المقارب لاحقاً:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "القيمة"
          - th: "عند $-\\infty$"
          - th: "عند $+\\infty$"
          - th: "عند $0$ بقيم صغرى ($0^-$)"
          - th: "عند $0$ بقيم كبرى ($0^+$)"
        - - td: "$\\lim \\frac{1}{x}$"
          - td: "$0$"
          - td: "$0$"
          - td: "$-\\infty$"
          - td: "$+\\infty$"

  - h3: "4. دالة الجذر التربيعي ($\\sqrt{x}$)"
    id: "sqrt-limits"

  - parags:
      - rtl: "تذكر دائماً أن دالة الجذر معرفة فقط على $[0, +\\infty[$، لذا نهايتها عند $-\\infty$ غير موجودة."

  - tableLines:
      dir: rtl
      lines:
        - - th: "العبارة"
          - th: "عند $0$"
          - th: "عند $+\\infty$"
        - - td: "$\\lim \\sqrt{x}$"
          - td: "$0$"
          - td: "$+\\infty$"

  - h3: "5. أمثلة تطبيقية (مباحث مستقلة)"
    id: "ref-examples"

  - exemple:
      title: "1.5. سلوك دالة القوة الرابعة عند المالانهاية"
      exemID: "ex-ref-001"
  - exemple:
      title: "2.5. لماذا تؤول مقلوب القيمة الكبيرة جداً إلى الصفر؟"
      exemID: "ex-ref-002"
---
