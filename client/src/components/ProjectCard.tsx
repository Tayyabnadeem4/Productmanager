import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ProjectCardProps {
  id: string;
  title: string;
  role: string;
  problem: string;
  solution: string;
  outcomes: string;
  imageUrl?: string;
}

export default function ProjectCard({
  id,
  title,
  role,
  problem,
  solution,
  outcomes,
  imageUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate active-elevate-2 transition-all h-full flex flex-col" data-testid={`card-project-${id}`}>
      {imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            data-testid={`img-project-${id}`}
          />
        </div>
      )}
      <CardHeader className="flex-row items-start justify-between gap-4 space-y-0">
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-1" data-testid={`text-project-title-${id}`}>{title}</h3>
          <Badge variant="secondary" className="text-xs" data-testid={`badge-role-${id}`}>{role}</Badge>
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-1">Problem</h4>
          <p className="text-sm line-clamp-2" data-testid={`text-problem-${id}`}>{problem}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-1">Solution</h4>
          <p className="text-sm line-clamp-2" data-testid={`text-solution-${id}`}>{solution}</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-muted-foreground mb-1">Outcomes</h4>
          <p className="text-sm line-clamp-2" data-testid={`text-outcomes-${id}`}>{outcomes}</p>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/projects/${id}`}>
          <Button variant="ghost" size="sm" className="group" data-testid={`button-view-project-${id}`}>
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
