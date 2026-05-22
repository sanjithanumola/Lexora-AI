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

export const LOCAL_LEGAL_DATABASE: Record<string, any> = {
  cyber: {
    relevantSections: [
      {
        section: "Section 66D of Information Technology Act",
        title: "Punishment for Cheating by Personation using Computer Resource",
        explanation: "Applies to online identity theft, fake profiles, WhatsApp/social media scams, and phishing where someone impersonates another to cheat.",
        punishment: "Imprisonment of up to 3 years",
        fineAmount: "Up to ₹1,00,000 / $1,500",
        legalProtections: ["Protection against unauthorized digital profiling", "Right to immediate digital content blocking"]
      },
      {
        section: "Section 43 of IT Act",
        title: "Penalty and Compensation for Damage to Computer, Computer System, etc.",
        explanation: "Deals with unauthorized access, hacking, downloading/copying data without permission, or inserting viruses into digital systems.",
        punishment: "Civil liability for damages (payment of compensation directly to the victim)",
        fineAmount: "Full compensation for proven financial damage",
        legalProtections: ["Right to file claim before the cyber adjudicating officer"]
      }
    ],
    legalSteps: [
      "Secure screenshots, IP logs, email headers, and chat transcripts of the incident.",
      "Register a formal online complaint at the national Cyber Crime portal or your local Cyber Cell helpline.",
      "Notify your bank or credit agency immediately if financial assets or cards are compromised.",
      "Report and freeze the offensive account directly on the hosting application platform."
    ],
    recommendedActions: [
      "Do NOT delete any chats, call logs, or evidence; keep digital copies on an offline drive.",
      "Change all master credentials immediately and enroll in secure Multi-Factor Authentication (MFA).",
      "Draft a digital compromise report and submit it through the online FIR assistant."
    ],
    safetyTips: [
      "Never reveal One-Time Passwords (OTPs), private banking URLs, or personal tokens over communication calls.",
      "Verify domains and SSL certificates before entering login credentials in browser fields."
    ],
    caseSummary: "CYBER COMPROMISE DETECTED: The situation involves potential digital identity fraud, hacking, or online deception. Electronic evidence must be frozen immediately to secure prosecution."
  },
  theft: {
    relevantSections: [
      {
        section: "Section 378 & 379 of IPC / BNS standard",
        title: "Theft & Punishment for Theft",
        explanation: "Moving movable property out of the possession of any person without that person's consent with dishonest intent.",
        punishment: "Imprisonment of up to 3 years",
        fineAmount: "Discretionary fine based on goods value",
        legalProtections: ["Right to recovery of stolen goods through court superdari process", "Presumption of innocence until guilt proven"]
      }
    ],
    legalSteps: [
      "Visit the jurisdiction police station immediately to file an First Information Report (FIR).",
      "Attach physical proof of ownership, serial numbers, photographs, or invoice records of the stolen items.",
      "Obtain an official copy of the signed and stamped FIR from the Officer-in-Charge free of cost."
    ],
    recommendedActions: [
      "Inquire with nearby properties to locate working CCTV footage that may have recorded the incident.",
      "Submit the FIR copy immediately to your insurance carrier to initiate a property claim flow."
    ],
    safetyTips: [
      "Keep digital backups of serial keys and legal purchase invoices secured in your cloud storage vaults.",
      "Avoid disclosing travel logs or long-term absence parameters publicly on social feeds."
    ],
    caseSummary: "THEFT OF PROPERTY: Moving physical goods without authorized consent constitutes Theft. Establishing a chronological timeline and getting a signed police FIR is critically urgent."
  },
  harassment: {
    relevantSections: [
      {
        section: "Section 354D of IPC / BNS Code 78",
        title: "Stalking (Physical or Electronic)",
        explanation: "Following a woman, contacting or attempting to contact her to foster personal interaction repeatedly despite a clear indication of disinterest, or monitoring her internet usage.",
        punishment: "Imprisonment of up to 3 years (first conviction) or 1 to 5 years (subsequent)",
        fineAmount: "Applicable court fine",
        legalProtections: ["Right to absolute digital privacy", "Protection of identity in cyber harassment cases", "Right to file FIR through a female police officer"]
      },
      {
        section: "Section 509 of IPC",
        title: "Word, gesture or act intended to insult the modesty of a woman",
        explanation: "Uttering any word, making any sound or gesture, or exhibiting any object, intending that such word/sound is heard or gesture seen by a woman to insult modesty.",
        punishment: "Simple imprisonment of up to 3 years",
        fineAmount: "Judicial fine",
        legalProtections: ["Protection against hostile public or professional working spaces"]
      }
    ],
    legalSteps: [
      "Document the times, locations, words, or digital messages. Take secure screenshots immediately.",
      "You have the absolute right to register a Zero FIR at any police station, regardless of territorial jurisdiction.",
      "Submit a formal complaint to the National Commission for Women (NCW) or specialized Cyber Cells."
    ],
    recommendedActions: [
      "Involve a trusted guardian, workplace internal compliance officer, or specialized legal counsel.",
      "Immediately change privacy settings to prevent public tracing or cyber monitoring of online posts."
    ],
    safetyTips: [
      "Utilize emergency speed-dial links or safety alert apps. Keep national women safety helpline numbers active.",
      "Be vigilant about sharing real-time location tagging markers on digital social media dashboards."
    ],
    caseSummary: "INTIMIDATION & HARASSMENT DETECTED: This issue represents a threat to personal peace, dignity, or electronic safety. Law guarantees fast-track protection pathways and immediate police intervention."
  },
  traffic: {
    relevantSections: [
      {
        section: "Section 184 of Motor Vehicles (Amendment) Act",
        title: "Punishment for Dangerous Driving",
        explanation: "Driving a vehicle at a speed or in a manner containing danger to the public, taking into account traffic, geographical curves, and environmental status.",
        punishment: "Imprisonment from 6 months up to 1 year, or suspension of operator license",
        fineAmount: "₹1,000 to ₹5,000 depending on repeat counts",
        legalProtections: ["Right to demand a certified device-calibration report when speed-guns are used", "Right to a formal court hearing rather than immediate guilt admission"]
      },
      {
        section: "Section 185 of Motor Vehicles Act",
        title: "Driving by a Drunken Person or Under the Influence of Drugs",
        explanation: "Operating a motor vehicle while active blood alcohol level exceeds 30mg per 100ml of blood as detected by breath analyzer.",
        punishment: "Imprisonment of up to 6 months (first offence), up to 2 years (subsequent)",
        fineAmount: "₹10,000 (first offence) or ₹15,000 (subsequent)",
        legalProtections: ["Right to check breathalyzer sanitation status", "Right to request medical blood-draw validation within 2 hours"]
      }
    ],
    legalSteps: [
      "Examine the official digital challan or notice for correct license plate number and visual accuracy.",
      "Pay through the authenticated Government cyber portal, or choose to contest it in the specialized traffic court."
    ],
    recommendedActions: [
      "Keep high-resolution photographic logs of the physical signages and traffic environment if cited unfairly.",
      "Keep a clean certified digital copy of the license, tax insurance receipt, and emission test records on your device."
    ],
    safetyTips: [
      "Always verify dashcam telemetry and install clean recording hardware to safeguard your driving logs.",
      "Never pay cash fines directly to street officers without demanding a printed computer-generated e-challan receipt."
    ],
    caseSummary: "VEHICULAR LAW ASSESSMENT: Moving violations and safety citations are strictly regulated by transit codes. Evidence audits play a vital role in contesting discrepancies."
  },
  property: {
    relevantSections: [
      {
        section: "Section 441 & 447 of Criminal Code / IPC",
        title: "Criminal Trespass & Penalty",
        explanation: "Entering into or upon property in the possession of another with intent to commit an offence or to intimidate, insult or annoy.",
        punishment: "Imprisonment of up to 3 months",
        fineAmount: "₹500 / Court-declared penalty",
        legalProtections: ["Right to clean quiet enjoyment of lease premises", "Protection against illegal forceful eviction without due litigation flow"]
      }
    ],
    legalSteps: [
      "Collate copy of registered deeds, sales contracts, lease papers, tax receipts, or mutation records.",
      "Serve a formal written Legal Notice signed by an advocate to the contesting party.",
      "File for a Permanent Injunction or recovery of possession in the competent civil court."
    ],
    recommendedActions: [
      "Avoid engaging in loud physical confrontations; set up clear secure boundaries around your boundaries.",
      "File a police complaint immediately for criminal trespass if locks are broken or boundaries are crossed unlawfully."
    ],
    safetyTips: [
      "Always run comprehensive legal title searches at the registrar office before transferring financial purchase tokens.",
      "Never accept loose verbal promises for rental extensions; always formalize registered written agreements."
    ],
    caseSummary: "PROPERTY DISPUTE: Real estate and residential tenancy are bound strictly to statutory registrations. Forceful entry or possession altering is illegal."
  },
  contracts: {
    relevantSections: [
      {
        section: "Section 56 & 73 of Indian Contract Act, 1872",
        title: "Frustration of Agreement & Failure to Refund/Perform",
        explanation: "Applies to business agreements where a commercial vendor breaks their commitment or wrongfully claims a Force Majeure block to pocket your security deposits.",
        punishment: "Civil restitution and damages, or Court specific performance orders",
        fineAmount: "Full liability for financial damages & judicial costs incurred",
        legalProtections: ["Right to instant rescission of contract", "Right to restitution of advanced tokens under Section 64"]
      }
    ],
    legalSteps: [
      "Retrieve the original signed agreement and tag exact breach clauses and refund milestones.",
      "Serve an official written demand notice (giving 15 days cure window) for full refund of deposit sums.",
      "File a consumer dispute petition or commercial summary lawsuit for fast recovery of funds."
    ],
    recommendedActions: [
      "Do NOT proceed with loose verbal agreements; archive all correspondence, emails, and bills.",
      "Formally notify the counterparty of breach in writing so it acts as an unshakeable statutory timeline marker."
    ],
    safetyTips: [
      "Always verify arbitration parameters and restrict Force Majeure triggers to acts of God in agreements.",
      "Never execute cash transfers without a formal computerized bank transaction ID and stamped advance receipt."
    ],
    caseSummary: "CONTRACT BREACH DETECTED: A partner or business vendor is defaulting on performance or withholding funds. Contractual remedies with advocacy-certified notice must be initiated."
  },
  corporate: {
    relevantSections: [
      {
        section: "Section 405 & 406 of IPC / BNS standard",
        title: "Criminal Breach of Trust (Embezzlement)",
        explanation: "When an active business partner, executive, or employee dishonestly misappropriates company funds or corporate assets entrusted to them for personal gain.",
        punishment: "Imprisonment of up to 3 years",
        fineAmount: "Restitution of full diverted sum as assessed by authorities",
        legalProtections: ["Right to demand freeze of accounts and business inventory", "Right to file an audit motion under Company laws"]
      }
    ],
    legalSteps: [
      "Conduct a professional forensic account review or retrieve unauthorized bank transfer logs.",
      "Summon an extraordinary board meet to officially freeze the partner's administrative authorizations.",
      "File a criminal complaint for Criminal Breach of Trust at your city economic offenses desk."
    ],
    recommendedActions: [
      "Revoke all shared cryptographic keys, API access patterns, and server control panels.",
      "Securely back up multi-year audit logs and company accounting ledgers into safe storage directories."
    ],
    safetyTips: [
      "Never assign sole unchecked bank drawer access; enforce double-signature procedures for all corporate debits.",
      "Ensure regular external neutral audit evaluations of accounting metrics and asset registers."
    ],
    caseSummary: "CORPORATE EMBEZZLEMENT DETECTED: Internal corporate funds have been diverted without authorization. This warrants urgent civil recovery actions and criminal breach filings."
  },
  defamation: {
    relevantSections: [
      {
        section: "Section 499 & 500 of IPC / BNS standard",
        title: "Defamation and Public Modesty Injury",
        explanation: "When someone shares false, malicious, or derogatory statements either physically, verbally, or via social channels to damage your social or professional status.",
        punishment: "Simple imprisonment of up to 2 years",
        fineAmount: "Discretionary court-declared fine or civil damages limit",
        legalProtections: ["Right to demand instant takedown of libelous materials", "Right to compensatory civil suit for character assessment"]
      }
    ],
    legalSteps: [
      "Identify the exact defamatory statements. Capture secure high-resolution screenshots with timestamps.",
      "Serve a formal legal cease-and-desist notice demanding an unconditional digital apology in 48 hours.",
      "File a criminal defamation lawsuit or register a cyber complaint for public character assassination."
    ],
    recommendedActions: [
      "Do NOT reply using aggressive language; maintain quiet documentation of spreading threads.",
      "Request intermediate hosting platforms to freeze or hide high-toxicity threads immediately."
    ],
    safetyTips: [
      "Limit public exposure of sensitive communication parameters across open community indexes.",
      "Register an online report to isolate toxic digital harassment patterns before they escalate."
    ],
    caseSummary: "PUBLIC DEFAMATION DETECTED: False public rumors or text statements have targeted your reputation. Immediate formal notices and cyber takedown requests must be issued."
  },
  violence: {
    relevantSections: [
      {
        section: "Section 323 & 352 of IPC / BNS standard",
        title: "Criminal Force and Voluntarily Causing Hurt",
        explanation: "Using physical violence, assault, force, or throwing objects to cause corporal pain, injury, or threat of bodily danger without provocation.",
        punishment: "Imprisonment of up to 1 year",
        fineAmount: "₹1,000 to ₹5,000 or full medical cost reimbursement",
        legalProtections: ["Right to self-defense under Section 96-106 of the penal code", "Right to instant medical evaluation and police protection"]
      }
    ],
    legalSteps: [
      "Visit an emergency civil hospital immediately to secure a formal Medico-Legal Report (MLR).",
      "File an FIR for physical assault at the nearest station. Request an official physical stamp on your copy.",
      "Request surrounding businesses or witnesses to preserve any CCTV record of the violent incident."
    ],
    recommendedActions: [
      "Identify and list exact bodily injuries in the first statement; get police protection if threat remains active.",
      "Do NOT attempt to take law into your own hands; let the certified state authorities manage the arrest trail."
    ],
    safetyTips: [
      "Keep speed-dial codes active. Memorize paths to highly populated public avenues if followed.",
      "Document aggressive patterns early before friction points escalate into physical assault."
    ],
    caseSummary: "PHYSICAL VIOLENCE REPORTED: An incident involving physical hurt, battery, or threat of assault has occurred. Medical and FIR records must be synchronized immediately."
  },
  default: {
    relevantSections: [
      {
        section: "Section 420 of IPC / BNS Section 318",
        title: "Cheating and Dishonestly Inducing Delivery of Property",
        explanation: "Simple cheating, fraudulent misrepresentation, or deceitful tactics to induce any person to deliver property or make/destroy valuable securities.",
        punishment: "Imprisonment of up to 7 years",
        fineAmount: "Financial restitution or fine determined by court",
        legalProtections: ["Right to bail under reasonable terms", "Protection of fundamental civil freedoms during investigations"]
      }
    ],
    legalSteps: [
      "Consult a registered attorney or public defender immediately to map local state rules.",
      "Collect all written agreements, invoices, text logs, and payment transfers.",
      "Draft a neat chronologically styled legal statement of fact for the official complaint dossier."
    ],
    recommendedActions: [
      "Never sign documents or liability releases under duress or without expert neutral legal supervision.",
      "Register an online portal petition or a notice of dispute to formalize the timeline of conflict."
    ],
    safetyTips: [
      "Review terms of services, end-user licensing policies, and contract clauses thoroughly before locking agreements.",
      "Always maintain strict compliance records and transparent written receipts of financial operations."
    ],
    caseSummary: "GENERAL JURIDICAL EVALUATION: The matter touches upon potential breach of trust, contractual deception, or civil friction. Methodical paperwork remains your prime legal anchor."
  }
};

