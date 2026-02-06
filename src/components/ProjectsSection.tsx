import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'WellnessConnect',
    description: 'Web-based AI Mental Health Assistant providing personalized support and resources using ML-enhanced conversational AI.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    tags: ['Python', 'React', 'AI/ML', 'Flask'],
    github: 'https://github.com/Powerrules',
    live: '#',
  },
  {
    id: 2,
    title: 'AI-Based Process Scheduler',
    description: 'AI-powered scheduling algorithm to efficiently manage CPU-bound and I/O-bound processes using multi-queue architecture.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    tags: ['Python', 'C++', 'AI/ML', 'Systems'],
    github: 'https://github.com/Powerrules',
    live: '#',
  },
  {
    id: 3,
    title: 'Packet Sniffer & Metrics',
    description: 'Lightweight Python project for simulating UDP traffic, sniffing network packets, and calculating network performance metrics.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
    tags: ['Python', 'Networking', 'UDP', 'Analysis'],
    github: 'https://github.com/Powerrules',
    live: '#',
  },
  {
    id: 4,
    title: 'Souloxy Nudge System',
    description: 'Rule-based and ML-enhanced system delivering timely, context-aware nudges based on user preferences and psychological profiles.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    tags: ['Python', 'ML', 'Flask', 'React'],
    github: 'https://github.com/Powerrules',
    live: '#',
  },
  {
    id: 5,
    title: 'Conversational Bot Engine',
    description: 'Intelligent conversational bot built on user preferences and psychological profiling for personalized interactions.',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=400&fit=crop',
    tags: ['Python', 'NLP', 'AI', 'MongoDB'],
    github: 'https://github.com/Powerrules',
    live: '#',
  },
  {
    id: 6,
    title: 'Resource Recommender',
    description: 'Rule-based engine using personality profiles, intent signals, and journaling patterns to recommend wellness resources.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    tags: ['Python', 'Firebase', 'React', 'ML'],
    github: 'https://github.com/Powerrules',
    live: '#',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg)' : 'perspective(1000px)',
        transition: 'transform 0.3s ease',
      }}
    >
      <div className="glass-card rounded-2xl overflow-hidden transition-all duration-500 group-hover:glow-cyan">
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
          
          {/* Overlay buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 flex items-center justify-center gap-4 bg-background/60 backdrop-blur-sm"
          >
            <a
              href={project.github}
              className="p-3 rounded-full bg-primary/20 border border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={project.live}
              className="p-3 rounded-full bg-secondary/20 border border-secondary/50 text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs rounded-full bg-muted/50 text-muted-foreground border border-border/50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="relative py-32 px-6 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-secondary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary/5 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work spanning AI, web development, and creative technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
