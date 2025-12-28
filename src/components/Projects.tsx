import { Github, Layers } from "lucide-react";

const projects = [
  {
    title: "Banking & Finance Website",
    description: "A modern banking interface with secure transactions, account management, and financial analytics.",
    techStack: ["React", "JavaScript", "CSS", "REST API"],
    highlights: [
      "Developed responsive front-end interface with modern UI/UX",
      "Collaborated in an agile team environment with daily standups",
      "Implemented secure form validation and data handling",
      "Created reusable component library for consistent design",
    ],
    github: "https://github.com/ATMAKURU-PRAKASH/onlinebankingsystem_mern",
    featured: false,
  }, {
    title: "Online Job Portal",
    description: "A full-featured job portal connecting employers with job seekers, featuring advanced search and application tracking.",
    techStack: ["Django", "Python", "MySql","PgAdmin", "REST API", "HTML/CSS"],
    highlights: [
      "Designed and maintained robust server-side systems for job postings",
      "Implemented user authentication and profile management features",
      "Optimized database queries for faster search and filtering",
      "Enhanced user interactions with real-time notification system",
    ],
    github: "https://github.com/ATMAKURU-PRAKASH/SDP-project",
    featured: true,
  },
  {
    title: "Student Feedback Evaluation System",
    description: "A comprehensive platform for collecting and analyzing student feedback with real-time analytics and reporting dashboards.",
    techStack: ["Spring Boot", "Java", "React", "PostgreSQL", "REST API"],
    highlights: [
      "Led full-stack development from architecture to deployment",
      "Implemented role-based access control for students and faculty",
      "Designed RESTful APIs for seamless frontend-backend integration",
      "Improved team collaboration through agile practices and code reviews",
    ],
    github: "https://github.com/Greeshmanth3699/FeedbackEvaluationSystem",
    featured: true,
  },
 
  
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            MY PORTFOLIO
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Things I've Built</h2>
        </div>

        <div className="space-y-12 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-gradient-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300 animate-slide-up ${
                project.featured ? "shadow-lg shadow-primary/5" : ""
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Layers className="text-primary" size={20} />
                    </div>
                    {project.featured && (
                      <span className="text-xs font-mono bg-primary/20 text-primary px-2 py-1 rounded">
                        Featured
                      </span>
                    )}
                  </div>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-all"
                  >
                    <Github size={16} />
                  </a>
                </div>

                <h3 className="text-xl md:text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary rounded-full text-xs font-mono text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="text-primary mt-1.5">▹</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
