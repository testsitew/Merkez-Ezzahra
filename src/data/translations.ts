import { TajweedRule, PricingPlan, FAQItem, QuizQuestion } from '../types/index.ts';

export const translations = {
  fr: {
    siteName: "Merkez AlZahraa",
    siteArabicName: "مركز الزهراء",
    instituteTagline: "Institut d'Études Coraniques, de Langue Arabe & des Sciences Islamiques",
    nav: {
      home: "Accueil",
      quran: "Institut du Coran",
      arabic: "Langue Arabe",
      sciences: "Sciences Islamiques",
      pricing: "Tarifs & Inscription",
      contact: "Contact & FAQ",
      enrollBtn: "S'inscrire",
    },
    hero: {
      subtitle: "Un enseignement d'excellence fondé sur la tradition authentique et la pédagogie moderne",
      titleStart: "Transmettre la Science avec",
      titleHighlight: "Rigueur & Authenticité",
      description: "Rejoignez une communauté internationale d'étudiants encadrés par des enseignants certifiés (Ijazah avec Isnad). Des cours interactifs en direct conçus pour les adultes, les enfants et les étudiants en quête de savoir.",
      ctaPrimary: "Inscrivez-vous maintenant",
      ctaSecondary: "Explorer nos cursus",
      stats: {
        teachers: "Enseignants diplômés avec Isnad",
        hours: "Heures de cours dispensées par mois",
        students: "Étudiants actifs dans 14 pays",
        satisfaction: "Taux de satisfaction des apprenants",
      },
      badges: {
        online: "Classes virtuelles interactives",
        flexible: "Horaires flexibles adaptés",
        cert: "Diplômes et attestations d'Ijazah",
      }
    },
    tracksOverview: {
      sectionTitle: "Trois Piliers d'Apprentissage",
      sectionSubtitle: "Un parcours académique complet pour cheminer du niveau débutant jusqu'à la maîtrise des sciences traditionnelles.",
      quran: {
        title: "Formations & Tajweed",
        arabicTitle: "الدورات والمتخصصات والتجويد",
        desc: "Modules ciblés et précis pour la récitation et l'étude des poèmes traditionnels de référence.",
        bullets: ["Al-Nouraniya Développée (النورانية المطورة)", "Tuhfat Al-Atfal (تحفة الأطفال)", "Al-Jazariyyah (الجزرية)"],
        cta: "Découvrir les formations",
      },
      arabic: {
        title: "Institut de Langue Arabe",
        arabicTitle: "معهد اللغة العربية",
        desc: "De l'alphabétisation jusqu'à la maîtrise des textes. Apprenez la langue du Coran avec rigueur et clarté.",
        bullets: ["Programme Al-Furqan (برنامج الفرقان)", "Les Tomes de Médine / Équivalent", "Méthode Al-Nouraniya (المعالي والنورانية)"],
        cta: "Découvrir le cursus Arabe",
      },
      sciences: {
        title: "Sciences Islamiques",
        arabicTitle: "معهد العلوم الشرعية",
        desc: "Étude structurée des textes fondateurs de la croyance et de la pratique authentique.",
        bullets: ["Les 3 Principes (الأصول الثلاثة)", "Les 4 Règles (القواعد الأربع)", "Kitab At-Tawhid & 40 Hadiths Nawawi"],
        cta: "Découvrir les Sciences",
      }
    },
    quranInstitute: {
      badge: "Formations Spécialisées",
      title: "Formations Spécialisées & Tajweed",
      description: "Des modules spécialisés pour perfectionner votre récitation et maîtriser les textes de référence.",
      modulesTitle: "Modules de Spécialisation",
      modules: [
        {
          id: "nouraniya",
          title: "Al-Nouraniya Développée",
          subtitle: "النورانية المطورة",
          desc: "Méthode d'initiation et de perfectionnement phonétique pour la lecture correcte du Coran.",
          points: [
            "Maîtrise des lettres et des liaisons",
            "Pratique phonétique intensive"
          ]
        },
        {
          id: "tuhfa",
          title: "Tuhfat Al-Atfal",
          subtitle: "تحفة الأطفال",
          desc: "Étude du célèbre poème didactique sur les règles fondamentales du Tajweed.",
          points: [
            "Mémorisation des versets didactiques",
            "Application pratique des règles"
          ]
        },
        {
          id: "jazariyyah",
          title: "Al-Jazariyyah",
          subtitle: "الجزرية",
          desc: "Étude avancée du poème de l'Imam Ibn Al-Jazari pour l'excellence en récitation.",
          points: [
            "Makharij et Sifat approfondis",
            "Maîtrise des subtilités du Tajweed"
          ]
        }
      ],
      interactiveStudio: {
        title: "Atelier Interactif de Tajweed & Makharij",
        subtitle: "Cliquez sur une règle pour découvrir son explication, sa prononciation et son exemple coranique.",
        listenBtn: "Écouter la règle",
        audioNotice: "Simulation sonore de récitation et résonance phonétique",
        phoneticBreakdown: "Règle phonétique",
        verseExample: "Exemple Coranique",
      },
      methodologyTitle: "Méthodologie en 4 Étapes",
      methodology: [
        { step: "01", title: "Diagnostic Vocal", desc: "Audit phonétique initial pour cartographier vos acquis et définir votre plan d'étude." },
        { step: "02", title: "Talaqqi & Mushafaha", desc: "Transmission directe en tête-à-tête ou micro-groupe avec répétition et correction en direct." },
        { step: "03", title: "Ancrage Théorique", desc: "Explication des causes phonétiques et mémorisation des versets didactiques du Matn." },
        { step: "04", title: "Certification", desc: "Examens périodiques et délivrance d'attestations validées par le conseil académique." }
      ]
    },
    arabicInstitute: {
      badge: "Langue du Coran",
      title: "Langue Arabe",
      description: "Un enseignement progressif pour lire, comprendre et maîtriser la langue arabe classique.",
      levelsTitle: "Programmes de Langue Arabe",
      levels: [
        {
          id: "lvl1",
          levelTag: "Programme 1",
          title: "Programme Al-Furqan",
          duration: "Fondamentaux",
          desc: "برنامج الفرقان — Apprentissage des bases et des mécanismes de lecture de la langue arabe.",
          book: "Programme Al-Furqan",
          objectives: [
            "Programme Al-Furqan (برنامج الفرقان)",
            "Acquisition du socle de lecture et d'écriture"
          ]
        },
        {
          id: "lvl2",
          levelTag: "Programme 2",
          title: "Les Tomes de Médine / Équivalent",
          duration: "Intermédiaire",
          desc: "دروس أجزاء المدينة المنورة — Étude structurée pour l'expression et la grammaire.",
          book: "Les Tomes de Médine",
          objectives: [
            "Les Tomes de Médine / Équivalent (دروس أجزاء المدينة المنورة)",
            "Maîtrise du vocabulaire et des structures grammaticales"
          ]
        },
        {
          id: "lvl3",
          levelTag: "Programme 3",
          title: "Méthode Al-Nouraniya",
          duration: "Perfectionnement",
          desc: "المعالي والنورانية — Pratique rigoureuse de la prononciation et articulation des lettres.",
          book: "Méthode Al-Nouraniya",
          objectives: [
            "Méthode Al-Nouraniya (المعالي والنورانية)",
            "Précision phonétique et fluidité de lecture"
          ]
        }
      ],
      previewModalBtn: "Consulter un extrait du manuel d'étude",
      placementTestBtn: "Tester mon niveau d'arabe",
      placementTitle: "Test d'Évaluation Rapide",
      placementSubtitle: "4 questions pour vous orienter vers la classe la plus adaptée à vos compétences.",
    },
    sciencesInstitute: {
      badge: "Héritage Académique",
      title: "Sciences Islamiques",
      description: "Étude des textes fondateurs et des repères essentiels de la croyance et de la pratique.",
      disciplinesTitle: "Programmes de Sciences Islamiques",
      disciplines: [
        {
          id: "fiqh",
          title: "Les Trois Principes",
          subtitle: "الأصول الثلاثة",
          desc: "Étude fondamentale des trois questions essentielles que tout musulman doit connaître.",
          matn: "Al-Usul al-Thalatha",
          topics: ["Connaissance d'Allah, de Son Messager et de la religion de l'Islam"]
        },
        {
          id: "aqida",
          title: "Les Quatre Règles",
          subtitle: "القواعد الأربع",
          desc: "Compréhension des règles fondamentales relatives au Tawhid et au discernement.",
          matn: "Al-Qawa'id al-Arba'",
          topics: ["Distinction entre le monothéisme et le polythéisme"]
        },
        {
          id: "hadith",
          title: "Kitab At-Tawhid & Quarante Hadiths",
          subtitle: "كتاب التوحيد والأربعون النووية",
          desc: "Étude du livre de l'Unicité et des Quarante Hadiths de l'Imam An-Nawawi.",
          matn: "Kitab At-Tawhid & Al-Arba'in an-Nawawiyya",
          topics: ["Kitab At-Tawhid (كتاب التوحيد)", "Les Quarante Hadiths Nawawi (الأربعون النووية)"]
        }
      ],
      academicValuesTitle: "Les Engagements Académiques d'AlZahraa",
      academicValues: [
        { title: "Source Authentique", desc: "Attachement scrupuleux au Coran, à la Sunna et au consensus des érudits reconnus." },
        { title: "Gradualité Pédagogique", desc: "Avancement étape par étape sans précipitation, selon le principe du Talab al-'Ilm." },
        { title: "Interaction Vivante", desc: "Temps dédié aux questions-réponses en direct à la fin de chaque séance avec le professeur." }
      ]
    },
    pricingSection: {
      badge: "Tarification Claire & Accessible",
      title: "Formules d'Étude & Tarifs Horaires",
      description: "Une structure tarifaire transparente et accessible pour permettre à chacun d'apprendre avec excellence selon le format d'encadrement qui lui correspond le mieux.",
      hourUnit: "/ heure",
      rateExplanation: "Facturation horaire claire et modulable selon le nombre d'heures hebdomadaires choisies.",
      enrollNow: "Choisir cette formule",
      popularBadge: "Sur-Mesure Recommandé",
      calculatorTitle: "Formulaire d'Inscription & Estimation Personnalisée",
      calculatorSubtitle: "Sélectionnez votre discipline et votre formule pour obtenir votre estimation exacte et valider votre dossier.",
    },
    wizard: {
      step1: "1. Matière & Formule",
      step2: "2. Rythme & Créneaux",
      step3: "3. Informations Étudiant",
      chooseSubject: "1. Choisissez la matière ou le cursus souhaité :",
      subjects: {
        coran: "Institut du Coran (Tahfidz, Tajweed, Ijazah)",
        arabe: "Langue Arabe (Lecture, Grammaire, Balagha)",
        sciences: "Sciences Islamiques (Fiqh, Aqida, Hadith)",
        integral: "Pack Pluridisciplinaire (Coran + Arabe + Sciences)",
      },
      chooseFormula: "2. Choisissez votre formule d'encadrement :",
      formulaLabels: {
        groupe: "Formule Groupe (3 € / h)",
        binome: "Formule Binôme (4 € / h)",
        individuel: "Formule Individuel (5 € / h)",
      },
      intensityLabel: "Nombre d'heures souhaité par semaine :",
      intensity1h: "1 heure / semaine (soit 4h / mois)",
      intensity2h: "2 heures / semaine (soit 8h / mois - Rythme recommandé)",
      intensity4h: "4 heures / semaine (soit 16h / mois - Cursus intensif)",
      scheduleLabel: "Créneau horaire préféré :",
      schedMorning: "Matinées en semaine (9h - 12h)",
      schedAfternoon: "Après-midi en semaine (12h - 18h)",
      schedEvening: "Soirées en semaine (19h - 22h)",
      schedWeekend: "Week-end (Samedi / Dimanche)",
      formLabels: {
        fullName: "Nom et Prénom",
        email: "Adresse e-mail",
        phone: "Numéro de téléphone / WhatsApp",
        ageBracket: "Tranche d'âge",
        adult: "Adulte (+18 ans)",
        teen: "Adolescent (13-17 ans)",
        child: "Enfant (6-12 ans)",
        priorKnowledge: "Vos acquis préalables ou objectifs particuliers :",
        priorPlaceholder: "Ex: Je souhaite mémoriser Juz Amma avec les règles de Tajweed...",
      },
      summary: {
        title: "Récapitulatif de votre inscription",
        subject: "Matière choisie",
        formula: "Formule retenue",
        hourlyRate: "Tarif horaire appliqué",
        schedule: "Créneau préféré",
        intensity: "Rythme hebdomadaire",
        tuition: "Frais de scolarité mensuels estimés",
        submitBtn: "Valider mon dossier d'inscription",
      },
      confirmation: {
        title: "Dossier d'Inscription Enregistré !",
        subtitle: "Votre référence d'inscription est",
        message: "Bienvenue à Merkez AlZahraa ! Un conseiller pédagogique va prendre contact avec vous sous 24h ouvrées pour fixer votre entretien d'orientation et vous attribuer votre classe.",
        whatsappBtn: "Contacter le secrétariat sur WhatsApp",
        downloadReceipt: "Télécharger l'attestation provisoire",
        closeBtn: "Fermer",
      }
    },
    contactFaq: {
      badge: "Assistance & Réponses",
      title: "Questions Fréquentes & Contact",
      description: "Trouvez immédiatement les réponses à vos interrogations ou écrivez directement à notre secrétariat administratif.",
      categories: {
        all: "Toutes les questions",
        general: "Organisation Générale",
        pedagogy: "Pédagogie & Professeurs",
        pricing: "Paiement & Tarifs",
        technical: "Plateforme & Matériel",
      },
      form: {
        title: "Écrire au Secrétariat Pédagogique",
        subtitle: "Une question spécifique ? Nous vous répondons avec bienveillance sous 24 heures.",
        name: "Votre Nom complet",
        email: "Votre E-mail",
        subject: "Objet de votre demande",
        message: "Votre Message",
        sendBtn: "Envoyer le message",
        successMsg: "Votre message a bien été transmis au secrétariat. Nous vous répondrons très rapidement par e-mail ou WhatsApp.",
      },
      contactCards: {
        directEmail: "Secrétariat Général",
        emailVal: "contact@merkez-alzahraa.com",
        whatsapp: "Assistance WhatsApp",
        whatsappVal: "Administration & Secrétariat",
        telegram: "Canal Telegram Officiel",
        telegramVal: "Annonces & Rappels Quotidiens",
        telegramBtn: "Rejoindre le canal",
        hours: "Horaires du secrétariat",
        hoursVal: "Du Lundi au Samedi : 09h00 - 20h00",
        platform: "Classes virtuelles",
        platformVal: "Espace élève sécurisé & Zoom Pro dédié",
      }
    },
    footer: {
      aboutText: "Merkez AlZahraa est un institut international d'enseignement en ligne dédié à la transmission vivante du Saint Coran, de la langue arabe et des sciences de la Shari'a selon une chaîne continue (Isnad) et des méthodes pédagogiques d'excellence.",
      curriculaCol: "Nos Cursus",
      legalCol: "Informations Légales",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'inscription",
      accreditation: "Agrément & Comité Scientifique",
      rights: "Tous droits réservés. Merkez AlZahraa - Institut en ligne.",
      quoteArabic: "« خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ »",
      quoteFrench: "« Le meilleur d'entre vous est celui qui apprend le Coran et l'enseigne. » (Rapporté par Al-Bukhari)",
    }
  },

  ar: {
    siteName: "مركز الزهراء",
    siteArabicName: "مركز الزهراء للعلوم الشرعية واللغة العربية",
    instituteTagline: "معهد رائد في دراسات القرآن الكريم، اللغة العربية، والعلوم الشرعية عن بعد",
    nav: {
      home: "الرئيسية",
      quran: "معهد القرآن الكريم",
      arabic: "اللغة العربية",
      sciences: "العلوم الشرعية",
      pricing: "الرسوم والتسجيل",
      contact: "اتصل بنا والأسئلة",
      enrollBtn: "سجّل الآن",
    },
    hero: {
      subtitle: "أصالة السند ورقي التعليم الأكاديمي التفاعلي في بيئة رقمية رائدة",
      titleStart: "تلقي العلوم بروح",
      titleHighlight: "الأصالة والإتقان",
      description: "انضم إلى نخبة الطلاب حول العالم تحت إشراف شيوخ وأساتذة مجازين بالسند المتصل إلى رسول الله ﷺ. حلقات تفاعلية مباشرة مصممة للأطفال والبالغين وطلاب العلم.",
      ctaPrimary: "سجّل الآن في الفصل الدراسي",
      ctaSecondary: "استكشف مناهج المركز",
      stats: {
        teachers: "شيوخ وأساتذة يحملون إجازات بالسند",
        hours: "ساعة تعليمية مباشرة شهرياً",
        students: "طالباً وطالبة من 14 دولة",
        satisfaction: "نسبة الرضا والإتقان لدى الدارسين",
      },
      badges: {
        online: "فصول افتراضية تفاعلية مباشرة",
        flexible: "مواعيد مرنة تناسب أوقاتكم",
        cert: "شهادات إجازة بالسند المتصل",
      }
    },
    tracksOverview: {
      sectionTitle: "الأركان الثلاثة لمنهاج المركز",
      sectionSubtitle: "مسار علمي متكامل يأخذ بيد الدارس من بدايات التأسيس حتى الإتقان التام بالسند المتصل.",
      quran: {
        title: "الدورات المتخصصة والتجويد",
        arabicTitle: "الدورات والمتخصصات",
        desc: "دورات علمية مركزة ومتقنة في أحكام التلاوة والتجويد ودراسة المتون المعتمدة.",
        bullets: ["النورانية المطورة", "تحفة الأطفال", "المقدمة الجزرية"],
        cta: "تفاصيل الدورات",
      },
      arabic: {
        title: "معهد اللغة العربية",
        arabicTitle: "معهد اللغة العربية",
        desc: "من التأسيس الأبجدي والقراءة إلى دراسة المتون والكتب الأصيلة في لغة القرآن الكريم.",
        bullets: ["برنامج الفرقان", "دروس أجزاء المدينة المنورة", "المعالي والنورانية"],
        cta: "تفاصيل مسار العربية",
      },
      sciences: {
        title: "معهد العلوم الشرعية",
        arabicTitle: "معهد العلوم الشرعية",
        desc: "دراسة منضبطة ومؤصلة للمتون العقدية والفقهية والحديثية الأصيلة.",
        bullets: ["الأصول الثلاثة", "القواعد الأربع", "كتاب التوحيد والأربعون النووية"],
        cta: "تفاصيل العلوم الشرعية",
      }
    },
    quranInstitute: {
      badge: "الدورات المتخصصة",
      title: "الدورات والمتخصصات والتجويد",
      description: "برامج علمية تخصصية متدرجة تهدف إلى ضبط المخارج والتجويد وإتقان المتون التعليمية المعتمدة.",
      modulesTitle: "المسارات التخصصية المعتمدة",
      modules: [
        {
          id: "nouraniya",
          title: "النورانية المطورة",
          subtitle: "تأسيس النطق القرآني السليم",
          desc: "منهجية دقيقة لإتقان مخارج الحروف العربية وربطها بالهجاء والقراءة السليمة المباشرة.",
          points: [
            "ضبط أصوات الحروف ومخارجها",
            "تدريبات تطبيقية مباشرة ومكثفة"
          ]
        },
        {
          id: "tuhfa",
          title: "تحفة الأطفال",
          subtitle: "متن الشيخ الجمزوري رحمه الله",
          desc: "شرح وتطبيق منظومة تحفة الأطفال في أحكام النون الساكنة والتنوين والمدود وأحكام التجويد الأساسية.",
          points: [
            "حفظ وضبط أبيات المنظومة",
            "التطبيق العملي مع الأمثلة القرآنية"
          ]
        },
        {
          id: "jazariyyah",
          title: "المقدمة الجزرية",
          subtitle: "متن الإمام ابن الجزري رحمه الله",
          desc: "دراسة تأصيلية متقدمة في المخارج والصفات ودقائق التجويد والوقف والابتداء لطلبة الإتقان.",
          points: [
            "شرح تفصيلي للمخارج والصفات",
            "إتقان الأوجه الدقيقة في الأداء والتلاوة"
          ]
        }
      ],
      interactiveStudio: {
        title: "المختبر الصوتي التفاعلي لأحكام التجويد والمخارج",
        subtitle: "انقر على الحكم التجويدي للاستماع للشرح الصوتي والمثال القرآني من التلاوة المتقنة.",
        listenBtn: "استمع إلى النطق والحكم",
        audioNotice: "محاكاة صوتية تفاعلية للنطق الصحيح والمخارج",
        phoneticBreakdown: "الضابط الصوتي والمخرجي",
        verseExample: "الشاهد من القرآن الكريم",
      },
      methodologyTitle: "منهجية التعليم القرآني في 4 خطوات",
      methodology: [
        { step: "٠١", title: "التقييم الصوتي الأولي", desc: "اختبار مسبق لتحديد مستوى القراءة ومواضع الخلل النطقي لوضع الخطة المناسبة." },
        { step: "٠٢", title: "التلقي والمشافهة", desc: "القراءة المباشرة على الأستاذ وتصحيح كل حركة وحرف في حينه دون تأجيل." },
        { step: "٠٣", title: "التأصيل النظري للمتون", desc: "ربط التطبيق العملي بأبيات المتن الحافظة للقاعدة لرسوخ الحكم في الذهن." },
        { step: "٠٤", title: "الاعتماد والتقويم الدوري", desc: "اختبارات في نهاية كل ربع وحزب مع منح الشهادات الأكاديمية المعتمدة." }
      ]
    },
    arabicInstitute: {
      badge: "لغة الضاد",
      title: "دراسة اللغة العربية من التأسيس إلى البلاغة",
      description: "اللغة العربية هي لسان التنزيل ومفتاح فهم الشريعة. نقدم مساراً علمياً متدرجاً يجمع بين الفهم النحوي السليم والبيان الأدبي الرفيع.",
      levelsTitle: "المستويات التعليمية التدرجية",
      levels: [
        {
          id: "lvl1",
          levelTag: "المستوى الأول",
          title: "التأسيس الأبجدي والقراءة الفصيحة",
          duration: "٤ إلى ٦ أشهر",
          desc: "إتقان الحروف، التشكيل الكامل، القراءة المسترسلة، واكتساب ثروة لغوية قرآءنية من ٤٠٠ كلمة أساسية.",
          book: "كتاب الزهراء - المستوى التمهيدي",
          objectives: [
            "التمييز بين الحروف المتشابهة نطقا ورسماً",
            "القراءة الذاتية لأي نص مشكول بطلاقة",
            "حوارات وتراكيب بسيطة وجمل فصيحة"
          ]
        },
        {
          id: "lvl2",
          levelTag: "المستوى الثاني",
          title: "علم النحو والصرف وتطبيقات الإعراب",
          duration: "٨ إلى ١٠ أشهر",
          desc: "شرح الجملة الاسمية والفعلية، علامات الإعراب الأصلية والفرعية، وأوزان الأفعال وتصريفاتها المختلفة.",
          book: "الآجرومية ومتن البناء في الصرف",
          objectives: [
            "إتقان إعراب المفردات والتراكيب بصورة كاملة",
            "فهم أوزان الأفعال العشرة ودلالاتها المعنوية",
            "تطبيقات إعرابية عملية على قصار السور والأحاديث النبوية"
          ]
        },
        {
          id: "lvl3",
          levelTag: "المستوى الثالث",
          title: "البلاغة القرآنية والتحليل الأدبي",
          duration: "١٠ إلى ١٢ شهراً",
          desc: "دراسة علوم المعاني والبيان والبديع، وتذوق وجوه الإعجاز البياني في التراكيب القرآنية البديعة.",
          book: "دروس البلاغة وقطر الندى",
          objectives: [
            "إدراك أسرار التقديم والتأخير والحذف والإيجاز في القرآن",
            "القدرة على قراءة أمهات الكتب غير المشكولة وفهمها",
            "الكتابة الإنشائية الراقية بلغة عربية فصيحة"
          ]
        }
      ],
      previewModalBtn: "تصفح نموذجاً من المقررات الدراسية",
      placementTestBtn: "اختبار تحديد المستوى في العربية",
      placementTitle: "اختبار تحديد المستوى السريع",
      placementSubtitle: "٤ أسئلة لاختيار الصف والمستوى الأنسب لمهاراتك في اللغة العربية.",
    },
    sciencesInstitute: {
      badge: "العلوم الشرعية",
      title: "التأصيل العلمي على منهاج النبوة",
      description: "برنامج منهجي مؤصل مستمد من تراث العلماء الراسخين، معتمد على شرح المتون الأساسية في الفقه والعقيدة والحديث.",
      disciplinesTitle: "المواد الشرعية المعتمدة",
      disciplines: [
        {
          id: "fiqh",
          title: "الفقه وأصول الفقه",
          subtitle: "أحكام العبادات والمعاملات",
          desc: "دراسة متدرجة لأبواب الطهارة والصلاة والصيام والزكاة والمعاملات المالية المعاصرة، مع دراسة قواعد استنباط الأحكام.",
          matn: "متن ابن عاشر / عمدة الفقه / سفينة النجاة",
          topics: ["أحكام الطهارة والصلاة على المذهب المختار", "فقه الزكاة والمعاملات المعاصرة", "قواعد أصول الفقه ودلالات الألفاظ"]
        },
        {
          id: "aqida",
          title: "العقيدة والتوحيد",
          subtitle: "سلامة المعتقد ووضوح الرؤية",
          desc: "تقرير أركان الإيمان الستة بالأدلة النقلية والعقلية، وفهم أسماء الله الحسنى وصفاته العلا على منهج أهل السنة والجماعة.",
          matn: "العقيدة الطحاوية / لمعة الاعتقاد",
          topics: ["أركان الإيمان وأدلتها المحكمة", "أسماء الله وصفاته وإثباتها بلا تكييف", "تحصين العقل من الشبهات المعاصرة"]
        },
        {
          id: "hadith",
          title: "الحديث والسيرة النبوية",
          subtitle: "معايشة الهدي النبوي الشريف",
          desc: "شرح الأحاديث الجوامع، ودراسة مصطلح الحديث وأقسام الصحيح والحسن والضعيف، واستلهام الدروس من سيرة المصطفى ﷺ.",
          matn: "الأربعون النووية / المنظومة البيقونية",
          topics: ["شرح الأحاديث الأربعين الجامعة للإسلام", "مبادئ علم مصطلح الحديث وضبط الأسانيد", "الدروس والعبر من السيرة النبوية المطهرة"]
        }
      ],
      academicValuesTitle: "ثوابت التعليم في مركز الزهراء",
      academicValues: [
        { title: "التلقي الموثوق", desc: "الاعتماد الكامل على المصادر المعتمدة الموثوقة عند أهل العلم الراسخين." },
        { title: "التدرج التعليمي", desc: "البدء بصغار العلم قبل كباره وفق منهجية طلب العلم الأصيلة." },
        { title: "التفاعل المباشر", desc: "تخصيص وقت وافر للنقاش والإجابة عن استفسارات الطلاب في كل محاضرة." }
      ]
    },
    pricingSection: {
      badge: "رسوم ميسرة وباقات مرنة",
      title: "باقات الدراسة والرسوم بالساعة",
      description: "هيكلة رسوم شفافة وميسرة بالساعة تتيح لكل طالب وطالبة اختيار الصيغة التعليمية الأنسب لأهدافه وميزانيته.",
      hourUnit: "/ للساعة",
      rateExplanation: "احتساب دقيق وميسر بالساعة يتيح لك تحديد عدد الساعات الأسبوعية بحرية.",
      enrollNow: "اختر هذه الباقة",
      popularBadge: "الباقة الفردية المميزة",
      calculatorTitle: "استمارة التسجيل وحساب الرسوم الفورية",
      calculatorSubtitle: "اختر المادة التعليمية ونظام الحصة للحصول على التقدير الشهري الفوري وتأكيد التسجيل.",
    },
    wizard: {
      step1: "١. المادة والنظام",
      step2: "٢. الساعات والمواعيد",
      step3: "٣. بيانات الطالب",
      chooseSubject: "١. اختر المادة أو المسار الدراسي المطلوب :",
      subjects: {
        coran: "معهد القرآن الكريم (تحفيظ وتجويد وإجازة بالسند)",
        arabe: "اللغة العربية (تأسيس، نحو، صرف، بلاغة)",
        sciences: "العلوم الشرعية (فقه، عقيدة، حديث، سيرة)",
        integral: "البرنامج الشامل (قرآن + لغة عربية + علوم شرعية)",
      },
      chooseFormula: "٢. اختر صيغة الدراسة المعتمدة :",
      formulaLabels: {
        groupe: "باقة المجموعة (٣ € / للساعة)",
        binome: "باقة الثنائي (٤ € / للساعة)",
        individuel: "باقة الفردي (٥ € / للساعة)",
      },
      intensityLabel: "عدد الساعات الأسبوعية المطلوبة :",
      intensity1h: "ساعة واحدة أسبوعياً (أي ٤ ساعات شهرياً)",
      intensity2h: "ساعتان أسبوعياً (أي ٨ ساعات شهرياً - النظام الموصى به)",
      intensity4h: "٤ ساعات أسبوعياً (أي ١٦ ساعة شهرياً - نظام مكثف)",
      scheduleLabel: "الفترة الزمنية المفضلة :",
      schedMorning: "الفترة الصباحية (٩ص - ١٢ظ)",
      schedAfternoon: "بعد الظهر في أيام العمل (١٢م - ٦م)",
      schedEvening: "الفترة المسائية (٧م - ١٠م)",
      schedWeekend: "نهاية الأسبوع (السبت والأحد)",
      formLabels: {
        fullName: "الاسم واللقب كاملاً",
        email: "البريد الإلكتروني",
        phone: "رقم الهاتف / الواتساب مع الرمز الدولي",
        ageBracket: "الفئة العمرية",
        adult: "بالغ (+١٨ سنة)",
        teen: "ناشئة (١٣ - ١٧ سنة)",
        child: "أطفال (٦ - ١٢ سنة)",
        priorKnowledge: "خلفيتك العلمية السابقة أو رغباتك الخاصة :",
        priorPlaceholder: "مثال: أرغب في مراجعة وتثبيت جزء عم مع ضبط أحكام التجويد...",
      },
      summary: {
        title: "ملخص بيانات التسجيل",
        subject: "المادة المختارة",
        formula: "صيغة الدراسة",
        hourlyRate: "سعر الساعة المعتمد",
        schedule: "الموعد المفضل",
        intensity: "عدد الساعات الأسبوعية",
        tuition: "الرسوم الشهرية المقدرة",
        submitBtn: "تأكيد طلب التسجيل الأكاديمي",
      },
      confirmation: {
        title: "تم تسجيل طلبكم بنجاح مبارك !",
        subtitle: "رقم ملف التسجيل الأكاديمي هو",
        message: "أهلاً بك في رحاب مركز الزهراء ! سيتواصل معك المنسق الأكاديمي خلال ٢٤ ساعة عمل عبر الواتساب لتحديد المقابلة التقييمية وإدراجك في الفصل المناسب.",
        whatsappBtn: "مراسلة الإدارة عبر الواتساب مباشرة",
        downloadReceipt: "تحميل إشعار التسجيل المبدئي",
        closeBtn: "إغلاق",
      }
    },
    contactFaq: {
      badge: "خدمة الطلاب",
      title: "الأسئلة الشائعة والتواصل المباشر",
      description: "إجابات واضحة عن كل ما يخص الدراسة، الأنظمة، الاختبارات، والمواعيد مع إمكانية مراسلة أمانة المركز في أي وقت.",
      categories: {
        all: "جميع الأسئلة",
        general: "النظام العام والقبول",
        pedagogy: "المناهج والمعلمون",
        pricing: "الرسوم وطرق الدفع",
        technical: "المنصة والبرامج",
      },
      form: {
        title: "مراسلة الإدارة الأكاديمية",
        subtitle: "لديك استفسار خاص؟ فريقنا الأكاديمي يسعد بالإجابة الشافية خلال ٢٤ ساعة.",
        name: "الاسم الكامل",
        email: "البريد الإلكتروني",
        subject: "موضوع الاستفسار",
        message: "نص الرسالة أو الاستفسار",
        sendBtn: "إرسال الرسالة",
        successMsg: "تم استلام رسالتك بنجاح. سيقوم المنسق الأكاديمي بالرد عليك قريباً عبر البريد الإلكتروني أو الواتساب.",
      },
      contactCards: {
        directEmail: "البريد الإلكتروني الرسمي",
        emailVal: "contact@merkez-alzahraa.com",
        whatsapp: "خط الواتساب المباشر",
        whatsappVal: "الأمانة العامة وإدارة المركز",
        telegram: "قناة تيليجرام الرسمية",
        telegramVal: "متابعة الإعلانات والدروس والفوائد",
        telegramBtn: "الانضمام للقناة الرسمية",
        hours: "ساعات عمل أمانة المركز",
        hoursVal: "من الإثنين إلى السبت : ٩ صباحاً - ٨ مساءً",
        platform: "الفصول الافتراضية",
        platformVal: "منصة تعليمية آمنة وبث مباشر عبر زووم بريميوم",
      }
    },
    footer: {
      aboutText: "مركز الزهراء معهد أكاديمي دولي متخصص في تعليم القرآن الكريم وتجويده بالسند المتصل، وعلوم اللغة العربية الأصيلة، والشريعة الإسلامية السمحة وفق منهج وسطي رصين يجمع بين أصالة التراث وعصرية الوسيلة.",
      curriculaCol: "المسارات التعليمية",
      legalCol: "الأنظمة والاعتمادات",
      privacy: "سياسة الخصوصية وحماية البيانات",
      terms: "شروط وضوابط الالتحاق",
      accreditation: "اللجنة العلمية وهيئة الإجازات",
      rights: "جميع الحقوق محفوظة. مركز الزهراء للتعليم الأكاديمي عن بعد.",
      quoteArabic: "« خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ »",
      quoteFrench: "« Le meilleur d'entre vous est celui qui apprend le Coran et l'enseigne. » (رواه البخاري)",
    }
  }
};

export const tajweedRulesData: TajweedRule[] = [
  {
    id: "idgham",
    name: "Al-Idgham (L'Assimilation)",
    arabicName: "الإدغام بغنة وبغير غنة",
    category: "Règles de la Noun Sakina & Tanween",
    explanation: "Fusion phonétique de la Noun Sakina ou du Tanween dans la lettre suivante (lettres de 'Yarmaloon' يَرْمَلُون). Se subdivise en Idgham avec grésillement nasal (Ghunnah) de 2 temps et sans Ghunnah.",
    verseExample: "مَن يَقُولُ  ·  مِن مَّالٍ  ·  مِن رَّبِّهِمْ",
    surahRef: "Sourate Al-Baqarah (2:8) & Al-Mu'minun",
    phoneticRule: "Fusion nasale à 2 temps (Harakatan) pour les lettres ي، ن، م، و",
    audioToneFrequency: 440,
  },
  {
    id: "ikhfa",
    name: "Al-Ikhfa (La Dissimulation)",
    arabicName: "الإخفاء الحقيقي",
    category: "Règles de la Noun Sakina & Tanween",
    explanation: "Prononciation intermédiaire entre l'assimilation et la manifestation claire, accompagnée d'un Ghunnah de 2 temps au niveau des 15 lettres de l'Ikhfa réunies dans l'adage poétique.",
    verseExample: "مِن قَبْلُ  ·  أَنفُسَكُمْ  ·  مِن تَحْتِهَا",
    surahRef: "Sourate Al-Baqarah (2:25) & An-Nisa",
    phoneticRule: "Son voilé avec résonance nasale complète sans contact plein de la langue",
    audioToneFrequency: 523.25,
  },
  {
    id: "qalqalah",
    name: "Al-Qalqalah (L'Ébranlement)",
    arabicName: "القلقلة (ق، ط، ب، ج، د)",
    category: "Caractéristiques des Lettres (Sifat)",
    explanation: "Vibration et écho phonétique distinct lors de l'arrêt sur une des cinq lettres 'Qutb Jad' (ق، ط، ب، ج، د) lorsqu'elle porte un Soukoun (léger, moyen ou fort).",
    verseExample: "قُلْ هُوَ اللَّهُ أَحَدٌ  ·  الْفَلَقِ  ·  مِن مَّسَدٍ",
    surahRef: "Sourates Al-Ikhlas (112:1) & Al-Falaq (113:1)",
    phoneticRule: "Rebondissement audible de la consonne sans ajouter de voyelle brève",
    audioToneFrequency: 587.33,
  },
  {
    id: "ithhar",
    name: "Al-Ith-har (La Manifestation Claire)",
    arabicName: "الإظهار الحلقي",
    category: "Règles de la Noun Sakina & Tanween",
    explanation: "Prononciation nette, distincte et sans Ghunnah de la Noun Sakina ou du Tanween devant l'une des 6 lettres de la gorge : Hamza, Ha, 'Ayn, Ha, Ghayn, Kha (ء، هـ، ع، ح، غ، خ).",
    verseExample: "مَنْ آمَنَ  ·  عَلِيمٌ حَكِيمٌ  ·  مِنْ غِلٍّ",
    surahRef: "Sourate Al-Baqarah (2:62) & Al-Hijr",
    phoneticRule: "Émission limpide et franche depuis le point d'articulation de la gorge",
    audioToneFrequency: 659.25,
  },
  {
    id: "madd",
    name: "Al-Madd (Les Prolongations)",
    arabicName: "المدود (طبيعي، متصل، منفصل، لازم)",
    category: "Règles d'Allongement",
    explanation: "Allongement de la voix sur les lettres de Madd (Alif, Waw, Ya). Varie de 2 temps (Madd naturel) jusqu'à 6 temps pour le Madd Lazim (obligatoire lourd).",
    verseExample: "وَلَا الضَّالِّينَ  ·  السَّمَاءِ  ·  قَالُوا آمَنَّا",
    surahRef: "Sourate Al-Fatiha (1:7) & Al-Baqarah",
    phoneticRule: "Expansion de 2, 4, 5 ou 6 temps selon la présence d'une Hamza ou d'un Soukoun",
    audioToneFrequency: 698.46,
  },
  {
    id: "makharij",
    name: "Makharij al-Halq (Les Lettres de la Gorge)",
    arabicName: "مخارج الحلق واللسان",
    category: "Points d'Articulation",
    explanation: "Les 17 points d'articulation principaux décrits par l'Imam Ibn al-Jazari. La maîtrise de chaque lettre depuis son origine exacte garantit la préservation du texte sacré.",
    verseExample: "الرَّحْمَٰنِ الرَّحِيمِ  ·  اهْدِنَا الصِّرَاطَ",
    surahRef: "Sourate Al-Fatiha (1:3, 1:6)",
    phoneticRule: "Localisation anatomique précise (fond, milieu, et haut de la gorge)",
    audioToneFrequency: 783.99,
  }
];

export const pricingPlansData: PricingPlan[] = [
  {
    id: "groupe",
    name: "Formule Groupe",
    arabicName: "باقة المجموعة",
    hourlyRate: 3,
    subtitle: "Session en groupe réduit",
    arabicSubtitle: "فصل تفاعلي مصغّر",
    classSize: "4 à 6 élèves par classe",
    arabicClassSize: "٤ إلى ٦ طلاب في الحلقة",
    tagline: "Dynamique d'échange collective, émulation et tarif le plus économique",
    features: [
      "Tarif imbattable de 3 € / heure",
      "Micro-groupe de 4 à 6 étudiants pour un échange actif",
      "Correction rigoureuse et bienveillante de l'enseignant",
      "Accès illimité aux replays des séances 24/7",
      "Supports de cours et fiches didactiques PDF inclus",
      "Attestation de fin de niveau validée"
    ]
  },
  {
    id: "binome",
    name: "Formule Binôme",
    arabicName: "باقة الثنائي",
    hourlyRate: 4,
    subtitle: "Session à 2 élèves",
    arabicSubtitle: "حلقة لدارسين اثنين فقط",
    classSize: "Exactement 2 élèves",
    arabicClassSize: "طالبان اثنان مع الشيخ",
    tagline: "L'équilibre idéal entre attention personnalisée et tarif préférentiel",
    features: [
      "Tarif avantageux de 4 € / heure",
      "Séance partagée à deux élèves du même niveau",
      "Temps de récitation et d'expression doublé",
      "Possibilité de s'inscrire en binôme (famille, amis)",
      "Flexibilité conjointe dans le choix des créneaux",
      "Suivi pédagogique rapproché et devoirs corrigés"
    ]
  },
  {
    id: "individuel",
    name: "Formule Individuel",
    arabicName: "باقة الفردي",
    hourlyRate: 5,
    highlight: true,
    subtitle: "Cours particulier sur-mesure",
    arabicSubtitle: "حلقة خاصة فردية ١-على-١",
    classSize: "1 élève en tête-à-tête",
    arabicClassSize: "طالب واحد مع الشيخ مباشرة",
    tagline: "100% de l'attention du cheikh, progression accélérée et flexibilité totale",
    features: [
      "Tarif d'excellence de 5 € / heure",
      "Cours particulier 1-sur-1 en tête-à-tête avec l'enseignant",
      "Programme sur-mesure adapté à votre rythme et vos objectifs",
      "Totale liberté dans la planification des jours et horaires",
      "Parcours préparatoire intensif à l'Ijazah Coranique avec Isnad",
      "Ligne WhatsApp directe avec l'enseignant référent"
    ]
  }
];

export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    category: "pricing",
    question: "Comment fonctionne la tarification horaire (3€, 4€, 5€) ?",
    answer: "Nos tarifs sont strictement calculés à l'heure selon la formule choisie : 3 €/h en Groupe (4-6 élèves), 4 €/h en Binôme (2 élèves), et 5 €/h en Individuel (1-sur-1). Par exemple, pour 2 heures par semaine en formule Groupe, votre mensualité est de 24 € / mois (8h de cours)."
  },
  {
    id: "faq-2",
    category: "general",
    question: "Comment se déroulent les cours en direct ?",
    answer: "Les cours sont dispensés en direct via notre plateforme sécurisée et Zoom Pro Haute Définition. Chaque étudiant interagit directement avec l'enseignant par la voix et la vidéo. Les séances sont enregistrées et consultables en replay dans votre espace personnel."
  },
  {
    id: "faq-3",
    category: "general",
    question: "Les cours sont-ils séparés entre frères et sœurs ?",
    answer: "Oui, Merkez AlZahraa applique une organisation respectueuse de l'éthique islamique : les classes pour sœurs sont encadrées par des enseignantes certifiées, et les classes pour frères par des professeurs et cheikhs diplômés."
  },
  {
    id: "faq-4",
    category: "pedagogy",
    question: "Quelle est la qualification de vos enseignants ?",
    answer: "Tous nos enseignants sont diplômés d'universités islamiques renommées (Al-Azhar, Université Islamique de Médine, etc.) ou détenteurs d'Ijazahs avec chaînes de transmission authentiques (Sanad Muttasil) pour le Saint Coran."
  },
  {
    id: "faq-5",
    category: "pedagogy",
    question: "Je suis totalement débutant en arabe, puis-je m'inscrire ?",
    answer: "Absolument. Notre Niveau 1 de Langue Arabe est spécialement conçu pour les débutants complets : vous apprendrez l'alphabet, l'écriture, les règles phonétiques et les premiers éléments de conversation pas à pas."
  },
  {
    id: "faq-6",
    category: "pricing",
    question: "Puis-je changer de formule (ex: passer de Groupe à Individuel) ?",
    answer: "Oui, vous êtes libre d'adapter votre formule ou votre volume d'heures d'un mois sur l'autre par simple message à notre secrétariat avant le 25 du mois en cours."
  },
  {
    id: "faq-7",
    category: "technical",
    question: "De quel matériel ai-je besoin pour suivre les cours ?",
    answer: "Un ordinateur portable, une tablette ou un smartphone avec une connexion internet stable, ainsi qu'un casque ou des écouteurs munis d'un microphone pour assurer une restitution sonore optimale lors des récitations."
  }
];

export const placementQuizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "Quel est votre niveau actuel de lecture de l'alphabet arabe ?",
    arabicText: "ما هو مستواك الحالي في قراءة الحروف العربية؟",
    options: [
      { text: "Je ne connais pas encore les lettres de l'alphabet", levelScore: 1 },
      { text: "Je reconnais les lettres mais j'hésite lors de la lecture", levelScore: 1 },
      { text: "Je lis de manière fluide et vocalisée sans hésitation", levelScore: 2 },
      { text: "Je lis couramment et comprends une partie du texte", levelScore: 3 }
    ]
  },
  {
    id: 2,
    question: "Dans la phrase « كَتَبَ الطَّالِبُ الدَّرْسَ », quelle est la fonction grammaticale de « الطَّالِبُ » ?",
    arabicText: "في جملة « كَتَبَ الطَّالِبُ الدَّرْسَ » ما هو إعراب كلمة « الطَّالِبُ »؟",
    options: [
      { text: "Je ne connais pas encore la grammaire (Nahw)", levelScore: 1 },
      { text: "C'est un verbe d'action (Fi'l)", levelScore: 1 },
      { text: "C'est le sujet (Fa'il marfou') qui accomplit l'action", levelScore: 2 },
      { text: "C'est un Fa'il marfou' avec dammah dhahirah sur la fin", levelScore: 3 }
    ]
  },
  {
    id: 3,
    question: "Quelle différence faites-vous entre le Fā'il (الفاعل) et le Maf'ūl bihi (المفعول به) ?",
    arabicText: "ما هو الفرق بين الفاعل والمفعول به في الجملة الفعلية؟",
    options: [
      { text: "Je ne sais pas encore faire la différence", levelScore: 1 },
      { text: "L'un porte une damma et l'autre une fatha, mais sans plus", levelScore: 2 },
      { text: "Le Fa'il fait l'action (nominatif) et le Maf'ul subit l'action (accusatif)", levelScore: 3 }
    ]
  },
  {
    id: 4,
    question: "Quel est votre objectif prioritaire en étudiant à l'Institut ?",
    arabicText: "ما هو هدفك الأساسي من الدراسة في المركز؟",
    options: [
      { text: "Apprendre à lire le Coran et prononcer correctement", levelScore: 1 },
      { text: "Comprendre le vocabulaire et les bases grammaticales", levelScore: 2 },
      { text: "Étudier les textes classiques, le Fiqh et l'éloquence", levelScore: 3 }
    ]
  }
];
