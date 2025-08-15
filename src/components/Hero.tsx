import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';
import avatar from '@/assets/avatar.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center hero-section">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="fade-in flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-8">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-tight slide-in-left font-serif">
                Hello, I'm{' '}
                <span className="gradient-text">Keerti Gadigeppagoudar</span>
              </h1>
            </div>
            <div className="w-48 h-48 lg:w-56 lg:h-56 rounded-full overflow-hidden ring-4 ring-primary/30 shadow-glow flex-shrink-0">
              <img 
                src={avatar} 
                alt="Alex Johnson" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed text-center slide-in-right">
            Python Backend Developer passionate about creating 
            robust and scalable backend solutions with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow transition-all duration-300 hover:scale-105">
              View My Work
            </Button>
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              Download CV
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              { icon: Github, href: 'https://github.com/keertiG-1296', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/keertig', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:keerti.s.g2020@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full glass-card hover:shadow-glow transition-all duration-300 hover:scale-110 text-muted-foreground hover:text-primary"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 float-animation">
        <ArrowDown size={24} className="text-primary" />
      </div>
    </section>
  );
}