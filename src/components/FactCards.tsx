import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Telescope, 
  Leaf, 
  Cpu, 
  Heart, 
  ArrowRight, 
  RefreshCw,
  Share2,
  Bookmark
} from "lucide-react";

interface FactCard {
  id: number;
  title: string;
  fact: string;
  category: 'space' | 'nature' | 'technology' | 'health' | 'general';
  icon: React.ElementType;
  gradient: string;
  source?: string;
}

const FactCards = () => {
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  const facts: FactCard[] = [
    {
      id: 1,
      title: "Cosmic Wonder",
      fact: "One day on Venus is longer than its year! Venus takes 243 Earth days to rotate once, but only 225 Earth days to orbit the Sun.",
      category: 'space',
      icon: Telescope,
      gradient: "from-purple-500 to-blue-600",
      source: "NASA"
    },
    {
      id: 2,
      title: "Ocean Marvel",
      fact: "Octopuses have three hearts and blue blood! Two hearts pump blood to the gills, while the third pumps blood to the rest of the body.",
      category: 'nature',
      icon: Leaf,
      gradient: "from-green-500 to-teal-600",
      source: "Marine Biology Research"
    },
    {
      id: 3,
      title: "Tech Innovation",
      fact: "The first computer programmer was a woman! Ada Lovelace wrote the first computer algorithm in 1843, 100 years before the first computer was built.",
      category: 'technology',
      icon: Cpu,
      gradient: "from-blue-500 to-cyan-600",
      source: "Computer History Museum"
    },
    {
      id: 4,
      title: "Human Biology",
      fact: "Your brain uses about 20% of your body's total energy, even though it only weighs about 2% of your body weight!",
      category: 'health',
      icon: Heart,
      gradient: "from-red-500 to-pink-600",
      source: "Neuroscience Research"
    },
    {
      id: 5,
      title: "Amazing Animals",
      fact: "Honey never spoils! Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still edible.",
      category: 'nature',
      icon: Leaf,
      gradient: "from-yellow-500 to-orange-600",
      source: "Archaeological Studies"
    },
    {
      id: 6,
      title: "Space Facts",
      fact: "A neutron star is so dense that a teaspoon of its material would weigh about 6 billion tons on Earth!",
      category: 'space',
      icon: Telescope,
      gradient: "from-indigo-500 to-purple-600",
      source: "Astrophysics Journal"
    }
  ];

  const currentFact = facts[currentFactIndex];

  const nextFact = () => {
    setCurrentFactIndex((prev) => (prev + 1) % facts.length);
  };

  const previousFact = () => {
    setCurrentFactIndex((prev) => (prev - 1 + facts.length) % facts.length);
  };

  const getRandomFact = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * facts.length);
    } while (randomIndex === currentFactIndex);
    setCurrentFactIndex(randomIndex);
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 badge-educational mb-4">
            <Brain className="w-4 h-4" />
            <span>Daily Discovery</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Fascinating
            <span className="block text-accent">Facts</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover something new every day with our curated collection of 
            amazing facts from science, nature, technology, and beyond.
          </p>
        </div>

        {/* Main Fact Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="content-card p-0 overflow-hidden">
            {/* Card Header */}
            <div className={`bg-gradient-to-r ${currentFact.gradient} p-8 text-white relative overflow-hidden`}>
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                      <currentFact.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{currentFact.title}</h3>
                      <p className="text-white/80 capitalize">{currentFact.category} • Fact #{currentFact.id}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="glass" size="icon">
                      <Bookmark className="w-5 h-5" />
                    </Button>
                    <Button variant="glass" size="icon">
                      <Share2 className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                
                <p className="text-lg md:text-xl leading-relaxed">{currentFact.fact}</p>
                
                {currentFact.source && (
                  <p className="text-sm text-white/70 mt-4">Source: {currentFact.source}</p>
                )}
              </div>
              
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full blur-2xl" />
            </div>

            {/* Navigation Controls */}
            <div className="p-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" onClick={previousFact}>
                    Previous
                  </Button>
                  <Button variant="outline" onClick={nextFact}>
                    Next
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-sm text-muted-foreground">
                    {currentFactIndex + 1} of {facts.length}
                  </span>
                  <Button variant="ghost" size="icon" onClick={getRandomFact}>
                    <RefreshCw className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Category Filter & Mini Cards */}
        <div className="space-y-8">
          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {Array.from(new Set(facts.map(f => f.category))).map((category) => (
              <Button
                key={category}
                variant="outline"
                className="capitalize"
                onClick={() => {
                  const categoryFacts = facts.filter(f => f.category === category);
                  const randomCategoryFact = categoryFacts[Math.floor(Math.random() * categoryFacts.length)];
                  setCurrentFactIndex(facts.indexOf(randomCategoryFact));
                }}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Mini Fact Cards Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {facts.slice(0, 3).map((fact, index) => (
              <Card 
                key={fact.id} 
                className="content-card p-6 cursor-pointer group"
                onClick={() => setCurrentFactIndex(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${fact.gradient} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <fact.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-2 group-hover:text-accent transition-colors">
                      {fact.title}
                    </h4>
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {fact.fact}
                    </p>
                    <span className="inline-block mt-2 text-xs text-accent capitalize">
                      {fact.category}
                    </span>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button variant="hero" size="lg">
              Explore All Facts
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FactCards;