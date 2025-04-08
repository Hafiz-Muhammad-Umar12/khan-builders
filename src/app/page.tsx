// import { Hero } from "@/components/herosection";
// import { Navbar } from "@/components/header";
// import { About } from "@/components/about";
// import { Services } from "@/components/services";
// import { Projects } from "@/components/Projects,";
// import { Contact } from "@/components/Contact";
// import Footer from "@/components/footer";
import HeroSection from "@/components/herosection";
import About from "@/components/about";
import Testimonials from "@/components/testi";
// import Projects from "@/components/Projects,";
import Contact from "@/components/Contact";
// import { Navbar } from "@/components/header";
import Services from "@/components/services";
import Projects from "@/components/projects";
// import Header from "@/components/header";
// import Projects from '@/components/Contact';
// import Header from "@/components/header";
// import { Hero } from "@/components/herosection";



export default function Home() {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <HeroSection />
      <Services />
      <About />
      <Testimonials/>
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
