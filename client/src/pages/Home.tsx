import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Mail } from "lucide-react";
import { Link } from "wouter";

import project1Image from "@assets/generated_images/Product_dashboard_mockup_215235df.png";
import project2Image from "@assets/generated_images/Team_collaboration_workspace_f65a257f.png";
import project3Image from "@assets/generated_images/Analytics_dashboard_visualization_d9fdb111.png";
import project4Image from "@assets/generated_images/Customer_journey_mapping_ffc785af.png";
import blogImage from "@assets/generated_images/Minimal_productivity_workspace_721780eb.png";

export default function Home() {
  const [mounted, setMounted] = useState(false);

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

  const mockBlogs = [
    {
      id: "1",
      title: "The Art of Stakeholder Management",
      slug: "art-of-stakeholder-management",
      excerpt: "Learn how to effectively communicate with stakeholders across different levels of the organization and build consensus around product decisions.",
      imageUrl: blogImage,
      tags: ["Product Management", "Leadership"],
      readTime: 8,
      createdAt: new Date("2024-01-15").toISOString(),
    },
    {
      id: "2",
      title: "Data-Driven Decision Making",
      slug: "data-driven-decision-making",
      excerpt: "Discover how to leverage analytics and user research to make informed product decisions that drive business growth.",
      imageUrl: blogImage,
      tags: ["Analytics", "Strategy"],
      readTime: 6,
      createdAt: new Date("2024-01-10").toISOString(),
    },
    {
      id: "3",
      title: "Building User-Centric Products",
      slug: "building-user-centric-products",
      excerpt: "A comprehensive guide to understanding user needs, conducting research, and translating insights into product features.",
      imageUrl: blogImage,
      tags: ["UX Research", "Product Design"],
      readTime: 10,
      createdAt: new Date("2024-01-05").toISOString(),
    },
  ];

  const skills = [
    "Product Strategy",
    "User Research",
    "Data Analysis",
    "Roadmap Planning",
    "Agile/Scrum",
    "Stakeholder Management",
    "A/B Testing",
    "Market Research",
  ];

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      <HeroSection />

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6" data-testid="text-about-heading">
              About Me
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a product manager with over 8 years of experience building digital products 
                that solve real problems. My approach combines data-driven decision making with 
                deep user empathy to create solutions that users love and businesses value.
              </p>
              <p>
                Throughout my career, I've led cross-functional teams to launch successful products 
                across various domains, from mobile apps to enterprise platforms. I believe in 
                continuous learning, iteration, and putting users at the center of everything we build.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center mt-8">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" data-testid={`badge-skill-${index}`}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="text-projects-heading">
              Featured Projects
            </h2>
            <Link href="/projects">
              <Button variant="ghost" className="group" data-testid="button-view-all-projects">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mockProjects.slice(0, 4).map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="text-blog-heading">
              Recent Blog Posts
            </h2>
            <Link href="/blog">
              <Button variant="ghost" className="group" data-testid="button-view-all-blog">
                View All
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {mockBlogs.map((blog) => (
              <BlogCard key={blog.id} {...blog} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="text-contact-heading">
              Let's Work Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Interested in collaborating or have a question? I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" data-testid="button-contact-email">
                <Mail className="mr-2 h-5 w-5" />
                Send Email
              </Button>
              <Button size="lg" variant="outline" data-testid="button-contact-linkedin">
                Connect on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
