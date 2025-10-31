import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Build from "@/components/Build";
import Impact from "@/components/Impact";
import Programs from "@/components/Programs";
import Portfolio from "@/components/Portfolio";
import Team from "@/components/Team";
import Fellowships from "@/components/Fellowships";
import Approach from "@/components/Approach";
import News from "@/components/News";
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
      <Team />
      <Fellowships />
      <Approach />
      <News />
      <Contact />
    </div>
  );
};

export default Index;
