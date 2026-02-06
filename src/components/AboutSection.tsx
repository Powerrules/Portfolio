import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Cpu, Sparkles, Rocket } from 'lucide-react';

const stats = [
  { icon: Code2, value: '10+', label: 'Projects Built', color: 'primary' },
  { icon: Cpu, value: '15+', label: 'Technologies', color: 'secondary' },
  { icon: Sparkles, value: '3+', label: 'Years Coding', color: 'accent' },
  { icon: Rocket, value: '100%', label: 'Passion', color: 'primary' },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-sm font-medium tracking-widest uppercase mb-4">
            About Me
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold gradient-text">
            The Mind Behind the Code
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">
                Building Intelligent <span className="text-primary">Systems</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a Machine Learning and Software Engineering student with experience building 
                <span className="text-primary"> AI-powered systems</span>, 
                <span className="text-secondary"> network-level tools</span>, and 
                <span className="text-accent"> performance-oriented applications</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Strong background in ML model integration, parallel computing, backend systems, 
                and signal/data processing workflows. Experienced working on end-to-end product-style 
                projects from model design to deployment.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Highly interested in real-time data processing, SDR/RF-based intelligent applications, 
                and pushing the boundaries of what's possible with modern AI systems.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="glass-card p-6 rounded-xl text-center group hover:glow-cyan transition-all duration-500"
              >
                <div className={`inline-flex p-3 rounded-lg bg-${stat.color}/10 mb-4`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}`} />
                </div>
                <div className={`font-display text-3xl font-bold text-${stat.color} glow-text mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
