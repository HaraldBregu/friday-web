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
  tagline: "Assistente AI personale per Mac",
  description:
    "Friday e un assistente AI desktop local-first per chat, file, strumenti, app connesse, attivita pianificate, canali e flussi di lavoro assistiti dalla voce.",
  audience:
    "Sviluppatori, operatori, knowledge worker, writer, creator e power user che vogliono controllo locale con automazione connessa.",
  cta: {
    label: "Scarica per Mac",
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
    { label: "Integrazioni", href: "/integrations" },
    { label: "Operatori", href: "/operators" },
    { label: "Provider", href: "/providers" },
    { label: "Canali", href: "/channels" },
    { label: "Strumenti", href: "/tools" },
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
      "Un assistente AI desktop per macOS. Richiamalo con Option Space, chiedi aiuto e torna subito a quello che stavi facendo.",
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
    { value: "Option Space", label: "scorciatoia desktop" },
    { value: "Locale", label: "chiavi e impostazioni app" },
    { value: "Approvazione", label: "prima delle azioni rischiose" },
    { value: "Cron", label: "prompt pianificati" },
  ],
  landingFeatures: [
    {
      key: "01",
      title: "Ovunque su macOS",
      description:
        "Richiama Friday dal desktop e mantieni visibile l'attivita corrente. File, strumenti, voce e contesto di lavoro restano vicini senza aprire un'altra scheda del browser.",
    },
    {
      key: "02",
      title: "Ricorda, senza nascondere il registro",
      description:
        "Gli archivi locali mantengono ispezionabili e cancellabili contesto utile come impostazioni, skill, pianificazioni, canali e stato della sessione.",
    },
    {
      key: "03",
      title: "Desktop, non un'altra scheda",
      description:
        "Friday e pensato per il lavoro desktop: file, comandi terminale, impostazioni locali, chiavi provider e controlli di approvazione restano visibili.",
    },
    {
      key: "04",
      title: "Il modello lo scegli tu",
      description:
        "Instrada chat, voce, immagini, ricerca e lavoro realtime attraverso provider configurati invece di restare bloccato su un solo modello.",
    },
    {
      key: "05",
      title: "Workflow scriptabili",
      description:
        "Trasforma attivita ripetute in skill, prompt pianificati, azioni di connettori o consegne su canale con confini di permesso chiari.",
    },
    {
      key: "06",
      title: "Onesto sull'incertezza",
      description:
        "Friday puo chiedere prima di agire, mostrare lo stato di esecuzione e mantenere i dati privati del workspace sotto il controllo dell'utente.",
    },
  ],
  howSteps: [
    {
      label: "PASSO 01",
      glyph: "Opt Space",
      title: "Richiama",
      description: "Apri Friday dal desktop e tieni visibile il lavoro corrente.",
    },
    {
      label: "PASSO 02",
      glyph: "> _",
      title: "Chiedi",
      description: "Scrivi, detta, allega un file o scegli un workflow preparato.",
    },
    {
      label: "PASSO 03",
      glyph: "Return",
      title: "Torna al lavoro",
      description: "Rivedi la risposta, approva ogni azione sensibile e riprendi l'attivita.",
    },
  ],
  quote: {
    text: "Il primo strumento AI che rispetta quello che stavo facendo prima di aprirlo.",
    cite: "Design partner di Friday",
  },
  landingConnectors: [
    {
      name: "Google",
      label: "Workspace",
      description: "Cerca e riassume il contesto del workspace nei servizi Google configurati.",
      icon: "Cloud",
    },
    {
      name: "Gmail",
      label: "Email",
      description: "Prepara risposte, organizza thread e porta i follow-up in un'attivita Friday.",
      icon: "MailCheck",
    },
    {
      name: "Calendar",
      label: "Pianificazione",
      description: "Prepara agende, individua conflitti e trasforma le riunioni in prossime azioni.",
      icon: "CalendarDays",
    },
    {
      name: "Google Drive",
      label: "File",
      description: "Usa documenti, fogli e file condivisi come contesto verificato per il lavoro dell'assistente.",
      icon: "Database",
    },
    {
      name: "Dropbox",
      label: "File cloud",
      description: "Cerca e accede ai file Dropbox con operazioni OAuth limitate per ambito e soggette ad approvazione.",
      icon: "Cloud",
    },
    {
      name: "Outlook",
      label: "Email",
      description: "Cerca e gestisce messaggi Outlook tramite Microsoft Graph API.",
      icon: "Mail",
    },
    {
      name: "SharePoint",
      label: "Documenti",
      description: "Recupera e cerca documenti e siti SharePoint tramite Microsoft Graph.",
      icon: "FolderOpen",
    },
    {
      name: "GitHub",
      label: "Codice",
      description: "Ispeziona issue, pull request, review, release e attivita dei repository.",
      icon: "Github",
    },
  ],
  faqs: [
    {
      question: "Friday invia i miei dati da qualche parte?",
      answer:
        "Friday e local-first. I dati lasciano la tua macchina solo quando scegli un provider esterno, un connettore, un canale o un servizio hosted per un'attivita.",
    },
    {
      question: "Funzionera sui Mac Intel?",
      answer:
        "La landing page punta a macOS 13+ e ai workflow desktop. I dettagli finali di packaging vanno verificati sugli artefatti di release prima della pubblicazione.",
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
      "A local-first desktop AI assistant for chat, files, tools, connected apps, scheduled tasks, channels, and voice-assisted workflows.",
    featuresEyebrow: "Features",
    featuresTitle: "Six things, done well.",
    howEyebrow: "How it works",
    howTitle: "Three steps, one focused loop.",
    connectorsEyebrow: "Connectors",
    connectorsTitle: "Connect Google, calendar, files, and the apps around your day.",
    channelsEyebrow: "Channels",
    channelsTitle: "Send updates and approvals through the channels teams already use.",
    channelsPanelTitle: "Channel controls stay explicit.",
    channelsPanelDescription:
      "Configure account labels, default targets, allowlists, pairing rules, runtime state, and delivery behavior before Friday posts into a channel.",
    operatorsEyebrow: "Operators",
    operatorsTitle: "Voice, images, video, and music — all provider-agnostic.",
    providersEyebrow: "AI Providers",
    providersTitle: "30+ providers. One config.",
    faqEyebrow: "FAQ",
    faqTitle: "Common questions.",
    downloadTitle: "One keystroke away.",
    downloadLabel: "Download for Mac",
    releaseFootnote: "Apple Silicon and Intel",
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
    chatUserGreeting: "Hi, how are you doing?",
    chatAssistantGreeting:
      "I'm doing great, thanks! Ready whenever you want to move beyond greetings and try that test. What do you have in mind?",
    chatUserFollowup: "Good morning, people. How are you doing today? I am fine, how about you?",
    chatAssistantFollowup: "Good morning! I'm doing well - glad to hear you're fine too. What's on your agenda today?",
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
      "Un assistente AI desktop local-first per chat, file, strumenti, app connesse, attivita pianificate, canali e flussi di lavoro assistiti dalla voce.",
    featuresEyebrow: "Funzioni",
    featuresTitle: "Sei cose, fatte bene.",
    howEyebrow: "Come funziona",
    howTitle: "Tre passi, un ciclo concentrato.",
    connectorsEyebrow: "Connettori",
    connectorsTitle: "Collega Google, calendario, file e le app attorno alla tua giornata.",
    channelsEyebrow: "Canali",
    channelsTitle: "Invia aggiornamenti e approvazioni nei canali che i team usano gia.",
    channelsPanelTitle: "I controlli dei canali restano espliciti.",
    channelsPanelDescription:
      "Configura etichette account, target predefiniti, allowlist, regole di pairing, stato runtime e comportamento di consegna prima che Friday pubblichi in un canale.",
    operatorsEyebrow: "Operatori",
    operatorsTitle: "Voce, immagini, video e musica — tutti indipendenti dal provider.",
    providersEyebrow: "Provider AI",
    providersTitle: "30+ provider. Una sola configurazione.",
    faqEyebrow: "FAQ",
    faqTitle: "Domande comuni.",
    downloadTitle: "A un tasto di distanza.",
    downloadLabel: "Scarica per Mac",
    releaseFootnote: "Apple Silicon e Intel",
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
    chatUserGreeting: "Ciao, come stai?",
    chatAssistantGreeting:
      "Sto molto bene, grazie. Sono pronto quando vuoi andare oltre i saluti e provare quel test. Cosa hai in mente?",
    chatUserFollowup: "Buongiorno a tutti. Come state oggi? Io sto bene, e voi?",
    chatAssistantFollowup: "Buongiorno! Sto bene, felice di sapere che anche tu stai bene. Cosa hai in agenda oggi?",
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
