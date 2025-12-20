import { Code, Trophy, Target, Zap } from "lucide-react";

const profiles = [
  {
    platform: "LeetCode",
    icon: "🔶",
    stats: "Problem Solving",
    link: "https://leetcode.com/u/Atmakuru_Prakash1/",
  },
  {
    platform: "CodeChef",
    icon: "👨‍🍳",
    stats: "Competitive Coding",
    link: "https://www.codechef.com/users/kl2200031591",
  },
  // {
  //   platform: "HackerRank",
  //   icon: "💚",
  //   stats: "Skill Badges",
  //   link: "https://hackerrank.com/",
  // },
 
];

const CodingProfiles = () => {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">
            CODING JOURNEY
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Competitive Programming</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Stats highlight */}
          <div className="bg-gradient-card p-8 rounded-2xl border border-border mb-12 text-center animate-slide-up">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Trophy className="text-primary" size={32} />
              <span className="text-4xl font-bold text-gradient">200+</span>
            </div>
            <p className="text-xl text-foreground mb-2">Problems Solved</p>
            <p className="text-muted-foreground">
              Across CodeChef, LeetCode with rankings in multiple contests
            </p>
          </div>

          {/* Profiles grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {profiles.map((profile, index) => (
              <a
                key={profile.platform}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-glow-subtle transition-all text-center group animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-4xl mb-4 block">{profile.icon}</span>
                <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                  {profile.platform}
                </h3>
                <p className="text-sm text-muted-foreground">{profile.stats}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingProfiles;
