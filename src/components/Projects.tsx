import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Emergency Aid Portal – Dynamic Dashboard',
    description: 'Real-time emergency response system with dynamic dashboard for coordinating aid distribution and tracking resources across multiple locations.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'WebSocket'],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    title: 'Fitness Studio Booking API – Class Scheduling Booking System',
    description: 'Comprehensive booking system API for fitness studios with class scheduling, member management, and payment processing capabilities.',
    technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Stripe API'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  },
  {
    title: 'Smart Traffic Light Controller using YOLOv5',
    description: 'AI-powered traffic management system using YOLOv5 for real-time vehicle detection and adaptive traffic light control to optimize traffic flow.',
    technologies: ['Python', 'YOLOv5', 'OpenCV', 'TensorFlow', 'Flask'],
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
    github: '#',
    live: '#',
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across different technologies and domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card group overflow-hidden hover:shadow-glow transition-all duration-300 hover:scale-105">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-secondary text-xs rounded-md font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
