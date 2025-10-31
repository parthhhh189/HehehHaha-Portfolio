import { Code2, Database, Brain, Rocket } from 'lucide-react';

export const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Expertise in MERN stack, React, Node.js, and modern web technologies',
    },
    {
      icon: Database,
      title: 'Backend Architecture',
      description: 'Designing scalable APIs and database solutions with MongoDB, MySQL',
    },
    {
      icon: Brain,
      title: 'AI Integration',
      description: 'Implementing ML models with TensorFlow, PyTorch, and OpenAI APIs',
    },
    {
      icon: Rocket,
      title: 'Performance Optimization',
      description: '35% efficiency improvement and 28% faster response times',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Passionate developer turning ideas into reality
          </p>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 mb-12 animate-fade-in">
            <p className="text-lg text-foreground/90 leading-relaxed mb-6">
              I'm a <span className="text-primary font-semibold">Software Developer</span> based in Kolkata, specializing in backend and full-stack development. 
              Currently working at <span className="text-secondary font-semibold">Value Kare Technologies</span>, 
              I've contributed to an AI-powered EMR platform, developed RESTful APIs, and optimized system performance.
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              With a strong foundation in <span className="text-accent font-semibold">MERN stack</span>, machine learning, and AR/VR technologies, 
              I love building innovative solutions that make a real impact. I'm always excited to learn new technologies and tackle challenging problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
