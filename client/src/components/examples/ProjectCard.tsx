import ProjectCard from '../ProjectCard';
import projectImage from '@assets/generated_images/Product_dashboard_mockup_215235df.png';

export default function ProjectCardExample() {
  return (
    <div className="p-6 max-w-md">
      <ProjectCard
        id="1"
        title="YouTube in EdTech Space"
        icon="📺"
        summary="How can YouTube grab a pie of structured EdTech space?"
        skills={["User research", "Personas", "MoM Framework", "Customer Journey Map", "Prioritization"]}
        duration="3 Weeks"
        tools={[
          { name: "Typeform", icon: "📝" },
          { name: "Loom", icon: "🎥" }
        ]}
        imageUrl={projectImage}
        onClick={() => console.log('Project clicked')}
      />
    </div>
  );
}
