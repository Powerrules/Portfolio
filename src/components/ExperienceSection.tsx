import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    year: '2026',
    title: 'Software Developer Intern',
    company: 'Souloxy',
    description: 'Developed ML-enhanced nudge systems, conversational bots, and rule-based recommendation engines using psychological profiling.',
    type: 'current',
  },
  {
    year: '2025',
    title: 'B.S. Computer Science',
    company: 'Illinois Institute of Technology',
    description: 'Pursuing degree with coursework in Systems Programming, Database Organization, and Creative AI. Expected graduation May 2027.',
    type: 'education',
  },
  {
    year: '2023',
    title: 'B.Tech Computer Science',
    company: 'VIT Chennai',
    description: 'Studied Systems Programming, Database Organization, and gained exposure to real-world AI applications and backend systems.',
    type: 'past',
  },
  {
    year: '2024',
    title: 'Smart India Hackathon',
    company: 'Participant',
    description: 'Participated in national-level hackathon, Google Developer Student Club events, and Machine Learning Bootcamps.',
    type: 'past',
  },
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium tracking-widest uppercase mb-4">
            Journey
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Experience Timeline
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline node */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 -translate-x-1/2 z-10">
                <div
                  className={`w-4 h-4 rounded-full border-2 ${
                    exp.type === 'current'
                      ? 'bg-primary border-primary pulse-glow'
                      : 'bg-muted border-primary/50'
                  }`}
                />
                {exp.type === 'current' && (
                  <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div className={`w-full md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? 'md:pr-8 pl-16 md:pl-0' : 'md:pl-8 pl-16'
              }`}>
                <div className="glass-card p-6 rounded-xl hover:glow-violet transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-display font-semibold">
                      {exp.year}
                    </span>
                    {exp.type === 'current' && (
                      <span className="px-2 py-0.5 rounded-full bg-primary/20 border border-primary/50 text-primary text-xs">
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-secondary text-sm mb-3">{exp.company}</p>
                  <p className="text-muted-foreground text-sm">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
