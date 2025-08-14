import { Card } from '@/components/ui/card';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 98 },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Python', level: 80 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'GraphQL', level: 75 },
      { name: 'REST APIs', level: 90 },
    ],
  },
  {
    title: 'Tools & Design',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 80 },
      { name: 'AWS', level: 70 },
      { name: 'Vercel', level: 85 },
    ],
  },
];

const technologies = [
  'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
  'Next.js', 'Tailwind CSS', 'GraphQL', 'Docker', 'AWS', 'Git',
  'Figma', 'Adobe XD', 'Vercel', 'JavaScript', 'HTML5', 'CSS3'
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
                      <span className="text-sm font-medium">{skill.name}</span>
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