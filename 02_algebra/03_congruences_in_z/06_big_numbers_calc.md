---
layout: lesson
title: "حساب باقي قسمة أعداد ضخمة"
subtitle: "منهجية التفكيك والتبسيط"
permalink: /big_numbers_calc/
mathJax: true
lessonID: "cong-06"

previous_url: "/negative_reminders/"
next_url: "/fermat_congruence/"

elements:
  - h3: "1. تبسيط الأساس أولاً"
  - parags:
      - rtl: "القاعدة الأولى والأساسية هي تبسيط ما بداخل الأقواس (الأساس) قبل التفكير في الأس."
      - rtl: "<b>مثال:</b> لحساب $1447^{2026} \\pmod{7}$:"
      - center: "$1447 = 7 \\times 206 + 5 \\implies 1447 \\equiv 5 \\pmod{7}$"
      - rtl: "أو الأفضل استخدام الباقي السالب القريب: $1447 \\equiv -2 \\pmod{7}$."

  - h3: "2. استغلال القوى الشهيرة"
  - parags:
      - rtl: "نبحث دائماً عن قوة للأساس تعطي باقياً يساوي $1$ أو $-1$."
      - rtl: "<b>مثال:</b> حساب $2^{30} \\pmod{7}$:"
      - center: "$2^3 = 8 \\equiv 1 \\pmod{7}$"
      - center: "$2^{30} = (2^3)^{10} \\equiv 1^{10} \\equiv 1 \\pmod{7}$"

  - h3: "3. التعامل مع المجموع والجداء"
  - parags:
      - rtl: "في حالة وجود عبارة مثل $A = a^n + b^m + c$، نحسب باقي كل طرف على حدة ثم نجمع البواقي في النهاية."

  - graph-container:
      id: "big-number-strategy"
      data-graph-config: >
        {
          "type": "step-by-step-logic",
          "steps": [
            {"label": "قسمة الأساس على الترديد"},
            {"label": "استخدام الباقي الأصغر (موجب أو سالب)"},
            {"label": "البحث عن قوة تعطي 1"},
            {"label": "قسمة الأس على الدور"}
          ]
        }

  - NB:
      title: "تنبيه تقني:"
      type: "info"
      NBs:
        - rtl: "إذا كان الباقي النهائي سالباً، أضف إليه الترديد مرة واحدة ليصبح موجباً."
        - rtl: "مثال: $A \\equiv -3 \\pmod{5} \\implies A \\equiv (-3+5) \\equiv 2 \\pmod{5}$."
---
