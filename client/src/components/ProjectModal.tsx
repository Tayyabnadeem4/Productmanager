import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ExternalLink, Info, FileText, Lightbulb, Target, TrendingUp, Circle } from "lucide-react";
import { useState } from "react";

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
    aboutProject?: string;
    objective?: string;
    approach?: string;
    problem?: string;
    solution?: string;
    outcomes?: string;
    learnings?: string;
  } | null;
}

export default function ProjectModal({ open, onOpenChange, project }: ProjectModalProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['about', 'approach']));

  if (!project) return null;

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] p-0 gap-0" data-testid="dialog-project">
        <ScrollArea className="max-h-[90vh]">
          {project.imageUrl && (
            <div className="aspect-video overflow-hidden border-b">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
                data-testid="img-modal-hero"
              />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-0">
            {/* Left Sidebar - Metadata */}
            <div className="border-r p-6 space-y-6 bg-muted/20">
              {project.icon && (
                <div className="flex items-center justify-center w-16 h-16 bg-background rounded-lg border text-3xl">
                  {project.icon}
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Circle className="h-3 w-3" />
                    <span className="font-medium">Category</span>
                  </div>
                  <Badge variant="secondary" className="ml-5" data-testid="badge-category">
                    {project.category}
                  </Badge>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <FileText className="h-3 w-3" />
                    <span className="font-medium">Summary</span>
                  </div>
                  <p className="text-sm ml-5" data-testid="text-modal-summary">
                    {project.summary}
                  </p>
                </div>

                {project.preview && (
                  <div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <ExternalLink className="h-3 w-3" />
                      <span className="font-medium">Preview</span>
                    </div>
                    <a
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-primary hover:underline ml-5"
                      data-testid="link-preview"
                    >
                      View Project
                    </a>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Lightbulb className="h-3 w-3" />
                    <span className="font-medium">Skills Learned</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 ml-5">
                    {project.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="text-xs"
                        data-testid={`badge-modal-skill-${index}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Circle className="h-3 w-3" />
                    <span className="font-medium">Time to Complete</span>
                  </div>
                  <p className="text-sm ml-5" data-testid="text-modal-duration">
                    {project.duration}
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Circle className="h-3 w-3" />
                    <span className="font-medium">Tools</span>
                  </div>
                  <div className="space-y-1 ml-5">
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

            {/* Right Content - Main Content */}
            <div className="p-8 space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2" data-testid="text-modal-title">
                  {project.title}
                </h1>
              </div>

              {/* About the Project Section */}
              {project.aboutProject && (
                <div className="space-y-3">
                  <button
                    onClick={() => toggleSection('about')}
                    className="flex items-center gap-2 text-lg font-semibold w-full text-left hover-elevate active-elevate-2 p-2 rounded-md -ml-2"
                    data-testid="button-toggle-about"
                  >
                    <Info className="h-5 w-5 text-primary" />
                    About the Project
                  </button>
                  {expandedSections.has('about') && (
                    <div className="bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4 space-y-3" data-testid="section-about">
                      <div className="space-y-2">
                        <p className="text-sm leading-relaxed">
                          {project.aboutProject}
                        </p>
                        {project.objective && (
                          <div className="mt-3">
                            <p className="text-sm leading-relaxed">
                              <span className="font-medium">Objective: </span>
                              {project.objective}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Approach Section */}
              {project.approach && (
                <div className="space-y-3">
                  <button
                    onClick={() => toggleSection('approach')}
                    className="flex items-center gap-2 text-lg font-semibold w-full text-left hover-elevate active-elevate-2 p-2 rounded-md -ml-2"
                    data-testid="button-toggle-approach"
                  >
                    <FileText className="h-5 w-5 text-primary" />
                    Approach
                  </button>
                  {expandedSections.has('approach') && (
                    <div className="bg-amber-50 dark:bg-amber-950/30 rounded-lg p-4" data-testid="section-approach">
                      <div className="text-sm leading-relaxed whitespace-pre-line">
                        {project.approach}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Problem Section */}
              {project.problem && (
                <div className="space-y-3">
                  <button
                    onClick={() => toggleSection('problem')}
                    className="flex items-center gap-2 text-lg font-semibold w-full text-left hover-elevate active-elevate-2 p-2 rounded-md -ml-2"
                    data-testid="button-toggle-problem"
                  >
                    <Target className="h-5 w-5 text-destructive" />
                    Problem
                  </button>
                  {expandedSections.has('problem') && (
                    <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4" data-testid="section-problem">
                      <p className="text-sm leading-relaxed">{project.problem}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Solution Section */}
              {project.solution && (
                <div className="space-y-3">
                  <button
                    onClick={() => toggleSection('solution')}
                    className="flex items-center gap-2 text-lg font-semibold w-full text-left hover-elevate active-elevate-2 p-2 rounded-md -ml-2"
                    data-testid="button-toggle-solution"
                  >
                    <Lightbulb className="h-5 w-5 text-yellow-600 dark:text-yellow-500" />
                    Solution
                  </button>
                  {expandedSections.has('solution') && (
                    <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4" data-testid="section-solution">
                      <p className="text-sm leading-relaxed">{project.solution}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Outcomes Section */}
              {project.outcomes && (
                <div className="space-y-3">
                  <button
                    onClick={() => toggleSection('outcomes')}
                    className="flex items-center gap-2 text-lg font-semibold w-full text-left hover-elevate active-elevate-2 p-2 rounded-md -ml-2"
                    data-testid="button-toggle-outcomes"
                  >
                    <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-500" />
                    Outcomes
                  </button>
                  {expandedSections.has('outcomes') && (
                    <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4" data-testid="section-outcomes">
                      <p className="text-sm leading-relaxed">{project.outcomes}</p>
                    </div>
                  )}
                </div>
              )}

              {/* Learnings Section */}
              {project.learnings && (
                <div className="space-y-3">
                  <button
                    onClick={() => toggleSection('learnings')}
                    className="flex items-center gap-2 text-lg font-semibold w-full text-left hover-elevate active-elevate-2 p-2 rounded-md -ml-2"
                    data-testid="button-toggle-learnings"
                  >
                    <Lightbulb className="h-5 w-5 text-purple-600 dark:text-purple-500" />
                    Key Learnings
                  </button>
                  {expandedSections.has('learnings') && (
                    <div className="bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4" data-testid="section-learnings">
                      <p className="text-sm leading-relaxed">{project.learnings}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
