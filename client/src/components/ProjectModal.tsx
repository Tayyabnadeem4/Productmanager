import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink } from "lucide-react";

interface ProjectModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    id: string;
    title: string;
    icon?: string;
    category: string;
    summary: string;
    preview?: string;
    skills: string[];
    duration: string;
    tools: Array<{ name: string; icon?: string }>;
    imageUrl?: string;
    problem?: string;
    solution?: string;
    outcomes?: string;
  } | null;
}

export default function ProjectModal({ open, onOpenChange, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] p-0" data-testid="dialog-project">
        <ScrollArea className="max-h-[90vh]">
          {project.imageUrl && (
            <div className="aspect-video overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                data-testid="img-modal-hero"
              />
            </div>
          )}
          
          <div className="p-8 space-y-6">
            <DialogHeader>
              <div className="flex items-start gap-4">
                {project.icon && (
                  <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-3xl bg-muted rounded-lg">
                    {project.icon}
                  </div>
                )}
                <div className="flex-1">
                  <DialogTitle className="text-3xl font-bold mb-3" data-testid="text-modal-title">
                    {project.title}
                  </DialogTitle>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Category</span>
                </div>
                <Badge variant="secondary" data-testid="badge-category">{project.category}</Badge>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Summary</span>
                </div>
                <p className="text-sm" data-testid="text-modal-summary">{project.summary}</p>
              </div>

              {project.preview && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Preview</span>
                  </div>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                    data-testid="link-preview"
                  >
                    View Project
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Skills Learned</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary"
                      data-testid={`badge-modal-skill-${index}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              {project.problem && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Problem</span>
                  </div>
                  <p className="text-sm" data-testid="text-modal-problem">{project.problem}</p>
                </div>
              )}

              {project.solution && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Solution</span>
                  </div>
                  <p className="text-sm" data-testid="text-modal-solution">{project.solution}</p>
                </div>
              )}

              {project.outcomes && (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm font-medium text-muted-foreground">Outcomes</span>
                  </div>
                  <p className="text-sm" data-testid="text-modal-outcomes">{project.outcomes}</p>
                </div>
              )}

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Time to Complete</span>
                </div>
                <p className="text-sm" data-testid="text-modal-duration">{project.duration}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Tools</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-2 text-sm"
                      data-testid={`tool-modal-${index}`}
                    >
                      {tool.icon && <span className="text-base">{tool.icon}</span>}
                      <span>{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
