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
    phase: "Beta pubblica",
  },
  hero: {
    eyebrow: "Assistente AI desktop local-first",
    headline: "Friday.",
    description:
      "Friday e un agent desktop che trasforma una richiesta in lavoro finito: file letti e modificati, comandi eseguiti, ricerche sul web, un browser pilotato, immagini e video generati. Chiedi via testo o voce, con le tue chiavi provider, sulla tua macchina.",
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
  heroPillars: [
    { icon: "Sparkles", title: "Ciclo agent", text: "Pianifica, chiama strumenti e continua finche il compito non si chiude." },
    { icon: "Cpu", title: "Cross provider", text: "Provider e modello separati per chat, voce, immagini, video e audio." },
    { icon: "ShieldCheck", title: "Local first", text: "Chiavi, cronologia, memoria e media generati restano nei dati locali." },
    { icon: "Cloud", title: "Backup cloud", text: "Salva le cartelle scelte su un tuo bucket S3-compatibile a intervalli." },
  ],
  landingFeatures: [
    {
      key: "01",
      status: "Chat",
      title: "Chat che agisce",
      description:
        "Chiedi in linguaggio naturale e Friday esegue un ciclo di strumenti fino a lavoro finito: legge file, applica patch multi-file, esegue comandi shell, tiene aperti processi lunghi, cerca sul web e pilota un browser reale.",
    },
    {
      key: "02",
      status: "Local-first",
      title: "I tuoi dati restano tuoi",
      description:
        "Friday e un'app desktop Electron. Chiavi provider, cronologia delle conversazioni, memoria, progetti e media generati vivono nei dati applicativi locali, non in un account hosted.",
    },
    {
      key: "03",
      status: "Permessi",
      title: "Il lavoro sensibile richiede approvazione",
      description:
        "Ogni strumento ha la sua policy. Modifiche ai file, comandi shell e patch chiedono conferma per default, e ogni prompt offre nega, consenti una volta o consenti sempre, con regole per le cartelle di cui ti fidi.",
    },
    {
      key: "04",
      status: "Voce",
      title: "Dettatura e lettura ad alta voce",
      description:
        "Detta nel prompt con trascrizione parziale in tempo reale sui modelli streaming, oppure registra e trascrivi in un passaggio. Le risposte vengono lette dal provider text-to-speech che scegli.",
    },
    {
      key: "05",
      status: "Estendibile",
      title: "Skill e MCP",
      description:
        "Installa skill come cartelle locali con un SKILL.md e richiamale dal menu slash. Collega server MCP remoti HTTP o locali stdio e i loro strumenti entrano nel set per quella esecuzione.",
    },
    {
      key: "06",
      status: "Automazione",
      title: "Pianificazioni e health check",
      description:
        "Una checklist HEALTH.md gira in background all'intervallo che scegli, salta quando sei occupato e resta in silenzio se non serve attenzione. I record cron restano salvati e si ricaricano all'avvio.",
    },
  ],
  howSteps: [
    {
      label: "PASSO 01",
      glyph: "Chiedi",
      title: "Fai una richiesta",
      description: "Scrivi, detta o allega immagini e PDF. Il menu slash raggiunge skill installate, obiettivi del thread e la lista delle pianificazioni senza uscire dall'editor.",
    },
    {
      label: "PASSO 02",
      glyph: "Piano",
      title: "Sceglie gli strumenti",
      description: "Friday costruisce ogni turno dai file del workspace, dalla memoria salvata e dalle istruzioni del progetto attivo, poi manda in streaming le chiamate: file, comandi, web, browser, media, MCP o un subagent.",
    },
    {
      label: "PASSO 03",
      glyph: "Agisci",
      title: "Approvi e verifichi",
      description: "Le azioni protette si fermano su una card di permesso. Ogni chiamata resta nella trascrizione con input, output e durata, e il pulsante stop annulla l'esecuzione e le approvazioni in sospeso.",
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
      description: "Collega tool server hosted via HTTP con bearer token o OAuth. I server abilitati si connettono in parallelo all'inizio di ogni esecuzione, espongono i loro strumenti e si chiudono alla fine.",
      icon: "PlugZap",
    },
    {
      name: "Server MCP locali",
      label: "Estensione",
      description: "Esegui server stdio dalla tua macchina con comando, argomenti, variabili d'ambiente e directory di lavoro. Un server irraggiungibile viene saltato per quella esecuzione, non e un errore fatale.",
      icon: "Workflow",
    },
    {
      name: "Qualsiasi tool MCP",
      label: "Estensione",
      description: "Gli strumenti arrivano come mcp__server__tool e seguono lo stesso modello di permessi, quindi un server puo richiedere approvazione prima che i suoi tool vengano eseguiti.",
      icon: "Plus",
    },
  ],
  landingChannels: [
    {
      name: "Telegram",
      status: "Attivo",
      description:
        "Bot in long polling con health check ogni 60 secondi e riconnessione esponenziale. Le risposte si dividono a 4.096 caratteri e tornano nella chat, nel messaggio e nel thread di origine.",
      icon: "Send",
    },
    {
      name: "Discord",
      status: "Attivo",
      description:
        "Bot per server e DM con supporto a thread e riferimenti di risposta. Le risposte si dividono a 2.000 caratteri e tornano nel canale di origine.",
      icon: "MessageSquare",
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
      description: "Genera video, musica ed effetti sonori dal testo con il provider e il modello che scegli, salvati nella libreria media e riproducibili in chat.",
      icon: "Video",
      status: "Live",
    },
  ],
  landingOperatorGroups: [
    {
      label: "Assistente",
      description: "Il ciclo di strumenti che pianifica, chiede approvazione e restituisce risultati concreti.",
      items: [
        {
          name: "Chat assistente",
          description:
            "Markdown in streaming con codice evidenziato, chiamate a strumenti raggruppate in riepiloghi apribili, cronologia per sessione e card di permesso sulle azioni protette.",
          icon: "Layers",
          status: "Live",
        },
      ],
    },
    {
      label: "Generazione",
      description:
        "Operatori media per voce, immagini, video e audio, ognuno con provider e modello salvati separatamente.",
      items: [
        {
          name: "Generazione voce",
          description:
            "Sei provider per la trascrizione, streaming o batch, e sette per la lettura ad alta voce: Cartesia, Deepgram, ElevenLabs, Google, MiniMax, Mistral e OpenAI.",
          icon: "Volume2",
          status: "Live",
        },
        {
          name: "Generazione immagini",
          description:
            "Sette provider con adapter funzionanti, da FLUX.2 e Gemini 3.1 Flash Image a Stable Image Ultra. L'output dell'agent finisce nella libreria media e appare in chat.",
          icon: "Image",
          status: "Live",
        },
        {
          name: "Generazione video",
          description: "Otto provider con adapter funzionanti: Veo 3.1, Kling 2.5 Turbo, Runway Gen-4, Ray 3, Hailuo 2.3, Pika, Wan 2.5 e Grok Imagine. I risultati si riproducono senza uscire dalla conversazione.",
          icon: "Video",
          status: "Live",
        },
        {
          name: "Generazione audio",
          description: "Musica ed effetti sonori tramite Eleven Music, ElevenLabs Sound Effects e Stable Audio 2.5, salvati in una libreria locale datata che puoi riascoltare dalle impostazioni.",
          icon: "AudioLines",
          status: "Live",
        },
      ],
    },
    {
      label: "Automazione",
      description:
        "Lavoro in background guidato dalla tua checklist e dalle pianificazioni, separato dalla generazione media.",
      items: [
        {
          name: "Scheduler cron",
          description:
            "Record di pianificazione persistenti con espressione cron, stato in pausa e provider e modello dedicati. Li crei, metti in pausa ed elenchi in conversazione; all'avvio vengono ricaricati. L'esecuzione dei prompt e in arrivo.",
          icon: "Clock",
          status: "Beta",
        },
        {
          name: "Health check",
          description:
            "Una checklist HEALTH.md ogni minuto, ogni trenta minuti o ogni ora, in una sessione dedicata, saltata quando sei occupato. Un HEALTH_OK secco resta in silenzio, tutto il resto viene registrato.",
          icon: "HeartHandshake",
          status: "Live",
        },
      ],
    },
  ],
  landingProviderGroups: [
    { label: "Assistente", examples: ["OpenAI", "Anthropic", "Google", "xAI", "Mistral", "DeepSeek", "Qwen", "Kimi", "Z.ai", "MiniMax", "Reka", "Perplexity", "OpenAI-compatible"] },
    { label: "Speech-to-Text", examples: ["OpenAI", "Deepgram", "ElevenLabs", "Mistral", "xAI", "Qwen"] },
    { label: "Text-to-Speech", examples: ["OpenAI", "ElevenLabs", "Cartesia", "Deepgram", "Google", "MiniMax", "Mistral"] },
    { label: "Text-to-Image", examples: ["Black Forest Labs", "Google", "Ideogram", "Luma", "Qwen", "Stability AI", "xAI"] },
    { label: "Text-to-Video", examples: ["Google Veo", "Kling", "Runway", "Luma", "MiniMax", "Pika", "Qwen", "xAI"] },
    { label: "Music / Audio", examples: ["ElevenLabs", "Stability AI"] },
  ],
  faqs: [
    {
      question: "Che cos'e Friday?",
      answer:
        "Friday e un assistente desktop Electron multipiattaforma. Chatti in linguaggio naturale e lui esegue un ciclo agent su file, shell, processi lunghi, web, un browser gestito, memoria, workspace di progetto, skill, tool MCP e generazione media, fino a venti turni con strumenti per richiesta.",
    },
    {
      question: "Friday invia i miei dati da qualche parte?",
      answer:
        "Friday e local-first. Impostazioni, chiavi provider, cronologia, memoria, progetti e media generati vivono nei dati applicativi locali. Prompt, allegati e input degli strumenti escono solo verso i provider, i server MCP, i siti, i canali o l'endpoint di storage che un'attivita richiede davvero. Le chiavi sono mascherate nell'interfaccia ma salvate in normali file di configurazione locali: tratta quella cartella come sensibile.",
    },
    {
      question: "Devo usare un provider AI specifico?",
      answer:
        "No. Aggiungi le tue chiavi e scegli provider e modello in modo indipendente per assistente, trascrizione, voce, immagini, video, audio, lavoro pianificato e health check. Anthropic passa dalla Messages API, OpenAI dalla Responses API e ogni altro provider di chat dal percorso Chat Completions OpenAI-compatible.",
    },
    {
      question: "Come funzionano i permessi?",
      answer:
        "Ogni strumento ha la sua policy con regole allow, ask e deny. Letture, scritture e controllo processi sono consentiti per default; modifiche, comandi shell e patch chiedono conferma. La card di permesso offre nega, consenti una volta o consenti sempre, e puoi pre-autorizzare intere cartelle per singolo strumento. La policy sui comandi valuta la stringa del comando, quindi e una protezione, non una sandbox di sistema.",
    },
    {
      question: "Friday puo lavorare fuori dall'app?",
      answer:
        "Si. I bot Telegram e Discord instradano messaggi diretti, di gruppo e nei thread verso l'agent e rispondono nello stesso punto. Ogni canale ha token, policy per i messaggi diretti (allowlist per default, oppure aperto e negato), allowlist dei mittenti e modello di risposta propri.",
    },
    {
      question: "Cosa si puo automatizzare?",
      answer:
        "Gli health check funzionano gia: una checklist HEALTH.md ogni minuto, ogni trenta minuti o ogni ora, con fasce orarie e intervalli di date opzionali, saltata quando sei occupato e con report solo se serve attenzione. I job cron ricorrenti si creano, mettono in pausa, riprendono ed elencano in conversazione; l'esecuzione dei loro prompt e in arrivo.",
    },
    {
      question: "Quali piattaforme desktop sono supportate?",
      answer:
        "Build Electron per Windows (NSIS, x64), macOS (PKG e DMG, Intel e Apple Silicon, hardened runtime) e Linux (AppImage e DEB). L'interfaccia e in inglese e italiano con tema chiaro, scuro e di sistema, anche se parte delle schermate iniziali e ancora solo in inglese.",
    },
    {
      question: "Friday e certificato per dati regolamentati?",
      answer:
        "No. Friday non dichiara alcuna certificazione formale per dati regolamentati. Chiavi provider, token dei bot e segreti MCP stanno in file di configurazione locali e non in un vault cifrato: verifica i termini dei tuoi provider e la sicurezza del tuo disco prima di trattare materiale sensibile.",
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
      "Chatta con Friday da un server Discord o in DM, con thread, riferimenti di risposta, allowlist e policy DM. Le risposte tornano nel canale o thread di origine.",
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
          { label: "Overview", href: "/solutions" },
          { label: "Enterprise", href: "/solutions#enterprise" },
          { label: "Education", href: "/solutions#education" },
          { label: "Personal", href: "/solutions#personal" },
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
    ogTitle: "Friday — Your Desktop AI Personal Assistant",
    ogDescription:
      "A desktop agent that reads and edits files, runs commands, searches the web, drives a browser, and generates images, video, and audio — with your own provider keys and approval on anything sensitive.",
    featuresEyebrow: "Features",
    featuresTitle: "A capable assistant,|running on your desktop.",
    howEyebrow: "How it works",
    howTitle: "Ask naturally.|Approve real actions.",
    mcpEyebrow: "MCP",
    mcpTitle: "Extend Friday|with MCP servers.",
    channelsEyebrow: "Channels",
    channelsTitle: "Chat with Friday|from anywhere.",
    channelsPanelDescription:
      "Connect a Telegram or Discord bot and reach Friday from your phone. Direct, group, and thread messages route to the agent, and each channel keeps its own token, access policy, and reply model.",
    operatorsEyebrow: "Workflows",
    operatorsTitle: "Generation and automation,|split by workflow.",
    providersEyebrow: "AI Providers",
    providersTitle: "Bring your own AI.|Mix models by capability.",
    faqEyebrow: "FAQ",
    faqTitle: "Common questions.",
    downloadTitle: "Get Friday for desktop.",
    downloadLabel: "Download Friday",
    downloadNote: "Desktop beta for macOS, Windows, and Linux.",
    releaseFootnote: "desktop builds",
  },
  integrationsPage: {
    title: "Integrations",
    description: "Supported providers, channels, productivity tools, data sources, and infrastructure integrations.",
    eyebrow: "Integrations",
    heading: "Connect the systems that make work real.",
    intro: "Channels, AI providers, automation, and local data that plug into Friday.",
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
    intro: "Assistants should work in the open, explain their actions, and fit the workflows you already trust.",
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
    intro: "Each operator handles one job — chat, voice, media, or automation — with its own provider and model.",
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
    imageHeader: "Created image",
    libraryFeed: [
      {
        file: "image-1783179258677.jpeg",
        user: "Generate a blue supercar parked on a coastal road at sunset.",
        reply: "Done — sapphire blue body, ocean sunset behind it.",
      },
      {
        file: "image-1783179862362.jpeg",
        user: "Now the same scene with a red one, in motion.",
        reply: "Here it is at speed along the coast, sun low on the water.",
      },
      {
        file: "image-1783180448601.jpeg",
        user: "A national team lined up in a packed stadium at night.",
        reply: "Lineup under the floodlights, flags across the stands.",
      },
      {
        file: "image-1783253703352.jpeg",
        user: "A striped hot-air balloon against a clear blue sky.",
        reply: "Red, yellow, and blue stripes drifting between the clouds.",
      },
      {
        file: "image-1783269109315.jpeg",
        user: "The Sun and Earth from space, with the solar wind visible.",
        reply: "Solar flares streaming toward Earth's magnetic field.",
      },
      {
        file: "image-1783337979792.jpeg",
        user: "A gray wolf on a rock in a misty forest at dawn.",
        reply: "Standing watch in the first light, mist through the pines.",
      },
      {
        file: "image-1783442946799.jpeg",
        user: "A mountain lake at sunset with perfect reflections.",
        reply: "Still water mirroring the peaks and the burning sky.",
      },
      {
        file: "image-1783449590506.jpeg",
        user: "A summer day at the Colosseum, cafe umbrellas and gelato.",
        reply: "Sunny piazza, colorful umbrellas, gelato at every table.",
      },
      {
        file: "image-1783449852408.jpeg",
        user: "The Trevi Fountain at golden hour.",
        reply: "Warm evening light on the marble, crowds at the edge.",
      },
      {
        file: "image-1783495226058.jpeg",
        user: "A lake at sunrise, framed by tall pines.",
        reply: "Fiery clouds mirrored between the silhouetted trees.",
      },
      {
        file: "image-1783546430702.jpeg",
        user: "A minimalist living room in warm beige tones.",
        reply: "Clean lines, soft daylight, and a few green accents.",
      },
      {
        file: "image-1783546631450.jpeg",
        user: "Make it cozier: fireplace, bookshelves, warm light.",
        reply: "Fire lit, shelves full, blankets ready for the evening.",
      },
      {
        file: "image-1783694585292.jpeg",
        user: "Rome in a heatwave — make it dramatic.",
        reply: "Blazing sun over the Forum, and the gelato is losing the fight.",
      },
      {
        file: "image-1783695407850.jpeg",
        user: "A winged horse rising through golden clouds.",
        reply: "Pegasus climbing into the light between the clouds.",
      },
      {
        file: "image-1783756461580.jpeg",
        user: "An astronaut fishing for stars from a crescent moon.",
        reply: "Line cast into a spiral galaxy, lantern lit beside him.",
      },
      {
        file: "image-1784044528440.jpeg",
        user: "Dinner at a Roman trattoria, pizza on the table.",
        reply: "Checkered tablecloths, full glasses, a margherita to share.",
      },
      {
        file: "image-1784044624641.jpeg",
        user: "Lunch in a Roman piazza by the fountain.",
        reply: "Tables in the sun around the fountain and the obelisk.",
      },
      {
        file: "image-1784044745187.jpeg",
        user: "A terrace restaurant facing the Colosseum.",
        reply: "Front-row tables, pizza arriving, arches in the background.",
      },
      {
        file: "image-1784044781332.jpeg",
        user: "Aperitivo hour on a cobbled street near the Colosseum.",
        reply: "Spritz and pizza under yellow umbrellas on the cobblestones.",
      },
      {
        file: "image-1784044799230.jpeg",
        user: "One more from the terrace, bright midday sun.",
        reply: "Midday at the Colosseum — umbrellas up, plates full.",
      },
    ],
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
          { label: "Panoramica", href: "/solutions" },
          { label: "Enterprise", href: "/solutions#enterprise" },
          { label: "Education", href: "/solutions#education" },
          { label: "Personal", href: "/solutions#personal" },
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
    ogTitle: "Friday — Il tuo assistente personale AI desktop",
    ogDescription:
      "Un agent desktop che legge e modifica file, esegue comandi, cerca sul web, pilota un browser e genera immagini, video e audio, con le tue chiavi provider e la tua approvazione su cio che conta.",
    featuresEyebrow: "Funzioni",
    featuresTitle: "Un assistente capace,|sul tuo desktop.",
    howEyebrow: "Come funziona",
    howTitle: "Chiedi in modo naturale.|Approva le azioni reali.",
    mcpEyebrow: "MCP",
    mcpTitle: "Estendi Friday|con i server MCP.",
    channelsEyebrow: "Canali",
    channelsTitle: "Parla con Friday|da ovunque.",
    channelsPanelDescription:
      "Collega un bot Telegram o Discord e raggiungi Friday dal telefono. Messaggi diretti, di gruppo e nei thread arrivano all'agent, e ogni canale mantiene token, policy di accesso e modello di risposta propri.",
    operatorsEyebrow: "Workflow",
    operatorsTitle: "Generazione e automazione,|separate per workflow.",
    providersEyebrow: "Provider AI",
    providersTitle: "Porta la tua AI.|Combina modelli per capacita.",
    faqEyebrow: "FAQ",
    faqTitle: "Domande comuni.",
    downloadTitle: "Scarica Friday per desktop.",
    downloadLabel: "Scarica app desktop",
    downloadNote: "Beta desktop per macOS, Windows e Linux.",
    releaseFootnote: "build desktop",
  },
  integrationsPage: {
    title: "Integrazioni",
    description: "Provider, canali, strumenti di produttivita, fonti dati e integrazioni infrastrutturali supportati.",
    eyebrow: "Integrazioni",
    heading: "Collega i sistemi che rendono reale il lavoro.",
    intro: "Canali, provider AI, automazione e dati locali che si collegano a Friday.",
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
    intro: "Gli assistenti dovrebbero lavorare in modo visibile, spiegare le proprie azioni e adattarsi ai workflow che gia usi.",
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
    intro: "Ogni operatore gestisce un compito — chat, voce, media o automazione — con provider e modello propri.",
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
    imageHeader: "Immagine creata",
    libraryFeed: [
      {
        file: "image-1783179258677.jpeg",
        user: "Genera una supercar blu parcheggiata su una strada costiera al tramonto.",
        reply: "Fatto: carrozzeria blu zaffiro e tramonto sull'oceano.",
      },
      {
        file: "image-1783179862362.jpeg",
        user: "Ora la stessa scena con una rossa, in movimento.",
        reply: "Eccola in corsa lungo la costa, con il sole basso sull'acqua.",
      },
      {
        file: "image-1783180448601.jpeg",
        user: "Una nazionale schierata in uno stadio pieno, di notte.",
        reply: "Schierati sotto i riflettori, bandiere su tutti gli spalti.",
      },
      {
        file: "image-1783253703352.jpeg",
        user: "Una mongolfiera a strisce contro un cielo azzurro.",
        reply: "Strisce rosse, gialle e blu che fluttuano tra le nuvole.",
      },
      {
        file: "image-1783269109315.jpeg",
        user: "Il Sole e la Terra dallo spazio, con il vento solare visibile.",
        reply: "Brillamenti solari che raggiungono il campo magnetico terrestre.",
      },
      {
        file: "image-1783337979792.jpeg",
        user: "Un lupo grigio su una roccia in una foresta nebbiosa all'alba.",
        reply: "Di guardia alle prime luci, con la nebbia tra i pini.",
      },
      {
        file: "image-1783442946799.jpeg",
        user: "Un lago di montagna al tramonto con riflessi perfetti.",
        reply: "Acqua immobile che riflette le cime e il cielo infuocato.",
      },
      {
        file: "image-1783449590506.jpeg",
        user: "Una giornata estiva al Colosseo, ombrelloni e gelato.",
        reply: "Piazza soleggiata, ombrelloni colorati e gelato a ogni tavolo.",
      },
      {
        file: "image-1783449852408.jpeg",
        user: "La Fontana di Trevi all'ora d'oro.",
        reply: "Luce calda della sera sul marmo, folla raccolta sul bordo.",
      },
      {
        file: "image-1783495226058.jpeg",
        user: "Un lago all'alba, incorniciato da pini alti.",
        reply: "Nuvole infuocate riflesse tra le sagome degli alberi.",
      },
      {
        file: "image-1783546430702.jpeg",
        user: "Un soggiorno minimalista nei toni del beige.",
        reply: "Linee pulite, luce naturale morbida e qualche tocco di verde.",
      },
      {
        file: "image-1783546631450.jpeg",
        user: "Rendilo piu accogliente: camino, librerie, luce calda.",
        reply: "Fuoco acceso, scaffali pieni e coperte pronte per la sera.",
      },
      {
        file: "image-1783694585292.jpeg",
        user: "Roma durante un'ondata di caldo: rendila drammatica.",
        reply: "Sole rovente sul Foro, e il gelato sta perdendo la sfida.",
      },
      {
        file: "image-1783695407850.jpeg",
        user: "Un cavallo alato che sale tra nuvole dorate.",
        reply: "Un pegaso che sale verso la luce tra le nuvole.",
      },
      {
        file: "image-1783756461580.jpeg",
        user: "Un astronauta che pesca stelle da una falce di luna.",
        reply: "Lenza calata in una galassia a spirale, lanterna accesa accanto.",
      },
      {
        file: "image-1784044528440.jpeg",
        user: "Cena in una trattoria romana, pizza in tavola.",
        reply: "Tovaglie a quadretti, calici pieni e una margherita da dividere.",
      },
      {
        file: "image-1784044624641.jpeg",
        user: "Pranzo in una piazza romana vicino alla fontana.",
        reply: "Tavoli al sole intorno alla fontana e all'obelisco.",
      },
      {
        file: "image-1784044745187.jpeg",
        user: "Un ristorante con terrazza di fronte al Colosseo.",
        reply: "Tavoli in prima fila, pizza in arrivo e le arcate sullo sfondo.",
      },
      {
        file: "image-1784044781332.jpeg",
        user: "Ora dell'aperitivo in una via acciottolata vicino al Colosseo.",
        reply: "Spritz e pizza sotto ombrelloni gialli sui sanpietrini.",
      },
      {
        file: "image-1784044799230.jpeg",
        user: "Un'altra dalla terrazza, con il sole di mezzogiorno.",
        reply: "Mezzogiorno al Colosseo: ombrelloni aperti e piatti pieni.",
      },
    ],
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
