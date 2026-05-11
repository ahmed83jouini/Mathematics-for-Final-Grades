---
layout: lesson
title: "إثبات قابلية القسمة"
subtitle: "التعامل مع العبارات الجبرية المتغيرة"
permalink: /divisibility_proof/
mathJax: true
lessonID: "cong-09"

previous_url: "/cong_equations/"
next_url: "/cong_applications/"

elements:
  - h3: "1. المبدأ الأساسي"
  - parags:
      - rtl: "لإثبات أن العبارة $A(n)$ تقبل القسمة على $m$، يجب إثبات أن:"
      - center: "$A(n) \\equiv 0 \\pmod{m}$"

  - h3: "2. استراتيجية الحل"
  - parags:
      - rtl: "• <b>تبسيط الأطراف:</b> نعوض كل أساس بباقي قسمته على $m$."
      - rtl: "• <b>توحيد الأسس:</b> نحاول كتابة جميع الأطراف بنفس الأس (غالباً بدلالة الدور $k$)."
      - rtl: "• <b>التجميع:</b> نجمع النتائج ونبسطها للوصول إلى الصفر."

  - h4: "مثال تطبيقي:"
  - parags:
      - rtl: "أثبت أن $3^{2n} - 2^n$ يقبل القسمة على $7$ غير صحيح دائماً، لنأخذ مثالاً صحيحاً: أثبت أن $4^n - 1$ يقبل القسمة على $3$."
      - rtl: "بما أن $4 \\equiv 1 \\pmod{3}$، فإن:"
      - center: "$4^n \\equiv 1^n \\equiv 1 \\pmod{3}$"
      - rtl: "إذن: $4^n - 1 \\equiv 1 - 1 \\equiv 0 \\pmod{3}$."

  - h3: "3. استخدام الاستدلال بالتراجع (عند الضرورة)"
  - parags:
      - rtl: "في بعض الحالات المعقدة، يمكن استخدام التراجع لإثبات قابلية القسمة، لكن الموافقات تبقى الأداة الأسرع والأكثر مباشرة."

  - graph:
      id: "divisibility-check"
      data-graph-config: >
        {
          "type": "logic-gate",
          "input": "Expression A(n)",
          "process": "Modulo reduction",
          "output": "0 (Result)",
          "annotations": [{"label": "إذا كان الباقي 0، فالقسمة محققة"}]
        }

  - NB:
      title: "نصيحة:"
      type: "info"
      NBs:
        - rtl: "عند وجود مجموع قوى، ابحث عن 'عامل مشترك' أو حاول جعل كل الحدود تتبع دوراً واحداً لتسهيل عملية الجمع."
---
