import { Button } from "@/components/ui/button";
import { Play, BookOpen, Brain, Zap } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary-glow/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-success/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 badge-educational">
            <Brain className="w-4 h-4" />
            <span>Educational Excellence Platform</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-foreground via-accent to-primary-glow bg-clip-text text-transparent leading-tight">
            Welcome to
            <span className="block text-accent">BrainyBitzs</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Unlock your potential with interactive educational content. 
            From fascinating science facts to brain-teasing quizzes, 
            discover knowledge that sticks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" className="group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start Learning
            </Button>
            <Button variant="outline" size="xl">
              <BookOpen className="w-5 h-5" />
              Explore Content
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-8">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border glass">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm">Interactive Quizzes</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border glass">
              <Play className="w-4 h-4 text-accent" />
              <span className="text-sm">YouTube Videos</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 border border-border glass">
              <Brain className="w-4 h-4 text-accent" />
              <span className="text-sm">Daily Facts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;