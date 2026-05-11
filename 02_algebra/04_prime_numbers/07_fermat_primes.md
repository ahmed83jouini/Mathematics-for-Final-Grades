---
layout: lesson
title: "مبرهنة فيرما الصغرى"
subtitle: "القوة السحرية للأعداد الأولية"
permalink: /fermat_primes/
mathJax: true
lessonID: "prime-07"

previous_url: "/gauss_primes/"
next_url: "/infinite_primes/"

elements:
  - h3: "1. نص المبرهنة (الصيغة الأولى)"
  - parags:
      - rtl: "إذا كان $p$ عدداً أولياً، و $a$ عدداً صحيحاً لا يقبل القسمة على $p$، فإن:"
      - center: "$a^{p-1} \equiv 1 \pmod{p}$"
      - rtl: "هذا يعني أن رفع أي عدد لأس $(p-1)$ يعيدنا دائماً للواحد عند الترديد $p$."

  - h3: "2. الصيغة العامة (لكل a)"
  - parags:
      - rtl: "من أجل كل عدد صحيح $a$ وعدد أولي $p$، نجد دائماً:"
      - center: "$a^p \equiv a \pmod{p}$"

  - h3: "3. لماذا هي مهمة لهذه الدرجة؟"
  - parags:
      - rtl: "• <b>تبسيط القوى:</b> تسمح لنا باختزال الأسس الضخمة. فبدلاً من رفع العدد لأس $1000$، نقسم الأس على $p-1$ ونتعامل مع الباقي فقط."
      - rtl: "• <b>اختبار الأولية:</b> تستخدمها الحواسيب للتأكد من أولية الأعداد الضخمة (Primalty Test)؛ فإذا لم تتحقق المبرهنة، فالعدد حتماً ليس أولياً."
      - rtl: "• <b>التشفير:</b> هي المحرك خلف تشفير البيانات على الإنترنت، حيث تعتمد حماية حساباتك على "قفل" رياضي لا يفتحه إلا باقٍ محدد يعتمد على مبرهنة فيرما."

  - graph-container:
      id: "fermat-shortcut"
      data-graph-config: >
        {
          "type": "process-shortcut",
          "long_way": "Calculating a^k (Extremely Heavy)",
          "short_way": "Fermat's Theorem (Instant 1 or a)",
          "bridge": "p is prime",
          "annotations": [{"label": "اختصار زمني وحسابي مذهل"}]
        }

  - NB:
      title: "ملاحظة تقنية:"
      type: "success"
      NBs:
        - rtl: "تذكر دائماً أن القوة هنا تكمن في أن $p$ <b>أولي</b>. إذا كان الترديد غير أولي، ننتقل لمبرهنة أعم تدعى 'مبرهنة أويلر'."
---
