import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Scene3D from './Scene3D';

export default function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Scene3D />
      
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none z-10" />
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-background/20 to-background/60 pointer-events-none z-10" />
      
      {/* Content */}
      <div className="relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase">
            Welcome to my universe
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-5xl leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Anand Tishy Thomas</span>
          <br />
          <span className="text-foreground/90">I Build Intelligent AI-Powered Systems</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl"
        >
          <span className="text-primary">ML Engineer</span>
          <span className="mx-3 text-border">•</span>
          <span className="text-secondary">Full-Stack Developer</span>
          <span className="mx-3 text-border">•</span>
          <span className="text-accent">Systems Architect</span>
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          onClick={scrollToAbout}
          className="btn-neon rounded-lg font-display text-sm"
        >
          View My Work
        </motion.button>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <button
          onClick={scrollToAbout}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 scroll-indicator" />
        </button>
      </motion.div>
    </section>
  );
}
