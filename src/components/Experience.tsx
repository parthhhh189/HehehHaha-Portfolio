import { Briefcase } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Backend Developer',
      company: 'Value Kare Technologies',
      location: 'Jaipur',
      period: 'Jul 2025 - Present',
      highlights: [
        'Contributed to AI-powered EMR & Patient Navigation Platform with ML models',
        'Developed RESTful APIs with Node.js, improving efficiency by 35%',
        'Reduced response time by 28% through optimization',
        'Integrated backend with React Native frontend, MongoDB, and Firebase',
      ],
      color: 'primary',
    },
    {
      title: 'Business Development Executive',
      company: 'Meknetics Innovations P Ltd',
      location: 'Pune',
      period: 'May 2025 - Jul 2025',
      highlights: [
        'Collaborated with technical teams to align solutions with business needs',
        'Bridged gap between technical capabilities and market requirements',
      ],
      color: 'secondary',
    },
    {
      title: 'Data Analyst Intern',
      company: 'Deloitte',
      location: 'Remote',
      period: 'May 2025 - Jun 2025',
      highlights: [
        'Assisted in data preprocessing and dashboard creation',
        'Improved reporting efficiency through data visualization',
      ],
      color: 'accent',
    },
    {
      title: 'Project Intern',
      company: 'Jadavpur University',
      location: 'Kolkata',
      period: 'Jan 2025 - Jun 2025',
      highlights: [
        'Research and technical support on software and data analysis tasks',
      ],
      color: 'primary',
    },
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Experience
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          My professional journey
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 animate-fade-in ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-${exp.color} border-4 border-background transform -translate-x-1/2 md:translate-x-0`} />

                <div className="ml-16 md:ml-0 bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className={`text-${exp.color}`} size={20} />
                    <h3 className="text-xl font-bold">{exp.title}</h3>
                  </div>
                  <div className="text-lg font-semibold text-foreground/90 mb-1">
                    {exp.company} • {exp.location}
                  </div>
                  <div className="text-sm text-muted-foreground mb-4">{exp.period}</div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-foreground/80 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
