import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import heroSpace from '@/assets/hero-space.jpg';

export const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroSpace})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-0" />

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-fade-in">
          <div className="inline-block mb-4 animate-float">
            <span className="px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-primary/30 text-sm text-primary">
              Full Stack Developer
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Parthasarathi Adak
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Backend & Full-Stack Developer specializing in{' '}
            <span className="text-primary font-semibold">MERN Stack</span>,{' '}
            <span className="text-secondary font-semibold">AI Integration</span>, and{' '}
            <span className="text-accent font-semibold">scalable solutions</span>
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button
              onClick={() => scrollToSection('projects')}
              size="lg"
              className="bg-primary hover:bg-primary/90 animate-glow"
            >
              View Projects
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              size="lg"
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
            >
              Get in Touch
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 animate-fade-in">
            <a
              href="https://github.com/parthhhh189"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/parthasarathi-adak-415204233"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-secondary transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:sarathipartha2077@gmail.com"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float-delayed">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
