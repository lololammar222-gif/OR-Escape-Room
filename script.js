const stages = [
    {
        title: "السؤال الأول: الإتيكيت والبروتوكول",
        scenario: "ما هو الفرق الأساسي بين الإتيكيت والبروتوكول من حيث الإلزام؟\n\nA) الإتيكيت إلزامي والبروتوكول اختيارى.\nB) الإتيكيت قواعد السلوك والالتزام بها إلزامي، والبروتوكول مواقف ومخالفتها لا يترتب عليها ضرر.\nC) الإتيكيت قواعد التعامل في المواقف الرسمية واتباعها مفضل ومخالفتها لا يترتب عليها ضرر، بينما البروتوكول قواعد السلوك واللباقة والالتزام به إلزامي.\nD) كلاهما غير ملزم على الإطلاق.",
        optionA: "الخيار (ب)",
        optionB: "الخيار (ج)",
        correct: "B",
        wrongMessage: "خطأ! الإجابة الصحيحة هي الخيار (ج)."
    },
    {
        title: "السؤال الثاني: لغة الجسد",
        scenario: "أي مما يلي يُعد من لغة الجسد السلبية (Don't Do) أثناء التعامل الرسمي؟\n\nA) الوقوف بشكل مستقيم أو الحفاظ على تواصل بصري سليم.\nB) تشبيك الذراعين بشكل دفاعي.",
        optionA: "الوقوف بشكل مستقيم / تواصل بصري",
        optionB: "تشبيك الذراعين بشكل دفاعي",
        correct: "B",
        wrongMessage: "خطأ! تشبيك الذراعين يعتبر لغة جسد سلبية ودفاعية."
    },
    {
        title: "السؤال الثالث: التقديم والتعريف",
        scenario: "ما هي القاعدة الذهبية في التقديم والتعريف بالشخصيات؟",
        optionA: "يتم تقديم الشخص الأعلى رتبة إلى الأقل رتبة دائماً.",
        optionB: "يتم تقديم الشخص الأقل رتبة إلى الشخص الأعلى رتبة، وليس العكس.",
        correct: "B",
        wrongMessage: "خطأ! القاعدة الذهبية هي تقديم الشخص الأقل رتبة إلى الأعلى رتبة."
    },
    {
        title: "السؤال الرابع: الخطابات الرسمية",
        scenario: "كيف يتم ترتيب الكلمات والخطابات الرسمية على المسرح (المنصة)؟",
        optionA: "تبدأ دائماً بالشخص الأقل رتبة وتتصاعد حتى يتحدث الشخص الأعلى رتبة (VIP) في النهاية لتكون كلمته هي الختام.",
        optionB: "تبدأ بالشخص الأعلى رتبة وتنتهي بالأقل رتبة.",
        correct: "A",
        wrongMessage: "خطأ! تبدأ بالتدريج وتكون كلمة الختام لأعلى رتبة."
    },
    {
        title: "السؤال الخامس: تنسيق المنصة",
        scenario: "أين يوضع الميكروفون عادةً عند تنسيق المنصة (Podium)؟",
        optionA: "في منتصف المسرح تماماً أو في يسار المسرح من وجهة نظر الجمهور.",
        optionB: "في يمين المسرح (شمال من وجهة نظر الجمهور).",
        correct: "B",
        wrongMessage: "خطأ! يوضع في يمين المنصة (شمال من وجهة نظر الجمهور)."
    },
    {
        title: "السؤال السادس: قواعد الجلوس",
        scenario: "في قواعد الجلوس والوقوف الرسمية (قاعدة المنتصف)، أين تجلس الشخصية ذات الرتبة الأولى (الأعلى رتبة)؟",
        optionA: "على أقصى اليمين أو أقصى اليسار.",
        optionB: "في المنتصف تماماً، وتكون الرتبة الثانية على يمينها والرتبة الثالثة على يسارها.",
        correct: "B",
        wrongMessage: "خطأ! تجلس في المنتصف تماماً."
    },
    {
        title: "السؤال السابع: زجاجة المياه",
        scenario: "ما هو الإتيكيت الخاص بتجهيز زجاجة المياه على المنصة؟",
        optionA: "أن تكون زجاجة مغلقة ومكتوب عليها السعر.",
        optionB: "أن تكون زجاجة مياه (بدون ليبل تجاري إن أمكن) ومعها كوب زجاجي نظيف جاهزين دائماً.",
        correct: "B",
        wrongMessage: "خطأ! الأصح أن تكون بدون ليبل تجاري ومعها كوب نظيف."
    },
    {
        title: "السؤال الثامن: استقبال ضيوف الـ VIP",
        scenario: "ما هي الخطوات المتبعة عند التعامل مع ضيوف الـ (VIPs) عند باب القاعة؟",
        optionA: "التعرف على الـ (VIP)، الترحيب بهم بأسلوب لائق، وتسليمهم مباشرة إلى مسؤول العلاقات العامة (PR).",
        optionB: "تجاهلهم حتى يدخلوا بمفردهم أو طلب التذاكر منهم.",
        correct: "A",
        wrongMessage: "خطأ! يجب الترحيب بهم وتسليمهم لمسؤول الـ PR فوراً."
    },
    {
        title: "السؤال التاسع: التواصل الفعال",
        scenario: "أي من العبارات التالية يمثل قاعدة صحيحة في التواصل الفعال (Communication Etiquette)؟",
        optionA: "مقاومة الاستماع، مقاطعة المتحدث، أو السخرية لإثبات وجهة النظر.",
        optionB: "التحدث بنبرة هادئة وواثقة، وعدم مقاطعة المتحدث مع إظهار الاهتمام (\"استمع لكي تفهم، وليس لكي ترد\").",
        correct: "B",
        wrongMessage: "خطأ! القاعدة هي: استمع لكي تفهم وليس لكي ترد."
    },
    {
        title: "السؤال العاشر: التنسيق بين اللجان",
        scenario: "ما هي إحدى خطوات التنسيق المشترك بين اللجان (Cross-Committee Coordination) أثناء الفعالية؟",
        optionA: "العشوائية وتجنب التواصل والاعتماد على الفردية.",
        optionB: "تحديد الأدوار، ونقطة التسليم والتسلم، والتواصل الصامت واللاسلكي، وإدارة الأزمات المشتركة.",
        correct: "B",
        wrongMessage: "خطأ! التنسيق يعتمد على تحديد الأدوار ونقطة التسليم والتسلم بوضوح."
    }
];

let currentStage = 0;

function loadStage() {
    if (currentStage < stages.length) {
        const stage = stages[currentStage];
        document.getElementById('room-title').innerText = stage.title;
        document.getElementById('scenario-text').innerText = stage.scenario;
        document.getElementById('btn-a').innerText = stage.optionA;
        document.getElementById('btn-b').innerText = stage.optionB;
        document.getElementById('feedback').innerText = '';
    } else {
        document.getElementById('room-title').innerText = "🎉 مبروك! لقد أجريت الاختبار بنجاح!";
        document.getElementById('scenario-text').innerText = "أثبتّ كفاءة عالية ومعرفة ممتازة بقواعد الإتيكيت والبروتوكول.";
        document.querySelector('.options-container').style.display = 'none';
    }
}

function makeChoice(choice) {
    const stage = stages[currentStage];
    if (choice === stage.correct) {
        document.getElementById('feedback').style.color = '#4ade80';
        document.getElementById('feedback').innerText = "أحسنت! إجابة صحيحة. تنتقل للسؤال التالي...";
        setTimeout(() => {
            currentStage++;
            loadStage();
        }, 1500);
    } else {
        document.getElementById('feedback').style.color = '#f87171';
        document.getElementById('feedback').innerText = stage.wrongMessage;
    }
}

loadStage();
