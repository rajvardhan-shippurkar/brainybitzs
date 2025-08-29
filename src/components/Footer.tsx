import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Youtube, Instagram, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const footerLinks = {
    content: [{
      label: "YouTube Videos",
      href: "#videos"
    }, {
      label: "Instagram Reels",
      href: "#reels"
    }, {
      label: "Interactive Quizzes",
      href: "#quizzes"
    }, {
      label: "Daily Facts",
      href: "#facts"
    }],
    learning: [{
      label: "Learning Paths",
      href: "#paths"
    }, {
      label: "Progress Tracking",
      href: "#progress"
    }, {
      label: "Leaderboards",
      href: "#leaderboards"
    }, {
      label: "Certificates",
      href: "#certificates"
    }],
    support: [{
      label: "Help Center",
      href: "#help"
    }, {
      label: "Contact Us",
      href: "#contact"
    }, {
      label: "Privacy Policy",
      href: "#privacy"
    }, {
      label: "Terms of Service",
      href: "#terms"
    }]
  };
  return <footer className="bg-gradient-card border-t border-border">
      <div className="container mx-auto px-6">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 badge-educational mb-4">
              <Mail className="w-4 h-4" />
              <span>Stay Updated</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">
              Never Miss a 
              <span className="text-accent"> Learning Opportunity</span>
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest educational content, quiz challenges, and fascinating facts 
              delivered directly to your inbox. Join 50,000+ curious learners!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email address" className="bg-background border-border flex-1" />
              <Button variant="hero">
                Subscribe
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            
            <p className="text-xs text-muted-foreground mt-4">
              Unsubscribe anytime. No spam, just quality educational content.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg overflow-hidden">
                  <img src="/lovable-uploads/559334dc-77e8-47bd-8fc6-fb1e797a7e07.png" alt="BrainyBitzs Logo" className="w-full h-full object-cover" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                  BrainyBitzs
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                Empowering minds through engaging educational content. 
                From fascinating science facts to interactive quizzes, 
                we make learning enjoyable and accessible for everyone.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="hover:bg-red-500/20 hover:text-red-500">
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-pink-500/20 hover:text-pink-500">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-blue-500/20 hover:text-blue-500">
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-accent/20 hover:text-accent">
                  <Mail className="w-5 h-5" />
                </Button>
              </div>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>brainybitzs@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>-----</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span>Global Educational Platform</span>
                </div>
              </div>
            </div>

            {/* Content Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Content</h4>
              <ul className="space-y-2">
                {footerLinks.content.map(link => <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Learning Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Learning</h4>
              <ul className="space-y-2">
                {footerLinks.learning.map(link => <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>)}
              </ul>
            </div>

            {/* Support Links */}
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Support</h4>
              <ul className="space-y-2">
                {footerLinks.support.map(link => <li key={link.label}>
                    <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors text-sm">
                      {link.label}
                    </a>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} BrainyBitzs. All rights reserved. Making learning accessible worldwide.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#privacy" className="hover:text-accent transition-colors">
                Privacy
              </a>
              <a href="#terms" className="hover:text-accent transition-colors">
                Terms
              </a>
              <a href="#cookies" className="hover:text-accent transition-colors">
                Cookies
              </a>
              <a href="#accessibility" className="hover:text-accent transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;