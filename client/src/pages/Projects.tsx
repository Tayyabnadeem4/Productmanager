import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

import project1Image from "@assets/generated_images/Product_dashboard_mockup_215235df.png";
import project2Image from "@assets/generated_images/Team_collaboration_workspace_f65a257f.png";
import project3Image from "@assets/generated_images/Analytics_dashboard_visualization_d9fdb111.png";
import project4Image from "@assets/generated_images/Customer_journey_mapping_ffc785af.png";

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const mockProjects = [
    {
      id: "1",
      title: "Mobile App Redesign",
      role: "Lead Product Manager",
      problem: "Users were experiencing high drop-off rates during onboarding, with only 35% completing the signup process.",
      solution: "Redesigned the onboarding flow with progressive disclosure, reducing steps from 8 to 3 and adding contextual help.",
      outcomes: "Increased onboarding completion to 78%, resulting in 43% more active users and 2.5x improvement in retention.",
      imageUrl: project1Image,
    },
    {
      id: "2",
      title: "Enterprise Dashboard Platform",
      role: "Senior Product Manager",
      problem: "Complex data visualization needs were not being met, leading to poor decision-making and low adoption rates.",
      solution: "Built a customizable dashboard system with real-time data integration and collaborative features.",
      outcomes: "Achieved 95% user adoption within 3 months, reduced time-to-insight by 60%, and increased customer satisfaction scores by 40%.",
      imageUrl: project2Image,
    },
    {
      id: "3",
      title: "Analytics Integration",
      role: "Product Manager",
      problem: "Customers struggled to understand product usage patterns and ROI due to fragmented analytics tools.",
      solution: "Developed unified analytics platform with automated reporting and AI-powered insights.",
      outcomes: "Reduced customer churn by 25%, increased premium tier upgrades by 35%, and improved NPS by 18 points.",
      imageUrl: project3Image,
    },
    {
      id: "4",
      title: "Customer Journey Optimization",
      role: "Product Manager",
      problem: "Complex user flows resulted in confusion and support tickets increasing by 150% quarter-over-quarter.",
      solution: "Mapped and simplified the entire customer journey, implementing contextual guidance and self-service tools.",
      outcomes: "Decreased support tickets by 65%, improved user satisfaction to 4.7/5, and reduced onboarding time by 50%.",
      imageUrl: project4Image,
    },
  ];

  const filteredProjects = mockProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (!mounted) return null;

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-projects-title">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            A collection of product initiatives I've led, showcasing problem-solving, 
            strategic thinking, and measurable impact.
          </p>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-projects"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No projects found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
