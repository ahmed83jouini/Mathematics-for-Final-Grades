---
layout: lesson
title: "التفسير الهندسي (المستقيمات المقاربة)"
permalink: /asymptotes/
mathJax: true
graph: true
lessonID: "asymp-limits"

previous_title: "مبرهنة الحصر"
previous_url: /squeeze_theorem/
next_title: "الفهرس العام للنهايات"
next_url: /limits_hub/

elements:
  - h3: "1. ما هو المستقيم المقارب؟"
    id: "asymp-def"

  - parags:
      - rtl: "المستقيم المقارب هو مستقيم يقترب منه منحنى الدالة $(\\mathcal{C}_f)$ ابتعاداً إلى اللانهاية، دون أن يلمسه بالضرورة. هو بمثابة 'سياج' يوجه حركة المنحنى."

  - h3: "2. أنواع المستقيمات المقاربة"
    id: "asymp-types"

  - tableLines:
      dir: rtl
      lines:
        - - th: "نوع المستقيم"
          - th: "الشرط الرياضي (النهاية)"
          - th: "المعادلة"
        - - td: "عمودي (موازٍ لمحور التراتيب)"
          - td: "$\\lim\\limits_{x \\to a} f(x) = \\pm\\infty$"
          - td: "$x = a$"
        - - td: "أفقي (موازٍ لمحور الفواصل)"
          - td: "$\\lim\\limits_{x \\to \\pm\\infty} f(x) = L$"
          - td: "$y = L$"
        - - td: "مائل"
          - td: "$\\lim\\limits_{x \\to \\pm\\infty} [f(x) - (ax+b)] = 0$"
          - td: "$y = ax + b$"

  - h3: "3. كيف نقرأها في التمارين؟"
    id: "asymp-reading"

  - parags:
      - rtl: "تذكر هذه القواعد الذهبية لربط الحساب بالرسم:"

  - tableLines:
      dir: rtl
      lines:
        - - th: "إذا حسبت النهاية عند..."
          - th: "ووجدت النتيجة..."
          - th: "فالتفسير الهندسي هو..."
        - - td: "عدد $a$"
          - td: "مالانهاية $\\infty$"
          - td: "مستقيم مقارب عمودي $x=a$"
        - - td: "مالانهاية $\\infty$"
          - td: "عدد ثابت $L$"
          - td: "مستقيم مقارب أفقي $y=L$"

  - h3: "4. المستقيم المقارب المائل (القوة الضاربة)"
    id: "oblique-asymp"

  - parags:
      - rtl: "يكون المنحنى $(\\mathcal{C}_f)$ يقبل مستقيماً مقارباً مائلاً إذا كانت الدالة تكتب من الشكل $f(x) = (ax+b) + g(x)$ حيث نهاية $g(x)$ عند المالانهاية هي الصفر."

  - NB:
      type: info
      title: "دراسة الوضع النسبي:"
      NBs:
        - rtl: "لدراسة موقع المنحنى بالنسبة للمستقيم المقارب، ندرس إشارة الفرق $f(x) - y_{asymp}$."

  - h3: "5. تطبيقات بيانية"
    id: "asymp-ex"

  - exemple:
      title: "1.5. استخراج المقاربات من جدول التغيرات"
      exemID: "ex-as-001"
  - exemple:
      title: "2.5. إثبات وجود مستقيم مقارب مائل لدالة ناطقة"
      exemID: "ex-as-002"
---
