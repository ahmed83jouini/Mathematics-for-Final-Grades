---
layout: lesson
title: "منصة التميز في الرياضيات - النهايات"
permalink: /limits/
mathJax: true
graph: true
lessonID: "limit"
elements:
  - h3: "1. عمليات على النهايات"
    id: "operations-on-limits"

  - parags:
      - rtl: "$f$ و $g$ دالتان، $a$ عدد حقيقي:"

  - h3: "1.1. نهاية مجموع دالتين"

  - tableLines:
      - ["$\\lim\\limits_{x \\to a} f(x)$", "$l$", "$l$", "$l$", "$+\\infty$", "$+\\infty$", "$-\\infty$"]
      - ["$\\lim\\limits_{x \\to a} g(x)$", "$l'$", "$+\\infty$", "$-\\infty$", "$+\\infty$", "$-\\infty$", "$-\\infty$"]
      - ["$\\lim\\limits_{x \\to a} (f(x)+g(x))$", "$l+l'$", "$+\\infty$", "$-\\infty$", "$+\\infty$", "ع.ت.", "$-\\infty$"]

  - notes:
      - rtl: "إذا كانت الشاشة صغيرة إسحب يمين أو يسار لترى الجدول كاملاً."

  - h3: "2.1. نهاية جداء دالتين"

  - tableLines:
      - ["$\\lim\\limits_{x \\to a} f(x)$", "$l$", "$l>0$", "$l>0$", "$l<0$", "$l<0$", "$+\\infty$", "$+\\infty$", "$-\\infty$", "$0$", "$0$"]
      - ["$\\lim\\limits_{x \\to a} g(x)$", "$l'$", "$+\\infty$", "$-\\infty$", "$+\\infty$", "$-\\infty$", "$+\\infty$", "$-\\infty$", "$-\\infty$", "$+\\infty$", "$-\\infty$"]
      - ["$\\lim\\limits_{x \\to a} (f \\times g)(x)$", "$l \\times l'$", "$+\\infty$", "$-\\infty$", "$-\\infty$", "$+\\infty$", "$+\\infty$", "$-\\infty$", "$+\\infty$", "ع.ت", "ع.ت"]

  - h3: "3.1. نهاية قسمة دالتين"

  - tableLines:
      - ["$\\lim\\limits_{x \\to a} f(x)$", "$l$", "$l$", "$l$", "$0$", "$+\\infty$", "$+\\infty$", "$+\\infty$", "$-\\infty$", "$-\\infty$"]
      - ["$\\lim\\limits_{x \\to a} g(x)$", "$l'$", "$\\pm\\infty$", "$0$", "$0$", "$l'>0$", "$l'<0$", "$\\pm\\infty$", "$l'>0$", "$\\pm\\infty$"]
      - ["$\\lim\\limits_{x \\to a} \\frac{f(x)}{g(x)}$", "$\\frac{l}{l'}$", "$0$", "$\\infty$", "ع.ت", "$+\\infty$", "$-\\infty$", "ع.ت", "$-\\infty$", "ع.ت"]

  - h3: "2. أمثلة"
    id: "exemples"

  - N.B.:
      - rtl: "في الأمثلة الموالية سنرى الحالات الخاصة:"
      - center: "$\\frac{l}{-\\infty}=0^- \\quad ; \\quad \\frac{l}{0^-}=-\\infty$"

  - exemple:
      title: "1.2. الدالة المقلوب $f(x)=\\frac{1}{x}$"
      exemID: "maths-analy-limit-exem001"
  - exemple:
      title: "2.2. دالة الجذر $f(x)=\\sqrt{x}$"
      exemID: "maths-analy-limit-exem002"
  - exemple:
      title: "3.2. الدالة $f(x)=\\frac{1}{\\sqrt{x}}$"
      exemID: "maths-analy-limit-exem003"
  - exemple:
      title: "4.2. دالة القوة $f(x)=x^n$"
      exemID: "maths-analy-limit-exem004"
  - exemple:
      title: "5.2. دالة الجيب $f(x) = \\sin(x)$"
      exemID: "maths-analy-limit-exem005"
---
