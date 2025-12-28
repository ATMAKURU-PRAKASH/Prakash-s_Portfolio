import { Briefcase, Award, Trophy } from "lucide-react";

const experiences = [
  {
    type: "internship",
    title: "Data Engineering Virtual Internship",
    organization: "AICTE EduSkills",
    duration: "2024",
    highlights: [
      "Gained hands-on experience with data engineering tools and practices",
      "Worked with data pipelines and ETL processes",
      "Learned industry-standard data processing techniques",
    ],
  },
  {
    type: "internship",
    title: "Cloud Virtual Internship",
    organization: "AICTE EduSkills",
    duration: "2024",
    highlights: [
      "Explored cloud infrastructure and deployment strategies",
      "Gained practical knowledge of AWS services",
      "Implemented cloud-based solutions for real-world scenarios",
    ],
  },
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "RedHat Ex183 Certification", issuer: "RedHat" },
  { name: "Salesforce Certified AI Associate", issuer: "Salesforce" },
  { name: "RPA Certification", issuer: "Automation Anywhere" },
  { name: "Certified System Administrator ", issuer: "Servicenow" },
];

const achievements = [
  {
    title: "Competitive Programming",
    description: "Solved 250+ problems on CodeChef,  and LeetCode with rankings in multiple contests.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            MY JOURNEY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Experience & Achievements</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Internships */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <Briefcase className="text-primary" size={24} />
              Internships
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h4 className="font-semibold text-lg">{exp.title}</h4>
                      <p className="text-primary">{exp.organization}</p>
                    </div>
                    <span className="text-muted-foreground text-sm font-mono mt-2 md:mt-0">
                      {exp.duration}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <Award className="text-primary" size={24} />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="bg-gradient-card p-5 rounded-xl border border-border hover:border-primary/50 transition-all animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h4 className="font-medium mb-1">{cert.name}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
              <Trophy className="text-primary" size={24} />
              Achievements
            </h3>
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                <p className="text-muted-foreground">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
