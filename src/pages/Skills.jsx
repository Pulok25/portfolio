const skills = [
  {
    category: "Core",
    items: [
      { name: "HTML", level: 90, desc: "Semantic markup, accessibility, SEO basics" },
      { name: "CSS", level: 85, desc: "Flexbox, Grid, animations, responsive design" },
      { name: "JavaScript", level: 75, desc: "ES6+, DOM, async/await, array methods" },
    ],
  },
  {
    category: "Framework",
    items: [
      { name: "React", level: 70, desc: "Hooks, component design, React Router" },
      { name: "Tailwind CSS", level: 80, desc: "Utility-first styling, custom config" },
    ],
  },
  {
    category: "Other",
    items: [
      { name: "Python", level: 35, desc: "Basic syntax, loops, functions" },
      { name: "Git", level: 65, desc: "Version control, GitHub, basic workflow" },
    ],
  },
];

export default function Skills() {
  return (
    <section className="min-h-screen px-6 pt-32 pb-20 relative overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <p className="text-[#c8f65d] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="opacity-50">//</span> What I know
          </p>
          <h2 className="font-mono font-bold text-[clamp(3rem,8vw,6rem)] leading-none tracking-tight">
            Skills
          </h2>
        </div>

        {/* Skills */}
        <div className="space-y-20">
          {skills.map((group) => (
            <div key={group.category}>

              {/* Category Label */}
              <p className="text-xs uppercase tracking-widest text-white/20 mb-8 border-b border-white/5 pb-4">
                {group.category}
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
                {group.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="group bg-[#0a0a0a] hover:bg-[#111] p-8 transition-colors duration-300 cursor-default"
                  >
                    {/* Skill Name — Big */}
                    <h3 className="font-mono font-bold text-3xl mb-2 group-hover:text-[#c8f65d] transition-colors duration-300">
                      {skill.name}
                    </h3>

                    {/* Level */}
                    <span className="text-xs text-[#c8f65d]/60 font-mono tracking-widest uppercase">
                      {skill.level >= 80 ? "Advanced" : skill.level >= 60 ? "Intermediate" : "Basic"}
                      {" "}— {skill.level}%
                    </span>

                    {/* Divider */}
                    <div className="w-8 h-px bg-[#c8f65d]/30 my-5 group-hover:w-full transition-all duration-500" />

                    {/* Description */}
                    <p className="text-sm text-white/40 leading-relaxed">
                      {skill.desc}
                    </p>

                    {/* Progress Bar */}
                    <div className="mt-6 h-px bg-white/10 w-full overflow-hidden">
                      <div
                        className="h-full bg-[#c8f65d] transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="mt-20 border border-white/5 p-8">
          <p className="text-sm text-white/30 leading-relaxed">
            Currently improving React & JavaScript daily.
            Open to learning new tools based on project needs.
          </p>
        </div>

      </div>
    </section>
  );
}