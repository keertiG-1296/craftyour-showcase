import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

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
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hello, I'm{' '}
            <span className="gradient-text">Alex Johnson</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Full-Stack Developer & UI/UX Designer passionate about creating 
            exceptional digital experiences with modern technologies.
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
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
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