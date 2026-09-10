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
  correctAnswers: number[]; // indices into answers (supports multiple correct)
  correctPraise: string; // shown right after correct answer
  wrongReply: string; // shown on wrong answer
  revealTitle: string;
  revealMessage: string;
  revealSub?: string; // optional smaller line
  image?: string; // optional image URL (replace freely)
  matcha?: boolean; // adds coffee/pizza decorations to the reveal
};

export const birthdayData = {
  name: 'Areen',
  nickname: 'أرين',
  arabicName: 'أرين',

  intro: {
    lines: ['أرين... 🎀', 'عندي لك شيء صغير...', 'بس مو هدية عادية 👀', 'جاهزة؟'],
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
      question: 'وين تعيش الملكة أرين؟',
      answers: ['💩الرياض 🏙️', 'عنيزة 🌴', 'جدة 🏖️', 'بريدة 🌳'],
      correctAnswers: [1],
      correctPraise: 'صح! عنيزة دارك 😭🩷',
      wrongReply: 'لااا 😭 جربي مرة ثانية.',
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
      question: 'وش أكثر مكان تعشقه أرين؟',
      answers: ['البر 🏕️', 'البحر 🌊', 'المدينة 🏙️', 'الجبل ⛰️'],
      correctAnswers: [0, 1],
      correctPraise: 'صححح! 😭🩷 البر والبحر = قلبك',
      wrongReply: 'لااا 😭 جربي مرة ثانية.',
      revealTitle: 'هدية 2 ✨',
      revealMessage:
        'عينك للحياة فنية، تلاحظين التفاصيل الصغيرة اللي يفقدها غيرك. كل صورة تاخذينها فيها شيء من قلبك — ولهذا تحبين تذكرينها.',
      revealSub: 'خليك دايم كذا 🤍',
    },
    {
      id: 3,
      emoji: '🍕☕',
      theme: 'matcha',
      roomTitle: 'الهدية الثالثة 🍕☕',
      questionTitle: 'واضح إني عرفت ذوقك... 🍕☕',
      question: 'وش أكلة أرين المفضلة؟',
      answers: ['برجر 🍔', 'بيتزا و وقهوة 🍕☕', 'باستا 🍝', 'بوساتت 🍣'],
      correctAnswers: [1],
      correctPraise: 'صح! القهوة والبيتزا ملكة السفرة 😭🩷',
      wrongReply: 'لا 😭 مو هذا! فكّري زين...',
      revealTitle: 'هدية 3 ☕🍕',
      revealMessage:
        'هذي الهدية على ذوقك تمامًا ☕🍕 كل فنجان قهوة مع قطعة بيتزا يذكّرك إنه في لحظات لذيذة تستاهل توقفين لها. خلي يومك مليان باللي تحبين، واستمتعي بسنتك.',
      revealSub: '☕ coffee + 🍕 pizza = happiness',
      image:
        'https://images.pexels.com/photos/36851643/pexels-photo-36851643.jpeg?auto=compress&cs=tinysrgb&w=800',
      matcha: true,
    },
    {
      id: 4,
      emoji: '✨',
      theme: 'mystery',
      roomTitle: 'آخر وحدة...',
      questionTitle: 'هذي مختلفة شوي.',
      question: 'مين أفضل إنسانة بالدنيا؟',
      answers: ['أرين 🤍', 'لا أحد 🤷', 'الكل 🌍', 'سؤال صعب 😅'],
      correctAnswers: [0],
      correctPraise: 'صح... أكيد أرين 😭🩷',
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
    title: 'كل عام وأنتِ بخير يا أرين 🤍',
    body: [
      'أتمنى سنتك الجديدة تكون مليانة أشياء حلوة تشبهك — ضحكات كثر قهوتك اللي تشربينها، لحظات لذيذة كثر بيتزا اللي تحبينها، وناس تحبك بصدق زي ما تستاهلين.',
      'تستاهلين كل شي جميل يجيك هالسنة. ترى وجودك بحد ذاته هدية — لي وللكل اللي حولك. خليك نفسك دائمًا، لأن نفسك شي حلو واحبكك ارينييي.',
    ],
    closing: 'وهذي كانت هديتك الصغيرة مني 🎀',
    replay: 'أعيد التجربة ✨',
    reopen: 'افتحي كل الهدايا مرة ثانية',
  },
};
