import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Programming',
    skills: [
      { name: 'Python', icon: '🐍' },
      { name: 'C/C++', icon: '⚙️' },
      { name: 'JavaScript', icon: '⚡' },
      { name: 'TypeScript', icon: '📘' },
    ],
  },
  {
    title: 'AI / ML',
    skills: [
      { name: 'TensorFlow', icon: '🧠' },
      { name: 'NLP', icon: '💬' },
      { name: 'ML Basics', icon: '📊' },
      { name: 'Data Processing', icon: '🔄' },
    ],
  },
  {
    title: 'Web & Mobile',
    skills: [
      { name: 'React', icon: '⚛️' },
      { name: 'Flutter', icon: '📱' },
      { name: 'HTML/CSS', icon: '🎨' },
      { name: 'Full-Stack', icon: '🌐' },
    ],
  },
  {
    title: 'Backend & Tools',
    skills: [
      { name: 'Flask', icon: '🌶️' },
      { name: 'Firebase', icon: '🔥' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Docker', icon: '🐳' },
    ],
  },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-32 px-6 overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium tracking-widest uppercase mb-4">
            Tech Stack
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.15 }}
              className="glass-card rounded-2xl p-6"
            >
              <h3 className="font-display text-lg font-semibold text-primary mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: catIndex * 0.15 + skillIndex * 0.1 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/30 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 tech-float group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform">{skill.icon}</span>
                    <span className="text-foreground font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill badges - horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-4"
        >
          {['Git', 'GitHub', 'AWS', 'Vercel', 'Railway', 'Proteus', 'Java', 'Dart'].map((skill, i) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-full border border-border/50 bg-muted/20 text-muted-foreground text-sm hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-default"
              style={{ animationDelay: `${i * 0.5}s` }}
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
