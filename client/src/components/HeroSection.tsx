import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_product_manager_headshot_238c3190.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight" data-testid="text-hero-name">
                Qudsia Noor
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground" data-testid="text-hero-role">
                Senior Product Manager
              </h2>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl" data-testid="text-hero-bio">
              Transforming complex problems into elegant solutions. I build digital products 
              that create meaningful impact for users and drive business growth.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="group" data-testid="button-view-projects">
                View Projects
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" data-testid="button-download-resume">
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-md aspect-square rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Professional headshot"
                className="w-full h-full object-cover"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
