---
layout: lesson
title: "القواسم والمضاعفات بالتفكيك"
subtitle: "استثمار التحليل في العمليات الحسابية"
permalink: /divisors_multiples/
mathJax: true
lessonID: "prime-04"

previous_url: "/fundamental_theorem/"
next_url: "/relatively_prime/"

elements:
  - h3: "1. حساب الـ PGCD والـ PPCM"
  - parags:
      - rtl: "ليكن لدينا عددان $A$ و $B$ محللان إلى عواملهما الأولية:"
      - rtl: "• <b>PGCD:</b> هو جداء العوامل <b>المشتركة</b> فقط وبـ <b>أصغر أس</b>."
      - rtl: "• <b>PPCM:</b> هو جداء العوامل <b>المشتركة وغير المشتركة</b> وبـ <b>أكبر أس</b>."
      - rtl: "<b>مثال:</b> $A = 2^3 \\times 3^2$ و $B = 2^2 \\times 3^1 \\times 5^1$"
      - rtl: "$PGCD(A, B) = 2^2 \\times 3^1 = 12$"
      - rtl: "$PPCM(A, B) = 2^3 \\times 3^2 \\times 5^1 = 360$"

  - h3: "2. حساب عدد القواسم الموجبة"
  - parags:
      - rtl: "إذا كان تحليل عدد هو $n = p_1^{\\alpha_1} \\times p_2^{\\alpha_2} \\times \\dots$"
      - rtl: "فإن عدد قواسمه هو جداء (الأسس مضافاً إليها 1):"
      - center: "$N = (\\alpha_1 + 1)(\\alpha_2 + 1) \\dots$"
      - rtl: "<b>مثال:</b> $60 = 2^2 \\times 3^1 \\times 5^1$. عدد قواسمه هو: $(2+1)(1+1)(1+1) = 3 \\times 2 \\times 2 = 12$ قسماً."

  - h3: "3. العلاقة بينهما"
  - parags:
      - rtl: "دائماً يتحقق القانون التالي لأي عددين طبيعيين:"
      - center: "$PGCD(A, B) \\times PPCM(A, B) = A \\times B$"

  - graph:
      id: "gcd-lcm-set"
      data-graph-config: >
        {
          "type": "venn-diagram",
          "setA": "Factors of A",
          "setB": "Factors of B",
          "intersection": "PGCD (Shared factors with lowest powers)",
          "union": "PPCM (All factors with highest powers)"
        }

  - NB:
      title: "قاعدة عملية:"
      type: "info"
      NBs:
        - rtl: "استخدام التفكيك هو أسرع طريقة للتعامل مع الأعداد الضخمة التي يصعب تطبيق 'خوارزمية إقليدس' عليها يدوياً."
---
