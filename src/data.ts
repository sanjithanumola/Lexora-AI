import { PredefinedSection, FAQItem, EmergencyContact } from "./types";

export const MAIN_CATEGORIES = [
  {
    id: "cyber",
    title: "Cyber Crime Help",
    description: "Digital forensics, email hacking, phishing scams, and identity theft countermeasures.",
    iconName: "ShieldAlert",
    sampleSuggest: "Someone created a fake profile with my pictures on social media and is threatening to leak private conversations.",
    statSymbol: "CYBER-CODE 66D"
  },
  {
    id: "women-child",
    title: "Women & Child Safety",
    description: "Fast-track legal remedies, stalking regulations, domestic safeguards, and POCSO summaries.",
    iconName: "HeartPulse",
    sampleSuggest: "A random person is repeatedly stalking me on my way home and online despite block warnings.",
    statSymbol: "IPC 354D / POCSO"
  },
  {
    id: "penalty-finder",
    title: "Punishment & Penalty Finder",
    description: "Instant lookups of criminal codes, incarceration metrics, and official restitution fine values.",
    iconName: "SearchCode",
    sampleSuggest: "What is the legal punishment and fine amount for committing physical burglary or house trespassing?",
    statSymbol: "IPC 380 / BNS 305"
  },
  {
    id: "law-identifier",
    title: "Law Section Identifier",
    description: "Translate normal descriptions of bad acts or contracts into real exact statutory law references.",
    iconName: "Scale",
    sampleSuggest: "My business partner diverted corporate funds into his personal bank account without board authorization.",
    statSymbol: "IPC 406 (Trust Breach)"
  },
  {
    id: "fir-guidance",
    title: "FIR & Complaint Guidance",
    description: "Procedural step plans for filing FIRs, Zero-FIR status tracking, and police refusal counters.",
    iconName: "FileSpreadsheet",
    sampleSuggest: "The local police officer is refusing to record my file statement for a physical assault reporting.",
    statSymbol: "LALITA KUMARI RULE"
  },
  {
    id: "property-family",
    title: "Property & Family Law",
    description: "Tenant eviction legalities, land trespass protocols, partition, and mutual agreement forms.",
    iconName: "Home",
    sampleSuggest: "The landlord is threatening to throw my stuff out on the street tomorrow without a written termination letter.",
    statSymbol: "TRANSFER & LEASE CODES"
  },
  {
    id: "traffic-public",
    title: "Traffic & Public Law",
    description: "Public safety checklists, breathalyzer challenges, e-challan disputes, and licensing rights.",
    iconName: "Gauge",
    sampleSuggest: "I got a speeding e-challan in a zone where there was no Speed Boundary Signage on display.",
    statSymbol: "MV ACT SECTION 184"
  },
  {
    id: "case-analyzer",
    title: "AI Case Analyzer",
    description: "Detailed multipoint situational analyzer evaluating facts, evidence strengths, and core risks.",
    iconName: "Cpu",
    sampleSuggest: "Our vendor delivered defective medical machinery and refuses to refund our initial deposit citing a vague Force Majeure clause.",
    statSymbol: "CONTRACTS ACT SEC 56"
  }
];

export const TIMELINE_STAGES = [
  {
    stage: "01",
    title: "Incident Logging & Lock-down",
    timing: "Immediate (T + 0)",
    description: "Log detailed screenshots, transaction IDs, communication hashes, and environmental logs immediately. Zero physical tampering of evidence logs."
  },
  {
    stage: "02",
    title: "Zero-FIR / Initial Filing",
    timing: "Within 24 Hours",
    description: "Submit online telemetry or file a Zero-FIR at any police station. The jurisdiction must transfer the file automatically to the relevant command center."
  },
  {
    stage: "03",
    title: "Legal Intelligence Synthesis",
    timing: "Under 48 Hours",
    description: "Our AI Legal system evaluates potential sections, drafts a compliant action dossier, and compiles certified digital logs matching standard evidence law."
  },
  {
    stage: "04",
    title: "Investigation & Adjudication",
    timing: "Variable (Courts)",
    description: "Fast-track cyber crime tribunals or magistrate hearings summon evidence. Section lookup and fine schedules are finalized under criminal codes."
  }
];

export const RECENT_UPDATES = [
  {
    id: "u1",
    date: "MAY 18, 2026",
    tag: "NEW CRIMINAL CODE",
    title: "Implementation of Bharatiya Nyaya Sanhita (BNS)",
    text: "India’s major transition from IPC into the state-of-the-art BNS system is fully live, modernizing terms for cybercrime, terrorism, and community punishments."
  },
  {
    id: "u2",
    date: "APRIL 05, 2026",
    tag: "CYBER DEEPFAKES",
    title: "AI Synthetics & Deepfake Emergency Advisory",
    text: "A fast-track executive order classifies deliberate non-consensual deepfake creators under severe identity theft laws with instant 3-year jail penalties."
  },
  {
    id: "u3",
    date: "MARCH 12, 2026",
    tag: "E-COURTS",
    title: "Digital Personal Data Protection Act activated in E-courts",
    text: "Citizens can now directly file class complaints online against unauthorized telemetry harvesting with fines scaling up to $25 Million/₹250 Crores."
  }
];

export const EMERGENCY_CONTACTS: EmergencyContact[] = [
  {
    name: "National Cyber Crime Portal Helpline",
    number: "+91-1930",
    scope: "Financial fraud, phishing scam, hacked accounts or cyber terrorism."
  },
  {
    name: "Women Safety & Emergency Helpline",
    number: "+91-1091",
    scope: "Eve-teasing, physical danger, stalking, cyber abuse, or family violence."
  },
  {
    name: "Child Abuse Prevention Helpline (POCSO)",
    number: "+91-1098",
    scope: "Protection of minors, cyber protection for kids, emergency shelter."
  },
  {
    name: "National Legal Services Authority (NALSA)",
    number: "+91-15100",
    scope: "Free legal aid for eligible citizens, public defenders, and Lok Adalat advice."
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "What exactly is a 'Zero-FIR' and how does it safeguard me?",
    answer: "A Zero-FIR allows you to file a complaint at ANY police station in the country, regardless of where the incident occurred. The police must record it immediately, assign a serial number starting with '0', and transfer it to the jurisdictional station. Refusal is a severe disciplinary violation.",
    category: "Crime Filing"
  },
  {
    question: "What legal actions can I take if a police officer refuses to write my report?",
    answer: "You have several powerful safeguards: (1) Send the complaint in writing via registered post to the Superintendent of Police (under Section 154(3) of CrPC / new BNS code). (2) File a formal complaint directly before the Judicial Magistrate (Section 200). Refusal to log a cognizable crime violates the Supreme Court ruling in Lalita Kumari v. Govt of UP.",
    category: "Law Enforcement"
  },
  {
    question: "How do I secure digital screenshots or chat logs to stand in a court of law?",
    answer: "Physical prints are rarely enough. Ensure you: (1) Generate an SHA-256 blockchain or digital hash of critical files. (2) Secure a signed 65B Electronic Evidence Certificate stating the integrity of the device and source logs. (3) Keep backups of intact metadata without opening or rewriting the files.",
    category: "Cyber Forensics"
  },
  {
    question: "Are financial phishing scams refundable under legal banking regulations?",
    answer: "Under specialized central bank directives of zero liability, if you notify your bank of an unauthorized online transaction within 3 working days, your liability is zero, and the bank is legally required to reverse/reissue credited funds temporarily while investigating.",
    category: "Cyber Banking"
  }
];
