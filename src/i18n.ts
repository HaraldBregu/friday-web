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
      question: "Riassumi le mie menzioni Discord",
      answer:
        "Hai 4 menzioni dirette in 2 canali. Il thread da guardare e #launch: Priya e bloccata sulla domanda del timeout API e ti ha taggato 11 minuti fa.",
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
    { value: "Desktop", label: "app nativa per macOS, Windows e Linux" },
    { value: "Chiavi tue", label: "scegli provider e modelli AI" },
    { value: "Locale", label: "impostazioni, credenziali, cronologia e memoria" },
    { value: "Approva", label: "controlli espliciti prima delle azioni sensibili" },
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
        "Si. I canali permettono di parlare con Friday da piattaforme di messaggistica. Telegram e Discord sono supportati oggi, con controllo accessi e segreti separati per ogni canale.",
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
          { label: "MCP", href: "/#mcp" },
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
    channelsPanelTitle: "Telegram and Discord supported today.",
    channelsPanelDescription:
      "Connect a Telegram or Discord bot and chat with Friday from your phone or desktop, with per-channel access control and delivery back through the same channel.",
    operatorsEyebrow: "Workflows",
    operatorsTitle: "Voice, images, schedules,|and health checks.",
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
    chatAssistantGreeting: "I will read the checklist, inspect the project files, and ask before editing or running commands.",
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
    channelValue: "Telegram + Discord",
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
          { label: "Funzioni", href: "/#features" },
          { label: "Come funziona", href: "/#how" },
          { label: "MCP", href: "/#mcp" },
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
    channelsPanelTitle: "Telegram e Discord supportati oggi.",
    channelsPanelDescription:
      "Collega un bot Telegram o Discord e parla con Friday dal telefono o dal desktop, con controllo accessi per canale e risposta nello stesso canale.",
    operatorsEyebrow: "Workflow",
    operatorsTitle: "Voce, immagini, pianificazioni,|e health check.",
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
    chatAssistantGreeting: "Leggo la checklist, ispeziono i file del progetto e chiedo prima di modificare o eseguire comandi.",
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
    channelValue: "Telegram + Discord",
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
