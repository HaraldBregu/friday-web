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
  Connectors: "Connettori",
  Operators: "Operatori",
  Data: "Dati",
  Infrastructure: "Infrastruttura",
  "AI Providers": "Provider AI",
};

const siteIt = {
  ...siteEn,
  tagline: "Assistente AI desktop personale",
  description:
    "Friday e un assistente AI desktop local-first per run agent, file, strumenti, skill, app connesse, attivita pianificate, canali e flussi di lavoro assistiti dalla voce.",
  audience:
    "Sviluppatori, operatori, knowledge worker, writer, creator e power user che vogliono controllo locale con automazione connessa.",
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
      "Un assistente AI desktop con runtime per agenti, subagent, skill, strumenti, memoria, cron, heartbeat, lavoro in background, connettori Google, consegna Telegram e routing modello neutrale rispetto al provider.",
  },
  demoSuggestions: [
    {
      question: "Riassumi i miei Slack non letti",
      answer:
        "Hai 14 messaggi non letti in 3 canali. Il thread da guardare e #launch: Priya e bloccata sulla domanda del timeout API e ti ha taggato 11 minuti fa.",
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
    { value: "Runtime", label: "agenti, skill, cron, heartbeat, attivita" },
    { value: "Parziale", label: "canali, connettori, operatori media" },
    { value: "Locale", label: "impostazioni, sessioni, chiavi, memoria" },
    { value: "Policy", label: "controlli approvazione strumenti e connettori" },
  ],
  landingFeatures: [
    {
      key: "01",
      status: "Runtime implementato",
      title: "Runtime agent desktop",
      description:
        "Esegue turni agent neutri rispetto al provider con sessioni durevoli, file di avvio, strumenti selezionati, skill, memoria, cancellazione, compattazione e stato run in streaming.",
    },
    {
      key: "02",
      status: "Runtime implementato",
      title: "Subagent e lavoro delegato",
      description:
        "Avvia sessioni figlie isolate per lavoro mirato, traccia metadati parent e child, eredita la policy strumenti e supporta cancellazione e ispezione.",
    },
    {
      key: "03",
      status: "Runtime implementato",
      title: "Skill e strumenti locali",
      description:
        "Scopre skill locali, le ordina rispetto al prompt, inserisce guida limitata ed espone file, shell, browser, cron, task, plugin, MCP e LSP quando la policy lo consente.",
    },
    {
      key: "04",
      status: "Runtime implementato",
      title: "Background, cron e heartbeat",
      description:
        "Esegue attivita immediate in background, ripristina pianificazioni persistite, gestisce run saltati, sveglia heartbeat e mostra solo alert azionabili.",
    },
    {
      key: "05",
      status: "Runtime parziale",
      title: "Connettori e canali",
      description:
        "Esegue Gmail, Google Calendar, Google Drive e Telegram in locale oggi, con percorsi catalogo, MCP, provider-hosted e plugin per copertura piu ampia.",
    },
    {
      key: "06",
      status: "Runtime parziale",
      title: "Routing provider e modelli",
      description:
        "Instrada assistente e speech-to-text attraverso provider configurati mantenendo visibili cataloghi media, realtime, OCR, embedding e ricerca mentre maturano.",
    },
  ],
  howSteps: [
    {
      label: "PASSO 01",
      glyph: "Config",
      title: "Configura",
      description: "Scegli provider, agenti, skill, connettori, canali, workspace e policy di approvazione dalle impostazioni locali.",
    },
    {
      label: "PASSO 02",
      glyph: "Run",
      title: "Esegui",
      description: "Avvia lavoro dalla chat, da un canale, da una pianificazione, heartbeat, un'attivita in background o un subagent.",
    },
    {
      label: "PASSO 03",
      glyph: "Review",
      title: "Ispeziona",
      description: "Segui eventi di ciclo vita, chiamate strumenti e risultati, approva azioni sensibili e cancella lavoro quando serve.",
    },
  ],
  quote: {
    text: "La documentazione distingue cio che gira localmente oggi da cataloghi, connettori e superfici plugin.",
    cite: "Documentazione feature",
  },
  landingConnectors: [
    {
      name: "Gmail",
      label: "Runtime locale",
      description: "Cerca id messaggio, legge email recenti o abbinate, prepara bozze, invia messaggi e cestina mail tramite strumenti OAuth-scoped.",
      icon: "MailCheck",
    },
    {
      name: "Google Calendar",
      label: "Runtime locale",
      description: "Elenca calendari, cerca e legge eventi, crea eventi, aggiorna pianificazioni ed elimina eventi con policy di approvazione connettore.",
      icon: "CalendarDays",
    },
    {
      name: "Google Drive",
      label: "Runtime locale",
      description: "Cerca file, ispeziona metadati e permessi, legge o scarica contenuti e crea file quando le regole di approvazione lo permettono.",
      icon: "Database",
    },
    {
      name: "Connettori MCP",
      label: "Estensione",
      description: "Costruisce descrittori MCP per OpenAI Responses API da configurazioni abilitate e materializza tool quando il runtime e fornito.",
      icon: "PlugZap",
    },
    {
      name: "Connettori plugin",
      label: "Estensione",
      description: "Permette ai manifest plugin di dichiarare provider, canali, strumenti, hook, auth, setup e capacita runtime.",
      icon: "Workflow",
    },
    {
      name: "Catalogo connettori",
      label: "Provider-hosted",
      description: "Dropbox, Outlook, SharePoint, Microsoft Teams e altri cataloghi restano esposti per runtime hosted, MCP o plugin-backed.",
      icon: "Cloud",
    },
  ],
  faqs: [
    {
      question: "Friday invia i miei dati da qualche parte?",
      answer:
        "Friday e local-first. I dati lasciano la tua macchina solo quando scegli un provider esterno, un connettore, un canale o un servizio hosted per un'attivita.",
    },
    {
      question: "Quali piattaforme desktop sono previste?",
      answer:
        "Friday e un'app Electron desktop con script di pacchetto per macOS x64 e arm64, Windows x64 e Linux AppImage. La disponibilita finale va verificata sugli artefatti di release.",
    },
    {
      question: "Posso usare un modello locale?",
      answer:
        "Friday e progettato attorno alla scelta del provider, inclusi provider locali o self-hosted dove configurati.",
    },
    {
      question: "Il codice sorgente e disponibile?",
      answer:
        "Usa il repository collegato e le note di release come fonte autorevole per disponibilita del codice, packaging e dettagli di contribuzione.",
    },
  ],
} satisfies typeof fridayEn;

const integrationsIt = [
  {
    name: "GitHub",
    category: localizedCategory.Code,
    description: "Ispeziona issue, apri pull request, riassumi review e monitora l'attivita dei repository.",
    icon: "Github",
  },
  {
    name: "GitLab",
    category: localizedCategory.Code,
    description: "Collega merge request, stato CI e project board al workspace del tuo assistente.",
    icon: "GitBranch",
  },
  {
    name: "Telegram",
    category: localizedCategory.Channels,
    description:
      "Invia riepiloghi pianificati, alert e richieste di approvazione alle chat Telegram abbinate. Runtime incluso con long polling, logica di riconnessione e supporto gruppi.",
    icon: "MessageSquare",
  },
  {
    name: "Slack",
    category: localizedCategory.Channels,
    description: "Ricevi aggiornamenti, approvazioni e riepiloghi giornalieri nei canali che il tuo team gia segue.",
    icon: "Slack",
  },
  {
    name: "Discord",
    category: localizedCategory.Channels,
    description: "Esegui workflow community e code di supporto da un assistente nativo del server.",
    icon: "MessageSquare",
  },
  {
    name: "WhatsApp",
    category: localizedCategory.Channels,
    description: "Consegnare aggiornamenti personali e di team tramite conversazioni WhatsApp configurate con Cloud API.",
    icon: "MessageSquare",
  },
  {
    name: "Microsoft Teams",
    category: localizedCategory.Channels,
    description: "Instrada aggiornamenti di stato e workflow di team negli spazi Microsoft Teams tramite Graph API.",
    icon: "Users",
  },
  {
    name: "Google Chat",
    category: localizedCategory.Channels,
    description: "Pubblica riepiloghi, prompt di attivita e notifiche nelle stanze Google Chat.",
    icon: "MessageSquare",
  },
  {
    name: "Signal",
    category: localizedCategory.Channels,
    description: "Usa Signal per notifiche private di canale e workflow di messaggi diretti abbinati.",
    icon: "RadioTower",
  },
  {
    name: "iMessage",
    category: localizedCategory.Channels,
    description: "Collega Friday a iMessage per consegna messaggi diretti nativa su macOS.",
    icon: "MessageSquare",
  },
  {
    name: "Matrix",
    category: localizedCategory.Channels,
    description: "Usa il protocollo Matrix aperto per notifiche di team federate e decentralizzate.",
    icon: "MessageSquare",
  },
  {
    name: "Mattermost",
    category: localizedCategory.Channels,
    description: "Consegnare aggiornamenti in workspace Mattermost self-hosted o cloud.",
    icon: "MessageSquare",
  },
  {
    name: "LINE",
    category: localizedCategory.Channels,
    description: "Invia messaggi e aggiornamenti workflow tramite LINE Messaging API.",
    icon: "MessageSquare",
  },
  {
    name: "Feishu / Lark",
    category: localizedCategory.Channels,
    description: "Integra Feishu e Lark tramite la piattaforma open per messaggistica enterprise.",
    icon: "MessageSquare",
  },
  {
    name: "IRC",
    category: localizedCategory.Channels,
    description: "Connettiti a reti IRC usando IRCv3 per consegna su canale leggera e a bassa latenza.",
    icon: "Terminal",
  },
  {
    name: "Twitch",
    category: localizedCategory.Channels,
    description: "Esegui workflow live-stream e interazioni bot nella chat Twitch.",
    icon: "RadioTower",
  },
  {
    name: "Nextcloud Talk",
    category: localizedCategory.Channels,
    description: "Raggiungi stanze e bot Nextcloud Talk self-hosted tramite Talk API.",
    icon: "Cloud",
  },
  {
    name: "Synology Chat",
    category: localizedCategory.Channels,
    description: "Pubblica notifiche e aggiornamenti su Synology Chat tramite webhook o integrazione.",
    icon: "MessageSquare",
  },
  {
    name: "Nostr",
    category: localizedCategory.Channels,
    description: "Pubblica messaggi diretti cifrati sul protocollo decentralizzato Nostr.",
    icon: "RadioTower",
  },
  {
    name: "QQ Bot",
    category: localizedCategory.Channels,
    description: "Costruisci workflow QQ bot con l'API ufficiale della piattaforma QQ Bot.",
    icon: "MessageSquare",
  },
  {
    name: "Zalo",
    category: localizedCategory.Channels,
    description: "Consegnare messaggi tramite Zalo Official Account per audience basate in Vietnam.",
    icon: "MessageSquare",
  },
  {
    name: "Tlon / Urbit",
    category: localizedCategory.Channels,
    description: "Connettiti a gruppi Tlon decentralizzati tramite Urbit per comunicazione sovrana.",
    icon: "Globe",
  },
  {
    name: "ClickClack",
    category: localizedCategory.Channels,
    description: "Integra ClickClack per workflow specializzati di messaggistica su canale.",
    icon: "MessageSquare",
  },
  {
    name: "Gmail",
    category: localizedCategory.Connectors,
    description: "Cerca, leggi, scrivi bozze, invia e gestisci messaggi Gmail. OAuth con ambiti a privilegio minimo.",
    icon: "MailCheck",
  },
  {
    name: "Google Calendar",
    category: localizedCategory.Connectors,
    description: "Trova eventi, prepara agende, individua conflitti e crea promemoria dal contesto di progetto.",
    icon: "CalendarDays",
  },
  {
    name: "Google Drive",
    category: localizedCategory.Connectors,
    description: "Cerca file, riassume documenti e trasforma il contesto Drive in prossime azioni.",
    icon: "Database",
  },
  {
    name: "Dropbox",
    category: localizedCategory.Connectors,
    description: "Cerca e accede ai file Dropbox via OAuth. Operazioni di lettura e scrittura controllate per ambito.",
    icon: "Cloud",
  },
  {
    name: "Outlook Email",
    category: localizedCategory.Connectors,
    description: "Cerca e gestisce messaggi Outlook tramite Microsoft Graph API.",
    icon: "Mail",
  },
  {
    name: "Outlook Calendar",
    category: localizedCategory.Connectors,
    description: "Elenca e gestisce eventi del calendario Outlook tramite Microsoft Graph.",
    icon: "CalendarDays",
  },
  {
    name: "SharePoint",
    category: localizedCategory.Connectors,
    description: "Recupera e cerca documenti e siti SharePoint tramite Microsoft Graph API.",
    icon: "FolderOpen",
  },
  {
    name: "Microsoft Teams",
    category: localizedCategory.Connectors,
    description: "Cerca messaggi e canali Teams tramite Microsoft Graph API.",
    icon: "Users",
  },
  {
    name: "Da voce a testo",
    category: localizedCategory.Operators,
    description:
      "Dettatura live e trascrizione audio tramite qualsiasi provider STT configurato, come OpenAI Realtime, Deepgram e altri.",
    icon: "Mic",
  },
  {
    name: "Da testo a voce",
    category: localizedCategory.Operators,
    description:
      "Sintetizza audio parlato dalle risposte dell'assistente usando ElevenLabs, Cartesia, Deepgram o qualsiasi provider TTS.",
    icon: "Volume2",
  },
  {
    name: "Creatore immagini",
    category: localizedCategory.Operators,
    description:
      "Genera e modifica immagini tramite Black Forest Labs, Stability AI, Ideogram, OpenAI o qualsiasi provider per immagini.",
    icon: "Image",
  },
  {
    name: "Creatore video",
    category: localizedCategory.Operators,
    description:
      "Crea video con job di generazione asincroni tramite Runway, Kling, Pika, Luma AI o qualsiasi provider video.",
    icon: "Video",
  },
  {
    name: "Creatore musica",
    category: localizedCategory.Operators,
    description:
      "Genera musica e output audio tramite MiniMax, Stability AI, ElevenLabs, Google o qualsiasi provider audio.",
    icon: "Music",
  },
  {
    name: "OCR documenti",
    category: localizedCategory.Operators,
    description: "Estrai testo da immagini e documenti tramite endpoint OCR o provider configurato.",
    icon: "ScanText",
  },
  {
    name: "Scheduler Cron",
    category: localizedCategory.Operators,
    description:
      "Pianifica attivita ricorrenti, esecuzioni singole e job a intervallo con gestione dei run mancati e policy di concorrenza.",
    icon: "Clock",
  },
  {
    name: "Attivita in background",
    category: localizedCategory.Operators,
    description:
      "Esegui lavoro agent, immagini, video, audio e OCR in parallelo con cancellazione e tracciamento degli eventi di ciclo vita.",
    icon: "Layers",
  },
  {
    name: "Postgres",
    category: localizedCategory.Data,
    description: "Interroga dati operativi con credenziali limitate e workflow leggibili e auditabili.",
    icon: "Database",
  },
  {
    name: "Cloudflare",
    category: localizedCategory.Infrastructure,
    description: "Coordina anteprime deploy, controlli DNS, code, worker e attivita edge runtime.",
    icon: "Cloud",
  },
  {
    name: "OpenAI",
    category: localizedCategory["AI Providers"],
    description:
      "Chat, speech-to-text, text-to-speech, immagini e video. GPT-5.5, GPT-5.4 e GPT-5.4 Mini con reasoning effort configurabile.",
    icon: "Cpu",
  },
  {
    name: "Anthropic",
    category: localizedCategory["AI Providers"],
    description: "Modelli Claude Opus, Sonnet e Haiku per chat e workflow con uso di strumenti.",
    icon: "Cpu",
  },
  {
    name: "Google DeepMind",
    category: localizedCategory["AI Providers"],
    description:
      "Gemini 2.5 Pro, Flash e Flash-Lite tramite Gemini API compatibile con OpenAI. Chat, voce, immagini, video e musica.",
    icon: "Cpu",
  },
  {
    name: "xAI",
    category: localizedCategory["AI Providers"],
    description: "Grok 4.3, Grok 4.3 Fast e Grok Code Fast per chat, voce realtime, immagini e video.",
    icon: "Cpu",
  },
  {
    name: "Mistral AI",
    category: localizedCategory["AI Providers"],
    description: "Modelli Mistral Large, Medium, Small e Ministral per chat con reasoning effort configurabile.",
    icon: "Cpu",
  },
  {
    name: "DeepSeek",
    category: localizedCategory["AI Providers"],
    description: "DeepSeek V4-Pro e V4-Flash tramite DeepSeek API compatibile con OpenAI.",
    icon: "Cpu",
  },
  {
    name: "Perplexity",
    category: localizedCategory["AI Providers"],
    description: "Sonar Reasoning Pro, Sonar Pro e Sonar Deep Research per chat di ricerca basata sul web.",
    icon: "Cpu",
  },
  {
    name: "ElevenLabs",
    category: localizedCategory["AI Providers"],
    description: "Speech-to-text, text-to-speech, audio e musica. Provider TTS predefinito con voce Rachel multilingue.",
    icon: "Volume2",
  },
  {
    name: "Runtime locale",
    category: localizedCategory["AI Providers"],
    description: "Esegui carichi privati su modelli locali o self-hosted per bozze sensibili e contesto interno.",
    icon: "Server",
  },
] satisfies typeof integrationsEn;

const operatorsIt = [
  {
    id: "assistant",
    name: "Assistente AI",
    status: "implemented",
    description:
      "L'agente principale di Friday. Esegue un ciclo strumenti neutrale rispetto al provider con system prompt, compattazione del contesto, hook di sicurezza pre-run e memoria tra sessioni.",
    icon: "Bot",
    providers: [
      "OpenAI",
      "Anthropic",
      "Google",
      "xAI",
      "Mistral",
      "DeepSeek",
      "Qwen",
      "Kimi",
      "Perplexity",
      "NVIDIA",
      "e altri",
    ],
    highlights: [
      "Qualsiasi provider e modello chat configurato",
      "Hook di policy pre-run bloccano richieste non sicure",
      "Compattazione automatica del contesto quando serve",
      "File di avvio per agente e memoria persistente",
      "Override provider e modello per singolo run",
    ],
  },
  {
    id: "speech-to-text",
    name: "Da voce a testo",
    status: "implemented",
    description:
      "Dettatura live e trascrizione audio. Trasmette audio PCM a 24 kHz dal microfono e restituisce eventi di trascrizione parziali e finali in tempo reale.",
    icon: "Mic",
    providers: ["OpenAI Realtime Whisper", "Deepgram", "Qualsiasi provider STT"],
    highlights: [
      "Trascrizione streaming in tempo reale",
      "Cancellazione eco e soppressione rumore",
      "Lingua e sample rate configurabili",
      "Contratto sessione indipendente dal provider",
      "Chiusura ordinata al teardown del renderer",
    ],
  },
  {
    id: "text-to-speech",
    name: "Da testo a voce",
    status: "pending-runtime",
    description:
      "Sintetizza audio parlato dalle risposte dell'assistente. Voce, formato e stile streaming configurabili tramite qualsiasi provider TTS.",
    icon: "Volume2",
    providers: ["ElevenLabs", "Deepgram", "Cartesia", "OpenAI", "Qualsiasi provider TTS"],
    highlights: [
      "Qualsiasi provider e modello TTS configurato",
      "Output audio streaming o batch",
      "Opzioni per voce, formato e velocita",
      "Attivita in background con avanzamento",
      "Consegna audio attivata da Cron",
    ],
  },
  {
    id: "image-creator",
    name: "Creatore immagini",
    status: "pending-runtime",
    description:
      "Genera e modifica immagini da prompt o asset di riferimento. Supporta qualsiasi provider per immagini con record risultato normalizzati.",
    icon: "Image",
    providers: ["Black Forest Labs", "Stability AI", "Ideogram", "OpenAI", "Google", "Qualsiasi provider immagini"],
    highlights: [
      "Text-to-image e modifica immagini",
      "Controlli per aspect ratio e numero output",
      "Attivita image.create in background",
      "Generazione immagini pianificata da Cron",
      "Adapter specifici per provider dietro API condivisa",
    ],
  },
  {
    id: "video-creator",
    name: "Creatore video",
    status: "pending-runtime",
    description:
      "Crea video tramite job di generazione asincroni. Supporta prompt-to-video, asset di riferimento, durata e aspect ratio con qualsiasi provider video.",
    icon: "Video",
    providers: ["Runway", "Kling", "Pika", "Luma AI", "OpenAI", "Qualsiasi provider video"],
    highlights: [
      "Generazione video asincrona con polling",
      "Input per prompt, durata e aspect ratio",
      "Attivita video.create in background",
      "Produzione video attivata da Cron",
      "Supporto webhook e download negli adapter",
    ],
  },
  {
    id: "music-creator",
    name: "Creatore musica",
    status: "pending-runtime",
    description:
      "Genera musica, effetti sonori e audio da prompt testuali. Copre qualsiasi provider con capacita di generazione musicale o audio.",
    icon: "Music",
    providers: ["MiniMax", "Stability AI", "ElevenLabs", "Google", "Suno", "Qualsiasi provider audio"],
    highlights: [
      "Text-to-music e text-to-audio",
      "Controlli per durata, formato e stem",
      "Attivita sound.create in background",
      "Generazione audio attivata da Cron",
      "Risultati audio normalizzati e indipendenti dal provider",
    ],
  },
  {
    id: "document-ocr",
    name: "OCR documenti",
    status: "implemented",
    description:
      "Estrae testo da immagini e documenti tramite endpoint OCR configurato. Valida l'input immagine, lo invia all'endpoint e restituisce il testo estratto.",
    icon: "ScanText",
    providers: ["Qualsiasi endpoint OCR", "Selettore provider/modello pianificato"],
    highlights: [
      "Input immagine Base64 con MIME type",
      "Endpoint OCR configurabile",
      "Attivita ocr.run in background",
      "Supporto suggerimento lingua",
      "Percorso di migrazione verso selettore provider/modello",
    ],
  },
  {
    id: "cron-scheduler",
    name: "Scheduler Cron",
    status: "implemented",
    description:
      "Pianifica attivita ricorrenti, esecuzioni singole e job a intervallo con supporto timezone, gestione run mancati, policy di concorrenza e audit trail completi.",
    icon: "Clock",
    providers: ["Integrato - nessun provider esterno richiesto"],
    highlights: [
      "Pianificazioni cron, a intervallo e una tantum",
      "Policy run mancati: salta, esegui una volta, catch-up, fallisci",
      "Policy concorrenza: salta, accoda, annulla precedente",
      "Timezone-aware con poll ogni 30 secondi",
      "Turn agent, immagini, video, audio e promemoria",
    ],
  },
  {
    id: "background-tasks",
    name: "Attivita in background",
    status: "implemented",
    description:
      "Esegue lavoro agent, OCR, immagini, video e audio in parallelo. Ogni attivita ha ciclo vita, avanzamento, cancellazione via AbortSignal e risultati in memoria.",
    icon: "Layers",
    providers: ["Integrato - delega ai moduli operator"],
    highlights: [
      "Esecuzione parallela delle attivita",
      "Cancellazione cooperativa via AbortSignal",
      "Eventi ciclo vita: queued, running, succeeded, failed, cancelled",
      "Nessun timeout di esecuzione predefinito",
      "API preload IPC sicura per il renderer",
    ],
  },
] satisfies typeof operatorsEn;

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
          { label: "Features", href: "/#features" },
          { label: "How it works", href: "/#how" },
          { label: "Connectors", href: "/#connectors" },
        ],
      },
      {
        title: "Details",
        links: [
          { label: "Channels", href: "/#channels" },
          { label: "FAQ", href: "/#faq" },
          { label: "Integrations", href: "/integrations" },
          { label: "Docs", href: "/docs" },
        ],
      },
    ],
    footerRights: "All rights reserved.",
    footerPermissionNote: "Review provider, connector, and channel permissions before enabling automation.",
  },
  home: {
    ogTitle: "Friday",
    ogDescription:
      "A local-first desktop AI assistant for agent runs, files, tools, skills, connected apps, scheduled tasks, channels, and voice-assisted workflows.",
    featuresEyebrow: "Features",
    featuresTitle: "The runtime surface from the feature docs.",
    howEyebrow: "How it works",
    howTitle: "Configured locally, then run from any entry point.",
    connectorsEyebrow: "Connectors",
    connectorsTitle: "Local Google connectors today, extension paths for everything else.",
    channelsEyebrow: "Channels",
    channelsTitle: "Telegram runs locally; the broader channel catalog stays visible.",
    channelsPanelTitle: "Runtime status stays explicit.",
    channelsPanelDescription:
      "Telegram has a bundled adapter with polling, health checks, reconnects, dedupe, and chunked replies. Other catalog channels need an adapter, hosted connector, MCP server, or plugin runtime before local execution.",
    operatorsEyebrow: "Operators",
    operatorsTitle: "Background work, schedules, heartbeat, and delegated agents.",
    providersEyebrow: "AI Providers",
    providersTitle: "Provider-neutral where runtime exists, cataloged where it is still maturing.",
    faqEyebrow: "FAQ",
    faqTitle: "Common questions.",
    downloadTitle: "One keystroke away.",
    downloadLabel: "Download desktop app",
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
      "Friday's AI operators - speech, text-to-speech, image, video, music, OCR, cron scheduling, and background tasks.",
    eyebrow: "Operators",
    heading: "Every AI job, routed to the right model.",
    intro:
      "Friday separates concerns. Each operator owns one kind of work - voice, images, video, music, or scheduling - and resolves its own provider and model from your saved settings.",
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
    chatAssistantGreeting: "Starting a background agent task with the allowed tools.",
    chatUserFollowup: "Wake heartbeat if deploy slips past 5 PM.",
    chatAssistantFollowup: "Queued. I will alert only if action is needed.",
    attachedFile: "project-notes.md",
    removeAttachment: "Remove attachment",
    listeningLabel: "Listening...",
    dictationText: "Summarize my morning and suggest the next task.",
    interactiveReply:
      "I can do that. I will use the configured tools, keep the run state visible, and ask before write or publish actions.",
    assistantStatus: "using tools with approval checks",
    planItems: ["Inspect changed files", "Draft release notes", "Ask before running tests"],
    toolActivityLabel: "Tool activity",
    toolActivityValue: "read / apply_patch / build",
    toolRequest: "Tool request",
    toolCommand: "Run `bun run build`",
    approve: "Approve",
    settingsLabel: "Settings",
    modelLabel: "Assistant",
    modelValue: "GPT-5.4",
    voiceLabel: "Voice input",
    voiceValue: "Realtime Whisper",
    activityLabel: "Activity",
    contextLabel: "Context",
    workspaceLabel: "Workspace",
    workspaceValue: "12 files inspected",
    scheduledLabel: "Scheduled",
    scheduledValue: "Daily 9:00 brief",
    channelLabel: "Channel",
    channelValue: "Telegram + Slack",
    privacyLabel: "Privacy",
    privacyValue: "Local keys",
    actionPreviewLabel: "Workspace action preview",
    composerLabel: "Friday prompt composer preview",
    addAttachment: "Add attachment",
    voiceInput: "Voice input",
    sendPrompt: "Send prompt",
    composerPlaceholder: "Ask Friday to use files, tools, voice, or channels...",
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
          { label: "Funzioni", href: "/#features" },
          { label: "Come funziona", href: "/#how" },
          { label: "Connettori", href: "/#connectors" },
        ],
      },
      {
        title: "Dettagli",
        links: [
          { label: "Canali", href: "/#channels" },
          { label: "FAQ", href: "/#faq" },
          { label: "Integrazioni", href: "/integrations" },
        ],
      },
    ],
    footerRights: "Tutti i diritti riservati.",
    footerPermissionNote: "Rivedi i permessi di provider, connettori e canali prima di abilitare l'automazione.",
  },
  home: {
    ogTitle: "Friday",
    ogDescription:
      "Un assistente AI desktop local-first per run agent, file, strumenti, skill, app connesse, attivita pianificate, canali e flussi di lavoro assistiti dalla voce.",
    featuresEyebrow: "Funzioni",
    featuresTitle: "La superficie runtime dalla documentazione feature.",
    howEyebrow: "Come funziona",
    howTitle: "Configurato in locale, poi eseguito da qualsiasi punto di ingresso.",
    connectorsEyebrow: "Connettori",
    connectorsTitle: "Connettori Google locali oggi, percorsi di estensione per il resto.",
    channelsEyebrow: "Canali",
    channelsTitle: "Telegram gira in locale; il catalogo canali piu ampio resta visibile.",
    channelsPanelTitle: "Lo stato runtime resta esplicito.",
    channelsPanelDescription:
      "Telegram ha un adapter incluso con polling, health check, riconnessione, dedupe e risposte segmentate. Gli altri canali del catalogo richiedono adapter, connettore hosted, server MCP o runtime plugin prima dell'esecuzione locale.",
    operatorsEyebrow: "Operatori",
    operatorsTitle: "Lavoro in background, pianificazioni, heartbeat e agenti delegati.",
    providersEyebrow: "Provider AI",
    providersTitle: "Neutrale rispetto al provider dove esiste il runtime, catalogato dove sta maturando.",
    faqEyebrow: "FAQ",
    faqTitle: "Domande comuni.",
    downloadTitle: "A un tasto di distanza.",
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
      "Gli operatori AI di Friday: speech, text-to-speech, immagini, video, musica, OCR, pianificazione cron e attivita in background.",
    eyebrow: "Operatori",
    heading: "Ogni lavoro AI, instradato al modello giusto.",
    intro:
      "Friday separa le responsabilita. Ogni operatore gestisce un tipo di lavoro - voce, immagini, video, musica o pianificazione - e risolve provider e modello dalle impostazioni salvate.",
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
    chatAssistantGreeting: "Avvio un'attivita agent in background con gli strumenti consentiti.",
    chatUserFollowup: "Sveglia heartbeat se il deploy supera le 17:00.",
    chatAssistantFollowup: "In coda. Ti avviso solo se serve un'azione.",
    attachedFile: "note-progetto.md",
    removeAttachment: "Rimuovi allegato",
    listeningLabel: "Sto ascoltando...",
    dictationText: "Riassumi la mia mattina e suggerisci il prossimo compito.",
    interactiveReply:
      "Posso farlo. Usero gli strumenti configurati, terro visibile lo stato del run e chiedero prima di scrivere o pubblicare.",
    assistantStatus: "usa strumenti con controlli di approvazione",
    planItems: ["Ispeziona file modificati", "Prepara note di release", "Chiedi prima di eseguire i test"],
    toolActivityLabel: "Attivita strumenti",
    toolActivityValue: "read / apply_patch / build",
    toolRequest: "Richiesta strumento",
    toolCommand: "Esegui `bun run build`",
    approve: "Approva",
    settingsLabel: "Impostazioni",
    modelLabel: "Assistente",
    modelValue: "GPT-5.4",
    voiceLabel: "Input vocale",
    voiceValue: "Realtime Whisper",
    activityLabel: "Attivita",
    contextLabel: "Contesto",
    workspaceLabel: "Workspace",
    workspaceValue: "12 file ispezionati",
    scheduledLabel: "Pianificato",
    scheduledValue: "Brief alle 9:00",
    channelLabel: "Canale",
    channelValue: "Telegram + Slack",
    privacyLabel: "Privacy",
    privacyValue: "Chiavi locali",
    actionPreviewLabel: "Anteprima azioni workspace",
    composerLabel: "Anteprima composer prompt Friday",
    addAttachment: "Aggiungi allegato",
    voiceInput: "Input vocale",
    sendPrompt: "Invia prompt",
    composerPlaceholder: "Chiedi a Friday di usare file, strumenti, voce o canali...",
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
