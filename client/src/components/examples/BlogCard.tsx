import BlogCard from '../BlogCard';
import blogImage from '@assets/generated_images/Minimal_productivity_workspace_721780eb.png';

export default function BlogCardExample() {
  return (
    <div className="p-6 max-w-md">
      <BlogCard
        id="1"
        title="The Art of Stakeholder Management"
        slug="art-of-stakeholder-management"
        excerpt="Learn how to effectively communicate with stakeholders across different levels of the organization and build consensus around product decisions."
        imageUrl={blogImage}
        tags={["Product Management", "Leadership", "Communication"]}
        readTime={8}
        createdAt={new Date().toISOString()}
      />
    </div>
  );
}
