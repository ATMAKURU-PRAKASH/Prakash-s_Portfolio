import { GraduationCap, BookOpen } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    specialization: "Cyber Security & Blockchain Technology",
    institution: "K L Deemed to be University, Vaddeswaram",
    duration: "2022 - 2026",
    current: true,
  },
  {
    degree: "Intermediate (12th)",
    field: "Science Stream",
    institution: "Sri Vivekanandha Junior College, Tenali",
    duration: "2020 - 2022",
    current: false,
  },
  {
    degree: "SSC (10th)",
    field: "",
    institution: "Akshara Geetha Vidya Nikathan High School, Tenali",
    duration: "2019 - 2020",
    current: false,
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Object-Oriented Programming",
  "Database Management Systems",
  "Computer Networks",
  "Operating Systems",
  "Software Engineering",
  "Cyber Security Fundamentals",
  "Blockchain Technology",
  "Cloud Computing",

];

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            MY BACKGROUND
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />
            
            {education.map((edu, index) => (
              <div
                key={edu.degree}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 animate-slide-up ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary md:-translate-x-1/2 translate-y-6">
                  {edu.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                  )}
                </div>

                {/* Content */}
                <div className={`flex-1 ml-12 md:ml-0 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="text-primary" size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg">{edu.degree}</h3>
                          {edu.current && (
                            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded font-mono">
                              Current
                            </span>
                          )}
                        </div>
                        {edu.field && (
                          <p className="text-primary text-sm mb-1">{edu.field}</p>
                        )}
                        {edu.specialization && (
                          <p className="text-muted-foreground text-sm mb-2">
                            Specialization: {edu.specialization}
                          </p>
                        )}
                        <p className="text-muted-foreground text-sm">{edu.institution}</p>
                        <p className="text-muted-foreground text-sm font-mono mt-2">
                          {edu.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>

          {/* Relevant Coursework */}
          <div className="mt-16 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
              <BookOpen className="text-primary" size={24} />
              Relevant Coursework
            </h3>
            <div className="flex flex-wrap gap-3">
              {coursework.map((course) => (
                <span
                  key={course}
                  className="px-4 py-2 bg-secondary rounded-lg text-sm font-medium hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
