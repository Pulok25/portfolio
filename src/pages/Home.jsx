import { Link } from "react-router";

export default function Home() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20 relative overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Glow */}
      <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(200,246,93,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto w-full">
        
        {/* Tag */}
        <div className="inline-flex items-center gap-2 text-[#c8f65d] text-xs uppercase tracking-widest border border-[#c8f65d]/20 px-4 py-2 mb-8">
          <span className="w-1.5 h-1.5 bg-[#c8f65d] rounded-full animate-pulse" />
          Available for work
        </div>

        {/* Name */}
        <h1 className="font-mono font-bold text-[clamp(2.5rem,6vw,5rem)] leading-[0.95] tracking-tight mb-6">
          Md Akib
          <span className="block text-[#c8f65d]">Zaman Pulok</span>
        </h1>

        {/* Description */}
        <p className="text-white/40 text-sm leading-relaxed max-w-md mb-10">
          Frontend developer building clean, functional interfaces with React.
          Based in Dhaka, Bangladesh — open to remote and local opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap">
          <Link
            to="/contact"
            className="bg-[#c8f65d] text-black px-7 py-3 text-sm font-bold tracking-wide hover:-translate-y-0.5 transition-transform"
          >
            Get in touch
          </Link>
          <Link
            to="/projects"
            className="border border-white/10 text-white px-7 py-3 text-sm font-medium tracking-wide hover:border-[#c8f65d] hover:text-[#c8f65d] transition-colors"
          >
            See my work
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="flex items-center gap-3 text-white/30 text-xs uppercase tracking-widest mt-16">
          <span className="w-10 h-px bg-white/20" />
          Scroll to explore
        </div>

      </div>
    </section>
  );
}