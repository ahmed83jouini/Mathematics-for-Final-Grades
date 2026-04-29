---
layout: lesson
title: "المسألة الشاملة: تاج التزايد المقارن"
subtitle: "الاختبار النهائي لقانون الغابة الرياضي"
permalink: /growth_master_problem/
mathJax: true
lessonID: "growth-final"

# روابط الاتصال
previous_title: "المبحث 6: القوى النونية والحالات المركبة"
previous_url: "/advanced_power_growth/"

next_title: "محور الدوال الأصلية"
next_url: "/primitives_hub/"

elements:
  - h3: "1. نص المسألة الشاملة"
    id: "problem-statement"

  - parags:
      - rtl: "لتكن الدالة $f$ المعرفة على $]0; +\\infty[$ كما يلي:"
      - center: "$ f(x) = \\frac{e^x - 1}{x^2 \\ln(x+1)} $"
      - rtl: "<strong>المطلوب:</strong> احسب نهايات الدالة $f$ عند أطراف مجال تعريفها ($0^+$ و $+\\infty$)."

  - h3: "2. الحل المفصل"
    id: "detailed-solution"

  - h4: "أولاً: النهاية عند $+\\infty$ (صراع العمالقة)"
    parags:
      - rtl: "عند $+\\infty$، لدينا حالة عدم تعيين من الشكل $\\frac{\\infty}{\\infty}$. لنفكك العبارة لإظهار التزايد المقارن:"
      - center: "$ f(x) = \\frac{e^x}{x^2 \\ln(x+1)} - \\frac{1}{x^2 \\ln(x+1)} $"
      - rtl: "نعلم أن $e^x$ تغلب $x^2$ وتغلب $\\ln(x+1)$. وبما أن الأقوى (الملكة) في البسط، فإن النتيجة تؤول للانفجار."
      - center: "$ \\lim_{x \\to +\\infty} f(x) = +\\infty $"
      - rtl: "<strong>التبرير:</strong>حسب تزايد المقارن، نمو $e^x$ أسرع من نمو القوى واللوغاريتم مجتمعين."

  - h4: "ثانياً: النهاية عند $0^+$ (المناورة الذكية)"
    parags:
      - rtl: "هنا نحتاج لدمج النهايات الشهيرة (الاستمرارية والاشتقاق) مع التزايد المقارن. نلاحظ وجود نهايات مرجعية مختبئة:"
      - center: "$ f(x) = \\left( \\frac{e^x - 1}{x} \\right) \\times \\left( \\frac{x}{\\ln(x+1)} \\right) \\times \\frac{1}{x^2} $"
      - rtl: "نعلم أن $\\lim\\limits_{x \\to 0} \\frac{e^x - 1}{x} = 1$ و $\\lim\\limits_{x \\to 0} \\frac{\\ln(x+1)}{x} = 1$."
      - rtl: "بما أن الجزء الثالث $\\frac{1}{x^2}$ يؤول إلى $+\\infty$ عند الصفر، فإن النهاية الكلية هي:"
      - center: "$ \\lim\\limits_{x \\to 0^2} f(x) = 1 \\times 1 \\times (+\\infty) = +\\infty $"

  - h3: "3. خلاصة المحور (قواعد العمل)"
    id: "hub-summary"
  
  - tableLines:
      dir: rtl
      lines:
        - - th: "الوضعية"
          - th: "الاستراتيجية"
        - - td: "وجود $e^x$ و $x^n$ عند $+\\infty$"
          - td: "استخراج $e^x$ كعامل مشترك أو القسمة عليه."
        - - td: "وجود $x^n$ و $\\ln x$ عند $0^+$"
          - td: "تطبيق نهاية $x^n \\ln x = 0$ مباشرة."
        - - td: "عبارة مركبة $e^{f(x)}$"
          - td: "تغيير المتغير $t = f(x)$ للعودة للنهايات المرجعية."

  - NB:
      title: "كلمة أخيرة:"
      type: "success"
      NBs:
        - rtl: "الآن وقد أتممت هذا المحور، صار بإمكانك مواجهة أي نهاية في البكالوريا بقلب جسور."
        - rtl: "تذكر: الرياضيات لا تُحفظ، بل تُفهم حركتها وسكونها."

---
