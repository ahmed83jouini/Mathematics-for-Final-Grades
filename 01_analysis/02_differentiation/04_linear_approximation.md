---
layout: lesson
title: "الاشتقاقية: التقريب التآلفي المحلي"
permalink: /linear_approximation/
mathJax: true
graph: true
lessonID: "linear-approx"

previous_title: "الاشتقاقية: الاشتقاق على اليمين وعلى اليسار"
previous_url: /diff_at_point/
next_title: "قواعد الاشتقاق الأساسية"
next_url: "/basic_derivatives/"

elements:
  - h3: "1. ما هو التقريب التآلفي؟"
    id: "approx-concept"

  - parags:
      - rtl: "عندما نكبر الصورة جداً بجوار نقطة $A$ من منحنى دالة قابلة للاشتقاق، نلاحظ أن المنحنى يكاد ينطبق على مماسه."
      - rtl: "هذا يعني أنه يمكننا تعويض الدالة المعقدة بدالة تآلفية (معادلة المماس) بشرط أن نكون <strong>قريبين جداً</strong> من $x_0$."

  - h3: "2. الدالة التآلفية المرفقة"
    id: "approx-formula"

  - parags:
      - rtl: "من أجل $h$ قريب جداً من الصفر، لدينا التقريب التالي:"
      - center: "$f(x_0 + h) \\approx f'(x_0) \\cdot h + f(x_0)$"
      - rtl: "ونسمي الدالة $g(h) = f'(x_0)h + f(x_0)$ الدالة التآلفية المرفقة بـ $f$ عند $x_0$."

  - h3: "3. مثال للحساب الذهني"
    id: "approx-example"

  - parags:
      - rtl: "لنحسب تقريباً لـ $(1.001)^2$ دون آلة حاسبة، باستخدام الدالة $f(x)=x^2$ عند $x_0=1$:"
      
  - tableLines:
      dir: rtl
      lines:
        - - th: "البيانات"
          - td: "$f(1)=1$ ، $f'(1)=2$ ، $h=0.001$"
        - - th: "التطبيق"
          - td: "$(1+0.001)^2 \\approx 2(0.001) + 1$"
        - - th: "النتيجة"
          - td: "$(1.001)^2 \\approx 1.002$"

  - NB:
      title: "فائدة عملية:"
      type: "info"
      NBs:
        - rtl: "هذا التقريب يستخدمه المهندسون والفيزيائيون لتبسيط الحسابات المعقدة في مجالات ضيقة جداً."

---
