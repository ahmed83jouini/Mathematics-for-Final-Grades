---
layout: lesson
title: "مبرهنة غوص (Gauss)"
subtitle: "الاستنتاج المنطقي للقواسم"
permalink: /gauss_theorem/
mathJax: true
lessonID: "arith-08"

previous_url: "/bezout_theorem/"
next_url: "/prime_numbers_fermat/"

elements:
  - h3: "1. نص المبرهنة"
  - parags:
      - rtl: "ليكن $a$، $b$ و $c$ أعداداً صحيحة غير معدومة."
      - rtl: "إذا كان $a$ يقسم الجذاء $bc$ (أي $a \\mid bc$) وكان $a$ <b>أولياً مع</b> $b$ ($PGCD(a, b) = 1$)، فإن:"
      - center: "$a \\mid c$"

  - h4: "مثال توضيحي:"
  - parags:
      - rtl: "إذا كان $5 \\mid 3x$. بما أن $PGCD(5, 3) = 1$، فإن مبرهنة غوص تؤكد أن:"
      - center: "$5 \\mid x$"

  - h3: "2. التطبيق في حل المعادلات $ax + by = c$"
  - parags:
      - rtl: "تستخدم مبرهنة غوص لعزل المجهول $x$ أو $y$ بعد إيجاد حل خاص $(x_0, y_0)$."
      - rtl: "من المعادلة $a(x-x_0) = b(y_0-y)$، وبما أن $a$ و $b$ أوليان فيما بينهما (بعد القسمة على الـ PGCD)، نستنتج أن $a$ يقسم $(y_0-y)$."

  - h3: "3. نتائج هامة"
  - parags:
      - rtl: "إذا كان عدد $n$ يقبل القسمة على $a$ وعلى $b$ وكان $PGCD(a, b) = 1$، فإن $n$ يقبل القسمة على الجذاء $ab$."
      - center: "$a \\mid n \\text{ و } b \\mid n \\implies ab \\mid n$"

  - graph-container:
      id: "gauss-logic"
      data-graph-config: >
        {
          "type": "logic-flow",
          "steps": [
            {"label": "a يقسم (b * c)"},
            {"label": "a غريب عن b"},
            {"label": "إذن: a حتماً يقسم c"}
          ],
          "annotations": [{"label": "مبرهنة غوص هي قنطرة العبور من الضرب إلى القسمة"}]
        }

  - NB:
      title: "تنبيه الأرتيزان:"
      type: "danger"
      NBs:
        - rtl: "لا تنسَ أبداً ذكر شرط <b>الأولية فيما بينهما</b> قبل تطبيق غوص. بدون هذا الشرط، المبرهنة خاطئة تماماً (مثلاً: 4 يقسم 2×6، لكن 4 لا يقسم 2 ولا يقسم 6)."
---
