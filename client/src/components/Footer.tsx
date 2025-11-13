import { Link } from "wouter";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">PM Portfolio</h3>
            <p className="text-sm text-muted-foreground">
              Building digital products that solve real problems and create meaningful impact.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects">
                  <a className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-projects">
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/blog">
                  <a className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-blog">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors" data-testid="link-footer-contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex gap-3">
              <a href="mailto:pm@example.com" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover-elevate active-elevate-2 p-2 rounded-md" data-testid="link-github">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} PM Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
