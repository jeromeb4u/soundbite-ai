"use client";

import {
  Mic2,
  FileText,
  Sparkles,
  Download,
  BarChart3,
  Layers,
  Upload,
  Play,
  Check,
  Menu,
  X,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react";
import { useState } from "react";

// ─── NavBar ───────────────────────────────────────────────────────────────────
function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)] bg-[var(--color-surface)]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
            <Mic2 size={18} className="text-white" />
          </div>
          <span className="font-bold text-lg text-[var(--color-text)]">SoundbiteAI</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm text-[var(--color-muted)]">
          <a href="#features" className="hover:text-[var(--color-text)] transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-[var(--color-text)] transition-colors">Use Cases</a>
          <a href="#pricing" className="hover:text-[var(--color-text)] transition-colors">Pricing</a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors px-3 py-1.5">Login</button>
          <button className="text-sm bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white px-4 py-1.5 rounded-lg font-medium transition-colors">
            Try Free
          </button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-[var(--color-muted)]" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 space-y-3">
          <a href="#features" className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">Features</a>
          <a href="#how-it-works" className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">Use Cases</a>
          <a href="#pricing" className="block text-sm text-[var(--color-muted)] hover:text-[var(--color-text)]">Pricing</a>
          <button className="text-sm text-[var(--color-muted)] hover:text-[var(--color-text)] w-full text-left">Login</button>
          <button className="w-full text-sm bg-[var(--color-primary)] text-white px-4 py-2 rounded-lg font-medium">Try Free</button>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-full px-4 py-1.5 mb-6">
          <Sparkles size={14} className="text-[var(--color-primary)]" />
          <span className="text-xs text-[var(--color-muted)]">Powered by AI Clip Intelligence</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-[var(--color-text)]">
          Find the clips that<br />
          <span className="text-[var(--color-primary)]">hook new listeners.</span>
        </h1>

        <p className="text-lg text-[var(--color-muted)] max-w-2xl mx-auto mb-10">
          Stop manually scrubbing through hours of audio. SoundbiteAI extracts the 5 most viral-worthy soundbites from any podcast episode — auto-captioned and ready to share.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-lg font-semibold transition-colors">
            Start Free
          </button>
          <a href="#how-it-works" className="px-8 py-3 border border-[var(--color-border)] hover:border-[var(--color-muted)] text-[var(--color-text)] rounded-lg font-medium transition-colors">
            See How It Works
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Soundbite Preview ─────────────────────────────────────────────────────────
function WaveformVisual({ active }: { active: boolean }) {
  const heights = [30, 60, 45, 80, 55, 70, 40, 90, 65, 50, 75, 45, 85, 60, 35, 95, 55, 70, 40, 65];
  return (
    <div className="flex items-center gap-0.5 h-12">
      {heights.map((h, i) => (
        <div
          key={i}
          className="w-1 rounded-sm bg-[var(--color-primary)]"
          style={{
            height: active ? `${h}%` : `${h * 0.4}%`,
            animationDelay: `${i * 0.05}s`,
            transition: 'height 0.3s ease',
          }}
        />
      ))}
    </div>
  );
}

const MOCK_SOUNDBITES = [
  { duration: "45s", tag: "Emotional Peak", text: "The moment everything changed for me was when I realized success wasn't about the destination..." },
  { duration: "62s", tag: "Strong Hook", text: "Let me tell you about the three mistakes that cost my first startup everything..." },
  { duration: "38s", tag: "Controversial Take", text: "Everyone's wrong about productivity — working more hours is actually making you worse at your job..." },
  { duration: "71s", tag: "Viral Potential", text: "The counterintuitive reason introverts make better leaders in high-pressure situations..." },
  { duration: "55s", tag: "Memorable Quote", text: "Your network is your net worth — but only if you know how to activate it the right way..." },
];

function SoundbitePreview() {
  const [stage, setStage] = useState<"upload" | "loading" | "done">("upload");
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 sm:px-6 border-y border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Watch it in action</h2>
          <p className="text-[var(--color-muted)]">Upload your audio and get viral-ready clips in under 2 minutes.</p>
        </div>

        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-10">
          {stage === "upload" && (
            <div className="text-center py-16">
              <div className="border-2 border-dashed border-[var(--color-border)] rounded-xl p-12 hover:border-[var(--color-primary)] transition-colors cursor-pointer" onClick={() => setStage("loading")}>
                <Upload size={40} className="mx-auto mb-4 text-[var(--color-muted)]" />
                <p className="text-[var(--color-text)] font-medium mb-2">Drop your audio file here</p>
                <p className="text-sm text-[var(--color-muted)]">MP3, WAV, M4A, or paste a transcript — up to 3 hours</p>
              </div>
              <button
                className="mt-6 text-sm text-[var(--color-secondary)] underline"
                onClick={() => setStage("loading")}
              >
                Or try with a sample transcript
              </button>
            </div>
          )}

          {stage === "loading" && (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-4 border-[var(--color-border)] border-t-[var(--color-primary)] animate-spin" />
              <p className="text-lg font-semibold mb-2">AI is analyzing your audio...</p>
              <p className="text-sm text-[var(--color-muted)]">Scanning for emotional peaks, phrase completeness & hook strength</p>
              <div className="mt-8 max-w-md mx-auto h-2 bg-[var(--color-border)] rounded-full overflow-hidden">
                <div className="h-full bg-[var(--color-primary)] rounded-full animate-shimmer" style={{ width: "60%" }} />
              </div>
            </div>
          )}

          {stage === "done" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="font-semibold text-[var(--color-text)]">5 soundbites extracted</p>
                  <p className="text-sm text-[var(--color-muted)]">Ready to export</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-success)]">
                  <Check size={16} />
                  All clips scored
                </div>
              </div>
              <div className="space-y-4">
                {MOCK_SOUNDBITES.map((sb, i) => (
                  <div
                    key={i}
                    className={`bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl p-4 hover:border-[var(--color-primary)]/50 transition-all cursor-pointer ${activeCard === i ? 'border-[var(--color-primary)]' : ''}`}
                    onClick={() => setActiveCard(activeCard === i ? null : i)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <WaveformVisual active={activeCard === i} />
                        <span className="text-xs font-mono text-[var(--color-muted)]">{sb.duration}</span>
                        <span className="text-xs bg-[var(--color-primary)]/20 text-[var(--color-primary)] px-2 py-0.5 rounded-full">{sb.tag}</span>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-[var(--color-primary)] flex items-center justify-center hover:scale-110 transition-transform">
                        <Play size={14} className="text-white ml-0.5" fill="white" />
                      </button>
                    </div>
                    <p className="text-sm text-[var(--color-muted)] italic">&ldquo;{sb.text}&rdquo;</p>
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-lg font-semibold transition-colors">
                Export All Clips
              </button>
            </div>
          )}
        </div>

        {stage !== "done" && (
          <div className="mt-6 text-center">
            <button
              className="text-sm text-[var(--color-muted)] underline"
              onClick={() => setStage(stage === "upload" ? "loading" : "done")}
            >
              {stage === "upload" ? "Skip to demo results" : "Reset demo"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

// ─── Features ─────────────────────────────────────────────────────────────────
const FEATURES = [
  { icon: Mic2, title: "AI Clip Extraction", desc: "Our AI scans your entire audio file and identifies moments with the highest viral potential — emotional peaks, strong hooks, and complete thought segments." },
  { icon: FileText, title: "Auto Captions", desc: "Every clip comes with perfectly synced captions. SRT, VTT, and JSON formats ready for TikTok, YouTube Shorts, and Instagram Reels." },
  { icon: BarChart3, title: "Waveform Visualization", desc: "Beautiful waveform bars rendered for every clip. Animated previews that make your content stand out in crowded feeds." },
  { icon: Download, title: "Multi-Platform Export", desc: "One-click export optimized for every platform. Square for Instagram, 9:16 for TikTok and Reels, 16:9 for YouTube Shorts." },
  { icon: Sparkles, title: "Hook Strength Scoring", desc: "Every clip gets a viral score from 0-100. We analyze phrase completeness, emotional impact, cliffhanger potential, and audience retention markers." },
  { icon: Layers, title: "Batch Processing", desc: "Process multiple episodes at once. Upload a season, get clips for every episode. Perfect for podcast networks and content agencies." },
];

function Features() {
  return (
    <section id="features" className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Everything you need to go viral</h2>
          <p className="text-[var(--color-muted)] max-w-xl mx-auto">From raw audio to platform-ready clips in minutes — no editing skills required.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => (
            <div key={i} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 hover:border-[var(--color-primary)]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-5 group-hover:bg-[var(--color-primary)]/20 transition-colors">
                <f.icon size={22} className="text-[var(--color-primary)]" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
const STEPS = [
  {
    num: "01",
    title: "Upload Audio",
    desc: "Paste a transcript or upload your audio file. We support MP3, WAV, M4A, and text formats up to 3 hours.",
    icon: Upload,
  },
  {
    num: "02",
    title: "AI Finds Clips",
    desc: "Our AI analyzes every segment for emotional peaks, phrase completeness, and viral-worthy hook strength.",
    icon: Sparkles,
  },
  {
    num: "03",
    title: "Export & Share",
    desc: "Download your clips with auto-captions and waveform visuals. Optimized for TikTok, YouTube, and Reels.",
    icon: Download,
  },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Three steps to viral clips</h2>
          <p className="text-[var(--color-muted)]">No learning curve. No editing skills. Just paste and go.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {STEPS.map((s, i) => (
            <div key={i} className="text-center relative">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] mb-6">
                <s.icon size={26} className="text-[var(--color-primary)]" />
              </div>
              <span className="inline-block text-xs font-mono text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-2 py-1 rounded-full mb-4">{s.num}</span>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm text-[var(--color-muted)] leading-relaxed">{s.desc}</p>
              {i < 2 && (
                <div className="hidden md:block absolute top-8 -right-4 text-[var(--color-border)]">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M0 16h28M20 8l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Stats ─────────────────────────────────────────────────────────────────────
const STATS = [
  { value: "500K+", label: "Clips Generated" },
  { value: "50K+", label: "Podcasters Trust Us" },
  { value: "4.9/5", label: "Average Rating" },
];

function Stats() {
  return (
    <section className="py-16 px-4 sm:px-6 bg-[var(--color-surface)]">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
        {STATS.map((s, i) => (
          <div key={i}>
            <div className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-2">{s.value}</div>
            <div className="text-sm text-[var(--color-muted)]">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Testimonials ──────────────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    quote: "I spent hours manually finding clips. With SoundbiteAI, I get 5 viral-ready clips in 90 seconds. My TikTok grew 300% in one month.",
    name: "Marcus Chen",
    title: "Host of 'The Midnight Founder'",
    avatar: "MC",
  },
  {
    quote: "The hook scoring is uncannily accurate. The clips it identifies as 'viral potential' actually go viral. This is now my secret weapon.",
    name: "Priya Nair",
    title: "Executive Producer at TrueStory Podcast Network",
    avatar: "PN",
  },
  {
    quote: "I batch process entire seasons. What used to take my editor a full week now takes 20 minutes. Game changer for content velocity.",
    name: "Jake Rodriguez",
    title: "Creator of 'Hard Conversations' (200K+ subscribers)",
    avatar: "JR",
  },
];

function Testimonials() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Podcasters love SoundbiteAI</h2>
          <p className="text-[var(--color-muted)]">Join thousands of creators saving hours every week.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 flex flex-col gap-5">
              <div className="flex gap-1">{[...Array(5)].map((_, j) => <span key={j} className="text-[var(--color-primary)]">★</span>)}</div>
              <p className="text-[var(--color-text)] leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-auto pt-2">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center text-sm font-bold text-[var(--color-primary)]">{t.avatar}</div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-[var(--color-muted)]">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────
const PLANS = [
  {
    name: "Starter",
    price: "$0",
    period: "/month",
    desc: "Perfect for trying out SoundbiteAI.",
    features: ["5 soundbites / month", "MP3 export only", "720p captions", "Community support"],
    cta: "Get Started Free",
    featured: false,
  },
  {
    name: "Creator",
    price: "$19",
    period: "/month",
    desc: "For podcasters serious about growing their audience.",
    features: ["50 soundbites / month", "All export formats (MP4, MP3, WAV)", "1080p captions + waveform", "Multi-platform optimization", "Hook strength scoring", "Email support"],
    cta: "Start Creator Plan",
    featured: true,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    desc: "For podcast networks and content agencies.",
    features: ["Unlimited soundbites", "Batch processing", "Commercial usage rights", "Priority support", "Custom branding on exports", "API access"],
    cta: "Go Pro",
    featured: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-[var(--color-muted)]">Start free, scale as you grow. No hidden fees.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {PLANS.map((p, i) => (
            <div key={i} className={`rounded-2xl p-6 flex flex-col gap-5 ${p.featured ? 'bg-[var(--color-surface)] border-2 border-[var(--color-primary)]' : 'bg-[var(--color-surface)] border border-[var(--color-border)]'}`}>
              {p.featured && (
                <div className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--color-primary)] bg-[var(--color-primary)]/10 px-3 py-1 rounded-full w-fit">
                  <Sparkles size={12} /> Most Popular
                </div>
              )}
              <div>
                <h3 className="text-lg font-bold mb-1">{p.name}</h3>
                <p className="text-xs text-[var(--color-muted)]">{p.desc}</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className="text-sm text-[var(--color-muted)]">{p.period}</span>
              </div>
              <ul className="space-y-2.5">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-[var(--color-muted)]">
                    <Check size={14} className="text-[var(--color-success)] shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-2.5 rounded-lg font-semibold text-sm transition-colors ${p.featured ? 'bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white' : 'border border-[var(--color-border)] hover:border-[var(--color-muted)] text-[var(--color-text)]'}`}>
                {p.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to find your viral clips?</h2>
        <p className="text-[var(--color-muted)] mb-10">Join 50,000+ podcasters who save hours every week.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-lg text-sm text-[var(--color-text)] placeholder:text-[var(--color-muted)] focus:outline-none focus:border-[var(--color-secondary)] transition-colors"
          />
          <button className="px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/90 text-white rounded-lg font-semibold text-sm transition-colors whitespace-nowrap">
            Get Started Free
          </button>
        </div>
        <p className="text-xs text-[var(--color-muted)] mt-4">No credit card required. Free plan forever.</p>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center">
              <Mic2 size={18} className="text-white" />
            </div>
            <span className="font-bold text-[var(--color-text)]">SoundbiteAI</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-[var(--color-muted)]">
            <a href="#" className="hover:text-[var(--color-text)]">Features</a>
            <a href="#" className="hover:text-[var(--color-text)]">Pricing</a>
            <a href="#" className="hover:text-[var(--color-text)]">Blog</a>
            <a href="#" className="hover:text-[var(--color-text)]">Contact</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-text)]"><Twitter size={18} /></a>
            <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-text)]"><Youtube size={18} /></a>
            <a href="#" className="text-[var(--color-muted)] hover:text-[var(--color-text)]"><Instagram size={18} /></a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-[var(--color-border)] text-center text-xs text-[var(--color-muted)]">
          &copy; 2026 SoundbiteAI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <SoundbitePreview />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <Pricing />
      <CTABanner />
      <Footer />
    </main>
  );
}