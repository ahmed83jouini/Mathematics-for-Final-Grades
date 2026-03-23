/**
 * 1. Calcule les statistiques (score, erreurs, compte)
 * Retourne un objet contenant les résultats.
 */
function calculate_results(allAnswers, correctAnswers) {
    let stats = {
        score: 0,
        errors: 0,
        checkedCount: 0
    };

    allAnswers.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox && checkbox.checked) {
            stats.checkedCount++;
            if (correctAnswers.includes(id)) {
                stats.score++;
            } else {
                stats.errors++;
            }
        }
    });

    return stats;
}

/**
 * 2. Gère l'affichage des messages d'alerte et du rendu MathJax
 */
function display_validation(stats, correctAnswers, hintBoxId) {
    const hintBox = document.getElementById(hintBoxId);
    if (!hintBox) return;

    if (stats.checkedCount === 0) {
        alert("إختر على الأقل إجابة واحدة!");
        return;
    }

    if (stats.score === correctAnswers.length && stats.errors === 0) {
        hintBox.className = "hint-box alert alert-success shadow-sm";
        hintBox.innerHTML = "<b>ممتاز !</b> لقد فهمت التكافؤ بين الكتابة $\\mathbb{R}^*$ و اتحاد المجالات المفتوحة.";
    } else {
        hintBox.className = "hint-box alert alert-danger shadow-sm";
        hintBox.innerHTML = "<b>حاول مرة أخرى</b> إنتبه إلى إتجاه المعقوفتين([..]) مفتوح ومغلق كما يجب إقصاء الصفر لأنه يعدم المقام. ";
    }

    // Relance le rendu MathJax pour le nouveau texte
    if (window.MathJax) {
        MathJax.typesetPromise([hintBox]);
    }
}

/**
 * 3. Fonction principale appelée par votre bouton
 */
function verify_2_1_1() {
    const correctAnswers = ['st-ans-2-1-1-c', 'st-ans-2-1-1-e'];
    const allAnswers = ['st-ans-2-1-1-a', 'st-ans-2-1-1-b', 'st-ans-2-1-1-c', 'st-ans-2-1-1-d', 'st-ans-2-1-1-e', 'st-ans-2-1-1-f'];
    
    // Étape A : On calcule
    const results = calculate_results(allAnswers, correctAnswers);
    
    // Étape B : On affiche
    display_validation(results, correctAnswers, 'hint-2-1-1');
}


/**
 * Fonction universelle pour valider une réponse numérique
 * @param {string} inputId - L'ID du champ de saisie
 * @param {number} correctAnswer - La valeur mathématique attendue
 * @param {string} hintBoxId - L'ID de la zone de message
 * @param {string} successMsg - Le message en cas de succès (en LaTeX/HTML)
 * @param {string} errorMsg - Le message en cas d'erreur (en LaTeX/HTML)
 */
function checkNumericExercise(inputId, correctAnswer, hintBoxId, successMsg, errorMsg) {
    const inputElement = document.getElementById(inputId);
    const hintBox = document.getElementById(hintBoxId);
    const userAnswer = inputElement.value;

    if (userAnswer === "") {
        alert("يرجى كتابة النتيجة أولاً !");
        return;
    }

    if (parseFloat(userAnswer) === correctAnswer) {
        hintBox.className = "hint-box alert alert-success shadow-sm";
        hintBox.innerHTML = `<b>إجابة صحيحة !</b> ${successMsg}`;
    } else {
        hintBox.className = "hint-box alert alert-danger shadow-sm";
        hintBox.innerHTML = `<b>إجابة خاطئة.</b> ${errorMsg}`;
    }

    if (window.MathJax) {
        MathJax.typesetPromise([hintBox]);
    }
}

function verify_2_1_2() {
    checkNumericExercise(
        'st-ans-2-1-2', 
        0, 
        'hint-2-1-2',
        "<b>إجابة صحيحة !</b> فعلاً، كلما كبر المقام (في القيمة المطلقة)، اقترب الكسر من الصفر: $\\lim_{x \\to -\\infty} \\frac{1}{x} = 0$.",
        "تذكر القاعدة: $\\frac{L}{\\infty} = 0$."
    );
}


