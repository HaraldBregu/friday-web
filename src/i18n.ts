import fridayEn from "./data/friday-product.json";
import integrationsEn from "./data/integrations.json";
import operatorsEn from "./data/operators.json";
import siteEn from "./data/site.json";

export const locales = ["en", "it"] as const;
export type Locale = (typeof locales)[number];

export const localeMeta: Record<Locale, { label: string; shortLabel: string; hreflang: string }> = {
  en: {
    label: "English",
    shortLabel: "EN",
    hreflang: "en",
  },
  it: {
    label: "Italiano",
    shortLabel: "IT",
    hreflang: "it",
  },
};

const localizedCategory: Record<string, string> = {
  Code: "Codice",
  Channels: "Canali",
  Operators: "Operatori",
  Data: "Dati",
  Infrastructure: "Infrastruttura",
  "AI Providers": "Provider AI",
};

const siteIt = {
  ...siteEn,
  tagline: "Il tuo copilota AI desktop per le attivita quotidiane",
  description:
    "Friday e un copilota AI desktop nativo che legge e scrive file, cerca sul web, genera immagini, gestisce la voce, esegue lavoro pianificato e si collega agli strumenti e alle app di messaggistica che gia usi.",
  audience:
    "Professionisti, power user, persone attente alla privacy, tinkerers e team che vogliono un assistente AI personale sul desktop con azioni autorizzate esplicitamente.",
  cta: {
    label: "Scarica app desktop",
    url: "#download",
  },
  secondaryCta: {
    label: "Vedi integrazioni",
    url: "/integrations",
  },
} satisfies typeof siteEn;

const fridayIt = {
  ...fridayEn,
  nav: [
    { label: "Prodotto", href: "#product" },
    { label: "Funzioni", href: "#features" },
    { label: "Docs", href: "/docs" },
    { label: "Scarica", href: "#download" },
  ],
  release: {
    ...fridayEn.release,
    phase: "Beta privata",
  },
  hero: {
    eyebrow: "Assistente AI desktop local-first",
    headline: "Friday.",
    description:
      "Il tuo copilota AI desktop per le attivita quotidiane. Scrivi o parla in linguaggio naturale e Friday puo leggere e scrivere file, cercare sul web, generare immagini, trascrivere la voce, parlare, lavorare su pianificazione e collegarsi agli strumenti che gia usi.",
  },
  demoSuggestions: [
    {
      question: "Riassumi i miei messaggi Telegram",
      answer:
        "Hai 4 messaggi diretti e 2 thread di gruppo. Il thread da guardare e #launch: Priya e bloccata sulla domanda del timeout API e ti ha taggato 11 minuti fa.",
    },
    {
      question: "Scrivi un rifiuto gentile a Maya",
      answer:
        "Ciao Maya, grazie mille per l'invito. Giovedi non riesco a partecipare, ma mi farebbe piacere trovare un altro momento. Vuoi che invii alcune opzioni per la prossima settimana?",
    },
    {
      question: "Cosa ho fatto ieri?",
      answer:
        "Hai passato la mattina sulla landing page di Friday, hai rilasciato un piccolo aggiornamento prodotto dopo pranzo e hai chiuso il portatile alle 18:12.",
    },
  ],
  landingMetrics: [
    { value: "App desktop", label: "Funziona nativamente su macOS, Windows e Linux." },
    { value: "I tuoi provider AI", label: "Collega le tue chiavi provider e scegli i modelli." },
    { value: "Locale per impostazione", label: "Impostazioni, credenziali, cronologia e memoria restano sul dispositivo." },
    { value: "Mantieni il controllo", label: "Friday chiede approvazione prima delle azioni sensibili." },
  ],
  landingFeatures: [
    {
      key: "01",
      status: "Chat",
      title: "Chat che agisce",
      description:
        "Chiedi in linguaggio naturale e Friday usa gli strumenti per completare il lavoro: leggere file, scrivere documenti, cercare sul web, eseguire comandi, generare immagini e restituire un risultato concreto.",
    },
    {
      key: "02",
      status: "Local-first",
      title: "I tuoi dati restano tuoi",
      description:
        "Friday gira come app desktop. Chiavi provider, impostazioni, credenziali, cronologia e file di lavoro vivono sulla tua macchina invece che in un chatbot web.",
    },
    {
      key: "03",
      status: "Permessi",
      title: "Il lavoro sensibile richiede approvazione",
      description:
        "Scrivere file, inviare messaggi e toccare servizi esterni passa da prompt di permesso espliciti.",
    },
    {
      key: "04",
      status: "Voce",
      title: "Dettatura e lettura ad alta voce",
      description:
        "Parla invece di digitare, trascrivi registrazioni e fai leggere le risposte da Friday usando i provider e le voci che configuri.",
    },
    {
      key: "05",
      status: "Estendibile",
      title: "Skill e MCP",
      description:
        "Insegna a Friday workflow riutilizzabili ed esponi nuove capacita tramite il Model Context Protocol.",
    },
    {
      key: "06",
      status: "Automazione",
      title: "Pianificazioni e health check",
      description:
        "Esegui lavori ricorrenti, riepiloghi giornalieri, pulizie periodiche e health check basati su checklist anche quando non stai chattando.",
    },
  ],
  howSteps: [
    {
      label: "PASSO 01",
      glyph: "Chiedi",
      title: "Fai una richiesta",
      description: "Scrivi o detta cosa vuoi. Friday capisce obiettivo, vincoli e output atteso e fa domande solo quando qualcosa di critico e ambiguo.",
    },
    {
      label: "PASSO 02",
      glyph: "Piano",
      title: "Sceglie gli strumenti",
      description: "Seleziona file, comandi, ricerca web, browser, generazione immagini, skill, tool MCP, subagent o workflow pianificati adatti al compito.",
    },
    {
      label: "PASSO 03",
      glyph: "Agisci",
      title: "Approvi e verifichi",
      description: "Le azioni sensibili si fermano per conferma. Friday controlla il risultato e restituisce una risposta, file, immagine, job pianificato o altro artefatto pronto.",
    },
  ],
  quote: {
    text: "A differenza di un chatbot web, Friday gira sulla tua macchina e lavora con provider, credenziali e permessi scelti da te.",
    cite: "Product brief Friday",
  },
  landingMcp: [
    {
      name: "Server MCP remoti",
      label: "Estensione",
      description: "Collega tool server hosted via HTTP con autenticazione opzionale a token o chiave, poi rendi disponibili i loro strumenti all'assistente.",
      icon: "PlugZap",
    },
    {
      name: "Server MCP locali",
      label: "Estensione",
      description: "Esegui tool server stdio locali sulla tua macchina per aggiungere capacita specifiche senza cambiare l'app.",
      icon: "Workflow",
    },
    {
      name: "Qualsiasi tool MCP",
      label: "Estensione",
      description: "Esponi nuove capacita all'assistente tramite il Model Context Protocol, l'unico modo supportato per estendere gli strumenti di Friday.",
      icon: "Plus",
    },
  ],
  landingChannels: [
    {
      name: "Telegram",
      status: "Attivo",
      description:
        "Canale bot incluso per chat da telefono o desktop, con allowlist, policy DM, target e risposte nella stessa chat.",
      icon: "Send",
    },
  ],
  landingOperators: [
    {
      name: "Chat assistente",
      description: "Esegui turni agent da una chat Markdown pulita, con attivita strumenti visibile, cronologia sessione e prompt di permesso per azioni sensibili.",
      icon: "Layers",
      status: "Live",
    },
    {
      name: "Voce",
      description: "Detta richieste con speech-to-text e fai leggere le risposte da Friday tramite il provider voce e il modello che scegli.",
      icon: "Bot",
      status: "Live",
    },
    {
      name: "Scheduler cron",
      description: "Crea, aggiorna, pausa, riprendi, elenca ed esegui lavori assistente ricorrenti con istruzioni, provider e modello dedicati.",
      icon: "Clock",
      status: "Live",
    },
    {
      name: "Health check",
      description: "Esegui controlli periodici basati su checklist e ricevi un report quando qualcosa nella configurazione richiede attenzione.",
      icon: "HeartHandshake",
      status: "Live",
    },
    {
      name: "Generazione immagini",
      description: "Crea immagini da descrizioni testuali in chat o nel workspace immagini usando il provider e il modello selezionati.",
      icon: "Image",
      status: "Live",
    },
    {
      name: "Video e audio",
      description: "Text-to-video e music/audio sono previsti come slot aggiuntivi di model service.",
      icon: "ScanText",
      status: "Coming soon",
    },
  ],
  landingOperatorGroups: [
    {
      label: "Assistente",
      description: "Il runtime centrale che pianifica, chiede approvazione, usa strumenti e restituisce risultati concreti.",
      items: [
        {
          name: "Chat assistente",
          description:
            "Esegui turni agent da una chat Markdown pulita, con attivita strumenti visibile, cronologia sessione e prompt di permesso per azioni sensibili.",
          icon: "Layers",
          status: "Live",
        },
      ],
    },
    {
      label: "Generazione",
      description:
        "Operatori media separati per voce, immagini, video e audio, cosi ogni capacita puo usare provider e modello propri.",
      items: [
        {
          name: "Generazione voce",
          description:
            "Detta con speech-to-text e genera risposte lette ad alta voce tramite il provider voce e il modello che scegli.",
          icon: "Volume2",
          status: "Live",
        },
        {
          name: "Generazione immagini",
          description:
            "Crea immagini da descrizioni testuali in chat o nel workspace immagini usando provider e modello selezionati.",
          icon: "Image",
          status: "Live",
        },
        {
          name: "Generazione video",
          description: "Text-to-video e pianificato come slot di generazione separato basato su provider.",
          icon: "Video",
          status: "In arrivo",
        },
        {
          name: "Generazione audio",
          description: "Musica e suono sono pianificati come slot model-service separati.",
          icon: "AudioLines",
          status: "In arrivo",
        },
      ],
    },
    {
      label: "Automazione",
      description:
        "Strumenti background per lavoro pianificato e controlli periodici, separati dalla generazione media.",
      items: [
        {
          name: "Scheduler cron",
          description:
            "Crea, aggiorna, pausa, riprendi, elenca ed esegui lavori assistente ricorrenti con istruzioni, provider e modello dedicati.",
          icon: "Clock",
          status: "Live",
        },
        {
          name: "Health check",
          description:
            "Esegui controlli periodici basati su checklist e ricevi un report quando qualcosa nella configurazione richiede attenzione.",
          icon: "HeartHandshake",
          status: "Live",
        },
      ],
    },
  ],
  landingProviderGroups: [
    { label: "Assistente", examples: ["OpenAI", "Anthropic", "Google", "Mistral", "DeepSeek", "Qwen", "OpenAI-compatible"] },
    { label: "Speech-to-Text", examples: ["OpenAI", "Deepgram", "ElevenLabs", "Mistral", "xAI", "Qwen"] },
    { label: "Text-to-Speech", examples: ["OpenAI", "ElevenLabs", "Cartesia", "voci provider-specific"] },
    { label: "Text-to-Image", examples: ["OpenAI", "Black Forest Labs", "Midjourney", "Stability AI", "Ideogram"] },
    { label: "In arrivo", examples: ["Text-to-Video", "Music / Audio", "servizi media aggiuntivi"] },
  ],
  faqs: [
    {
      question: "Che cos'e Friday?",
      answer:
        "Friday e un copilota AI desktop nativo per attivita quotidiane. Chatti in linguaggio naturale e puo usare strumenti per leggere e scrivere file, cercare sul web, generare immagini, trascrivere voce, parlare, eseguire lavoro pianificato e collegarsi a servizi esterni.",
    },
    {
      question: "Friday invia i miei dati da qualche parte?",
      answer:
        "Friday e local-first. I dati lasciano la tua macchina solo quando un'attivita richiede un provider AI, canale, server MCP, richiesta web o servizio hosted che hai configurato.",
    },
    {
      question: "Devo usare un provider AI specifico?",
      answer:
        "No. Friday e bring-your-own-AI. Aggiungi le tue chiavi provider e scegli provider e modello per assistente, speech-to-text, text-to-speech, immagini e servizi media futuri.",
    },
    {
      question: "Come funzionano i permessi?",
      answer:
        "Le azioni che scrivono, eliminano, pubblicano, inviano messaggi, accedono a dati privati o toccano account richiedono approvazione esplicita prima di procedere.",
    },
    {
      question: "Friday puo lavorare fuori dall'app?",
      answer:
        "Si. Collega un bot Telegram per parlare con Friday dal telefono o dal desktop, con controllo accessi, segreti del canale separati e risposte nella stessa conversazione.",
    },
    {
      question: "Quali piattaforme desktop sono supportate?",
      answer:
        "Friday e costruito con Electron per Windows, macOS Intel e Apple Silicon, e Linux. L'interfaccia supporta inglese e italiano, con tema chiaro, scuro e di sistema.",
    },
  ],
} satisfies typeof fridayEn;

const integrationsIt = [
  {
    name: "Telegram",
    category: localizedCategory.Channels,
    description:
      "Parla con Friday da Telegram tramite un bot configurato, con stato abilitato, allowlist, target e policy DM.",
    icon: "MessageSquare",
  },
  {
    name: "Discord",
    category: localizedCategory.Channels,
    description:
      "Adapter pianificato per raggiungere Friday da Discord e ricevere risposte nello stesso canale o thread.",
    icon: "MessageSquare",
  },
  {
    name: "Slack",
    category: localizedCategory.Channels,
    description:
      "Canale workspace in arrivo per conversazioni di team, approvazioni e risposte assistente nel thread originale.",
    icon: "MessageSquare",
  },
  {
    name: "WhatsApp",
    category: localizedCategory.Channels,
    description:
      "Canale mobile in arrivo per richieste personali rapide e check-in con l'assistente.",
    icon: "MessageSquare",
  },
  {
    name: "Email",
    category: localizedCategory.Channels,
    description:
      "Canale asincrono in arrivo per richieste, riepiloghi e workflow di follow-up.",
    icon: "MessageSquare",
  },
  {
    name: "Server MCP remoti",
    category: "MCP",
    description: "Collega tool server hosted via HTTP con autenticazione opzionale a token o chiave.",
    icon: "PlugZap",
  },
  {
    name: "Server MCP locali",
    category: "MCP",
    description: "Esegui tool server stdio come processi locali per aggiungere strumenti specifici a Friday.",
    icon: "Workflow",
  },
  {
    name: "Skill",
    category: "Estensione",
    description:
      "Installa o importa workflow riutilizzabili con istruzioni, riferimenti, template, schemi e comportamento eseguibile opzionale.",
    icon: "BookOpen",
  },
  {
    name: "Endpoint compatibili OpenAI",
    category: localizedCategory["AI Providers"],
    description: "Punta Friday ad altri provider compatibili configurando endpoint e chiave API.",
    icon: "Cpu",
  },
  {
    name: "Provider assistente",
    category: localizedCategory["AI Providers"],
    description: "Usa il tuo account provider e modello per chat e agente.",
    icon: "Bot",
  },
  {
    name: "Provider voce",
    category: localizedCategory["AI Providers"],
    description:
      "Scegli provider e modello separati per dettatura speech-to-text e lettura text-to-speech.",
    icon: "Mic",
  },
  {
    name: "Provider immagini",
    category: localizedCategory["AI Providers"],
    description: "Genera immagini tramite il provider e modello text-to-image che selezioni.",
    icon: "Image",
  },
  {
    name: "Task scheduler",
    category: "Automazione",
    description:
      "Esegui lavori assistente ricorrenti come riepiloghi giornalieri, controlli periodici o pulizie di routine.",
    icon: "Clock",
  },
  {
    name: "Health check",
    category: "Automazione",
    description: "Fai eseguire a Friday controlli periodici sulla tua checklist e ricevi report sullo stato.",
    icon: "HeartHandshake",
  },
  {
    name: "Workspace locale",
    category: localizedCategory.Data,
    description:
      "Mantieni file prodotti, dati di lavoro, impostazioni, credenziali, memoria e cronologia sul tuo computer.",
    icon: "Database",
  },
] satisfies typeof integrationsEn;

const operatorsIt = operatorsEn satisfies typeof operatorsEn;
const en = {
  locale: "en",
  site: siteEn,
  friday: fridayEn,
  integrations: integrationsEn,
  operators: operatorsEn,
  ui: {
    skipToContent: "Skip to content",
    primaryNavigation: "Primary navigation",
    socialLinks: "Social links",
    languageSwitcher: "Language",
    themeToggle: "Toggle color theme",
    downloadFallbackLabel: "Download Friday",
    downloadCta: "Download",
    releaseNotes: "Release notes",
    github: "GitHub",
    starOnGithub: "Star on GitHub",
    viewAllIntegrations: "View all integrations",
    supportedChannels: "Supported messaging channels",
    footerGroups: [
      {
        title: "Product",
        links: [
          { label: "Home", href: "/" },
          { label: "Features", href: "/#features" },
          { label: "How it works", href: "/#how" },
          { label: "MCP", href: "/#mcp" },
          { label: "Tools", href: "/tools" },
          { label: "Docs", href: "/docs" },
        ],
      },
      {
        title: "Solutions",
        links: [
          { label: "Enterprise", href: "/enterprise" },
          { label: "Education", href: "/education" },
          { label: "Personal", href: "/personal" },
        ],
      },
      {
        title: "Explore",
        links: [
          { label: "Channels", href: "/channels" },
          { label: "Integrations", href: "/integrations" },
          { label: "Providers", href: "/providers" },
          { label: "Operators", href: "/operators" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Community", href: "/community" },
          { label: "Blog", href: "/blog" },
          { label: "FAQ", href: "/#faq" },
        ],
      },
    ],
    footerRights: "All rights reserved.",
    footerPermissionNote: "Review provider, tool, and channel permissions before enabling automation.",
  },
  home: {
    ogTitle: "Friday",
    ogDescription:
      "A native desktop AI copilot for everyday tasks, with local credentials, bring-your-own providers, permissioned tools, voice, image generation, MCP tools, channels, and scheduled work.",
    featuresEyebrow: "Features",
    featuresTitle: "A capable assistant,|running on your desktop.",
    howEyebrow: "How it works",
    howTitle: "Ask naturally.|Approve real actions.",
    mcpEyebrow: "MCP",
    mcpTitle: "Extend Friday|with MCP servers.",
    channelsEyebrow: "Channels",
    channelsTitle: "Chat with Friday|from anywhere.",
    channelsPanelDescription:
      "Connect a Telegram bot and chat with Friday from your phone or desktop, with access controls and replies delivered to the same conversation.",
    operatorsEyebrow: "Workflows",
    operatorsTitle: "Generation and automation,|split by workflow.",
    providersEyebrow: "AI Providers",
    providersTitle: "Bring your own AI.|Mix models by capability.",
    faqEyebrow: "FAQ",
    faqTitle: "Common questions.",
    downloadTitle: "Get Friday for desktop.",
    downloadLabel: "Donwload",
    releaseFootnote: "desktop builds",
  },
  integrationsPage: {
    title: "Integrations",
    description: "Supported providers, channels, productivity tools, data sources, and infrastructure integrations.",
    eyebrow: "Integrations",
    heading: "Connect the systems that make work real.",
    intro:
      "Start with source control and channels, then expand into data, productivity, and infrastructure workflows.",
    singular: "integration",
    plural: "integrations",
    ctaEyebrow: "Need a different system?",
    ctaTitle: "Add the integration that matters to your team.",
    ctaDescription:
      "Use the JSON data model as a starter, then connect real providers as your product matures.",
  },
  communityPage: {
    title: "Community",
    description: "The mission, contribution paths, and community links for Friday.",
    eyebrow: "Community",
    heading: "Make useful AI feel accountable, inspectable, and owned by the team.",
    intro:
      "Friday is designed around a simple belief: assistants should work in the open, explain their actions, and adapt to the workflows people already trust.",
    cards: [
      {
        icon: "Users",
        title: "Built with operators",
        description:
          "The product should reflect how teams actually work: messy context, approval steps, shared channels, and evolving internal rules.",
      },
      {
        icon: "BookOpen",
        title: "Documented by default",
        description:
          "Workflows, prompts, provider choices, and integration settings should be easy to inspect, improve, and share.",
      },
      {
        icon: "HeartHandshake",
        title: "Open to contributors",
        description:
          "Add adapters, improve starter workflows, write docs, or help shape the safety model for agentic desktop tools.",
      },
    ],
    joinEyebrow: "Join in",
    joinTitle: "Follow development and contribute where you can help.",
    ctaEyebrow: "Contribute a workflow",
    ctaTitle: "Turn your repeated task into a reusable command.",
    ctaDescription:
      "Start with the sample data and replace it with your real contribution paths, docs, and repository links.",
  },
  operatorsPage: {
    title: "Operators",
    description:
      "Friday workflows for chat, tools, voice, images, skills, MCP, channels, scheduling, health checks, and memory.",
    eyebrow: "Operators",
    heading: "The assistant capabilities, grouped by workflow.",
    intro:
      "Friday combines a permissioned assistant with local data, provider choice, channels, skills, MCP tools, scheduled work, and health checks.",
    supportedProviders: "Supported providers",
    statusLabel: {
      implemented: "Live",
      "pending-runtime": "Coming soon",
      placeholder: "Planned",
    },
    ctaEyebrow: "Bring your own provider",
    ctaTitle: "Every operator is provider-agnostic.",
    ctaDescription:
      "Configure your preferred provider and model in Settings. Credentials stay local; the operator resolves them at runtime.",
  },
  notFoundPage: {
    title: "Page not found",
    description: "This page could not be found.",
    heading: "This page is not available.",
    intro: "The route may have moved, or the link may need to be updated.",
    action: "Return home",
  },
  productMockup: {
    windowLabel: "Friday desktop app preview",
    localWorkspace: "Local workspace",
    titlebarRoute: "Home",
    commandMenuLabel: "Command menu",
    commandShortcut: "Cmd K",
    statusReady: "Ready",
    profileLabel: "Account",
    appAreasLabel: "Friday app areas",
    conversationLabel: "Assistant conversation preview",
    navItems: [
      { label: "Chat", icon: "MessagesSquare", active: true },
      { label: "Tools", icon: "TerminalSquare" },
      { label: "Skills", icon: "Workflow" },
      { label: "Channels", icon: "RadioTower" },
      { label: "Cron", icon: "CalendarDays" },
      { label: "Privacy", icon: "ShieldCheck" },
    ],
    userMessage: "Summarize this repo, draft a release note, and ask before running tests.",
    chatUserGreeting: "Run the release checklist.",
    chatAssistantGreeting: "I’ll inspect the project and ask before making changes.",
    chatMessages: [
      { role: "user", text: "Check my calendar for tomorrow." },
      {
        role: "assistant",
        text: "You have three events: a 9:30 standup, lunch with Marco at 13:00, and a design review at 16:00.",
      },
      { role: "user", text: "Create a task to follow up with the design team." },
      {
        role: "assistant",
        text: "Added “Follow up with the design team” to your tasks, due Friday, with a 9:00 reminder.",
      },
      { role: "user", text: "Send an email to Sara with the launch date." },
      {
        role: "assistant",
        text: "Drafted an email to Sara confirming the launch on July 15. I'll ask before sending it.",
      },
    ],
    chatUserFollowup: "Now make a sunny summer scene of Rome from today's forecast.",
    chatAssistantFollowup: "Ready. I will use the configured image provider and show the result here.",
    imageHeader: "Created image",
    imageAlt: "Generated sunny summer scene in a Roman piazza with the Colosseum",
    imageCaption:
      "Here's a sunny Roman summer scene inspired by today's forecast: clear skies, 33°C at noon, and zero chance of rain. A perfect day for the Eternal City.",
    copyLabel: "Copy",
    readAloudLabel: "Read aloud",
    regenerateLabel: "Regenerate",
    historyLabel: "History",
    attachedFile: "project-notes.md",
    removeAttachment: "Remove attachment",
    listeningLabel: "Listening...",
    dictationText: "Summarize my morning and suggest the next task.",
    interactiveReply:
      "I can do that. I will use the configured tools, keep activity visible, and ask before writing files, sending messages, or touching private data.",
    assistantStatus: "using tools with approval checks",
    planItems: ["Inspect changed files", "Draft release notes", "Ask before running tests"],
    toolActivityLabel: "Tool activity",
    toolActivityValue: "read / web search / image",
    toolRequest: "Tool request",
    toolCommand: "Run `bun run build`",
    approve: "Approve",
    settingsLabel: "Settings",
    modelLabel: "Assistant",
    modelValue: "Your provider",
    voiceLabel: "Voice input",
    voiceValue: "Realtime Whisper",
    activityLabel: "Activity",
    contextLabel: "Context",
    workspaceLabel: "Workspace",
    workspaceValue: "12 files inspected",
    scheduledLabel: "Scheduled",
    scheduledValue: "Daily 9:00 brief",
    channelLabel: "Channel",
    channelValue: "Telegram live",
    privacyLabel: "Privacy",
    privacyValue: "Local keys",
    actionPreviewLabel: "Workspace action preview",
    composerLabel: "Friday prompt composer preview",
    addAttachment: "Add attachment",
    voiceInput: "Voice input",
    sendPrompt: "Send prompt",
    composerPlaceholder: "Ask anything",
  },
};

const it = {
  locale: "it",
  site: siteIt,
  friday: fridayIt,
  integrations: integrationsIt,
  operators: operatorsIt,
  ui: {
    skipToContent: "Vai al contenuto",
    primaryNavigation: "Navigazione principale",
    socialLinks: "Link social",
    languageSwitcher: "Lingua",
    themeToggle: "Cambia tema colore",
    downloadFallbackLabel: "Scarica Friday",
    downloadCta: "Scarica",
    releaseNotes: "Note di release",
    github: "GitHub",
    starOnGithub: "Aggiungi una stella su GitHub",
    viewAllIntegrations: "Vedi tutte le integrazioni",
    supportedChannels: "Canali di messaggistica supportati",
    footerGroups: [
      {
        title: "Prodotto",
        links: [
          { label: "Home", href: "/" },
          { label: "Funzioni", href: "/#features" },
          { label: "Come funziona", href: "/#how" },
          { label: "MCP", href: "/#mcp" },
          { label: "Strumenti", href: "/tools" },
          { label: "Docs", href: "/docs" },
        ],
      },
      {
        title: "Soluzioni",
        links: [
          { label: "Enterprise", href: "/enterprise" },
          { label: "Education", href: "/education" },
          { label: "Personal", href: "/personal" },
        ],
      },
      {
        title: "Esplora",
        links: [
          { label: "Canali", href: "/channels" },
          { label: "Integrazioni", href: "/integrations" },
          { label: "Provider", href: "/providers" },
          { label: "Operatori", href: "/operators" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "Community", href: "/community" },
          { label: "Blog", href: "/blog" },
          { label: "FAQ", href: "/#faq" },
        ],
      },
    ],
    footerRights: "Tutti i diritti riservati.",
    footerPermissionNote: "Rivedi i permessi di provider, strumenti e canali prima di abilitare l'automazione.",
  },
  home: {
    ogTitle: "Friday",
    ogDescription:
      "Un copilota AI desktop nativo per le attivita quotidiane, con credenziali locali, provider scelti da te, strumenti autorizzati, voce, immagini, strumenti MCP, canali e lavoro pianificato.",
    featuresEyebrow: "Funzioni",
    featuresTitle: "Un assistente capace,|sul tuo desktop.",
    howEyebrow: "Come funziona",
    howTitle: "Chiedi in modo naturale.|Approva le azioni reali.",
    mcpEyebrow: "MCP",
    mcpTitle: "Estendi Friday|con i server MCP.",
    channelsEyebrow: "Canali",
    channelsTitle: "Parla con Friday|da ovunque.",
    channelsPanelDescription:
      "Collega un bot Telegram e parla con Friday dal telefono o dal desktop, con controlli di accesso e risposte nella stessa conversazione.",
    operatorsEyebrow: "Workflow",
    operatorsTitle: "Generazione e automazione,|separate per workflow.",
    providersEyebrow: "Provider AI",
    providersTitle: "Porta la tua AI.|Combina modelli per capacita.",
    faqEyebrow: "FAQ",
    faqTitle: "Domande comuni.",
    downloadTitle: "Scarica Friday per desktop.",
    downloadLabel: "Scarica app desktop",
    releaseFootnote: "build desktop",
  },
  integrationsPage: {
    title: "Integrazioni",
    description: "Provider, canali, strumenti di produttivita, fonti dati e integrazioni infrastrutturali supportati.",
    eyebrow: "Integrazioni",
    heading: "Collega i sistemi che rendono reale il lavoro.",
    intro:
      "Parti da source control e canali, poi espandi verso dati, produttivita e workflow infrastrutturali.",
    singular: "integrazione",
    plural: "integrazioni",
    ctaEyebrow: "Serve un sistema diverso?",
    ctaTitle: "Aggiungi l'integrazione che conta per il tuo team.",
    ctaDescription:
      "Usa il modello dati JSON come punto di partenza, poi collega provider reali man mano che il prodotto matura.",
  },
  communityPage: {
    title: "Community",
    description: "La missione, i percorsi di contribuzione e i link community per Friday.",
    eyebrow: "Community",
    heading: "Rendi l'AI utile responsabile, ispezionabile e di proprieta del team.",
    intro:
      "Friday nasce da un'idea semplice: gli assistenti dovrebbero lavorare in modo visibile, spiegare le proprie azioni e adattarsi ai workflow che le persone gia usano.",
    cards: [
      {
        icon: "Users",
        title: "Costruito con gli operatori",
        description:
          "Il prodotto dovrebbe riflettere come lavorano davvero i team: contesto disordinato, passaggi di approvazione, canali condivisi e regole interne in evoluzione.",
      },
      {
        icon: "BookOpen",
        title: "Documentato per default",
        description:
          "Workflow, prompt, scelte provider e impostazioni di integrazione dovrebbero essere facili da ispezionare, migliorare e condividere.",
      },
      {
        icon: "HeartHandshake",
        title: "Aperto ai contributor",
        description:
          "Aggiungi adapter, migliora workflow iniziali, scrivi documentazione o aiuta a definire il modello di sicurezza per strumenti agentici desktop.",
      },
    ],
    joinEyebrow: "Partecipa",
    joinTitle: "Segui lo sviluppo e contribuisci dove puoi aiutare.",
    ctaEyebrow: "Contribuisci con un workflow",
    ctaTitle: "Trasforma la tua attivita ripetuta in un comando riutilizzabile.",
    ctaDescription:
      "Parti dai dati di esempio e sostituiscili con percorsi di contribuzione, documentazione e link repository reali.",
  },
  operatorsPage: {
    title: "Operatori",
    description:
      "Workflow Friday per chat, strumenti, voce, immagini, skill, MCP, canali, pianificazione, health check e memoria.",
    eyebrow: "Operatori",
    heading: "Le capacita dell'assistente, raggruppate per workflow.",
    intro:
      "Friday combina un assistente autorizzato con dati locali, scelta dei provider, canali, skill, strumenti MCP, lavoro pianificato e health check.",
    supportedProviders: "Provider supportati",
    statusLabel: {
      implemented: "Attivo",
      "pending-runtime": "In arrivo",
      placeholder: "Pianificato",
    },
    ctaEyebrow: "Porta il tuo provider",
    ctaTitle: "Ogni operatore e indipendente dal provider.",
    ctaDescription:
      "Configura provider e modello preferiti nelle Impostazioni. Le credenziali restano locali; l'operatore le risolve a runtime.",
  },
  notFoundPage: {
    title: "Pagina non trovata",
    description: "Questa pagina non e stata trovata.",
    heading: "Questa pagina non e disponibile.",
    intro: "La rotta potrebbe essere stata spostata, oppure il link deve essere aggiornato.",
    action: "Torna alla home",
  },
  productMockup: {
    windowLabel: "Anteprima dell'app desktop Friday",
    localWorkspace: "Workspace locale",
    titlebarRoute: "Home",
    commandMenuLabel: "Menu comandi",
    commandShortcut: "Cmd K",
    statusReady: "Pronto",
    profileLabel: "Account",
    appAreasLabel: "Aree dell'app Friday",
    conversationLabel: "Anteprima conversazione assistente",
    navItems: [
      { label: "Chat", icon: "MessagesSquare", active: true },
      { label: "Strumenti", icon: "TerminalSquare" },
      { label: "Skill", icon: "Workflow" },
      { label: "Canali", icon: "RadioTower" },
      { label: "Cron", icon: "CalendarDays" },
      { label: "Privacy", icon: "ShieldCheck" },
    ],
    userMessage: "Riassumi questo repo, prepara una nota di release e chiedi prima di eseguire i test.",
    chatUserGreeting: "Esegui la checklist release.",
    chatAssistantGreeting: "Ispeziono il progetto e chiedo prima di fare modifiche.",
    chatMessages: [
      { role: "user", text: "Controlla il mio calendario per domani." },
      {
        role: "assistant",
        text: "Hai tre eventi: standup alle 9:30, pranzo con Marco alle 13:00 e design review alle 16:00.",
      },
      { role: "user", text: "Crea un task per ricontattare il team di design." },
      {
        role: "assistant",
        text: "Aggiunto “Ricontattare il team di design” ai tuoi task, scadenza venerdi, con promemoria alle 9:00.",
      },
      { role: "user", text: "Invia un'email a Sara con la data di lancio." },
      {
        role: "assistant",
        text: "Ho preparato una bozza per Sara che conferma il lancio il 15 luglio. Chiedo prima di inviarla.",
      },
    ],
    chatUserFollowup: "Ora crea una scena estiva e soleggiata di Roma dalle previsioni di oggi.",
    chatAssistantFollowup: "Pronto. Uso il provider immagini configurato e mostro il risultato qui.",
    imageHeader: "Immagine creata",
    imageAlt: "Scena estiva e soleggiata generata in una piazza romana con il Colosseo",
    imageCaption:
      "Ecco una scena estiva e soleggiata di Roma ispirata alle previsioni di oggi: cielo sereno, 33°C a mezzogiorno e zero probabilita di pioggia. Una giornata perfetta per la Citta Eterna.",
    copyLabel: "Copia",
    readAloudLabel: "Leggi ad alta voce",
    regenerateLabel: "Rigenera",
    historyLabel: "Cronologia",
    attachedFile: "note-progetto.md",
    removeAttachment: "Rimuovi allegato",
    listeningLabel: "Sto ascoltando...",
    dictationText: "Riassumi la mia mattina e suggerisci il prossimo compito.",
    interactiveReply:
      "Posso farlo. Usero gli strumenti configurati, terro visibile l'attivita e chiedero prima di scrivere file, inviare messaggi o toccare dati privati.",
    assistantStatus: "usa strumenti con controlli di approvazione",
    planItems: ["Ispeziona file modificati", "Prepara note di release", "Chiedi prima di eseguire i test"],
    toolActivityLabel: "Attivita strumenti",
    toolActivityValue: "read / web search / image",
    toolRequest: "Richiesta strumento",
    toolCommand: "Esegui `bun run build`",
    approve: "Approva",
    settingsLabel: "Impostazioni",
    modelLabel: "Assistente",
    modelValue: "Il tuo provider",
    voiceLabel: "Input vocale",
    voiceValue: "Realtime Whisper",
    activityLabel: "Attivita",
    contextLabel: "Contesto",
    workspaceLabel: "Workspace",
    workspaceValue: "12 file ispezionati",
    scheduledLabel: "Pianificato",
    scheduledValue: "Brief alle 9:00",
    channelLabel: "Canale",
    channelValue: "Telegram attivo",
    privacyLabel: "Privacy",
    privacyValue: "Chiavi locali",
    actionPreviewLabel: "Anteprima azioni workspace",
    composerLabel: "Anteprima composer prompt Friday",
    addAttachment: "Aggiungi allegato",
    voiceInput: "Input vocale",
    sendPrompt: "Invia prompt",
    composerPlaceholder: "Chiedi qualsiasi cosa",
  },
} satisfies typeof en;

const dictionaries = {
  en,
  it,
} satisfies Record<Locale, typeof en>;

export function normalizeLocale(locale?: string): Locale {
  return locale === "it" ? "it" : "en";
}

export function getLocaleContent(locale?: string) {
  return dictionaries[normalizeLocale(locale)];
}

export function localizedPath(path: string, locale: Locale): string {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (locale === "en") {
    return normalizedPath;
  }

  return normalizedPath === "/" ? "/it" : `/it${normalizedPath}`;
}

export function getAlternateLinks(path: string, siteUrl: URL) {
  return locales.map((locale) => ({
    ...localeMeta[locale],
    locale,
    url: new URL(localizedPath(path, locale), siteUrl).toString(),
  }));
}
