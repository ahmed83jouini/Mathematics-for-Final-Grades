
/*______________________________________*/

function verify_2_1_1() {
    const correct = ['st-ans-2-1-1-c', 'st-ans-2-1-1-e'];
    const all = ['st-ans-2-1-1-a', 'st-ans-2-1-1-b', 'st-ans-2-1-1-c', 'st-ans-2-1-1-d', 'st-ans-2-1-1-e', 'st-ans-2-1-1-f'];
    
    const res = evaluateQuizSelections(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-1-1',
        "لقد فهمت التكافؤ بين الكتابة $\\mathbb{R}^*$ و اتحاد المجالات.",
        "انتبه إلى اتجاه المعقوفتين وإقصاء الصفر."
    );
    
    let score = res.score * 10;
    let exerciseID = "math-anal-limits-exem-ex-2-1-1";
    updateScores(exerciseID, score);
    
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

    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-1-2";
    updateScores(exerciseID, score);
}

/*_________________________________*/

function verify_2_1_3() {
    const correct = ['st-ans-2-1-3-c'];
    const all = ['st-ans-2-1-3-a', 'st-ans-2-1-3-b', 'st-ans-2-1-3-c', 'st-ans-2-1-3-d'];
    
    const res = evaluateQuizSelections(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-1-3',
        " تفكير سليم، كلما صغر المقام، زادت قيمة الكسر بلا حدود، البسط والمقام من إشارتين مختلفتين، وبالتالي فإن $\\lim\\limits_{x \\stackrel{\\scriptscriptstyle <}{\\to} 0} \\frac{1}{x} = -\\infty $",
         "انتبه إلى المساواة $\\frac{L}{0^-}=-\\infty$. بشرط $L>0$"
    );

    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-1-3";
    updateScores(exerciseID, score);
}


/*_________________________________*/

function verify_2_1_4() {
    const correct = ['st-ans-2-1-4-a'];
    const all = ['st-ans-2-1-4-a', 'st-ans-2-1-4-b', 'st-ans-2-1-4-c', 'st-ans-2-1-4-d'];
    
    const res = evaluateQuizSelections(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-1-4',
        " تفكير سليم، كلما صغر المقام، زادت قيمة الكسر بلا حدود، البسط والمقام من نفس الإشارة، وبالتالي فإن $\\lim\\limits_{x \\stackrel{\\scriptscriptstyle >}{\\to} 0} \\frac{1}{x} = +\\infty$",
         "انتبه إلى المساواة $\\frac{L}{0^+}=+\\infty$. حيث أن $L>0$"
    );
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-1-4";
    updateScores(exerciseID, score);
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
    let score = 10;
    let exerciseID = "math-anal-limits-exem-ex-2-1-5";
    updateScores(exerciseID, score);
}

/*_________________________________*/

function verify_2_2_1() {
    const correct = ['st-ans-2-2-1-a', 'st-ans-2-2-1-d', 'st-ans-2-2-1-e' ];
    const all = ['st-ans-2-2-1-a', 'st-ans-2-2-1-b', 'st-ans-2-2-1-c', 'st-ans-2-2-1-d', 'st-ans-2-2-1-e'];
    
    const res = evaluateQuizSelections(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-2-1',
        "أنت تتقن التعامل مع المجموعات و الفرق بين المجموعات، والكتابات المختلفة لمجال التعريف، هنيئا!",
         "تحتاج إلى تركيز أكثر!"
    );
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-2-1";
    updateScores(exerciseID, score);
}

/*______________________________*/

function verify_2_2_2() {
    const correct = ['st-ans-2-2-2-b']; // الإجابة الصحيحة هي 0
    const all = ['st-ans-2-2-2-a', 'st-ans-2-2-2-b', 'st-ans-2-2-2-c'];
    
    const res = evaluateQuizSelections(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-2-2',
        "إجابة دقيقة! بما أن الصفر ينتمي لمجال التعريف، فالعلاقة بين النهاية والصورة مباشرة تماماً.",
        "راجع مفهوم نهاية دالة عند نقطة معرفة عندها."
    );
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-2-2";
    updateScores(exerciseID, score);
}

/*___________________________*/

function verify_2_2_3() {
    const correct = ['st-ans-2-2-3-b']; // الإجابة الصحيحة هي زائد لانهاية
    const all = ['st-ans-2-2-3-a', 'st-ans-2-2-3-b', 'st-ans-2-2-3-c'];
    
    const res = evaluateQuizSelections(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-2-3',
        "أحسنت! الدالة الجذرية دالة متزايدة وتؤول إلى اللانهاية كلما كبر المتغير x.",
        "تذكر أن الجذر التربيعي للأعداد الكبيرة جداً يبقى كبيراً جداً."
    );
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-2-3";
    updateScores(exerciseID, score);
}


/*______________________________*/

function verify_2_3_1() {
    const correct = ['st-ans-2-3-1-b', 'st-ans-2-3-1-c']; // كلاهما صحيح
    const all = ['st-ans-2-3-1-a', 'st-ans-2-3-1-b', 'st-ans-2-3-1-c'];
    
    const res = evaluateQuizSelections(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-3-1',
        "ممتاز! لقد انتبهت أن الصفر يجب أن يُستثنى لأنه يعدم المقام.",
        "انتبه! هل يمكن للـ x أن يساوي الصفر في هذه الدالة؟"
    );
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-3-1";
    updateScores(exerciseID, score);
}

/*______________________________*/

function verify_2_3_2() {
    const correct = ['st-ans-2-3-2-b'];
    const all = ['st-ans-2-3-2-a', 'st-ans-2-3-2-b'];
    
    const res = evaluateQuizSelections(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-3-2',
        "أحسنت! 1 على صفر موجب يعطي دائماً زائد لانهاية.",
        "فكر مجدداً، ماذا يحدث للكسر عندما يصغر المقام جداً؟"
    );
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-3-2";
    updateScores(exerciseID, score);
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
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-3-3";
    updateScores(exerciseID, score);
}
/*______________________________*/

function verify_2_4_1() {
    const correct = ['st-ans-2-4-1-b'];
    const res = evaluateQuizSelections(
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
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-4-1";
    updateScores(exerciseID, score);
}

/*______________________________*/

function verify_2_4_2() {
    const correct = ['st-ans-2-4-2-a'];
    const res = evaluateQuizSelections(
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
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-4-2";
    updateScores(exerciseID, score);
}

/*______________________________*/

function verify_2_4_3() {
    const correct = ['st-ans-2-4-3-c'];
    const res = evaluateQuizSelections(
        ['st-ans-2-4-3-a', 'st-ans-2-4-3-b', 'st-ans-2-4-3-c'], 
        correct
    );
    display_universal_validation(
        res, 
        1, 
        'hint-2-4-3', 
        "صحيح! أنت تبلي حسنا. النهاية تتغيرةحسب $n$ فرديا كان أم زوجيا. إذن الدالة لا تقبل نهاية.",
        "خطأ!  فقط لاحظ السؤالين السابقين!"
    );
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-4-3";
    updateScores(exerciseID, score);
}

/*______________________________*/

function verify_2_5_1() {
    const correct = ['st-ans-2-5-1-c']; 
    const all = ['st-ans-2-5-1-a', 'st-ans-2-5-1-b', 'st-ans-2-5-1-c'];
    
    const res = evaluateQuizSelections(
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
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-5-1";
    updateScores(exerciseID, score);
}

/*______________________________*/

function verify_2_5_2() {
    const correct = ['st-ans-2-5-2-b']; 
    const all = ['st-ans-2-5-2-a', 'st-ans-2-5-2-b', 'st-ans-2-5-2-c'];
    
    const res = evaluateQuizSelections(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-5-2',
        "إجابة دقيقة! نقول رياضياً أن النهاية غير موجودة لأن قيم الدالة لا تستقر.",
        "تذكر طبيعة منحنى الجيب؛ هل يتوقف عن التذبذب؟"
    );
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-5-2";
    updateScores(exerciseID, score);
}

/*______________________________*/

function verify_2_6_1() {
    const correct = ['st-ans-2-6-1-c'];
    const all = ['st-ans-2-6-1-a', 'st-ans-2-6-1-b', 'st-ans-2-6-1-c'];
    
    const res = evaluateQuizSelections(all, correct);
    
    display_universal_validation(
        res, 
        correct.length, 
        'hint-2-6-1',
        "رائع! لقد أدركت القاعدة: كل دالة تذبذبية دورية لا تملك نهاية عند اللانهاية.",
        "فكر مجدداً، هل يستقر منحنى جيب التمام عند قيمة محددة؟"
    );
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-6-1";
    updateScores(exerciseID, score);
}

/*______________________________*/

function verify_2_6_2() {
    const correct = ['st-ans-2-6-2-a'];
    const all = ['st-ans-2-6-2-a', 'st-ans-2-6-2-b', 'st-ans-2-6-2-c'];
    
    const res = evaluateQuizSelections(
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
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-6-2";
    updateScores(exerciseID, score);
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
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-7-1";
    updateScores(exerciseID, score);
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
    let score = 10 * res.score;
    let exerciseID = "math-anal-limits-exem-ex-2-7-2";
    updateScores(exerciseID, score);
}





















/*_____________________*/
