import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Build from "@/components/Build";
import Impact from "@/components/Impact";
import Programs from "@/components/Programs";
import Portfolio from "@/components/Portfolio";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Build />
      <Impact />
      <Programs />
      <Portfolio />
      <Approach />
      <Contact />
    </div>
  );
};

export default Index;
