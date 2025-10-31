import { Mail, MapPin, Linkedin, Github, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sarathipartha2077@gmail.com',
      link: 'mailto:sarathipartha2077@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9874759169',
      link: 'tel:+919874759169',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kolkata, West Bengal, India',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      link: 'https://github.com/parthhhh189',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      link: 'https://linkedin.com/in/parthasarathi-adak-415204233',
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Let's work together on your next project
        </p>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6 animate-fade-in-left">
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-primary" size={20} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-foreground hover:text-primary transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground">{info.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6">
                <h3 className="text-xl font-bold mb-4">Connect with Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      size="lg"
                      className="border-primary/50 hover:bg-primary/10 flex-1"
                      asChild
                    >
                      <a href={social.link} target="_blank" rel="noopener noreferrer">
                        <social.icon size={20} className="mr-2" />
                        {social.label}
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Message */}
            <div className="animate-fade-in-right">
              <div className="bg-card/30 backdrop-blur-sm border border-border rounded-xl p-6 h-full flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Let's Create Something Amazing</h3>
                <p className="text-foreground/80 mb-6 leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="space-y-4">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 animate-glow"
                    asChild
                  >
                    <a href="mailto:sarathipartha2077@gmail.com">
                      <Mail size={20} className="mr-2" />
                      Send an Email
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-secondary/50 hover:bg-secondary/10"
                    asChild
                  >
                    <a href="https://linkedin.com/in/parthasarathi-adak-415204233" target="_blank" rel="noopener noreferrer">
                      <Linkedin size={20} className="mr-2" />
                      Connect on LinkedIn
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 Parthasarathi Adak. Built with passion and cosmic energy.</p>
        </div>
      </div>
    </section>
  );
};
