import { Code, Palette, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import avatar from '@/assets/avatar.jpg';

const features = [
  {
    icon: Code,
    title: 'Full-Stack Development',
    description: 'Experienced in both frontend and backend technologies, creating complete web solutions from concept to deployment.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Passionate about creating intuitive and beautiful user interfaces that provide exceptional user experiences.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Focused on building fast, scalable applications with clean code and modern best practices.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference. 
            I love turning complex problems into simple, beautiful designs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference. 
              I love turning complex problems into simple, beautiful designs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and staying updated with the latest technologies.
              When I'm not coding, you'll find me exploring new design trends, contributing to open-source 
              projects, or sharing knowledge with the developer community through blogs and mentoring.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
            <Card className="glass-card p-8 max-w-md">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-primary/20">
                  <img 
                    src={avatar} 
                    alt="Alex Johnson" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Alex Johnson</h3>
                <p className="text-muted-foreground mb-4">Full-Stack Developer</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">50+</div>
                    <div className="text-xs text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">5+</div>
                    <div className="text-xs text-muted-foreground">Years Exp</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">20+</div>
                    <div className="text-xs text-muted-foreground">Clients</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary mb-1">100%</div>
                    <div className="text-xs text-muted-foreground">Dedication</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-primary flex items-center justify-center">
                <feature.icon size={32} className="text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}