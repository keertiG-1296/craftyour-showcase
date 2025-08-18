import { Code, Palette, Zap } from 'lucide-react';
import { Card } from '@/components/ui/card';
import avatar from '@/assets/avatar.jpg';

const features = [
  {
    icon: Code,
    title: 'Python Bakend Development',
    description: 'Expert in building robust backend systems using Python, including Flask, FastAPI frameworks.',
  },
  {
    icon: Palette,
    title: 'API & Database Management',
    description: 'Experienced in designing RESTful APIs, integrating databases like MySQL, PostgreSQL, MongoDB, and optimizing data flow.',
  },
  {
    icon: Zap,
    title: 'Performance & Scalability',
    description: 'Focused on writing clean, efficient, and scalable code for high-performance applications, including caching and async processing.',
  },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 slide-in-up animate-fade-in">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I'm a passionate Python Backend Developer with experience creating robust and scalable backend solutions. 
              I love solving complex problems with clean, efficient code.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in writing maintainable code and staying updated with the latest backend technologies.
              When I'm not coding, you'll find me exploring new frameworks, contributing to open-source 
              projects, or sharing knowledge with the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
