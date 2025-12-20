const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "C", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: ["React", "Spring Boot", "Django", "Node.js", "Express.js"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "SQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "AWS", "VS Code", "Docker"],
  },
  {
    title: "Core Concepts",
    skills: ["DSA", "OOPs", "REST APIs", "Cyber Security", "Blockchain"],
  },
  {
    title: "Soft Skills",
    skills: ["Communication", "Team Leadership", "Time Management", "Problem Solving"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            MY EXPERTISE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Skills & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-2 bg-secondary rounded-lg text-sm font-medium text-foreground/90 hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
