import { Database } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2 opacity-80">
          <Database className="w-5 h-5" />
          <span className="font-bold text-lg tracking-tight">Shubham Sharma</span>
        </div>
        
        <p className="text-sm text-white/50 text-center md:text-left">
          © {new Date().getFullYear()} Shubham Sharma. Designed for impact.
        </p>

        <div className="flex gap-6 text-sm font-medium text-white/70">
          <a href="#home" className="hover:text-accent transition-colors">Top</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors">GitHub</a>
        </div>
        
      </div>
    </footer>
  );
}
