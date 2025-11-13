import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

import blogImage from "@assets/generated_images/Minimal_productivity_workspace_721780eb.png";

export default function Blog() {
  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const mockBlogs = [
    {
      id: "1",
      title: "The Art of Stakeholder Management",
      slug: "art-of-stakeholder-management",
      excerpt: "Learn how to effectively communicate with stakeholders across different levels of the organization and build consensus around product decisions.",
      imageUrl: blogImage,
      tags: ["Product Management", "Leadership", "Communication"],
      readTime: 8,
      createdAt: new Date("2024-01-15").toISOString(),
    },
    {
      id: "2",
      title: "Data-Driven Decision Making",
      slug: "data-driven-decision-making",
      excerpt: "Discover how to leverage analytics and user research to make informed product decisions that drive business growth.",
      imageUrl: blogImage,
      tags: ["Analytics", "Strategy", "Product Management"],
      readTime: 6,
      createdAt: new Date("2024-01-10").toISOString(),
    },
    {
      id: "3",
      title: "Building User-Centric Products",
      slug: "building-user-centric-products",
      excerpt: "A comprehensive guide to understanding user needs, conducting research, and translating insights into product features.",
      imageUrl: blogImage,
      tags: ["UX Research", "Product Design", "User Experience"],
      readTime: 10,
      createdAt: new Date("2024-01-05").toISOString(),
    },
    {
      id: "4",
      title: "Roadmap Planning Essentials",
      slug: "roadmap-planning-essentials",
      excerpt: "Master the art of creating product roadmaps that align stakeholders, prioritize features, and communicate vision effectively.",
      imageUrl: blogImage,
      tags: ["Strategy", "Planning", "Product Management"],
      readTime: 7,
      createdAt: new Date("2023-12-28").toISOString(),
    },
    {
      id: "5",
      title: "Agile Product Development",
      slug: "agile-product-development",
      excerpt: "Best practices for implementing agile methodologies in product teams and maximizing delivery efficiency.",
      imageUrl: blogImage,
      tags: ["Agile", "Leadership", "Process"],
      readTime: 5,
      createdAt: new Date("2023-12-20").toISOString(),
    },
    {
      id: "6",
      title: "Measuring Product Success",
      slug: "measuring-product-success",
      excerpt: "Key metrics and frameworks for evaluating product performance and demonstrating value to stakeholders.",
      imageUrl: blogImage,
      tags: ["Analytics", "Metrics", "Strategy"],
      readTime: 9,
      createdAt: new Date("2023-12-15").toISOString(),
    },
  ];

  const allTags = Array.from(
    new Set(mockBlogs.flatMap((blog) => blog.tags || []))
  );

  const filteredBlogs = mockBlogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || blog.tags?.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  if (!mounted) return null;

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="text-blog-title">
            Blog
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Insights on product management, leadership, and building products people love.
          </p>
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              data-testid="input-search-blog"
            />
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge
              variant={selectedTag === null ? "default" : "outline"}
              className="cursor-pointer hover-elevate active-elevate-2"
              onClick={() => setSelectedTag(null)}
              data-testid="badge-tag-all"
            >
              All
            </Badge>
            {allTags.map((tag, index) => (
              <Badge
                key={index}
                variant={selectedTag === tag ? "default" : "outline"}
                className="cursor-pointer hover-elevate active-elevate-2"
                onClick={() => setSelectedTag(tag)}
                data-testid={`badge-tag-${index}`}
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
