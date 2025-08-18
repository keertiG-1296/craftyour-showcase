import { Calendar, ExternalLink, Award, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const experience = {
  company: 'Acubiq pvt ltd',
  position: 'Python-Backend Developer',
  duration: 'July - September',
  location: 'Hubli',
  description: 'Led development of scalable web applications using React, Python, and cloud technologies. Collaborated with cross-functional teams to deliver high-quality software solutions that improved user engagement by 40%.',
  achievements: [
    'Built and deployed 15+ responsive web applications',
    'Optimized database queries reducing load time by 60%',
    'Mentored 3 junior developers and conducted code reviews',
    'Implemented CI/CD pipelines using Docker and AWS'
  ],
  technologies: ['React', 'Python', 'Flask', 'PostgreSQL', 'Docker', 'AWS', 'Git'],
  certificate: {
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: 'March 2023',
    credentialId: 'AWS-CDA-2023-001',
    verifyUrl: '#'
  },
  demo: {
    title: 'E-Commerce Platform Demo',
    description: 'A full-featured e-commerce platform built with React and Python Flask',
    liveUrl: '#',
    codeUrl: '#'
  }
};

export function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions and growing expertise through hands-on development experience.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="glass-card p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
              <div className="mb-4 lg:mb-0">
                <h3 className="text-2xl font-bold text-primary mb-2">{experience.position}</h3>
                <h4 className="text-xl font-semibold mb-2">{experience.company}</h4>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {experience.location}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {experience.description}
            </p>

            <div className="mb-6">
              <h5 className="font-semibold mb-3">Key Achievements:</h5>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold mb-3">Technologies Used:</h5>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary" className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              {/* Certificate Card */}
              <div className="border border-muted rounded-lg p-4 bg-muted/10">
                <div className="flex items-center mb-3">
                  <Award className="text-primary mr-2" size={20} />
                  <h5 className="font-semibold">Certificate</h5>
                </div>
                <h6 className="font-medium text-sm mb-1">{experience.certificate.name}</h6>
                <p className="text-muted-foreground text-xs mb-1">Issued by {experience.certificate.issuer}</p>
                <p className="text-muted-foreground text-xs mb-2">Date: {experience.certificate.date}</p>
                <p className="text-xs text-muted-foreground mb-3">ID: {experience.certificate.credentialId}</p>
                <Button variant="outline" size="sm" className="w-full" asChild>
                  <a href={experience.certificate.verifyUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink size={14} className="mr-2" />
                    Verify Certificate
                  </a>
                </Button>
              </div>

              {/* Demo Card */}
              <div className="border border-muted rounded-lg p-4 bg-muted/10">
                <div className="flex items-center mb-3">
                  <ExternalLink className="text-primary mr-2" size={20} />
                  <h5 className="font-semibold">Project Demo</h5>
                </div>
                <h6 className="font-medium text-sm mb-1">{experience.demo.title}</h6>
                <p className="text-muted-foreground text-xs mb-3">{experience.demo.description}</p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={experience.demo.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-2" />
                      View Live Demo
                    </a>
                  </Button>
                  <Button variant="secondary" size="sm" className="w-full" asChild>
                    <a href={experience.demo.codeUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} className="mr-2" />
                      View Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
