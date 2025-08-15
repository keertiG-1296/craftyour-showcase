import { Github, Linkedin, Mail } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 slide-in-up animate-fade-in">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            "The best way to predict the future is to create it." - Let's build something amazing together.
          </p>
          
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:keerti.s.g2020@gmail.com"
              className="p-4 rounded-full glass-card hover:shadow-glow transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-primary group"
              aria-label="Email"
            >
              <Mail size={32} />
              <span className="sr-only">keerti.s.g2020@gmail.com</span>
            </a>
            <a
              href="https://www.linkedin.com/in/keertig"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-card hover:shadow-glow transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-primary"
              aria-label="LinkedIn"
            >
              <Linkedin size={32} />
            </a>
            <a
              href="https://github.com/keertiG-1296"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full glass-card hover:shadow-glow transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-primary"
              aria-label="GitHub"
            >
              <Github size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}