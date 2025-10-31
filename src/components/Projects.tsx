import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Projects = () => {
  const projects = [
    {
      title: 'Electronic Medical Register (EMR)',
      description: 'Secure EMR system to digitize patient records with role-based access control and API interoperability. Reduced manual record retrieval time by 60%.',
      tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'JWT Auth'],
      github: 'https://github.com/parthhhh189/EMR-Project',
      color: 'from-primary to-primary/60',
    },
    {
      title: 'Full-Stack E-Commerce Cart',
      description: 'Complete e-commerce application with working database, user authentication, and cart management functionality.',
      tech: ['TypeScript', 'React', 'Node.js', 'Database'],
      github: 'https://github.com/parthhhh189/mock-ecom-cart',
      color: 'from-secondary to-secondary/60',
    },
    {
      title: 'AR/VR Cultural Heritage Site',
      description: 'Immersive tourism platform with AR overlays and VR tours for cultural heritage sites.',
      tech: ['JavaScript', 'React', 'WebXR', 'Three.js', 'Node.js', 'MySQL'],
      color: 'from-accent to-accent/60',
    },
    {
      title: 'Livestream Application',
      description: 'Full-stack livestreaming app with backend and frontend integration, supporting real-time video streaming.',
      tech: ['CSS', 'JavaScript', 'Backend APIs'],
      github: 'https://github.com/parthhhh189/fullstack-livestream-app',
      color: 'from-primary to-secondary',
    },
    {
      title: 'Intraday Trade Detection Bot',
      description: 'Real-time trading bot detecting highs and lows in live markets with technical indicators. Improved decision-making speed by 45%.',
      tech: ['Python', 'Pandas', 'NumPy', 'REST APIs', 'Flask'],
      github: 'https://github.com/parthhhh189/Trade-detector-bot',
      color: 'from-secondary to-accent',
    },
    {
      title: 'Live Vote Polling App',
      description: 'Backend-focused application for real-time voting and polling with live results.',
      tech: ['JavaScript', 'Backend', 'Real-time APIs'],
      github: 'https://github.com/parthhhh189/Live-vote-polling-app',
      color: 'from-accent to-primary',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Building innovative solutions that make an impact
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className={`text-2xl font-bold mb-3 bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                {project.title}
              </h3>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 rounded-full bg-muted/50 text-xs text-foreground/90 border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/parthhhh189" target="_blank" rel="noopener noreferrer">
              <Github size={20} className="mr-2" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
