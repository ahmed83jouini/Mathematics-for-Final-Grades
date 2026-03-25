
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
        " تفكير سليم، كلما صغر المقام، زادت قيمة الكسر بلا حدود، البسط والمقام من إشارتين مختلفتين، وبالتالي فإن $\\lim\\limits_{x \\stackrel{\\scriptscriptstyle <}{\\to} 0} \\frac{1}{x} = -\\infty $",
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
        " تفكير سليم، كلما صغر المقام، زادت قيمة الكسر بلا حدود، البسط والمقام من نفس الإشارة، وبالتالي فإن $\\lim\\limits_{x \\stackrel{\\scriptscriptstyle >}{\\to} 0} \\frac{1}{x} = +\\infty$",
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

/*______________________________*/

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

/*___________________________*/

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


/*______________________________*/

function verify_2_3_1() {
    const correct = ['st-ans-2-3-1-b', 'st-ans-2-3-1-c']; // كلاهما صحيح
    const all = ['st-ans-2-3-1-a', 'st-ans-2-3-1-b', 'st-ans-2-3-1-c'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-3-1',
        "ممتاز! لقد انتبهت أن الصفر يجب أن يُستثنى لأنه يعدم المقام.",
        "انتبه! هل يمكن للـ x أن يساوي الصفر في هذه الدالة؟"
    );
}

/*______________________________*/

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

/*______________________________*/

function verify_2_3_3() {
    checkNumericExercise(
        'st-ans-2-3-3', 
        0, 
        'hint-2-3-3',
        "أحسنت! بما أن $\\lim\\limits_{x \\to +\\infty} \\sqrt{x} = +\\infty$، فإن مقلوب اللانهاية يؤول حتماً إلى الصفر الموجب ($0^+$).",
        "تذكر القاعدة الذهبية: عدد ثابت على لانهاية يعطينا دائماً..."
    );  
}
/*______________________________*/

function verify_2_4_1() {
    const correct = ['st-ans-2-4-1-b'];
    const res = calculate_results(
        ['st-ans-2-4-1-a', 'st-ans-2-4-1-b'], 
        correct
    );
    display_universal_validation(
        res, 
        1, 
        'hint-2-4-1', 
        "أحسنت! القوة الزوجية تحول الإشارة السالبة إلى موجبة.",
        "خطأ! تذكر أن $(-1)^2 = 1$."
    );
}

/*______________________________*/

function verify_2_4_2() {
    const correct = ['st-ans-2-4-2-a'];
    const res = calculate_results(
        ['st-ans-2-4-2-a', 'st-ans-2-4-2-b'], 
        correct
    );
    display_universal_validation(
        res, 
        1, 
        'hint-2-4-2', 
        "صحيح! القوة الفردية تحافظ على الإشارة السالبة.",
        "خطأ! تذكر أن $(-1)^3 = -1$."
    );
}

/*______________________________*/

function verify_2_4_3() {
    const correct = ['st-ans-2-4-3-c'];
    const res = calculate_results(
        ['st-ans-2-4-3-a', 'st-ans-2-4-3-b', 'st-ans-2-4-3-c'], 
        correct
    );
    display_universal_validation(
        res, 
        1, 
        'hint-2-4-3', 
        "صحيح! ممتاز! أنت تبلي حسنا. النهاية تتغيرةحسب $n$ فرديا كان أم زوجيا. إذن الدالة لا تقبل نهاية.",
        "خطأ!  فقط لاحظ السؤالين السابقين!"
    );
}

/*______________________________*/

function verify_2_5_1() {
    const correct = ['st-ans-2-5-1-c']; 
    const all = ['st-ans-2-5-1-a', 'st-ans-2-5-1-b', 'st-ans-2-5-1-c'];
    
    const res = calculate_results(
        all, 
        correct
    );
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-5-1',
        "أحسنت! بسبب دورية الدالة وتذبذبها، لا يمكننا القول أنها تقترب من عدد وحيد عند $-\\infty$.",
        "حاول مجدداً؛ هل للدالة سلوك مستقر عند اللانهاية؟"
    );
}

/*______________________________*/

function verify_2_5_2() {
    const correct = ['st-ans-2-5-2-b']; 
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

/*______________________________*/

function verify_2_6_1() {
    const correct = ['st-ans-2-6-1-c'];
    const all = ['st-ans-2-6-1-a', 'st-ans-2-6-1-b', 'st-ans-2-6-1-c'];
    
    const res = calculate_results(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-6-1',
        "رائع! لقد أدركت القاعدة: كل دالة تذبذبية دورية لا تملك نهاية عند اللانهاية.",
        "فكر مجدداً، هل يستقر منحنى جيب التمام عند قيمة محددة؟"
    );
}

/*______________________________*/

function verify_2_6_2() {
    const correct = ['st-ans-2-6-2-a'];
    const all = ['st-ans-2-6-2-a', 'st-ans-2-6-2-b', 'st-ans-2-6-2-c'];
    
    const res = calculate_results(
        all, 
        correct
    );
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-6-2',
        "إجابة صحيحة! تماماً مثل الجيب، جيب التمام يفتقد للنهاية عند $+\\infty$.",
        "تذكر السلوك الدوري للدالة؛ هل يتغير عند اللانهاية؟"
    );
}

/*______________________________*/

function verify_2_7_1() {
    checkNumericExercise(
        'st-ans-2-7-1', 
        0, 
        'hint-2-7-1',
        "أحسنت! بالرغم من أن $\\sin(x)$ لا يملك نهاية، إلا أن قسمته على $x$ (الذي يؤول للانهاية) تجعل الكسر يؤول للصفر.",
        "تذكر: حصر الدالة بين $-1/x$ و $1/x$ يؤدي إلى..."
    );  
}

/*______________________________*/
function verify_2_7_2() {
    checkNumericExercise(
        'st-ans-2-7-2', 
        0, 
        'hint-2-7-2',
        "إجابة دقيقة! ينطبق على جيب التمام ما ينطبق على الجيب عند اللانهاية.",
        "فكر في القاعدة: عدد ثابت (أو محصور) على لانهاية يعطي..."
    );  
}





















/*_____________________*/


