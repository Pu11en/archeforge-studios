import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      {/* Hero - Quiet Authority */}
      <section className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8">
            ArcheForge Studios
          </h1>
          <p className="text-2xl md:text-3xl font-light text-[#a0a0a0] mb-4">
            We design systems that remember who you are.
          </p>
          <p className="text-lg text-[#666] mb-12">
            AI, identity, governance, and operational intelligence.
          </p>
          <div className="flex gap-4">
            <Link 
              href="#briefing" 
              className="px-6 py-3 bg-[#e5e5e5] text-[#0a0a0a] text-sm font-medium hover:bg-white transition-colors"
            >
              Request Briefing
            </Link>
            <Link 
              href="#capabilities" 
              className="px-6 py-3 border border-[#333] text-sm font-medium hover:border-[#555] transition-colors"
            >
              View Capabilities
            </Link>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-t border-[#1a1a1a]">
        <h2 className="text-sm uppercase tracking-widest text-[#666] mb-12">Who This Is For</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-medium mb-4">Enterprise Teams</h3>
            <p className="text-[#666]">Internal AI · Governance · Compliance</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Founders / Operators</h3>
            <p className="text-[#666]">Identity-driven systems · Decision architecture</p>
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Institutions</h3>
            <p className="text-[#666]">Education · Healthcare · Regulated environments</p>
          </div>
        </div>
      </section>

      {/* Capability Stack */}
      <section id="capabilities" className="py-24 px-8 md:px-16 lg:px-24 border-t border-[#1a1a1a]">
        <h2 className="text-sm uppercase tracking-widest text-[#666] mb-12">Capabilities</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl">
          <div className="border-l border-[#333] pl-6">
            <h3 className="text-xl font-medium mb-3">Identity Architecture</h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Persistent AI personas · Role-aligned intelligence · Memory governance
            </p>
          </div>
          <div className="border-l border-[#333] pl-6">
            <h3 className="text-xl font-medium mb-3">Operational AI</h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Internal copilots · Workflow intelligence · Decision scaffolding
            </p>
          </div>
          <div className="border-l border-[#333] pl-6">
            <h3 className="text-xl font-medium mb-3">Governance & Compliance</h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Audit-safe AI · Behavioral logging · Explainability layers
            </p>
          </div>
          <div className="border-l border-[#333] pl-6">
            <h3 className="text-xl font-medium mb-3">Cultural Systems</h3>
            <p className="text-[#666] text-sm leading-relaxed">
              Tone alignment · Internal comms intelligence · Leadership signal consistency
            </p>
          </div>
        </div>
      </section>

      {/* The Engine - SoulPrint */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-t border-[#1a1a1a] bg-[#080808]">
        <h2 className="text-sm uppercase tracking-widest text-[#666] mb-8">The Engine</h2>
        <div className="max-w-2xl">
          <p className="text-lg text-[#a0a0a0] leading-relaxed">
            SoulPrint powers identity persistence, cadence recognition, memory integrity, 
            and persona governance across all ArcheForge systems.
          </p>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-t border-[#1a1a1a]">
        <h2 className="text-sm uppercase tracking-widest text-[#666] mb-12">Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl">
          <p className="text-[#a0a0a0]">"Internal AI without drift"</p>
          <p className="text-[#a0a0a0]">"Executive copilots that don't hallucinate"</p>
          <p className="text-[#a0a0a0]">"AI governance without slowing teams"</p>
          <p className="text-[#a0a0a0]">"Cultural alignment across distributed orgs"</p>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-t border-[#1a1a1a]">
        <h2 className="text-sm uppercase tracking-widest text-[#666] mb-12">Engagement Models</h2>
        <div className="flex flex-wrap gap-8">
          <span className="text-[#a0a0a0]">Advisory</span>
          <span className="text-[#333]">·</span>
          <span className="text-[#a0a0a0]">Implementation</span>
          <span className="text-[#333]">·</span>
          <span className="text-[#a0a0a0]">Systems Integration</span>
          <span className="text-[#333]">·</span>
          <span className="text-[#a0a0a0]">Ongoing Stewardship</span>
        </div>
      </section>

      {/* Trust + Legal */}
      <section className="py-24 px-8 md:px-16 lg:px-24 border-t border-[#1a1a1a] bg-[#080808]">
        <h2 className="text-sm uppercase tracking-widest text-[#666] mb-8">Trust</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl text-sm text-[#666]">
          <p>Data privacy by architecture</p>
          <p>IP ownership clarity</p>
          <p>No training on client data</p>
          <p>Security-first posture</p>
        </div>
      </section>

      {/* CTA - Request Briefing */}
      <section id="briefing" className="py-32 px-8 md:px-16 lg:px-24 border-t border-[#1a1a1a]">
        <div className="max-w-xl">
          <h2 className="text-3xl font-light mb-4">Request a Private Briefing</h2>
          <p className="text-[#666] mb-12">We don't do demos. We do alignment.</p>
          <form className="space-y-6">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full bg-transparent border-b border-[#333] py-3 text-[#e5e5e5] placeholder-[#555] focus:border-[#666] focus:outline-none"
            />
            <input 
              type="text" 
              placeholder="Role" 
              className="w-full bg-transparent border-b border-[#333] py-3 text-[#e5e5e5] placeholder-[#555] focus:border-[#666] focus:outline-none"
            />
            <input 
              type="text" 
              placeholder="Organization" 
              className="w-full bg-transparent border-b border-[#333] py-3 text-[#e5e5e5] placeholder-[#555] focus:border-[#666] focus:outline-none"
            />
            <textarea 
              placeholder="Problem statement" 
              rows={4}
              className="w-full bg-transparent border-b border-[#333] py-3 text-[#e5e5e5] placeholder-[#555] focus:border-[#666] focus:outline-none resize-none"
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-[#e5e5e5] text-[#0a0a0a] text-sm font-medium hover:bg-white transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 md:px-16 lg:px-24 border-t border-[#1a1a1a]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <p className="text-sm text-[#666]">ArcheForge Studios ©</p>
          <div className="flex gap-8 text-sm text-[#555]">
            <Link href="https://soulprint.so" className="hover:text-[#888] transition-colors">SoulPrint</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
