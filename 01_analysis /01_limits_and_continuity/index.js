
function calculate_results(allAnswers, correctAnswers) {
    let stats = { score: 0, errors: 0, checkedCount: 0 };
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
        alert("أجب على السؤال، باختيار المربعات الصغيرة على يسار الخيارت المقترحة!");
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

    if (userAnswer === "") {
        alert("يرجى كتابة النتيجة أولاً !");
        return;
    }

    if (parseFloat(userAnswer) === correctAnswer) {
        hintBox.className = "hint-box alert alert-success shadow-sm";
        hintBox.innerHTML = `<b>إجابة صحيحة، ممتاز!</b> ${successMsg}`;
    } else {
        hintBox.className = "hint-box alert alert-danger shadow-sm";
        hintBox.innerHTML = `<b>إجابة خاطئة.</b> ${errorMsg}`;
    }

    if (window.MathJax) {
        MathJax.typesetPromise([hintBox]);
    }
}

/*______________________________________*/

function verify_2_1_1() {
    const correct = ['st-ans-2-1-1-c', 'st-ans-2-1-1-e'];
    const all = ['st-ans-2-1-1-a', 'st-ans-2-1-1-b', 'st-ans-2-1-1-c', 'st-ans-2-1-1-d', 'st-ans-2-1-1-e', 'st-ans-2-1-1-f'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-1-1',
        "لقد فهمت التكافؤ بين الكتابة $\\mathbb{R}^*$ و اتحاد المجالات.",
        "انتبه إلى اتجاه المعقوفتين وإقصاء الصفر."
    );
}

/*________________________________________*/

function verify_2_1_2() {
    checkNumericExercise(
        'st-ans-2-1-2', 
        0, 
        'hint-2-1-2',
        " فعلاً، كلما كبر المقام (في القيمة المطلقة)، اقترب الكسر من الصفر، أما بخصوص الإشارة، فعدد موجب على سالب لا نهاية، يعطينا عدد مقارب جدا للصفر، لكنه سالب: $\\lim\\limits_{x \\to -\\infty} \\frac{1}{x} = 0^-$.",
        "تذكر القاعدة: $\\frac{L}{\\infty} = 0$."
    );  
}

/*_________________________________*/

function verify_2_1_3() {
    const correct = ['st-ans-2-1-3-c'];
    const all = ['st-ans-2-1-3-a', 'st-ans-2-1-3-b', 'st-ans-2-1-3-c', 'st-ans-2-1-3-d'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-1-3',
        " تفكير سليم، كلما صغر المقام، زادت قيمة الكسر بلا حدود، البسط والمقام من إشارتين مختلفتين، وبالتالي فإن $\\lim\\limits_{x {\\stackrel{\\scriptscriptstyle <}{\\to} 0} \\frac{1}{x} = -\\infty$",
         "انتبه إلى المساواة $\\frac{L}{0^-}=-\\infty$. بشرط $L>0$"
    );
}


/*_________________________________*/

function verify_2_1_4() {
    const correct = ['st-ans-2-1-4-a'];
    const all = ['st-ans-2-1-4-a', 'st-ans-2-1-4-b', 'st-ans-2-1-4-c', 'st-ans-2-1-4-d'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-1-4',
        " تفكير سليم، كلما صغر المقام، زادت قيمة الكسر بلا حدود، البسط والمقام من نفس الإشارة، وبالتالي فإن $\\lim\\limits_{x {\\stackrel{\\scriptscriptstyle >}{\\to} 0} \\frac{1}{x} = +\\infty$",
         "انتبه إلى المساواة $\\frac{L}{0^+}=+\\infty$. حيث أن $L>0$"
    );
}


/*________________________________________*/

function verify_2_1_5() {
    checkNumericExercise(
        'st-ans-2-1-5', 
        0, 
        'hint-2-1-5',
        " فعلاً، كلما كبر المقام (في القيمة المطلقة)، اقترب الكسر من الصفر، أما بخصوص الإشارة، فعدد موجب على موجب لا نهاية، يعطينا عدد مقارب جدا للصفر، لكنه موجب: $\\lim\\limits_{x \\to +\\infty} \\frac{1}{x} = 0^+$.",
        "تذكر القاعدة: $\\frac{L}{\\infty} = 0$."
    );  
}

/*_________________________________*/

function verify_2_2_1() {
    const correct = ['st-ans-2-2-1-a', 'st-ans-2-2-1-d', 'st-ans-2-2-1-e' ];
    const all = ['st-ans-2-2-1-a', 'st-ans-2-2-1-b', 'st-ans-2-2-1-c', 'st-ans-2-2-1-d', 'st-ans-2-2-1-e'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-2-1',
        "أنت تتقن التعامل مع المجموعات و الفرق بين المجموعات، والكتابات المختلفة لمجال التعريف، هنيئا!",
         "تحتاج إلى تركيز أكثر!"
    );
}

// التحقق من نهاية الجذر عند الصفر (2.2.2)
function verify_2_2_2() {
    const correct = ['st-ans-2-2-2-b']; // الإجابة الصحيحة هي 0
    const all = ['st-ans-2-2-2-a', 'st-ans-2-2-2-b', 'st-ans-2-2-2-c'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-2-2',
        "إجابة دقيقة! بما أن الصفر ينتمي لمجال التعريف، فالعلاقة بين النهاية والصورة مباشرة تماماً.",
        "راجع مفهوم نهاية دالة عند نقطة معرفة عندها."
    );
}

// التحقق من نهاية الجذر عند اللانهاية (2.2.3)
function verify_2_2_3() {
    const correct = ['st-ans-2-2-3-b']; // الإجابة الصحيحة هي زائد لانهاية
    const all = ['st-ans-2-2-3-a', 'st-ans-2-2-3-b', 'st-ans-2-2-3-c'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-2-3',
        "أحسنت! الدالة الجذرية دالة متزايدة وتؤول إلى اللانهاية كلما كبر المتغير x.",
        "تذكر أن الجذر التربيعي للأعداد الكبيرة جداً يبقى كبيراً جداً."
    );
}


// التحقق من مجموعة تعريف 1/sqrt(x)
function verify_2_3_1() {
    const correct = ['st-ans-2-3-1-b', 'st-ans-2-3-1-c']; // كلاهما صحيح
    const all = ['st-ans-2-3-1-a', 'st-ans-2-3-1-b', 'st-ans-2-3-1-c'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-3-1',
        "ممتاز! لقد انتبهت أن الصفر يجب أن يُستثنى لأن الدالة في المقام.",
        "انتبه! هل يمكن للـ x أن يساوي الصفر في هذه الدالة؟"
    );
}

// التحقق من النهاية عند 0
function verify_2_3_2() {
    const correct = ['st-ans-2-3-2-b'];
    const all = ['st-ans-2-3-2-a', 'st-ans-2-3-2-b'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-3-2',
        "أحسنت! 1 على صفر موجب يعطي دائماً زائد لانهاية.",
        "فكر مجدداً، ماذا يحدث للكسر عندما يصغر المقام جداً؟"
    );
}

// التحقق من النهاية عند اللانهاية
function verify_2_3_3() {
    checkNumericExercise(
        'st-ans-2-3-3', 
        0, 
        'hint-2-3-3',
        "أحسنت! بما أن $\\lim\\limits_{x \\to +\\infty} \\sqrt{x} = +\\infty$، فإن مقلوب اللانهاية يؤول حتماً إلى الصفر الموجب ($0^+$).",
        "تذكر القاعدة الذهبية: عدد ثابت على لانهاية يعطينا دائماً..."
    );  
}


function verify_2_4_1() {
    const correct = ['st-ans-2-4-1-b'];
    const res = calculate_results(['st-ans-2-4-1-a', 'st-ans-2-4-1-b'], correct);
    display_universal_validation(res, 1, 'hint-2-4-1', "أحسنت! القوة الزوجية تحول الإشارة السالبة إلى موجبة.", "خطأ! تذكر أن $(-1)^2 = 1$.");
}

function verify_2_4_2() {
    const correct = ['st-ans-2-4-2-a'];
    const res = calculate_results(['st-ans-2-4-2-a', 'st-ans-2-4-2-b'], correct);
    display_universal_validation(res, 1, 'hint-2-4-2', "صحيح! القوة الفردية تحافظ على الإشارة السالبة.", "خطأ! تذكر أن $(-1)^3 = -1$.");
}

// التحقق من نهاية sin(x) عند ناقص لانهاية
function verify_2_5_1() {
    const correct = ['st-ans-2-5-1-c']; // النهاية غير موجودة
    const all = ['st-ans-2-5-1-a', 'st-ans-2-5-1-b', 'st-ans-2-5-1-c'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-5-1',
        "أحسنت! بسبب دورية الدالة وتذبذبها، لا يمكننا القول أنها تقترب من عدد وحيد عند $-\\infty$.",
        "حاول مجدداً؛ هل للدالة سلوك مستقر عند اللانهاية؟"
    );
}

// التحقق من نهاية sin(x) عند زائد لانهاية
function verify_2_5_2() {
    const correct = ['st-ans-2-5-2-b']; // النهاية غير موجودة
    const all = ['st-ans-2-5-2-a', 'st-ans-2-5-2-b', 'st-ans-2-5-2-c'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-5-2',
        "إجابة دقيقة! نقول رياضياً أن النهاية غير موجودة لأن قيم الدالة لا تستقر.",
        "تذكر طبيعة منحنى الجيب؛ هل يتوقف عن التذبذب؟"
    );
}



















/*_____________________*/


