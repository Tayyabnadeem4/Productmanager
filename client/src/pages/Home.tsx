import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import BlogCard from "@/components/BlogCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Linkedin, Twitter, Github, MapPin, Briefcase, Sparkles, BookOpen, Code, Brain, FileText, User, Layers, MessageSquare } from "lucide-react";
import { Link } from "wouter";

import heroImage from "@assets/generated_images/Professional_product_manager_headshot_238c3190.png";
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

  const portfolioTabs = [
    {
      title: "Resume",
      description: "Explore my professional journey and experience",
      icon: FileText,
      href: "/resume",
      color: "bg-blue-500/10 text-blue-500",
      borderColor: "hover:border-blue-500/50",
    },
    {
      title: "Blog",
      description: "Read my thoughts on product management",
      icon: BookOpen,
      href: "/blog",
      color: "bg-rose-500/10 text-rose-500",
      borderColor: "hover:border-rose-500/50",
    },
    {
      title: "Case Studies",
      description: "Dive into my product success stories",
      icon: Layers,
      href: "/projects",
      color: "bg-purple-500/10 text-purple-500",
      borderColor: "hover:border-purple-500/50",
    },
    {
      title: "About Me",
      description: "Get to know the person behind the products",
      icon: User,
      href: "#about",
      color: "bg-emerald-500/10 text-emerald-500",
      borderColor: "hover:border-emerald-500/50",
    },
    {
      title: "Contact",
      description: "Let's connect and collaborate",
      icon: MessageSquare,
      href: "#contact",
      color: "bg-amber-500/10 text-amber-500",
      borderColor: "hover:border-amber-500/50",
    },
  ];

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen">
      {/* Hero Section with Bento Box Layout */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Profile */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="p-8 text-center space-y-6">
                <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary/20 ring-4 ring-primary/10">
                  <img
                   // src={heroImage}
                    alt="Qudsia Noor"
                    className="w-full h-full object-cover"
                    data-testid="img-profile"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold mb-2" data-testid="text-name">
                    Qudsia Noor
                  </h1>
                  <p className="text-lg text-muted-foreground mb-4">
                    Senior Product Manager
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Building digital products that solve real problems and create meaningful impact for users.
                  </p>
                </div>
                <div className="flex justify-center gap-3">
                  <Button size="icon" variant="outline" data-testid="button-linkedin">
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" data-testid="button-twitter">
                    <Twitter className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" data-testid="button-github">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="outline" data-testid="button-email">
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 border-blue-200 dark:border-blue-800">
                <div className="flex items-start gap-3 mb-3">
                  <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                  <div>
                    <h3 className="font-semibold mb-1">Currently Working On</h3>
                    <p className="text-sm text-muted-foreground">
                      Leading product strategy for an AI-powered analytics platform
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Right Column - Interactive Cards */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-min">
              <Card className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 border-emerald-200 dark:border-emerald-800 hover-elevate active-elevate-2 cursor-pointer" data-testid="card-exploring">
                <div className="flex items-start gap-3">
                  <Sparkles className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">What I'm Exploring</h3>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <Brain className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <span>AI/ML in product development</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Code className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <span>No-code automation tools</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                        <span>Behavioral economics</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-200 dark:border-amber-800 hover-elevate active-elevate-2 cursor-pointer" data-testid="card-reading">
                <div className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Currently Reading</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <p className="font-medium">"Inspired" by Marty Cagan</p>
                        <p className="text-xs text-muted-foreground">Product leadership</p>
                      </div>
                      <div>
                        <p className="font-medium">"The Mom Test"</p>
                        <p className="text-xs text-muted-foreground">Customer interviews</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 hover-elevate active-elevate-2 cursor-pointer md:col-span-2" data-testid="card-experience">
                <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Work Experience
                </h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🚀</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Senior Product Manager</h4>
                      <p className="text-sm text-muted-foreground">TechCorp Inc. • 2021 - Present</p>
                      <p className="text-sm mt-1">Leading product strategy for B2B SaaS platform serving 10K+ customers</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">💡</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">Product Manager</h4>
                      <p className="text-sm text-muted-foreground">StartupXYZ • 2019 - 2021</p>
                      <p className="text-sm mt-1">Launched 3 major features that increased user engagement by 150%</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 border-purple-200 dark:border-purple-800 hover-elevate active-elevate-2 cursor-pointer md:col-span-2" data-testid="card-achievements">
                <h3 className="font-semibold text-lg mb-4">Key Achievements</h3>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">15+</div>
                    <div className="text-sm text-muted-foreground mt-1">Products Launched</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">50K+</div>
                    <div className="text-sm text-muted-foreground mt-1">Users Impacted</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">8+</div>
                    <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Explore My Portfolio Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-portfolio-heading">
              Explore My Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover my work, insights, and the journey that shaped me as a product manager
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {portfolioTabs.map((tab, index) => (
              <Link key={index} href={tab.href}>
                <Card 
                  className={`p-6 h-full cursor-pointer transition-all duration-300 hover-elevate active-elevate-2 hover:shadow-lg ${tab.borderColor} border-2`}
                  onClick={(e) => {
                    if (tab.href.startsWith('#')) {
                      e.preventDefault();
                      scrollToSection(tab.href);
                    }
                  }}
                  data-testid={`card-portfolio-${tab.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className={`w-12 h-12 rounded-lg ${tab.color} flex items-center justify-center mb-4`}>
                    <tab.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{tab.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tab.description}</p>
                  <div className="flex items-center text-primary text-sm font-medium group">
                    Explore
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24">
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
              {["Product Strategy", "User Research", "Data Analysis", "Roadmap Planning", "Agile/Scrum", "Stakeholder Management", "A/B Testing", "Market Research"].map((skill, index) => (
                <Badge key={index} variant="secondary" data-testid={`badge-skill-${index}`}>
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="text-projects-heading">
              Featured Product Cases
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

      {/* Blog Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold" data-testid="text-blog-heading">
              Recent Articles
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

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-muted/30">
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
