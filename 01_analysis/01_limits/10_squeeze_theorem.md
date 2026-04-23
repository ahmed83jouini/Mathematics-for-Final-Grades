---
layout: lesson
title: "مبرهنة الحصر (مبرهنة الدرك)"
permalink: /squeeze_theorem/
mathJax: true
graph: true
lessonID: "squeeze-thm"

previous_title: "النهايات المثلثية"
previous_url: /trig_limits/
next_title: "المستقيمات المقاربة"
next_url: /asymptotes/

elements:
  - h3: "1. مفهوم مبرهنة الحصر"
    id: "squeeze-concept"

  - parags:
      - rtl: "تخيل أنك تسير بين صديقين، كلاهما قرر الدخول إلى مطعم ليتناولا طعاما. بما أنك محصور بينهما، فأنت مضطر آلياً للدخول إلى نفس المطعم."
      - rtl: "رياضياً: إذا كانت الدالة $f$ محصورة بين دالتين $g$ و $h$، وكانت نهاية كل منهما عند $a$ هي نفس القيمة $L$، فإن نهاية $f$ تكون حتماً $L$."

  - h3: "2. نص المبرهنة"
    id: "squeeze-rule"

  - tableLines:
      dir: rtl
      lines:
        - - th: "الشروط"
          - th: "الاستنتاج"
        - - td: "إذا كان: $g(x) \\le f(x) \\le h(x)$"
          - td: "فإن:"
        - - td: "و كان: $\\lim g(x) = L$ و $\\lim h(x) = L$"
          - td: "$\\lim\\limits_{x \\to a} f(x) = L$"

  - h3: "3. متى نستخدمها؟ (العلامة الفارقة)"
    id: "when-to-use-squeeze"

  - parags:
      - rtl: "نستخدمها غالباً مع الدوال التي تتذبذب ولا تستقر عند اللانهاية، خاصة عندما نجد $\\sin$ أو $\\cos$ مضروبة في كسر أو دالة أخرى."

  - h3: "4. مثال تطبيقي (كلاسيكي)"
    id: "squeeze-example"

  - parags:
      - rtl: "حساب النهاية: $\\lim\\limits_{x \\to +\\infty} \\frac{\\cos(x)}{x}$"

  - tableLines:
      dir: rtl
      lines:
        - - th: "المرحلة"
          - th: "الإجراء الرياضي"
        - - td: "1. الحصر الأساسي"
          - td: "نعلم أن: $-1 \\le \\cos(x) \\le 1$"
        - - td: "2. بناء العبارة"
          - td: "بالقسمة على $x$ (الموجب): $\\frac{-1}{x} \\le \\frac{\\cos(x)}{x} \\le \\frac{1}{x}$"
        - - td: "3. حساب نهايات الأطراف"
          - td: "$\\lim\\limits_{x \\to +\\infty} \\frac{-1}{x} = 0$ و $\\lim\\limits_{x \\to +\\infy} \\frac{1}{x} = 0$"
        - - td: "4. النتيجة النهائية"
          - td: "حسب مبرهنة الحصر: $\\lim\\limits_{x \\to +\\infty} \\frac{\\cos(x)}{x} = 0$"

  - NB:
      title: "ملاحظة هامة:"
      NBs:
        - rtl: " تسمى أيضاً مبرهنة 'الدرك' لأن الدالتين في الأطراف تقودان الدالة التي في الوسط نحو النهاية المحتومة."

  - h3: "5. مبرهنة المقارنة (للانهاية)"
    id: "comp-theorem"

  - parags:
      - rtl: "إذا كانت $f(x) \\ge g(x)$ وكانت نهاية الصغرى $g$ هي $+\\infty$، فإن الكبرى $f$ تذهب حتماً إلى $+\\infty$."

  - h3: "6. تطبيقات:"
    id: "squeeze-adv"

  - exemple:
      title: "1.6. حصر دالة تتضمن جزءاً صحيحاً"
      exemID: "ex-sq-001"
  - exemple:
      title: "2.6. نهاية دالة جيبية مركبة عند اللانهاية"
      exemID: "ex-sq-002"
---
