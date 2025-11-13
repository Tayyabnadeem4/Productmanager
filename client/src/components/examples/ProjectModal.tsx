import { useState } from 'react';
import ProjectModal from '../ProjectModal';
import { Button } from '@/components/ui/button';
import projectImage from '@assets/generated_images/Product_dashboard_mockup_215235df.png';

export default function ProjectModalExample() {
  const [open, setOpen] = useState(true);

  const mockProject = {
    id: "1",
    title: "YouTube in EdTech Space",
    icon: "📺",
    category: "Academic",
    summary: "How can YouTube grab a pie of structured EdTech space?",
    preview: "https://example.com",
    skills: ["User research", "Personas", "MoM Framework", "Customer Journey Map", "Prioritization"],
    duration: "3 Weeks",
    tools: [
      { name: "Typeform", icon: "📝" },
      { name: "Loom", icon: "🎥" }
    ],
    imageUrl: projectImage,
    problem: "YouTube struggled to compete in the structured EdTech market dominated by dedicated learning platforms.",
    solution: "Developed a comprehensive framework to identify market opportunities and user needs in the EdTech space.",
    outcomes: "Created a strategic roadmap for YouTube's entry into structured learning with validated user personas.",
  };

  return (
    <div className="p-6">
      <Button onClick={() => setOpen(true)}>Open Project Modal</Button>
      <ProjectModal 
        open={open}
        onOpenChange={setOpen}
        project={mockProject}
      />
    </div>
  );
}
