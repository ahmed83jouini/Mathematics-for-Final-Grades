---
layout: lesson
title: "الأسية: تعريف الدالة exp ومجال تعريفها"
permalink: /exp_definition/
mathJax: true
graph: true
lessonID: "exp-intro"

# روابط الاتصال
previous_title: "العودة إلى خارطة طريق الأسية"
previous_url: "/exponential_hub/"

next_title: "الخصائص الجبرية للدالة الأسية"
next_url: "/exp_algebraic_properties/"

elements:
  - h3: "1. النشأة والتعريف"
    id: "exp-origin"

  - parags:
      - rtl: "الدالة الأسية النيبيرية هي الدالة الوحيدة القابلة للاشتقاق على $\\mathbb{R}$ والتي تحقق الشرطين:"
      - center: "$f'(x) = f(x)$ (مشتقتها هي نفسها)"
      - center: "$f(0) = 1$ (تنطلق من الواحد عند الصفر)"
      - rtl: "نرمز لهذه الدالة بالرمز $\\exp$ أو بالترميز السهل $e^x$."

  - h3: "2. الدالة العكسية للوغاريتم"
    id: "inverse-relation"

  - parags:
      - rtl: "الدالة:"
      - center: "$x \\mapsto e^x$"
      - rtl: " هي الدالة العكسية للدالة:"
      - center: "$x \\mapsto \\ln x$."
      - rtl:"هذا يعني هندسياً أن منحنياهما متناظران بالنسبة للمنصف الأول ($y=x$)."

  - NB:
      title: "العلاقة التبادلية:"
      type: "primary"
      NBs:
        - rtl: "من أجل كل $x \\in \\mathbb{R}$: $\\ln(e^x) = x$"
        - rtl: "من أجل كل $x > 0$: $e^{\\ln x} = x$"

  - h3: "3. مجال التعريف والإشارة"
    id: "exp-domain-sign"

  - parags:
      - rtl: "خلافاً للوغاريتم 'الحساس'، الدالة الأسية 'صبورة' جداً؛ فهي تقبل كل الأعداد الحقيقية."

  - tableLines:
      dir: rtl
      lines:
        - - th: "الخاصية"
          - th: "التفصيل الرياضي"
        - - td: "مجال التعريف $D_f$"
          - td: "معرفة على كل $\\mathbb{R}$ (أي $]-\\infty; +\\infty[$)."
        - - td: "الإشارة"
          - td: "<strong>موجبة تماماً</strong> دوماً؛ أي $e^x > 0$ مهما كان $x$."
        - - td: "القيم الخاصة"
          - td: "$e^0 = 1$ و $e^1 = e \\approx 2.718$"

  - NB:
      title: "تنبيه (قاعدة الإشارة):"
      type: "danger"
      NBs:
        - rtl: "أكبر هدية تقدمها لك الدالة الأسية هي إشارتها؛ فبمجرد رؤية $e^{u(x)}$، اعلم أنها موجبة تماماً ولا تؤثر في إشارة المشتقة أو العبارة."

  - h3: "4. مجموعة تعريف الدالة $e^{u(x)}$"
    id: "exp-u-domain"

  - parags:
      - rtl: "بما أن الدالة الأسية معرفة على $\\mathbb{R}$، فإن مجموعة تعريف $e^{u(x)}$ هي ببساطة مجموعة تعريف الدالة $u(x)$ نفسها."

  - tableLines:
      dir: rtl
      lines:
        - - td: "$f(x) = e^{2x+1}$"
          - td: "$D_f = \\mathbb{R}$"
        - - td: "$g(x) = e^{\\frac{1}{x}}$"
          - td: "$D_g = \\mathbb{R}^*$"
        - - td: "$h(x) = e^{\\ln x}$"
          - td: "$D_h = ]0; +\\infty[$ (بسبب اللوغاريتم)"

---
