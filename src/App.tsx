import React, { useState, useEffect, useRef } from 'react';
import { 
  ShieldAlert, 
  HeartPulse, 
  Search, 
  Scale, 
  FileText, 
  Home, 
  Gauge, 
  Cpu, 
  AlertTriangle, 
  Gavel, 
  ChevronRight, 
  Sparkles, 
  BookOpen, 
  Phone, 
  Info, 
  ExternalLink, 
  Lock, 
  UserCheck, 
  RefreshCw, 
  FileSpreadsheet, 
  Download, 
  AlertCircle,
  HelpCircle,
  ArrowRight,
  Fingerprint,
  TrendingUp,
  Sliders,
  Bell,
  Terminal,
  Printer,
  Share2
} from 'lucide-react';
import { MAIN_CATEGORIES, TIMELINE_STAGES, RECENT_UPDATES, EMERGENCY_CONTACTS, FAQS } from './data';
import { LegalAnalysisResult, LawSection } from './types';

// Ambient particle helper coordinates
const ACCENT_GLOW_COLORS = {
  blue: 'shadow-[0_0_15px_rgba(59,130,246,0.5)] border-blue-500/50',
  indigo: 'shadow-[0_0_15px_rgba(99,102,241,0.5)] border-indigo-500/50',
  cyan: 'shadow-[0_0_15px_rgba(6,182,212,0.5)] border-cyan-500/50',
  gold: 'shadow-[0_0_15px_rgba(245,158,11,0.5)] border-amber-500/50',
};

export default function App() {
  // Input states
  const [situation, setSituation] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('cyber');
  const [analyzing, setAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<LegalAnalysisResult | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  // Interactive UX states
  const [activeTab, setActiveTab] = useState<'analyzer' | 'stats' | 'updates'>('analyzer');
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [customLawSearch, setCustomLawSearch] = useState('');
  const [riskAssessmentScore, setRiskAssessmentScore] = useState<number>(15);
  const [simulatedLawLevel, setSimulatedLawLevel] = useState('CRIMINAL CODE v1.08');
  const [currentTime, setCurrentTime] = useState('2026-05-21 05:23:10');
  const [activeSystemLog, setActiveSystemLog] = useState<string>('SYS_CORE: Law Grid standing by... Ready for assessment query.');
  
  // Ref for results auto-scrolling
  const resultsRef = useRef<HTMLDivElement>(null);

  // Live clock emulation starting at user dynamic timestamp
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      // Emulating the continuous flow from the system time
      setCurrentTime(now.toUTCString().replace('GMT', 'UTC'));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSuggestClick = (sampleText: string, categoryId: string) => {
    setSituation(sampleText);
    setSelectedCategory(categoryId);
    // Print beautiful terminal feedback log
    setActiveSystemLog(`SYS_EVENT: Input pre-filled with [${categoryId.toUpperCase()}] telemetry template.`);
  };

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!situation.trim()) {
      setErrorMessage("Please input a valid legal issue descriptor in the neural command field.");
      return;
    }

    setAnalyzing(true);
    setErrorMessage(null);
    setAnalysisResult(null);
    setActiveSystemLog(`SYS_PROCESS: Triggering Deep Neural Legal Analyzer for Category [${selectedCategory.toUpperCase()}]...`);

    // Simulate risk telemetry metrics randomizer for cool visual change
    const estimatedRisk = Math.floor(Math.random() * 60) + 35; 
    setRiskAssessmentScore(estimatedRisk);

    try {
      const response = await fetch('/api/analyze-case', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          situation: situation.trim(),
          category: selectedCategory
        }),
      });

      if (!response.ok) {
        throw new Error(`Cyber server returned bad diagnostic exit code: ${response.status}`);
      }

      const data: LegalAnalysisResult = await response.json();
      setAnalysisResult(data);
      setActiveSystemLog(`SYS_COMPLETE: Legal dossier synthesis finished. Matched ${data.relevantSections?.length || 0} statutory nodes.`);
      
      // Smooth scroll to output display with short delay for cinematic feeling
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);

    } catch (err: any) {
      console.error(err);
      setErrorMessage(err.message || "An unexpected error disrupted the cyber-legal link stream.");
      setActiveSystemLog(`SYS_ERROR: Case analysis breakdown. Falling back to diagnostic modules.`);
    } finally {
      setAnalyzing(false);
    }
  };

  // Quick helper to choose correct icon based on dynamic name
  const renderCategoryIcon = (iconName: string, className = "w-6 h-6") => {
    switch (iconName) {
      case 'ShieldAlert': return <ShieldAlert className={className} />;
      case 'HeartPulse': return <HeartPulse className={className} />;
      case 'SearchCode': return <Search className={className} />;
      case 'Scale': return <Scale className={className} />;
      case 'FileSpreadsheet': return <FileSpreadsheet className={className} />;
      case 'Home': return <Home className={className} />;
      case 'Gauge': return <Gauge className={className} />;
      case 'Cpu': return <Cpu className={className} />;
      default: return <Gavel className={className} />;
    }
  };

  // Print raw page layout for download mimicking official file extraction
  const printDossier = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden relative">
      
      {/* GLOWING AMBIENT BACKGROUND & DIGITAL GRID EFFECTS */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-950/20 via-slate-950 to-black pointer-events-none z-0" />
      
      {/* Sci-Fi Grid Overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#030712_1px,transparent_1px),linear-gradient(to_bottom,#030712_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-40 z-0"
      />

      {/* Futuristic Floating Digital Stream (Aesthetic only - no human images) */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-80 h-80 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-[20%] w-[500px] h-[500px] bg-amber-500/[0.03] rounded-full blur-[150px] pointer-events-none" />

      {/* LEXORA AI BRAND HEADER */}
      <header className="border-b border-blue-950/50 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-gradient-to-br from-blue-950 to-slate-900 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
              <Scale className="w-8 h-8 text-cyan-400 animate-pulse" />
            </div>
            <div>
              <div className="font-mono text-xs tracking-[0.3em] text-slate-400 uppercase">Neural Intelligence Interface</div>
              <h1 className="text-xl md:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                Lexora AI <span className="text-xs px-2 py-0.5 rounded bg-blue-950 text-cyan-400 font-mono border border-cyan-500/20 uppercase tracking-widest">Law Dashboard</span>
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => {
                setActiveTab('analyzer');
                document.getElementById('analyzer-interface')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-300 ${activeTab === 'analyzer' ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-500/40' : 'text-slate-400 hover:text-white'}`}
            >
              /CASE-ANALYSIS
            </button>
            <button 
              onClick={() => {
                setActiveTab('stats');
                document.getElementById('timeline-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-300 ${activeTab === 'stats' ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-500/40' : 'text-slate-400 hover:text-white'}`}
            >
              /TIMELINE
            </button>
            <button 
              onClick={() => {
                setActiveTab('updates');
                document.getElementById('updates-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-all duration-300 ${activeTab === 'updates' ? 'bg-cyan-950/40 text-cyan-400 border border-cyan-500/40' : 'text-slate-400 hover:text-white'}`}
            >
              /UPDATES
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 relative z-10">

        {/* HERO SECTION WITH DYNAMIC ABSTRACT COURT PILLARS & STATUE AESTHETICS */}
        <section className="mb-16 text-center relative pt-4 pb-8">
          
          {/* Cyber court pillars / scale graphic absolute ambient render to fully capture Cyber Law style */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-72 pointer-events-none opacity-[0.06] select-none flex items-center justify-between">
            {/* Left Court Pillar SVG */}
            <svg viewBox="0 0 100 200" className="h-full stroke-cyan-400 fill-none stroke-[0.8]" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10,190 L 90,190 M 20,190 L 20,30 M 80,190 L 80,30 M 35,190 L 35,30 M 65,190 L 65,30 M 50,190 L 50,30 M 10,30 L 90,30 M 15,30 L 50,5 L 85,30" />
            </svg>
            
            {/* Centered Large Cyber Scale of Justice */}
            <svg viewBox="0 0 200 200" className="h-full stroke-cyan-400 fill-none stroke-[0.6] animate-pulse" xmlns="http://www.w3.org/2000/svg">
              {/* Stand */}
              <path d="M 100,20 L 100,180 M 60,180 Z M 50,180 L 150,180 M 80,180 L 120,170" />
              {/* Beam */}
              <path d="M 40,55 L 160,55" />
              {/* Left Pan */}
              <path d="M 40,55 L 25,120 L 55,120 Z M 25,120 L 55,120 M 40,120 L 40,150" />
              {/* Right Pan */}
              <path d="M 160,55 L 145,120 L 175,120 Z M 145,120 L 175,120 M 160,120 L 160,150" />
              <circle cx="100" cy="55" r="4" fill="cyan" />
            </svg>

            {/* Right Court Pillar SVG */}
            <svg viewBox="0 0 100 200" className="h-full stroke-cyan-400 fill-none stroke-[0.8]" xmlns="http://www.w3.org/2000/svg">
              <path d="M 10,190 L 90,190 M 20,190 L 20,30 M 80,190 L 80,30 M 35,190 L 35,30 M 65,190 L 65,30 M 50,190 L 50,30 M 10,30 L 90,30 M 15,30 L 50,5 L 85,30" />
            </svg>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            {/* Visual badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/50 border border-blue-500/30 text-xs text-blue-300 font-mono mb-6 backdrop-blur">
              <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
              <span>DECISION ENGINE-v3.5 ENABLED</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-cyan-400 leading-tight tracking-tight uppercase">
              Cybernetic Legal Force
            </h2>
            <p className="text-slate-400 mt-4 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Unveil applicable laws, penalties, court guides, and emergency defenses immediately. Fast, intelligent synthesis based on codifications mapped to state parameters.
            </p>

            {/* QUICK STATS HUD COMPONENT */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto font-mono text-left">
              <div className="bg-slate-950/40 p-3 rounded border border-blue-950/60 backdrop-blur-sm">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Active Guard Protocols</div>
                <div className="text-lg font-bold text-slate-200">24/7 Digital Desk</div>
                <div className="text-[9px] text-yellow-400/80">Zero delay telemetry</div>
              </div>
              <div className="bg-slate-950/40 p-3 rounded border border-blue-950/60 backdrop-blur-sm">
                <div className="text-[10px] text-slate-500 uppercase tracking-widest">Secure Privacy Link</div>
                <div className="text-lg font-bold text-slate-200">End-to-End Enc</div>
                <div className="text-[9px] text-blue-400">Zero persistent client history</div>
              </div>
            </div>
          </div>
        </section>

        {/* NEURAL COMMAND INPUT SECTION (ACTIVE AI INTERFACE) */}
        <section id="analyzer-interface" className="mb-16 max-w-4xl mx-auto scroll-mt-24">
          <div className="bg-slate-950/80 border border-blue-900/40 rounded-xl p-6 relative overflow-hidden shadow-2xl backdrop-blur-md">
            
            {/* Ambient indicator lights */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <div className="absolute top-4 right-4 flex items-center gap-1.5 font-mono text-[10px] text-slate-500">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>COGNITIVE LAYER ACTIVE</span>
            </div>

            {/* Grid background on analyzer block */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c1d33_1px,transparent_1px),linear-gradient(to_bottom,#0c1d33_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Gavel className="w-5 h-5 text-cyan-400" />
                <h3 className="font-mono text-xs tracking-wider uppercase text-slate-300">
                  CRIMINAL / CIVIL COGNITIVE SEARCH MATRIX
                </h3>
              </div>

              <form onSubmit={handleAnalyze} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2">
                    Specify Legal Incident Domain Model:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {MAIN_CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setSelectedCategory(cat.id);
                          setActiveSystemLog(`SYS_EVENT: Category altered to [${cat.title.toUpperCase()}]`);
                        }}
                        className={`px-3 py-2 text-left rounded text-xs font-mono transition-all duration-300 border ${
                          selectedCategory === cat.id 
                            ? 'bg-blue-950/50 border-cyan-500/80 text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]'
                            : 'bg-black/40 border-slate-900 text-slate-400 hover:border-slate-800 hover:text-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 mb-1 font-semibold">
                          {renderCategoryIcon(cat.iconName, "w-4 h-4 shrink-0")}
                          <span>{cat.title}</span>
                        </div>
                        <div className="text-[9px] text-slate-500 truncate">{cat.statSymbol || 'UNIFIED STATUTES'}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="incident-telemetry" className="block text-xs font-mono text-slate-400 uppercase tracking-widest mb-2 flex justify-between items-center">
                    <span>Describe your situation to know the legal section, punishment, and possible solution:</span>
                    <span className="text-[10px] text-cyan-500 lowercase">natural language parsing enabled</span>
                  </label>
                  <div className="relative">
                    <textarea
                      id="incident-telemetry"
                      value={situation}
                      onChange={(e) => setSituation(e.target.value)}
                      placeholder="e.g. Someone is blackjacking my computer files and demanding 3 Bitcoin to restore access, or state your customized issue..."
                      rows={4}
                      className="w-full bg-black/60 border border-slate-800 rounded-lg p-4 font-mono text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-500/80 focus:ring-1 focus:ring-cyan-500/40 focus:bg-slate-950/70 transition-all duration-300"
                    />
                    
                    {/* Visual search indicators */}
                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                      <span className="text-[9px] text-slate-600 font-mono">CHARS: {situation.length}</span>
                    </div>
                  </div>
                </div>

                {errorMessage && (
                  <div className="p-3 bg-red-950/40 border border-red-500/30 rounded text-xs text-red-300 font-mono flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2">
                  <div className="text-[11px] text-slate-500 font-mono">
                    🚨 Warning: Submissions evaluated anonymously. Standard legal disclaimers apply.
                  </div>
                  
                  <button
                    type="submit"
                    disabled={analyzing}
                    className="relative overflow-hidden group bg-gradient-to-r from-blue-900 to-cyan-700 hover:from-blue-850 hover:to-cyan-600 active:from-blue-950 active:to-cyan-800 text-white font-mono font-bold text-xs py-3 px-6 rounded-lg tracking-wider uppercase border border-cyan-400/30 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(6,182,212,0.25)] hover:shadow-[0_4px_25px_rgba(6,182,212,0.4)] disabled:opacity-50 shrink-0"
                  >
                    {analyzing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>PROCESSING TELEMETRY...</span>
                      </>
                    ) : (
                      <>
                        <Cpu className="w-4 h-4 animate-pulse text-cyan-300" />
                        <span>EXECUTE NEURAL SEARCH</span>
                      </>
                    )}
                    {/* Glowing scanning highlight effect */}
                    <div className="absolute inset-x-0 top-0 h-[1px] bg-cyan-300/40 animate-pulse" />
                  </button>
                </div>
              </form>

              {/* QUICK TELEMETRY CHIPS */}
              <div className="mt-8 border-t border-slate-900 pt-4">
                <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 uppercase tracking-widest mb-2">
                  <Fingerprint className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Interactive Quick-Launch Scenarios:</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {MAIN_CATEGORIES.map((cat) => (
                    <button
                      key={`suggest-${cat.id}`}
                      onClick={() => handleSuggestClick(cat.sampleSuggest, cat.id)}
                      className="text-left py-2 px-3 bg-slate-950 border border-slate-900 hover:border-blue-950 hover:bg-black text-xs rounded transition-all flex items-start gap-2.5 duration-200 group"
                    >
                      <span className="p-1 rounded bg-slate-900 text-slate-500 group-hover:text-cyan-400 group-hover:bg-slate-950 shrink-0 transition-all">
                        {renderCategoryIcon(cat.iconName, "w-3.5 h-3.5")}
                      </span>
                      <div className="truncate">
                        <div className="text-[10px] text-slate-400 group-hover:text-slate-200 font-mono transition-all font-semibold">{cat.title} template</div>
                        <div className="text-[9px] text-slate-600 group-hover:text-slate-400 truncate mt-0.5">{cat.sampleSuggest}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* AI OUTPUT REPORT CARD (HOLOGRAPHIC DASHBOARD DISPLAY) */}
        <section ref={resultsRef} className="max-w-4xl mx-auto mb-16 scroll-mt-24">
          
          {/* Output state: Analyzing Loading Sandbox */}
          {analyzing && (
            <div className="bg-slate-950/60 border border-cyan-500/20 rounded-xl p-12 text-center relative overflow-hidden backdrop-blur-md">
              <div className="absolute inset-0 bg-cyber-scanning pointer-events-none opacity-20" />
              <div className="relative z-10 max-w-sm mx-auto flex flex-col items-center">
                <div className="relative w-20 h-20 mb-6">
                  {/* Glowing rotating gears and scaling scales */}
                  <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/40 animate-spin" />
                  <div className="absolute inset-3 rounded-full border border-double border-blue-500/30 animate-pulse" />
                  <Scale className="absolute inset-0 m-auto w-8 h-8 text-cyan-400" />
                </div>
                
                <h4 className="font-mono text-sm uppercase tracking-widest text-cyan-300">
                  Securing Statutes
                </h4>
                <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden mt-4 border border-blue-950">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full w-3/4 animate-pulse rounded-full" />
                </div>
                
                <p className="text-slate-500 font-mono text-[10px] uppercase mt-3">
                  Iterating IPC / BNS / Cyber law arrays. Compiling steps...
                </p>
              </div>
            </div>
          )}

          {/* Output state: Done Analysis Results */}
          {!analyzing && analysisResult && (
            <div className="bg-gradient-to-b from-slate-950 via-slate-950 to-black border-2 border-cyan-500/40 rounded-xl overflow-hidden shadow-[0_0_35px_rgba(6,182,212,0.15)] relative">
              
              {/* Scanline Effect */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-cyan-400/80 animate-scan pointer-events-none z-20" />
              
              {/* Watermark Logo */}
              <div className="absolute bottom-6 right-6 opacity-[0.03] pointer-events-none select-none">
                <Scale className="w-72 h-72 text-cyan-400" />
              </div>

              {/* Dossier Top Banner */}
              <div className="bg-gradient-to-r from-blue-950/80 via-slate-900 to-blue-950/80 p-4 border-b border-cyan-500/30 flex flex-wrap items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] shrink-0" />
                  <span className="font-black text-slate-200 tracking-wider">CYBER LEGAL AUDIT REPORT &bull; ACTIVE EVAL</span>
                </div>
                <div className="flex items-center gap-3 mt-2 sm:mt-0 text-slate-400">
                  <span>RISK METRIC: <strong className="text-cyan-400">{riskAssessmentScore}%</strong></span>
                  <span>FALLBACK: <strong className={analysisResult.isFallback ? 'text-yellow-400' : 'text-emerald-400'}>{analysisResult.isFallback ? 'YES (LOCAL ARCHIVE)' : 'NO (AI DYNAMIC)'}</strong></span>
                  <button 
                    onClick={printDossier}
                    title="Print certified legal summary dossier to local storage"
                    className="p-1 px-2 rounded bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white flex items-center gap-1 transition-all"
                  >
                    <Printer className="w-3.5 h-3.5 text-cyan-400" />
                    <span>PRINT DOSSIER</span>
                  </button>
                </div>
              </div>

              {/* Dossier Body Content */}
              <div className="p-6 md:p-8 space-y-8">
                
                {/* 1. COMPREHENSIVE CASE DIAGNOSIS CHIP */}
                <div className="p-4 bg-slate-950 border-l-4 border-cyan-500 rounded-r relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-1 bg-cyan-950/50 text-[9px] text-cyan-400 font-mono tracking-wider">SECURE SYNOPSIS</div>
                  <h4 className="font-mono text-xs uppercase text-slate-400 tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400 animate-pulse" />
                    SYNTHESIZED CASE PROFILE SUMMARY
                  </h4>
                  <p className="text-sm font-sans text-slate-200 leading-relaxed italic pr-4">
                    "{analysisResult.caseSummary || 'Analysis complete. Case profiles processed matching codification rules.'}"
                  </p>
                </div>

                {/* 2. RELEVANT LAWS AND STATUTES (THE BULK) */}
                <div>
                  <h4 className="font-mono text-xs uppercase text-slate-400 tracking-widest mb-4 flex items-center gap-2">
                    <Gavel className="w-4 h-4 text-cyan-400" />
                    PROVISIONAL CRIMINAL & CIVIL STATUTORY MATCHES
                  </h4>
                  
                  <div className="space-y-4">
                    {analysisResult.relevantSections && analysisResult.relevantSections.length > 0 ? (
                      analysisResult.relevantSections.map((sec: LawSection, idx: number) => (
                        <div key={`sec-${idx}`} className="bg-gradient-to-r from-slate-950 to-slate-900/40 p-5 rounded-lg border border-blue-950 shadow-inner relative group hover:border-cyan-500/20 transition-all duration-300">
                          
                          {/* Accent Gold Border */}
                          <div className="absolute top-0 left-0 bottom-0 w-1 bg-gradient-to-b from-yellow-500 via-yellow-600 to-transparent" />
                          
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3 pl-2">
                            <div>
                              <span className="px-2 py-0.5 rounded bg-amber-950/70 text-yellow-500 text-[10px] font-mono font-bold tracking-wider border border-amber-500/10 uppercase">
                                {sec.section}
                              </span>
                              <h5 className="text-base font-black text-slate-100 tracking-tight mt-1.5">
                                {sec.title}
                              </h5>
                            </div>

                            <div className="text-right shrink-0">
                              <div className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">Simulated Fine Metric</div>
                              <span className="text-sm font-mono font-bold text-yellow-500">{sec.fineAmount || 'Court discretion'}</span>
                            </div>
                          </div>

                          <p className="text-xs text-slate-400 pl-2 leading-relaxed mb-4 leading-normal">
                            <strong className="text-slate-300 font-mono">Simplified Clarification: </strong> {sec.explanation}
                          </p>

                          {/* Stat Grid within section */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-2 pt-3 border-t border-slate-900/60 text-xs">
                            <div>
                              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider block mb-1">PROSECUTION RANGE (PUNISHMENT)</span>
                              <div className="font-sans font-bold text-slate-200 text-xs py-1.5 px-2 rounded bg-slate-950 border border-slate-900 flex items-center gap-2">
                                <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                                <span>{sec.punishment || 'Subject to judicial ruling'}</span>
                              </div>
                            </div>

                            <div>
                              <span className="text-[10px] text-slate-400 font-mono uppercase tracking-wider block mb-1">CONSTITUTIONAL & STATUTORY SAFEGUARDS</span>
                              <div className="space-y-1">
                                {sec.legalProtections && sec.legalProtections.length > 0 ? (
                                  sec.legalProtections.map((prot, pIdx) => (
                                    <div key={`prot-${pIdx}`} className="text-[11px] text-emerald-400 font-sans flex items-start gap-1">
                                      <span className="text-emerald-500 shrink-0 select-none">&bull;</span>
                                      <span>{prot}</span>
                                    </div>
                                  ))
                                ) : (
                                  <div className="text-[11px] text-slate-500 italic">No specific sub-clauses returned. Standard constitutional remedies apply.</div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-slate-500 italic text-xs font-mono">No specific section overrides triggered. Proceeding under default cyber code statutes.</div>
                    )}
                  </div>
                </div>

                {/* 3. STEP-BY-STEP RECIPROCITY ACTION PROTOCOLS (LEGAL STEPS, RECOMMENDATIONS, & SAFETY KEYS) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-900">
                  
                  {/* Recommended Legal Procedural Actions */}
                  <div className="space-y-4">
                    <h5 className="font-mono text-xs uppercase text-slate-300 tracking-wider flex items-center gap-2">
                      <span className="p-1 rounded bg-blue-950 text-cyan-400"><FileText className="w-3.5 h-3.5" /></span>
                      CHRONOLOGICAL LODGING PROCEDURES
                    </h5>
                    <div className="space-y-2">
                      {analysisResult.legalSteps && analysisResult.legalSteps.length > 0 ? (
                        analysisResult.legalSteps.map((step, sIdx) => (
                          <div key={`step-${sIdx}`} className="flex gap-2 text-xs bg-slate-950 p-2.5 rounded border border-slate-900">
                            <span className="text-cyan-500 font-mono font-bold">{String(sIdx + 1).padStart(2, '0')}.</span>
                            <span className="text-slate-400">{step}</span>
                          </div>
                        ))
                      ) : (
                        <div className="text-xs text-slate-500 italic">No customized steps returned. Contact nearest local attorney desk.</div>
                      )}
                    </div>
                  </div>

                  {/* Immediate Recommended Safety Actions */}
                  <div className="space-y-4">
                    <h5 className="font-mono text-xs uppercase text-slate-300 tracking-wider flex items-center gap-2">
                      <span className="p-1 rounded bg-blue-950 text-yellow-500"><ShieldAlert className="w-3.5 h-3.5" /></span>
                      ACTIVE SAFEGUARDS & DAMAGE LIMITATION
                    </h5>
                    <div className="space-y-2">
                      {analysisResult.recommendedActions && analysisResult.recommendedActions.length > 0 ? (
                        analysisResult.recommendedActions.map((rec, rIdx) => (
                          <div key={`rec-${rIdx}`} className="flex gap-2 text-xs bg-slate-950 p-2.5 rounded border border-slate-900">
                            <span className="text-yellow-500 font-mono uppercase font-bold text-[9px] translate-y-0.5 shrink-0">[RULE]</span>
                            <span className="text-slate-400">{rec}</span>
                          </div>
                        ))
                      ) : (
                        <div className="text-xs text-slate-500 italic">Document all telemetry. Do not destroy chat histories or online records.</div>
                      )}
                    </div>
                  </div>

                </div>

                {/* 4. SAFETY PRECAUTIONS PANEL */}
                <div className="p-4 bg-gradient-to-r from-emerald-950/20 to-teal-950/20 border border-emerald-500/20 rounded-lg">
                  <h5 className="font-mono text-xs uppercase text-slate-300 tracking-wider flex items-center gap-1.5 mb-2.5">
                    <HeartPulse className="w-4 h-4 text-emerald-400 animate-pulse" />
                    PREVENTATIVE INTELLIGENCE TIPS (STOP FUTURE THREATS)
                  </h5>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                    {analysisResult.safetyTips && analysisResult.safetyTips.length > 0 ? (
                      analysisResult.safetyTips.map((tip, tIdx) => (
                        <div key={`tip-${tIdx}`} className="flex items-start gap-2 text-slate-400">
                          <span className="text-emerald-500 font-bold shrink-0">&bull;</span>
                          <span>{tip}</span>
                        </div>
                      ))
                    ) : (
                      <div className="text-xs text-slate-500 italic">Activate Multi-factor Authentication (MFA). Audit public credentials frequently.</div>
                    )}
                  </div>
                </div>

              </div>

              {/* Dossier Lower Status Line */}
              <div className="bg-slate-950 p-4 border-t border-slate-900 text-center font-mono text-[10px] text-slate-500">
                ⚠️ CONFIDENTIALITY NOTICE: This data dossier comprises algorithmic analysis. It is designed to assist, not substitute certified advocate counsel.
              </div>

            </div>
          )}

        </section>

        {/* INTERACTIVE LAW GRID & HISTORIC COURT PILLARS TIMELINE */}
        <section id="timeline-section" className="mb-16 scroll-mt-24">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex justify-center items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-ping" />
              CYBER-JUSTICE TIMELINE & RESOLUTION COMPASS
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1.5">
              Chronological workflow for reporting, evidence compilation, and prosecution management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Horizontal timeline connector bar for desktop */}
            <div className="absolute top-[35px] left-[12%] right-[12%] h-[1px] bg-gradient-to-r from-slate-950 via-cyan-900/40 to-slate-950 pointer-events-none hidden md:block" />

            {TIMELINE_STAGES.map((stage, idx) => (
              <div key={`t-stage-${idx}`} className="bg-slate-950/70 border border-slate-900 hover:border-cyan-500/20 p-5 rounded-lg relative overflow-hidden group transition-all duration-300">
                <div className="absolute top-2 right-2 text-6xl font-black text-slate-900/40 font-mono select-none group-hover:text-cyan-950/30 transition-all">
                  {stage.stage}
                </div>

                <div className="w-9 h-9 rounded bg-blue-950/80 border border-cyan-500/40 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 mb-3 relative z-10">
                  ST-{stage.stage}
                </div>

                <h4 className="text-sm font-bold text-slate-200 tracking-tight group-hover:text-cyan-300 transition-all font-sans relative z-10">
                  {stage.title}
                </h4>
                <div className="text-[10px] text-yellow-500/80 font-mono uppercase mt-1 mb-2 relative z-10">
                  {stage.timing}
                </div>
                <p className="text-xs text-slate-500 leading-normal font-sans relative z-10 group-hover:text-slate-400 transition-all">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* LATEST LEGAL UPDATES (DYNAMIC TELEMETRY NEWS) */}
        <section id="updates-section" className="mb-16 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Column 1: Latest Updates */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-2.5 border-b border-blue-950/60 pb-3">
                <Bell className="w-5 h-5 text-cyan-400" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-slate-300 font-black">
                  LATEST LEGAL TELEMETRY & STATUTORY AMENDMENTS
                </h3>
              </div>

              <div className="space-y-4">
                {RECENT_UPDATES.map((upd) => (
                  <div key={upd.id} className="bg-gradient-to-r from-slate-950/80 to-slate-900/20 p-5 rounded-lg border border-slate-900 hover:border-blue-950 transition-all flex flex-col sm:flex-row sm:items-start gap-4">
                    <div className="shrink-0 mt-0.5">
                      <span className="inline-block px-2.5 py-1 rounded bg-cyan-950/50 text-cyan-400 text-[9px] font-mono tracking-wider border border-cyan-500/10 uppercase">
                        {upd.tag}
                      </span>
                    </div>
                    <div>
                      <div className="text-[9px] text-slate-500 font-mono">{upd.date}</div>
                      <h4 className="text-sm font-bold text-slate-300 mt-1 mb-1.5 group-hover:text-white">
                        {upd.title}
                      </h4>
                      <p className="text-xs text-slate-500 leading-normal">{upd.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2: Cyber Safety Emergency Guard (Contacts Box) */}
            <div className="bg-slate-950 border border-red-950/80 rounded-lg p-6 relative overflow-hidden h-fit">
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-red-500" />
              <div className="absolute bottom-0 right-0 opacity-[0.02] text-red-500 pointer-events-none select-none">
                <ShieldAlert className="w-52 h-52" />
              </div>

              <div className="flex items-center gap-2 text-red-400 mb-4 pb-3 border-b border-red-950/40">
                <ShieldAlert className="w-5 h-5 animate-pulse" />
                <h4 className="font-mono text-xs uppercase tracking-wider font-bold">
                  EMERGENCY DEFENSE ENVELOPE
                </h4>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed font-sans mb-4">
                If you are facing active security coercion, threat parameters, or online blackmail, do not panic. Call verified statutory desks immediately.
              </p>

              <div className="space-y-4 font-mono">
                {EMERGENCY_CONTACTS.map((cnt, idx) => (
                  <div key={`contact-${idx}`} className="p-3 bg-red-950/10 border border-red-950/40 rounded flex flex-col justify-between gap-2">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase">{cnt.name}</div>
                      <div className="text-[9px] text-red-400/80 lowercase italic leading-relaxed mt-0.5">{cnt.scope}</div>
                    </div>
                    <a 
                      href={`tel:${cnt.number}`}
                      className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded bg-red-950 text-red-400 text-xs font-bold hover:bg-red-900 hover:text-white transition-all border border-red-500/20"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>SPEEDDIAL: {cnt.number}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (ACCORDION MATRIX) */}
        <section className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight flex justify-center items-center gap-2">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              STATUTORY REFERENCE MATRIX (FAQ)
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1.5">
              Instant responses to legal processes, forensic safety, and evidentiary rules
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div 
                  key={`faq-${idx}`} 
                  className="bg-slate-950/80 border border-slate-900 rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => {
                      setActiveFaq(isOpen ? null : idx);
                      setActiveSystemLog(`SYS_EVENT: FAQ node [${idx}] inspected.`);
                    }}
                    className="w-full text-left p-4 flex items-center justify-between gap-4 font-mono hover:bg-slate-900/60 transition-all text-slate-200"
                  >
                    <span className="text-xs sm:text-sm font-semibold flex items-center gap-2">
                      <span className="text-cyan-500 font-bold">Q{idx+1}.</span>
                      {faq.question}
                    </span>
                    <span className="text-slate-500 text-xs shrink-0">
                      {isOpen ? '[ COLLAPSE ]' : '[ DECODE ]'}
                    </span>
                  </button>

                  <div 
                    className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 border-t border-slate-900' : 'max-h-0 opacity-0 overflow-hidden'}`}
                  >
                    <div className="p-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-sans bg-black/40">
                      <p className="mb-2">{faq.answer}</p>
                      <div className="flex items-center gap-2 mt-3 pt-2.5 border-t border-slate-900/80 font-mono text-[10px] text-slate-500">
                        <span>DOMAIN ID: {faq.category.toUpperCase()}</span>
                        <span>&bull;</span>
                        <span>PROVISIONAL COMPLIANCE PROTOCOL</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* PLATFORM VALUE PROPOSITIONS & DETAILS */}
        <section className="bg-slate-950/60 border border-blue-950/40 rounded-xl p-8 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-3 text-[10px] text-slate-600 font-mono">LEXORA_DOCKET_v4.1</div>
          
          <div className="max-w-3xl relative z-10">
            <h4 className="text-base font-bold text-white uppercase tracking-wider mb-2 font-mono flex items-center gap-2">
              <Info className="w-5 h-5 text-cyan-400" />
              ABOUT LEXORA AI LEGAL INTELLIGENCE PLATFORM
            </h4>
            <div className="space-y-4 text-xs sm:text-sm text-slate-400 leading-relaxed pr-6">
              <p>
                Lexora AI is a modern cyber-legal technology platform assisting citizens in identifying civil codes, criminal acts, punishments, and damage-mitigation frameworks instantly. It is built strictly of high-quality algorithms and neural structures designed to parse real-world stress issues into structured statutes.
              </p>
              <p>
                By blending cognitive database networks with local offline catalogs, we provide the ultimate zero-human visual dashboard where user privacy is permanently decoupled from persistence logging. No accounts, no credentials, and zero history files means security is hard-coded directly into the stack.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6 border-t border-slate-900 pt-6 text-xs text-slate-500 font-mono">
              <div>
                <span className="block text-slate-400 font-bold font-semibold mb-1">DATA SCRUBBING</span>
                Automatic deletion of browser input variables every 10 min.
              </div>
              <div>
                <span className="block text-slate-400 font-bold font-semibold mb-1">ZERO PERSISTENCE</span>
                No external cookie vectors tracking query parameters.
              </div>
              <div>
                <span className="block text-slate-400 font-bold font-semibold mb-1">PROMPT STANDARDS</span>
                Adheres strictly to criminal and civil code manuals.
              </div>
            </div>
          </div>
        </section>

        {/* COMPREHENSIVE AI LEGAL DISCLAIMER */}
        <section className="border-t border-red-950/40 pt-6 mb-8 text-neutral-500 text-[11px] leading-relaxed font-mono">
          <p className="bg-red-950/10 p-4 border border-red-950/40 rounded text-[10px] uppercase text-slate-400">
            ⚠️ <strong className="text-yellow-500">AI Legal Advice Disclaimer Protocol:</strong> This web resource does not constitute a certified legal practice, official judicial directory, or a bar-registered legal counsel. All answers generated by the neural model or indexed fallbacks are designed strictly for preliminary diagnostic and general awareness telemetry. Users are strongly recommended to verify state statutes, localized criminal penal directives, and consult registered legal counselors or public defenders before committing resource tokens to litigation or filing legal briefs in administrative courts.
          </p>
        </section>

      </main>

      {/* FUTURISTIC PREMIUM FOOTER */}
      <footer className="border-t border-blue-950/60 bg-black py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-950/10 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-left relative z-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Scale className="w-6 h-6 text-cyan-400" />
              <span className="font-mono text-sm uppercase tracking-widest font-bold text-white">LEXORA AI &bull; CYBER-LEGAL</span>
            </div>
            <p className="text-xs text-slate-500 leading-normal font-sans pr-6">
              Autonomous Legal Intelligence Engine assisting communities in legal section mapping, punishment detection, and state helpline interfaces.
            </p>
            <div className="text-[10px] text-cyan-500 font-mono">
              POWERED BY AI LEGAL INTELLIGENCE SYSTEM &bull; v4.1
            </div>
          </div>

          <div className="space-y-3 font-mono text-xs text-slate-500">
            <div className="text-slate-300 font-bold uppercase tracking-wider">SECURE GRID PARAMETERS</div>
            <div className="space-y-1">
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span>Core Model:</span>
                <span className="text-cyan-400">Gemini-3.5-Flash</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span>State Rules Engine:</span>
                <span className="text-slate-300">IPC / BNS Mapped</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span>Encryption Keys:</span>
                <span className="text-slate-300">Local-Generated</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-900">
                <span>Human Imagery Filter:</span>
                <span className="text-emerald-400">ACTIVE: 100% abstract</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-slate-300 uppercase font-mono text-xs tracking-wider">STATUTORY HELPLICENSES</div>
            <div className="flex flex-wrap gap-2 text-[10px] font-mono">
              <span className="px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-900">Cyber Act §66</span>
              <span className="px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-900">IPC §420</span>
              <span className="px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-900">BNS §318</span>
              <span className="px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-900">Lalita Kumari v. UP</span>
              <span className="px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-900">Information Technology Act</span>
              <span className="px-2 py-1 rounded bg-slate-950 text-slate-400 border border-slate-900">Zero-FIR Protocol</span>
            </div>
            <p className="text-[10px] text-slate-600 font-mono leading-normal">
              For security compliance reporting, contact the system integrity core deck via automated telemetry channels.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 mt-8 pt-6 border-t border-slate-950/80 text-center font-mono text-[10px] text-slate-500">
          <div>&copy; 2026 Lexora AI. All virtual assets protected. Abstract Legal Grid Network.</div>
        </div>
      </footer>

    </div>
  );
}
