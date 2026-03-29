// دالة لتحديث المظهر بناءً على إعدادات الجهاز
const updateTheme = () => {
    const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    document.documentElement.setAttribute('data-bs-theme', theme);
};

// التنفيذ عند التحميل وعند تغيير إعدادات الجهاز
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme);
updateTheme();
// تفعيل الوضع الليلي التلقائي فوراً
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
}

/* عندما يكون الوضع ليلياً، سنقوم بتغيير المتغيرات والألوان الصارخة */
[data-bs-theme="dark"] {
    /* 1. جعل الخلفية داكنة مريحة (ليست سوداء فاحمة) */
    --bs-body-bg: #121b22; 
    --bs-body-color: #e9ecef;

    /* 2. ترويض الجداول الفيروزية (التي كانت تظهر فسفورية مزعجة) */
    /* هذا الكود سيستهدف أي عنصر بخلفية فاتحة ويجعلها داكنة وقورة */
    .table-primary, .bg-info, [style*="background-color"] {
        background-color: #1a3c40 !important; /* أخضر زمردي غامق */
        color: #00ffcc !important; /* نص فاتح متناسق */
    }

    /* 3. إصلاح حدود الجداول والكروت */
    .card, .table, td, th {
        border-color: #2d373e !important;
    }

    /* 4. تعديل لون الروابط والأزرار لتكون مريحة */
    .btn-primary {
        background-color: #0d6efd;
        border-color: #0d6efd;
    }
}

/* لمسة جمالية للأشرطة المتحركة في الوضع الليلي */
[data-bs-theme="dark"] .progress {
    background-color: #2c343a;
}




/* cette partie ferme le sidebar en cliquant un lien interne*/

// On récupère tous les liens qui pointent vers une ancre (#) dans le menu
const menuLinks = document.querySelectorAll('#sidebarMenu .offcanvas-body a[href^="#"]');
const myOffcanvas = document.getElementById('sidebarMenu');
    
// On crée l'instance Bootstrap pour pouvoir la contrôler
const bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);

menuLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // 1. On laisse le navigateur naviguer vers l'ID
        // 2. On force la fermeture du volet
        bsOffcanvas.hide();
    });
});

/**
 * Evaluates a multiple-choice question by comparing DOM checkbox states 
 * against a list of valid answer IDs.
 *
 * @param {string[]} allOptionIds - Array of element IDs representing all possible answers.
 * @param {string[]} correctOptionIds - Array of element IDs that are considered correct.
 * @returns {Object} An object containing:
 * - score: The number of correctly selected options.
 * - errors: The number of incorrectly selected options.
 * - checkedCount: The total number of options selected by the user.
 */
function evaluateQuizSelections(allOptionIds, correctOptionIds) {
    let stats = { score: 0, errors: 0, checkedCount: 0 };

    allOptionIds.forEach(id => {
        const checkbox = document.getElementById(id);
        
        if (checkbox && checkbox.checked) {
            stats.checkedCount++;
            
            if (correctOptionIds.includes(id)) {
                stats.score++;
            } else {
                stats.errors++;
            }
        }
    });

    return stats;
}

/*function calculate_results(allAnswers, correctAnswers) */


/**
 * Affiche le résultat de manière universelle
 * @param {Object} stats - Les résultats du calcul
 * @param {number} totalExpected - Nombre de bonnes réponses attendues
 * @param {string} hintBoxId - ID de la zone d'affichage
 * @param {string} successMsg - Message de succès (HTML/LaTeX)
 * @param {string} errorMsg - Message d'erreur (HTML/LaTeX)
 */
function display_universal_validation(stats, totalExpected, hintBoxId, successMsg, errorMsg) {
    const hintBox = document.getElementById(hintBoxId);
    if (!hintBox) return;

    if (stats.checkedCount === 0) {
        alert("أجب على السؤال، باختيار المربعات أو الدوائر الصغيرة على يسار الخيارت المقترحة!");
        return;
    }

    // Vérification : toutes les bonnes réponses cochées ET aucune erreur
    if (stats.score === totalExpected && stats.errors === 0) {
        hintBox.className = "hint-box alert alert-success shadow-sm";
        hintBox.innerHTML = `<b>ممتاز !</b> ${successMsg}`;
    } else if (stats.score < totalExpected && stats.errors === 0)  {
        hintBox.className = "hint-box alert alert-danger shadow-sm";
        hintBox.innerHTML = `<b>إجابة جزئية، إختر جميع الإجابات الصحيحة.</b> ${errorMsg}`;
    } else {
        hintBox.className = "hint-box alert alert-danger shadow-sm";
        hintBox.innerHTML = `<b>إجابة خاطئة!</b> ${errorMsg}`;
    }

    if (window.MathJax) {
        MathJax.typesetPromise([hintBox]);
    }
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
    let score = 0;
    if (userAnswer === "") {
        alert("يرجى كتابة النتيجة أولاً !");
        return score;
    }

    if (parseFloat(userAnswer) === correctAnswer) {
        hintBox.className = "hint-box alert alert-success shadow-sm";
        hintBox.innerHTML = `<b>إجابة صحيحة، ممتاز!</b> ${successMsg}`;
        score = 12;
    } else {
        hintBox.className = "hint-box alert alert-danger shadow-sm";
        hintBox.innerHTML = `<b>إجابة خاطئة.</b> ${errorMsg}`;
    }

    if (window.MathJax) {
        MathJax.typesetPromise([hintBox]);
    }
    return score;
}
