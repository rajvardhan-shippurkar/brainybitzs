import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ContentShowcase from "@/components/ContentShowcase";
import QuizPreview from "@/components/QuizPreview";
import FactCards from "@/components/FactCards";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <ContentShowcase />
        <QuizPreview />
        <FactCards />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
