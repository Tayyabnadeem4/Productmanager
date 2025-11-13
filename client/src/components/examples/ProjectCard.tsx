import ProjectCard from '../ProjectCard';
import projectImage from '@assets/generated_images/Product_dashboard_mockup_215235df.png';

export default function ProjectCardExample() {
  return (
    <div className="p-6 max-w-md">
      <ProjectCard
        id="1"
        title="Mobile App Redesign"
        role="Lead Product Manager"
        problem="Users were experiencing high drop-off rates during onboarding, with only 35% completing the signup process."
        solution="Redesigned the onboarding flow with progressive disclosure, reducing steps from 8 to 3 and adding contextual help."
        outcomes="Increased onboarding completion to 78%, resulting in 43% more active users and 2.5x improvement in retention."
        imageUrl={projectImage}
      />
    </div>
  );
}
