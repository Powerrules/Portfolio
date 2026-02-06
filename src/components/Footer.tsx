export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border/30">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg font-bold gradient-text">Anand Tishy Thomas</span>
          <span className="text-muted-foreground">•</span>
          <span className="text-muted-foreground text-sm">ML Engineer & Full-Stack Developer</span>
        </div>
        
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} All rights reserved. Built with passion.
        </p>
      </div>
    </footer>
  );
}
