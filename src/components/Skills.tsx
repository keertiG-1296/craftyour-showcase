import { Code, Database, GitBranch, Github, Container, Zap, Globe } from 'lucide-react';

const skills = [
  { name: 'Python', icon: Code },
  { name: 'C', icon: Code },
  { name: 'Git', icon: GitBranch },
  { name: 'GitHub', icon: Github },
  { name: 'Flask', icon: Zap },
  { name: 'FastAPI', icon: Zap },
  { name: 'Docker', icon: Container },
  { name: 'SQL', icon: Database },
  { name: 'MySQL', icon: Database },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 slide-in-up">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Backend technologies and tools I work with daily.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-slide glass-card p-6 flex flex-col items-center justify-center min-w-[120px] hover:shadow-glow transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon size={40} className="text-primary mb-3" />
              <span className="text-sm font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}