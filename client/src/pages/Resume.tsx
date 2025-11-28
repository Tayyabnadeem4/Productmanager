import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap, Award, Code } from "lucide-react";

export default function Resume() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const experiences = [
    {
      title: "Senior Product Manager",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading product strategy for B2B SaaS platform serving 10K+ users. Drove 40% increase in user engagement through data-driven feature prioritization.",
      achievements: [
        "Launched 3 major features that increased revenue by 35%",
        "Led cross-functional team of 12 engineers and designers",
        "Reduced churn rate by 25% through improved onboarding",
      ],
    },
    {
      title: "Product Manager",
      company: "Growth Startup Co.",
      period: "2020 - 2022",
      description: "Managed end-to-end product lifecycle for mobile and web applications. Collaborated with stakeholders to define product vision and roadmap.",
      achievements: [
        "Scaled product from 0 to 50K users in 18 months",
        "Implemented analytics framework that improved decision-making",
        "Launched MVP in 3 months with limited resources",
      ],
    },
    {
      title: "Associate Product Manager",
      company: "Enterprise Solutions Ltd.",
      period: "2018 - 2020",
      description: "Supported senior PM in managing enterprise software products. Conducted user research and competitive analysis.",
      achievements: [
        "Conducted 50+ user interviews to inform product decisions",
        "Created product documentation and requirements",
        "Coordinated with engineering on sprint planning",
      ],
    },
  ];

  const education = [
    {
      degree: "MBA, Technology Management",
      institution: "Business School University",
      year: "2018",
    },
    {
      degree: "B.S. Computer Science",
      institution: "Tech University",
      year: "2016",
    },
  ];

  const certifications = [
    "Certified Scrum Product Owner (CSPO)",
    "Product Management Certificate - Product School",
    "Google Analytics Certification",
  ];

  const skills = {
    "Product Strategy": ["Roadmap Planning", "Vision & Strategy", "OKRs", "Prioritization"],
    "Technical": ["SQL", "APIs", "Agile/Scrum", "JIRA", "Figma"],
    "Analytics": ["Google Analytics", "Mixpanel", "A/B Testing", "Data Analysis"],
    "Soft Skills": ["Leadership", "Communication", "Stakeholder Management", "User Research"],
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3" data-testid="text-resume-title">
                Resume
              </h1>
              <p className="text-lg text-slate-300" data-testid="text-resume-subtitle">
                Product Manager with 6+ years of experience
              </p>
            </div>
            <Button size="lg" className="bg-primary hover:bg-primary/90" data-testid="button-download-pdf">
              <Download className="mr-2 h-5 w-5" />
              Download PDF
            </Button>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Experience Section */}
        <Card className="p-8" data-testid="section-experience">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Briefcase className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">Experience</h2>
          </div>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-muted pb-8 last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                <div className="mb-2">
                  <h3 className="text-lg font-semibold" data-testid={`text-exp-title-${index}`}>
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium" data-testid={`text-exp-company-${index}`}>
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted-foreground" data-testid={`text-exp-period-${index}`}>
                    {exp.period}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{exp.description}</p>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="text-sm flex items-start gap-2">
                      <span className="text-primary mt-1.5">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Section */}
          <Card className="p-8" data-testid="section-education">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold">Education</h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index}>
                  <h3 className="font-semibold" data-testid={`text-edu-degree-${index}`}>
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-muted-foreground">{edu.institution}</p>
                  <p className="text-sm text-muted-foreground">{edu.year}</p>
                </div>
              ))}
            </div>
          </Card>

          {/* Certifications Section */}
          <Card className="p-8" data-testid="section-certifications">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <Award className="h-5 w-5 text-amber-500" />
              </div>
              <h2 className="text-2xl font-bold">Certifications</h2>
            </div>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span className="text-sm" data-testid={`text-cert-${index}`}>{cert}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Skills Section */}
        <Card className="p-8" data-testid="section-skills">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <Code className="h-5 w-5 text-emerald-500" />
            </div>
            <h2 className="text-2xl font-bold">Skills & Competencies</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, skillList], index) => (
              <div key={index}>
                <h3 className="font-semibold mb-3" data-testid={`text-skill-category-${index}`}>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-xs"
                      data-testid={`badge-skill-${index}-${skillIndex}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
