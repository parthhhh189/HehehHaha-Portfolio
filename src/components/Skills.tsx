import { OrbitingSkills } from './OrbitingSkills';

export const Skills = () => {
  const additionalSkills = [
    { name: 'TensorFlow', category: 'AI & ML' },
    { name: 'PyTorch', category: 'AI & ML' },
    { name: 'OpenAI API', category: 'AI & ML' },
    { name: 'LangChain', category: 'AI & ML' },
    { name: 'Machine Learning', category: 'AI & ML' },
    { name: 'Tailwind CSS', category: 'Frontend' },
    { name: 'REST APIs', category: 'Backend' },
    { name: 'JWT Auth', category: 'Backend' },
    { name: 'Postman', category: 'Tools' },
    { name: 'CI/CD', category: 'DevOps' },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Technologies orbiting in my universe
        </p>

        {/* Orbiting Skills Visualization */}
        <div className="mb-16 animate-fade-in">
          <OrbitingSkills />
        </div>

        {/* Additional Skills */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-6 text-foreground">
            Also Experienced With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm text-sm text-foreground border border-border hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
