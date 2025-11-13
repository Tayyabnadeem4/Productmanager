import { useState, useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
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
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  //todo: remove mock functionality
  const mockProjects = [
    {
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
      imageUrl: project1Image,
      aboutProject: "As a hypothetical Product Manager of YouTube, I was tasked with the task to help YouTube grab a pie of the structured EdTech space currently dominated by Coursera, Udemy, EdX etc.",
      objective: "The objective of the project is to just conduct the user interviews and create a journey map, understand their problems and to prioritize them",
      approach: "Understanding EdTech Space → Goal setting → Objective of a User Interview → Hypothesis → User Survey & User Interview → User Persona Identification → Job To be Done (JTBD) → User Journey Mapping → Problem Identification → Prioritization",
      problem: "YouTube struggled to compete in the structured EdTech market dominated by dedicated learning platforms with limited course organization features and certification options.",
      solution: "Developed a comprehensive framework to identify market opportunities, conducted user research with 50+ educators and students, and created detailed personas for the EdTech audience. Instead of doing a traditional presentation, I tried a new storytelling approach with video documentation.",
      outcomes: "Created a strategic roadmap for YouTube's entry into structured learning with validated user personas, prioritized problem statements, and a clear understanding of user needs in the EdTech space.",
      learnings: "Learned the importance of user research in product decisions, the value of storytelling in presentations, and how to effectively prioritize features based on user feedback and business impact.",
    },
    {
      id: "2",
      title: "Improving G2.com User Engagement",
      icon: "🎯",
      category: "B2B SaaS",
      summary: "How to improve G2.com's User Engagement",
      skills: ["Product Thinking", "Product Sense", "Prioritization", "Wireframing", "Competitor Analysis"],
      duration: "2 weeks",
      tools: [
        { name: "Notion", icon: "📋" },
        { name: "Figma", icon: "🎨" }
      ],
      imageUrl: project2Image,
      aboutProject: "G2.com is a leading software marketplace and review platform. The challenge was to identify opportunities to increase user engagement and return visit rates.",
      objective: "Analyze current user behavior, identify pain points, and propose solutions to improve overall user engagement metrics.",
      approach: "Market Research → Competitor Analysis → User Flow Analysis → Pain Point Identification → Feature Ideation → Prioritization → Wireframing → Impact Assessment",
      problem: "G2.com faced declining user engagement with low return visit rates and poor feature adoption among software buyers. Users found it difficult to discover relevant software and compare options effectively.",
      solution: "Implemented personalized recommendation engine based on user behavior, improved search functionality with better filters, and redesigned the review submission flow to be more intuitive and rewarding.",
      outcomes: "Increased user engagement by 35%, improved return visit rate by 42%, and boosted review submissions by 28%. The personalization features led to higher conversion rates for premium listings.",
      learnings: "Understanding the importance of personalization in B2B platforms, the value of competitor analysis in feature development, and how small UX improvements can have significant impacts on engagement.",
    },
    {
      id: "3",
      title: "Analytics Dashboard Redesign",
      icon: "📊",
      category: "Enterprise",
      summary: "Building an intuitive analytics platform for enterprise clients",
      skills: ["Data Analysis", "Dashboard Design", "User Research", "A/B Testing"],
      duration: "4 Weeks",
      tools: [
        { name: "Mixpanel", icon: "📈" },
        { name: "Tableau", icon: "📊" }
      ],
      imageUrl: project3Image,
      aboutProject: "Enterprise customers were struggling with complex analytics tools, leading to low adoption rates and high support ticket volume. The goal was to create an intuitive, powerful analytics platform.",
      objective: "Simplify the analytics experience while maintaining advanced capabilities for power users, reducing training time and support burden.",
      approach: "User Interviews → Current State Analysis → Role-Based Requirements → Information Architecture → Dashboard Prototyping → User Testing → Iterative Refinement → A/B Testing",
      problem: "Enterprise customers struggled with complex analytics tools, resulting in low adoption (45%), numerous support tickets, and underutilization of advanced features. Many users relied on manual Excel exports instead.",
      solution: "Redesigned dashboard with role-based views, automated insights using AI, and customizable widgets based on extensive user testing. Implemented progressive disclosure to make advanced features discoverable without overwhelming new users.",
      outcomes: "Achieved 85% user adoption, reduced support tickets by 60%, and improved customer satisfaction scores by 45%. Training time decreased from 2 weeks to 3 days.",
      learnings: "The importance of progressive disclosure in complex applications, value of role-based design for enterprise software, and how AI-powered insights can drive feature adoption.",
    },
    {
      id: "4",
      title: "Customer Journey Optimization",
      icon: "🗺️",
      category: "E-commerce",
      summary: "Simplifying the purchase flow to reduce cart abandonment",
      skills: ["Journey Mapping", "Conversion Optimization", "Wireframing", "User Testing"],
      duration: "3 Weeks",
      tools: [
        { name: "Hotjar", icon: "🔥" },
        { name: "Optimizely", icon: "🧪" }
      ],
      imageUrl: project4Image,
      aboutProject: "An e-commerce platform was experiencing high cart abandonment rates, resulting in significant revenue loss. The project focused on identifying and addressing friction points in the purchase journey.",
      objective: "Reduce cart abandonment rate by at least 30% through systematic journey mapping and optimization.",
      approach: "Analytics Review → Heatmap Analysis → User Session Recording → Pain Point Identification → Journey Mapping → A/B Test Design → Implementation → Measurement",
      problem: "High cart abandonment rate of 68% due to complicated checkout process (8 steps), unclear shipping information, mandatory account creation, and lack of payment options. Mobile experience was particularly poor.",
      solution: "Mapped entire customer journey, simplified checkout to 3 steps, added progress indicators, implemented guest checkout option, provided upfront shipping costs, and optimized mobile experience. Added trust signals and multiple payment options.",
      outcomes: "Reduced cart abandonment to 32% (53% improvement), increased conversion rate by 54%, and improved average order value by 23%. Mobile conversion improved by 67%.",
      learnings: "The critical importance of reducing friction in conversion funnels, the value of guest checkout options, and how transparency in pricing builds trust and drives conversions.",
    },
  ];

  //todo: remove mock functionality
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

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

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
              <ProjectCard 
                key={project.id} 
                {...project} 
                onClick={() => handleProjectClick(project)}
              />
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

      <ProjectModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        project={selectedProject}
      />
    </div>
  );
}
