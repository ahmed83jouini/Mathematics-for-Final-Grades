---
layout: lesson
title: "التحليل إلى عوامل أولية"
subtitle: "تفكيك العدد إلى لبناته الأساسية"
permalink: /prime_factorization/
mathJax: true
lessonID: "arith-10"

previous_url: "/prime_numbers_fermat/"
next_url: "/arithmetic_hub/" 

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

  - NB:
      title: "قاعدة الأرتيزان:"
      type: "success"
      NBs:
        - rtl: "التحليل إلى عوامل أولية هو بمثابة <b>المخطط الهندسي</b> للعدد؛ بمجرد امتلاكه، يمكنك معرفة كل شيء عن سلوكه وقواسمه ومضاعفاته."
---
