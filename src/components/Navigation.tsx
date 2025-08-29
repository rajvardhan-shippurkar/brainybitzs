import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Brain, Play, Camera, Users, BookOpen } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home", icon: Brain },
    { label: "Videos", href: "#videos", icon: Play },
    { label: "Reels", href: "#reels", icon: Camera },
    { label: "Quizzes", href: "#quizzes", icon: BookOpen },
    { label: "About", href: "#about", icon: Users },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
              BrainyBitzs
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center gap-2 text-foreground hover:text-accent transition-colors group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <span className="font-medium">{item.label}</span>
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-white/10 animate-slide-in-right">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-accent" />
                  <span className="font-medium">{item.label}</span>
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button variant="hero" size="sm" className="w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;