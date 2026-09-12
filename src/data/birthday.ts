// ════════════════════════════════════════════════════════════════════
//  كل المحتوى القابل للتعديل موجود هنا — غيّري الأسئلة، الأجوبة،
//  الرسائل، والصور براحتك. Nothing else needs to change.
// ════════════════════════════════════════════════════════════════════

export type Gift = {
  id: number;
  emoji: string; // appeared on the box in the gift room
  theme: 'blush' | 'lavender' | 'matcha' | 'mystery';
  roomTitle: string; // small label under the box in the room
  questionTitle: string;
  question: string;
  answers: string[];
  correctAnswer: number; // index into answers
  correctPraise: string; // shown right after correct answer
  wrongReply: string; // shown on wrong answer
  revealTitle: string;
  revealMessage: string;
  revealSub?: string; // optional smaller line
  image?: string; // optional image URL (replace freely)
  matcha?: boolean; // adds matcha decorations to the reveal
};

export const birthdayData = {
  name: 'Ahlam',
  nickname: 'Ahlam',
  arabicName: 'أحلام',

  intro: {
    lines: ['أحلام... 🎀', 'عندي لك شيء صغير...', 'بس مو هدية عادية 👀', 'جاهزة؟'],
    cta: 'ابدئي 🎁',
  },

  room: {
    title: 'عندي لك 4 هدايا... 🎁',
    subtitle: 'بس كل وحدة مخبّي فيها شيء.',
    rule: 'كل هدية ما تنفتح إلا إذا جاوبتي السؤال اللي فيها 👀',
    progressLabel: 'فُتحت',
  },

  gifts: [
    {
      id: 1,
      emoji: '🎁',
      theme: 'blush',
      roomTitle: 'الهدية الأولى',
      questionTitle: 'أول سؤال 👀',
      question: 'وين ساكنة؟',
      answers: ['الرياض 💩', 'تبوك 💪💪', 'جدة 🦈🪸🏝️', 'الدمام 🫏'],
      correctAnswer: 1,
      correctPraise: 'الخال والد والعم قابد بس جدة افضل من تبوك ',
      wrongReply: 'لااا 😭 مو هذي، جربي مرة ثانية.',
      revealTitle: 'هدية 1 💗',
      revealMessage:
        'أنتِ إنسانة حلوة من جوّا ومن برّا، ووجودك يخلّي اليوم أحلى بدون ما تسوين شيء. تستاهلين كل شي حلو.',
      revealSub: '— من شخص يحبك 🤍',
    },
    {
      id: 2,
      emoji: '🎀',
      theme: 'lavender',
      roomTitle: 'الهدية الثانية',
      questionTitle: 'طيب... نرفع المستوى شوي 👀',
      question: 'مين عنده أفضل ستيكرز ؟',
      answers: ['خويتك السراقة  ', 'ما أعرف ', 'أحلام ', ' الافضل انا '],
      correctAnswer: 2,
      correctPraise: '  عشانه يومك مشيتهااا',
      wrongReply: 'لااا 😭 جربي مرة ثانية.',
      revealTitle: 'هدية 2 ✨',
      revealMessage:
        'عينك للحياة فنية، تلاحظين التفاصيل الصغيرة اللي يفقدها غيرك. كل صورة تاخذينها فيها شيء من قلبك — ولهذا تحبين تذكرينها.',
      revealSub: 'خليك دايم كذا 🤍',
    },
    {
      id: 3,
      emoji: '💝',
      theme: 'matcha',
      roomTitle: 'الهدية الثالثة 🍵',
      questionTitle: 'واضح إني عرفت نقطة ضعفك... 🍵',
      question: 'وش أكثر مشروب وأكلة تحبها؟',
      answers: ['قهوة وبرجر ☕🍔', 'الماتشا والسوشي 🍵🍣', 'شاي وباستا 🧋🍝', 'هوت تشوكلت وبيتزا 🍫🍕'],
      correctAnswer: 1,
      correctPraise: 'معليك من الصورة الجاية بالغلط 100%',
      wrongReply: 'لا 😭 مو هذي! فكّري زين...',
      revealTitle: 'زوووط',
      revealMessage:
        'هذي الهدية على ذوقك تمامًا 🍵 كل فنجان ماتشا يذكّرك إنه في لحظات هادية تستاهل توقفين وسوشي يطيرك اليابان. خذي نفس عميق، اشربي بهدوء، واستمتعي بالاكل يا دبا.',
      revealSub: ' زوط لابوبو',
      image:
        'https://rivaspa.store/images/woman_swedish_massage_1775346202104.png',
      matcha: true,
    },
    {
      id: 4,
      emoji: '✨',
      theme: 'mystery',
      roomTitle: 'آخر وحدة...',
      questionTitle: 'هذي مختلفة شوي.',
      question: 'مين أقوى وحدة في؟؟؟؟',
      answers: ['خالتك', 'ماب الكيبورد ', 'ما أعرف ', 'أحلام 💪🏻'],
      correctAnswer: 3,
      correctPraise: 'فديتش اقوى اخصائية مساج',
      wrongReply: 'لا 😭 جربي مرة ثانية.',
      revealTitle: 'هدية 4 ✨',
      revealMessage:
        'هذي الهدية مو شيء تشوفينه... هي شيء تحسينه: أنتِ محبوبة، وأكثر من تتمنى خيرك يتمنى لك خير أكبر. خلي هالشيء معك دائمًا.',
      revealSub: 'باقي شيء واحد... 🤍',
    },
  ] as Gift[],

  final: {
    bridge1: 'خلصنا كل الهدايا... 🎁',
    bridge2: 'بس فيه شيء أهم.',
    title: 'كل عام وأنتِ بخير يا أحلام 🤍',
    body: [
      'أتمنى سنتك الجديدة تكون مليانة أشياء حلوة تشبهك — ضحكات كثر ماتشا اللي تشربينها، لحظات هادية كثر اللي تحبين تصورينها، وناس تحبك بصدق زي ما تستاهلين.',
      'تستاهلين كل شي جميل يجيك هالسنة. ترى وجودك بحد ذاته هدية — لي وللكل اللي حولك. خليك نفسك دائمًا، لأن نفسك شي حلو.',
    ],
    closing: 'وهذي كانت هديتك الصغيرة مني 🎀',
    replay: 'أعيد التجربة ✨',
    reopen: 'افتحي كل الهدايا مرة ثانية',
  },
};
