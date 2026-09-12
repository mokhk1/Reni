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
  name: 'Raneem',
  nickname: 'Reni',
  arabicName: 'رنيم',

  intro: {
    lines: ['رنيم... 🎀', 'عندي لك شيء صغير...', 'بس مو هدية عادية 👀', 'جاهزة؟'],
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
      question: 'شنو أكلة رنيم المفضلة اللي دايم تطلبها؟',
      answers: ['برجر 🍔', 'باستا 🍝', 'سوشي 🍣', 'كل شيء حلو 🍰'],
      correctAnswer: 3,
      correctPraise: 'صح! عرفتك 😭💗',
      wrongReply: 'لااا 😭 مو هذي، جربي مرة ثانية.',
      revealTitle: 'هدية 1 💗',
      revealMessage:
        'أنتِ إنسانة حلوة من جوّا ومن برّا، ووجودك يخلّي اليوم أحلى بدون ما تسوين شيء. تستاهلين كل شي حلو.',
      revealSub: '— من وحدة تحبك 🤍',
    },
    {
      id: 2,
      emoji: '🎀',
      theme: 'lavender',
      roomTitle: 'الهدية الثانية',
      questionTitle: 'طيب... نرفع المستوى شوي 👀',
      question: 'شنو اللي دايم تسوينه وين ما تروحين؟',
      answers: ['تقرين كتاب 📖', 'تصورين كل شيء 📸', 'تطلبين قهوة ☕', 'تتكلمين مع الكل 😄'],
      correctAnswer: 1,
      correctPraise: 'صححح! 😭💗 مستحيل يمر يوم بدون كاميرا',
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
      roomTitle: 'هدية الماتشا 🍵',
      questionTitle: 'واضح إني عرفت نقطة ضعفك... 🍵',
      question: 'إذا خيّروك شراب واحد لباقي حياتك؟',
      answers: ['ماتشا لاتيه 🍵', 'قهوة سادة ☕', 'شاي حلي 🧋', 'هوت choc 🍫'],
      correctAnswer: 0,
      correctPraise: 'طبعاً الماتشا! 😭🍵 ما فيها شك أصلاً',
      wrongReply: 'لا 😭 مو هذي! فكّري زين...',
      revealTitle: 'هدية 3 🍵💚',
      revealMessage:
        'هذي الهدية على ذوقك تمامًا 🍵 كل فنجان ماتشا يذكّرك إنه في لحظات هادية تستاهل توقفين لها. خذي نفس عميق، اشربي بهدوء، واستمتعي بسنتك.',
      revealSub: '🍵 matcha is always the answer',
      image:
        'https://images.pexels.com/photos/8629135/pexels-photo-8629135.jpeg?auto=compress&cs=tinysrgb&w=800',
      matcha: true,
    },
    {
      id: 4,
      emoji: '✨',
      theme: 'mystery',
      roomTitle: 'آخر وحدة...',
      questionTitle: 'هذي مختلفة شوي.',
      question: 'شنو الشيء اللي تمنيتيه هالسنة أكثر من anything؟',
      answers: ['سفر جديد ✈️', 'راحة بال 🤍', 'نجاح في شغلك 🌟', 'كل اللي فوق ☺️'],
      correctAnswer: 3,
      correctPraise: 'صح... 😭🤍 وأتمنى تحصلينهم كلهن',
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
    title: 'كل عام وأنتِ بخير يا رنيم 🤍',
    body: [
      'أتمنى سنتك الجديدة تكون مليانة أشياء حلوة تشبهك — ضحكات كثر ماتشا اللي تشربينها، لحظات هادية كثر اللي تحبين تصورينها، وناس تحبك بصدق زي ما تستاهلين.',
      'تستاهلين كل شي جميل يجيك هالسنة. ترى وجودك بحد ذاته هدية — لي وللكل اللي حولك. خليك نفسك دائمًا، لأن نفسك شي حلو.',
    ],
    closing: 'وهذي كانت هديتك الصغيرة مني 🎀',
    replay: 'أعيد التجربة ✨',
    reopen: 'افتحي كل الهدايا مرة ثانية',
  },
};
