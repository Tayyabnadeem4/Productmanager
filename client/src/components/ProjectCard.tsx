import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProjectCardProps {
  id: string;
  title: string;
  icon?: string;
  summary: string;
  skills: string[];
  duration: string;
  tools: Array<{ name: string; icon?: string }>;
  imageUrl?: string;
  onClick?: () => void;
}

export default function ProjectCard({
  id,
  title,
  icon,
  summary,
  skills,
  duration,
  tools,
  imageUrl,
  onClick,
}: ProjectCardProps) {
  return (
    <Card 
      className="overflow-hidden hover-elevate active-elevate-2 transition-all cursor-pointer" 
      onClick={onClick}
      data-testid={`card-project-${id}`}
    >
      {imageUrl && (
        <div className="aspect-video overflow-hidden relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
            data-testid={`img-project-${id}`}
          />
        </div>
      )}
      <div className="p-6 space-y-4">
        <div className="flex items-start gap-3">
          {icon && (
            <div className="w-6 h-6 flex-shrink-0 flex items-center justify-center text-xl">
              {icon}
            </div>
          )}
          <h3 className="text-lg font-semibold flex-1" data-testid={`text-project-title-${id}`}>
            {title}
          </h3>
        </div>
        
        <p className="text-sm text-muted-foreground" data-testid={`text-summary-${id}`}>
          {summary}
        </p>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs"
              data-testid={`badge-skill-${id}-${index}`}
            >
              {skill}
            </Badge>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2 border-t">
          <span className="text-sm text-muted-foreground" data-testid={`text-duration-${id}`}>
            {duration}
          </span>
          <div className="flex items-center gap-2">
            {tools.map((tool, index) => (
              <div 
                key={index}
                className="flex items-center gap-1 text-xs"
                data-testid={`tool-${id}-${index}`}
              >
                {tool.icon && <span>{tool.icon}</span>}
                <span className="text-muted-foreground">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
