---
layout: lesson
title: "المبحث الرابع: نهايات الدوال المرجعية"
permalink: /reference_limits/
mathJax: true
graph: true
lessonID: "limit"

# روابط التنقل
previous_title: "القراءة البيانية"
previous_url: /limits_by_graph/
next_title: "العمليات على النهايات"
next_url: /ops_limits/

elements:
  - h3: "1. نهايات الدوال المألوفة"
    id: "basic-limits"

  - parags:
      - rtl: "قبل البدء في الحسابات المعقدة، يجب أن نحفظ 'اللبنات الأساسية'. هذه النهايات تُقبل دون برهان في هذا المستوى وتُستخدم مباشرة."

  - h3: "2. الدالة المربع والدوال القوة ($x^n$)"
    id: "power-limits"

  - tableLines:
      - - "العبارة"
        - "عند $-\\infty$"
        - "عند $+\\infty$"
      - - "$\\lim\\limits_{x \\to \\infty} x^2$"
        - "$+\\infty$"
        - "$+\\infty$"
      - - "$\\lim\\limits_{x \\to \\infty} x^3$"
        - "$-\\infty$"
        - "$+\\infty$"

  - notes:
      - rtl: "بصفة عامة: إذا كان $n$ زوجياً فإن النهاية عند الطرفين هي $+\\infty$. وإذا كان $n$ فردياً فإن النهاية تتبع إشارة المالانهاية."

  - h3: "3. الدالة المقلوب ($1/x$)"
    id: "inverse-limits"

  - parags:
      - rtl: "هذه أهم دالة لفهم مفهوم المستقيم المقارب لاحقاً:"

  - tableLines:
      - - "القيمة"
        - "عند $-\\infty$"
        - "عند $+\\infty$"
        - "عند $0$ بقيم صغرى ($0^-$)"
        - "عند $0$ بقيم كبرى ($0^+$)"
      - - "$\\lim \\frac{1}{x}$"
        - "$0$"
        - "$0$"
        - "$-\\infty$"
        - "$+\\infty$"

  - h3: "4. دالة الجذر التربيعي ($\\sqrt{x}$)"
    id: "sqrt-limits"

  - parags:
      - rtl: "تذكر دائماً أن دالة الجذر معرفة فقط على $[0, +\\infty[$، لذا نهايتها عند $-\\infty$ غير موجودة."

  - tableLines:
      - - "العبارة"
        - "عند $0$"
        - "عند $+\\infty$"
      - - "$\\lim \\sqrt{x}$"
        - "$0$"
        - "$+\\infty$"

  - h3: "5. أمثلة تطبيقية (مباحث مستقلة)"
    id: "ref-examples"

  - exemple:
      title: "1.5. سلوك دالة القوة الرابعة عند المالانهاية"
      exemID: "ex-ref-001"
  - exemple:
      title: "2.5. لماذا تؤول مقلوب القيمة الكبيرة جداً إلى الصفر؟"
      exemID: "ex-ref-002"
---
