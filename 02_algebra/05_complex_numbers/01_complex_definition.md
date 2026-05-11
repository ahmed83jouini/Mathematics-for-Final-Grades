---
layout: lesson
title: "تعريف المجموعة C والشكل الجبري"
subtitle: "حيث i^2 = -1"
permalink: /complex_definition/
mathJax: true
lessonID: "comp-01"

previous_url: "/complex_numbers_hub/"
next_url: "/complex_conjugate/"

elements:
  - h3: "1. الوحدة التخيلية i"
  - parags:
      - rtl: "تعتمد المجموعة $\\mathbb{C}$ على ابتكار عدد تخيلي $i$ يحقق الخاصية الفريدة:"
      - center: "$i^2 = -1$"

  - h3: "2. الشكل الجبري لعدد مركب"
  - parags:
      - rtl: "يكتب كل عدد مركب $z$ بطريقة وحيدة على الشكل:"
      - center: "$z = a + bi$"
      - rtl: "حيث $a$ هو الجزء الحقيقي $Re(z)$، و $b$ هو الجزء التخيلي $Im(z)$."

  - h3: "3. قواعد الحساب الأساسية"
  - parags:
      - rtl: "• <b>الجمع:</b> نجمع الحقيقي مع الحقيقي والتخيلي مع التخيلي."
      - rtl: "• <b>الضرب:</b> نستخدم التوزيع العادي مع تذكر دائماً تعويض $i^2$ بـ $-1$."
      - rtl: "• <b>التساوي:</b> يتساوى عددان مركبان إذا تساوى جزآهما الحقيقيان وتساوى جزآهما التخيليان."

  - graph-container:
      id: "complex-structure-viz"
      data-graph-config: >
        {
          "type": "venn-diagram",
          "sets": ["R", "C"],
          "note": "R محتواة في C حيث b=0"
        }

  - NB:
      title: "تنبيه هام:"
      type: "danger"
      NBs:
        - rtl: "الجزء التخيلي هو العدد $b$ فقط، وليس $bi$. الـ $i$ هو مجرد دليل على مكان الجزء التخيلي."
---
