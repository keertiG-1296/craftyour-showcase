import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#contact', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="bg-gradient-dark border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Alex Johnson</h3>
            <p className="text-muted-foreground leading-relaxed">
              Full-Stack Developer passionate about creating exceptional digital experiences 
              with modern technologies and clean code.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-2 rounded-full glass-card hover:shadow-glow transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-primary"
                  aria-label={label}
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Alex Johnson. All rights reserved. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}