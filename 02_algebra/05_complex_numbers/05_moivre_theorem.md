---
layout: lesson
title: "دستور موآفر وتطبيقاته"
subtitle: "ترويض الأسس الكبيرة"
permalink: /moivre_theorem/
mathJax: true
lessonID: "comp-05"

previous_url: "/complex_exponential/"
next_url: "/complex_equations/"

elements:
  - h3: "1. نص دستور موآفر (De Moivre's Formula)"
  - parags:
      - rtl: "من أجل كل عدد حقيقي $\theta$ وكل عدد صحيح $n$، لدينا:"
      - center: "$(\\cos \\theta + i \\sin \\theta)^n = \\cos(n\theta) + i \\sin(n\\theta)$"
      - rtl: "بالشكل الأسي، تصبح القاعدة أكثر بساطة:"
      - center: "$(e^{i\\theta})^n = e^{in\\theta}$"

  - h3: "2. كيف نستخدمه عملياً؟"
  - parags:
      - rtl: "لحساب $z^n$ حيث $z = a + bi$:"
      - rtl: "1. نحول $z$ إلى الشكل الأسي $r e^{i\\theta}$."
      - rtl: "2. نطبق القوة على الطويلة ونضرب الأس في العمدة:"
      - center: "$z^n = r^n e^{in\\theta}$"
      - rtl: "3. نعيد النتيجة للشكل الجبري إذا طُلب ذلك."

  - h3: "3. أهم التطبيقات"
  - parags:
      - rtl: "• <b>تبسيط القوى الضخمة:</b> مثل حساب $z^{2026}$. بدلاً من الضرب المتكرر، نقوم بضرب العمدة في 2026."
      - rtl: "• <b>الإثباتات المثلثية:</b> استنتاج قوانين $\\cos(n\\theta)$ و $\\sin(n\\theta)$ بدلالة $\\cos \\theta$ و $\\sin \\theta$."
      - rtl: "• <b>حل المعادلات:</b> البحث عن الجذور النونية للوحدة."

  - graph:
      id: "moivre-power-spiral"
      data-graph-config: >
        {
          "type": "vector-rotation",
          "base_angle": "theta",
          "powers": ["z^1", "z^2", "z^3"],
          "annotations": [{"label": "الأس n يضاعف الزاوية n مرة ويرفع الطويلة للأس n"}]
        }

  - NB:
      title: "نصيحة تقنية:"
      type: "info"
      NBs:
        - rtl: "دائماً قبل تطبيق موآفر، تأكد أن العدد مكتوب بالشكل $r(\\cos \\theta + i \\sin \\theta)$. إذا كانت الإشارة سالبة في الوسط أو الدوال مقلوبة، يجب تصحيح الشكل باستخدام خواص الزوايا المرفقة أولاً."
---
