import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Camera, Brain, ArrowRight, Clock, Eye } from "lucide-react";
import youtubeIcon from "@/assets/youtube-icon.png";
import instagramIcon from "@/assets/instagram-icon.png";
import quizIcon from "@/assets/quiz-icon.png";

const ContentShowcase = () => {
  const contentTypes = [
    {
      title: "YouTube Videos",
      description: "In-depth educational content covering science, nature, and fascinating facts",
      icon: youtubeIcon,
      iconFallback: Play,
      color: "from-red-500 to-red-600",
      stats: { videos: "150+", views: "2M+", duration: "5-15 min" },
      features: ["High-quality explanations", "Visual demonstrations", "Step-by-step learning"]
    },
    {
      title: "Instagram Reels",
      description: "Quick, engaging educational content perfect for bite-sized learning",
      icon: instagramIcon,
      iconFallback: Camera,
      color: "from-purple-500 to-pink-500",
      stats: { reels: "300+", views: "5M+", duration: "30-60 sec" },
      features: ["Quick facts", "Visual learning", "Daily content"]
    },
    {
      title: "Interactive Quizzes",
      description: "Test your knowledge with engaging quizzes and brain teasers",
      icon: quizIcon,
      iconFallback: Brain,
      color: "from-blue-500 to-cyan-500",
      stats: { quizzes: "100+", attempts: "50K+", difficulty: "All levels" },
      features: ["Instant feedback", "Progress tracking", "Leaderboards"]
    }
  ];

  return (
    <section id="content" className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 badge-educational mb-4">
            <Brain className="w-4 h-4" />
            <span>Content Library</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Diverse Learning
            <span className="block text-accent">Experiences</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Choose your preferred learning style. From detailed videos to quick reels 
            and interactive quizzes, we've got something for every learner.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contentTypes.map((content, index) => (
            <Card key={content.title} className="content-card p-0 overflow-hidden group">
              {/* Card Header with Icon */}
              <div className={`bg-gradient-to-r ${content.color} p-6 relative overflow-hidden`}>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <img 
                      src={content.icon} 
                      alt={content.title}
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        const nextElement = target.nextElementSibling as HTMLElement;
                        target.style.display = 'none';
                        if (nextElement) nextElement.style.display = 'block';
                      }}
                    />
                    <content.iconFallback className="w-10 h-10 text-white hidden" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{content.title}</h3>
                  <p className="text-white/90">{content.description}</p>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-xl" />
              </div>

              {/* Stats */}
              <div className="p-6 border-b border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {Object.entries(content.stats).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <div className="text-lg font-bold text-accent">{value}</div>
                      <div className="text-xs text-muted-foreground capitalize">{key}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {content.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full group">
                  Explore {content.title}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Content Preview */}
        <div className="bg-gradient-card rounded-2xl p-8 border border-border">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 badge-educational">
                <Eye className="w-4 h-4" />
                <span>Featured Content</span>
              </div>
              <h3 className="text-3xl font-bold">
                Latest Educational Series:
                <span className="block text-accent">Space Exploration Facts</span>
              </h3>
              <p className="text-muted-foreground">
                Journey through the cosmos with our latest series exploring fascinating 
                space facts, from black holes to distant galaxies. Perfect for curious minds!
              </p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>10 Episodes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  <span>500K+ Views</span>
                </div>
              </div>
              <Button variant="hero" size="lg">
                <Play className="w-5 h-5" />
                Watch Now
              </Button>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-primary rounded-xl flex items-center justify-center relative overflow-hidden">
                <Play className="w-16 h-16 text-white/80 hover:text-white hover:scale-110 transition-all cursor-pointer" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black/50 rounded-lg px-3 py-2 text-white text-sm">
                    The Mystery of Black Holes Explained
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;