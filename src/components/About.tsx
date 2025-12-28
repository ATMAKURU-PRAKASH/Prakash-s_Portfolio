import { Code2, Shield, Users, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with React, Spring Boot, and modern databases.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Focus",
    description: "Specialized knowledge in cyber security and blockchain technology.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Experience in agile environments with industry-standard code review practices.",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "250+ problems solved across competitive programming platforms.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            GET TO KNOW
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            Final-year B.Tech student at KL University specializing in Computer Science 
            with a focus on Cyber Security and Blockchain Technology. I thrive on building 
            meaningful digital solutions and contributing to production-quality systems. 
            Ready to contribute and grow within teams that value rigor, reliability, and 
            end-to-end project ownership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 group animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <item.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
