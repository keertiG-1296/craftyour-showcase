import { Card } from '@/components/ui/card';
import { Code, Database, Server, GitBranch, Github, Container, Zap, Globe } from 'lucide-react';
import avatar from '@/assets/avatar.jpg';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95, icon: Code },
      { name: 'TypeScript', level: 90, icon: Code },
      { name: 'Next.js', level: 85, icon: Globe },
      { name: 'Tailwind CSS', level: 95, icon: Code },
      { name: 'JavaScript', level: 95, icon: Code },
      { name: 'HTML/CSS', level: 98, icon: Code },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      { name: 'Python', level: 90, icon: Code },
      { name: 'Flask', level: 85, icon: Server },
      { name: 'FastAPI', level: 80, icon: Zap },
      { name: 'SQL', level: 88, icon: Database },
      { name: 'MySQL', level: 85, icon: Database },
      { name: 'PostgreSQL', level: 85, icon: Database },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', level: 92, icon: GitBranch },
      { name: 'GitHub', level: 90, icon: Github },
      { name: 'Docker', level: 78, icon: Container },
      { name: 'Postman', level: 85, icon: Globe },
      { name: 'AWS', level: 70, icon: Server },
      { name: 'Vercel', level: 85, icon: Globe },
    ],
  },
];

const technologies = [
  'React', 'TypeScript', 'Python', 'Flask', 'FastAPI', 'SQL', 'MySQL', 'PostgreSQL',
  'Next.js', 'Tailwind CSS', 'Git', 'GitHub', 'Docker', 'Postman', 'JavaScript', 'HTML5', 'CSS3', 'AWS', 'Vercel'
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit built through years of experience and continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card key={index} className="glass-card p-6">
              <h3 className="text-2xl font-semibold mb-6 text-center">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <skill.icon size={16} className="text-primary" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-primary h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="glass-card p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">Technologies I Work With</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}