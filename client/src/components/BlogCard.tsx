import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";
import { Link } from "wouter";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  tags?: string[];
  readTime?: number;
  createdAt: string;
  slug: string;
}

export default function BlogCard({
  id,
  title,
  excerpt,
  imageUrl,
  tags = [],
  readTime = 5,
  createdAt,
  slug,
}: BlogCardProps) {
  const formattedDate = new Date(createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all h-full flex flex-col" data-testid={`card-blog-${id}`}>
      {imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            data-testid={`img-blog-${id}`}
          />
        </div>
      )}
      <CardHeader>
        <h3 className="text-xl font-semibold line-clamp-2" data-testid={`text-blog-title-${id}`}>{title}</h3>
        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
          <span className="flex items-center gap-1" data-testid={`text-date-${id}`}>
            <Calendar className="h-3 w-3" />
            {formattedDate}
          </span>
          <span className="flex items-center gap-1" data-testid={`text-readtime-${id}`}>
            <Clock className="h-3 w-3" />
            {readTime} min read
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-3" data-testid={`text-excerpt-${id}`}>{excerpt}</p>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.slice(0, 3).map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs" data-testid={`badge-tag-${id}-${index}`}>
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link href={`/blog/${slug}`}>
          <Button variant="ghost" size="sm" data-testid={`button-read-more-${id}`}>
            Read More
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
