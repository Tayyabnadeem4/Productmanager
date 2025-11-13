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
    aboutProject: "As a hypothetical Product Manager of YouTube, I was tasked with the task to help YouTube grab a pie of the structured EdTech space currently dominated by Coursera, Udemy, EdX etc.",
    objective: "The objective of the project is to just conduct the user interviews and create a journey map, understand their problems and to prioritize them",
    approach: "Understanding EdTech Space → Goal setting → Objective of a User Interview → Hypothesis → User Survey & User Interview → User Persona Identification → Job To be Done (JTBD) → User Journey Mapping → Problem Identification → Prioritization",
    problem: "YouTube struggled to compete in the structured EdTech market dominated by dedicated learning platforms with limited course organization features.",
    solution: "Developed a comprehensive framework to identify market opportunities and user needs in the EdTech space with detailed personas and journey mapping.",
    outcomes: "Created a strategic roadmap for YouTube's entry into structured learning with validated user personas.",
    learnings: "Learned the importance of user research and storytelling in product presentations.",
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
