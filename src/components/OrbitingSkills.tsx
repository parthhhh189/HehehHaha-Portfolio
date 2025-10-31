import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: string;
}

export const OrbitingSkills = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills: Skill[] = [
    // Frontend
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', category: 'frontend' },
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', category: 'frontend' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', category: 'frontend' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'frontend' },
    
    // Backend
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'backend' },
    { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend' },
    { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', category: 'backend' },
    
    // Database
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', category: 'database' },
    { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', category: 'database' },
    
    // Languages
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'language' },
    { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', category: 'language' },
    { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg', category: 'language' },
    
    // Tools
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'tools' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', category: 'tools' },
    { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'tools' },
    { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', category: 'tools' },
    { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg', category: 'tools' },
  ];

  // Create three orbits with different radii
  const orbit1Skills = skills.slice(0, 8);
  const orbit2Skills = skills.slice(8, 16);
  const orbit3Skills = skills.slice(16);

  const createOrbitItems = (items: Skill[], orbitNumber: number) => {
    const radius = orbitNumber === 1 ? 140 : orbitNumber === 2 ? 220 : 300;
    const animationDuration = orbitNumber === 1 ? 40 : orbitNumber === 2 ? 50 : 60;
    
    return items.map((skill, index) => {
      const angle = (360 / items.length) * index;
      const delay = -(animationDuration / items.length) * index;

      return (
        <div
          key={`${orbitNumber}-${skill.name}`}
          className="absolute"
          style={{
            animation: `orbit ${animationDuration}s linear infinite`,
            animationDelay: `${delay}s`,
            transformOrigin: '0 0',
          }}
        >
          <div
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{
              left: `${radius}px`,
            }}
          >
            <div 
              className="group relative"
              style={{
                animation: `counterRotate ${animationDuration}s linear infinite`,
                animationDelay: `${delay}s`,
              }}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 transition-all duration-300 flex items-center justify-center hover:scale-110 cursor-pointer">
                <img 
                  src={skill.icon} 
                  alt={skill.name}
                  className="w-7 h-7 md:w-10 md:h-10 object-contain"
                  style={{ filter: 'brightness(0.9) contrast(1.1)' }}
                />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                <span className="text-xs font-semibold text-foreground bg-card/90 backdrop-blur-sm px-2 py-1 rounded border border-border">
                  {skill.name}
                </span>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="relative w-full h-[700px] md:h-[800px] flex items-center justify-center">
      {/* Center core */}
      <div className="absolute z-10">
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-glow flex items-center justify-center">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center">
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
              PA
            </span>
          </div>
        </div>
      </div>

      {/* Orbit paths */}
      <div className="absolute w-[280px] h-[280px] md:w-[280px] md:h-[280px] rounded-full border border-primary/20 animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute w-[440px] h-[440px] md:w-[440px] md:h-[440px] rounded-full border border-secondary/20 animate-pulse" style={{ animationDuration: '5s' }} />
      <div className="absolute w-[600px] h-[600px] md:w-[600px] md:h-[600px] rounded-full border border-accent/20 animate-pulse" style={{ animationDuration: '6s' }} />

      {/* Orbiting skills */}
      {mounted && (
        <>
          <div className="absolute inset-0 flex items-center justify-center">
            {createOrbitItems(orbit1Skills, 1)}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            {createOrbitItems(orbit2Skills, 2)}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            {createOrbitItems(orbit3Skills, 3)}
          </div>
        </>
      )}

      {/* CSS animations */}
      <style>{`
        @keyframes orbit {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes counterRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </div>
  );
};
