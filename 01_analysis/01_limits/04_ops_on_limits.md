---
layout: lesson
title: "العمليات على النهايات"
permalink: /ops_limits/
mathJax: true
graph: true
lessonID: "limit"

previous_title: "الدوال المرجعية"
previous_url: /reference_limits/
next_title: "كثيرات الحدود والناطقة"
next_url: /polynomial_limits/

elements:
  - h3: "1. فلسفة العمليات: التعامل مع اللانهاية"
    id: "philosophy"

  - parags:
      - rtl: "العمليات على النهايات ليست مجرد جمع وطرح أرقام، بل هي فهم لسلوك المقادير الضخمة ($+\\infty$, $-\\infty$) والمقادير المتناهية في الصغر ($0^-; 0^+$). نحن نعامل $\\infty$ كـ 'حالة' وليس كعدد حقيقي."

  - h3: "2. نهاية مجموع دالتين"
    id: "sum-ops"

  - parags:
      - rtl: "تخيل أن اللانهاية هي 'بحر'، والعدد $l$ هو 'قطرة'. إضافة قطرة للبحر لا تغير من شأنه، وإضافة بحر إلى بحر يجعله أوسع."

  - tableLines:
      dir: rtl
      lines:
        - - th: "$\\lim f(x)$"
          - th: "$\\lim g(x)$"
          - th: "$\\lim (f+g)(x)$"
          - th: "الشرح المنطقي"
        - - td: "$l$"
          - td: "$l'$"
          - td: "$l + l'$"
          - td: "جمع عادي للأعداد الحقيقية."
        - - td: "$l$"
          - td: "$+\\infty$"
          - td: "$+\\infty$"
          - td: عدد مضاف إليه مقدار ضخم يبقى ضخماً."
        - - td: "$+\\infty$"
          - td: "$+\\infty$"
          - td: "$+\\infty$"
          - td: "ربح زائد ربح هو ربح أكبر."
        - - td: "$-\\infty$"
          - td: "$-\\infty$"
          - td: "$-\\infty$"
          - td: "خسارة زائد خسارة هي خسارة أعمق."
        - - td: "$+\\infty$"
          - td: "$-\\infty$"
          - td: "ع.ت"
          - td: "<strong>حالة عدم تعيين</strong> صراع بين قوتين لا نعرف من يغلب."

  - h3: "3. نهاية جداء دالتين"
    id: "prod-ops"

  - parags:
      - rtl: "في الضرب، نطبق 'قاعدة الإشارات' المعتادة، مع تذكر أن اللانهاية تبتلع أي عدد (ما عدا الصفر)."

  - tableLines:
      dir: ltr
      lines:
        - - th: "$\\lim f(x)$"
          - th: "$\\lim g(x)$"
          - th: "$\\lim (f \\times g)(x)$"
          - th: "ملاحظة"
        - - td: "$l$"
          - td: "$l'$"
          - td: "$l \\times l'$"
          - td: "ضرب عادي."
        - - td: "$l > 0$"
          - td: "$+\\infty$"
          - td: "$+\\infty$"
          - td: "موجب في موجب يعطي موجب."
        - - td: "$l < 0$"
          - td: "$+\\infty$"
          - td: "$-\\infty$"
          - td: "سالب في موجب يعطي سالب."
        - - td: "$+\\infty$"
          - td: "$+\\infty$"
          - td: "$+\\infty$"
          - td: "ضخم جداً في ضخم جداً."
        - - td: "$0$"
          - td: "$\\pm\\infty$"
          - td: "ع.ت"
          - td: "<strong>حالة عدم تعيين</strong>:الصفر يحاول الإعدام و $\\infty$ تحاول التضخيم."

  - h3: "4. نهاية قسمة دالتين"
    id: "div-ops"

  - parags:
      - rtl: "القسمة هي أخطر العمليات، ويجب الانتباه فيها لإشارة الصفر ($0^+$ أو $0^-$)."

  - tableLines:
      dir: rtl
      lines:
        - - th: "البسط $\\lim f$"
          - th: "المقام $\\lim g$"
          - th: "النتيجة"
          - th: "القاعدة الذهبية"
        - - td: "$l$"
          - td: "$\\pm\\infty$"
          - td: "$0$"
          - td: "عدد على لانهاية يؤول للصفر (توزيع رغيف خبز  على سكان العالم)."
        - - td: "$l \\neq 0$"
          - td: "$0$"
          - td: "$\\infty$"
          - td: "عدد على صفر يؤول للانهاية (يجب تحديد الإشارة)."
        - - td: "$0$"
          - td: "$0$"
          - td: "ع.ت"
          - td: "<strong>حالة عدم تعيين:</strong> لا يمكن القسمة على لا شيء."
        - - td: "$\\infty$"
          - td: "$\\infty$"
          - td: "ع.ت"
          - td: "<strong>حالة عدم تعيين:</strong> من الأكبر فيهم؟"

  - NB:
      title: "ملخص:"
      NBs:
        - rtl: "نلخص حالات عدم عدم التعيين في أربع حالاتت مشهورة:  $(+\\infty - \\infty)$, $(0 \\times \\infty)$, $(\\frac{0}{0})$, $(\\frac{\\infty}{\\infty})$."

  - h3: "5. أمثلة توضيحية معمقة"
    id: "detailed-examples"

  - exemple:
      title: "1.5. مجموع دالة مقلوب مع دالة خطية عند اللانهاية"
      exemID: "ex-ops-001"
  - exemple:
      title: "2.5. جداء دالة جذرية في دالة سالبة"
      exemID: "ex-ops-002"
---







