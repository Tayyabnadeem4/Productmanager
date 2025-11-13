import { useRoute } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import blogImage from "@assets/generated_images/Minimal_productivity_workspace_721780eb.png";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");

  const mockPost = {
    title: "The Art of Stakeholder Management",
    slug: "art-of-stakeholder-management",
    excerpt: "Learn how to effectively communicate with stakeholders across different levels of the organization.",
    content: `
# Introduction

Stakeholder management is one of the most critical yet challenging aspects of product management. As a PM, you're constantly balancing competing interests, managing expectations, and building alignment across diverse groups.

## Understanding Your Stakeholders

The first step in effective stakeholder management is understanding who your stakeholders are and what they care about. Different stakeholders have different priorities:

- **Executives** care about business impact, revenue, and strategic alignment
- **Engineering teams** care about technical feasibility and resource allocation
- **Design teams** care about user experience and design quality
- **Sales teams** care about customer needs and competitive positioning
- **Customers** care about solving their problems effectively

## Communication Strategies

Clear, consistent communication is the foundation of good stakeholder management. Here are key strategies:

### 1. Tailor Your Message

Different stakeholders need different information at different levels of detail. Executives want high-level strategic insights, while engineering teams need detailed technical specifications.

### 2. Establish Regular Touchpoints

Don't wait for stakeholders to come to you. Proactively schedule regular check-ins to share updates, gather feedback, and maintain alignment.

### 3. Be Transparent About Trade-offs

When making difficult decisions, be transparent about the trade-offs you're considering. This builds trust and helps stakeholders understand the reasoning behind your choices.

## Building Consensus

Getting stakeholders aligned on a decision can be challenging. Here's how to build consensus effectively:

1. **Start with the problem, not the solution** - Help stakeholders understand the problem you're trying to solve before proposing solutions
2. **Gather input early** - Involve stakeholders in the decision-making process early to build buy-in
3. **Document decisions** - Write down what was decided and why to prevent future confusion
4. **Follow up** - After making a decision, follow up to ensure everyone is still aligned

## Conclusion

Effective stakeholder management is a skill that takes time to develop. Focus on building relationships, communicating clearly, and creating alignment around shared goals. With practice, you'll become more confident in navigating complex stakeholder dynamics.
    `,
    imageUrl: blogImage,
    tags: ["Product Management", "Leadership", "Communication"],
    readTime: 8,
    createdAt: new Date("2024-01-15").toISOString(),
  };

  const formattedDate = new Date(mockPost.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="min-h-screen py-16 md:py-24">
      <div className="container mx-auto px-6">
        <Link href="/blog">
          <Button variant="ghost" className="mb-8" data-testid="button-back">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Button>
        </Link>

        <article className="max-w-3xl mx-auto">
          <div className="mb-8">
            {mockPost.imageUrl && (
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={mockPost.imageUrl}
                  alt={mockPost.title}
                  className="w-full h-full object-cover"
                  data-testid="img-post-hero"
                />
              </div>
            )}

            <h1 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-post-title">
              {mockPost.title}
            </h1>

            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1" data-testid="text-post-date">
                <Calendar className="h-4 w-4" />
                {formattedDate}
              </span>
              <span className="flex items-center gap-1" data-testid="text-post-readtime">
                <Clock className="h-4 w-4" />
                {mockPost.readTime} min read
              </span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {mockPost.tags.map((tag, index) => (
                <Badge key={index} variant="secondary" data-testid={`badge-tag-${index}`}>
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div className="prose prose-lg max-w-none" data-testid="text-post-content">
            <div className="space-y-6 leading-relaxed">
              {mockPost.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('# ')) {
                  return (
                    <h2 key={index} className="text-3xl font-semibold mt-12 mb-6">
                      {paragraph.replace('# ', '')}
                    </h2>
                  );
                } else if (paragraph.startsWith('## ')) {
                  return (
                    <h3 key={index} className="text-2xl font-semibold mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h3>
                  );
                } else if (paragraph.startsWith('### ')) {
                  return (
                    <h4 key={index} className="text-xl font-semibold mt-6 mb-3">
                      {paragraph.replace('### ', '')}
                    </h4>
                  );
                } else if (paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').map(item => item.replace('- ', ''));
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2">
                      {items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                } else if (paragraph.match(/^\d+\./)) {
                  const items = paragraph.split('\n');
                  return (
                    <ol key={index} className="list-decimal pl-6 space-y-2">
                      {items.map((item, i) => (
                        <li key={i}>{item.replace(/^\d+\.\s/, '')}</li>
                      ))}
                    </ol>
                  );
                } else if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-muted-foreground">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
