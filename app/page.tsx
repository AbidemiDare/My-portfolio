import Navbar from "@/components/layout/navbar";
import Hero from "./hero/page";
import About from "./about/page";
import Projects from "./projects/page";
import Footer from "./footer/page";
import Skills from "./skills/page";
import Experience from "./experience/page";

export default function Home() {
  return (
    <div className="">
      <Navbar/>

      <main className="">
        <Hero/>
        <About/>
        <Skills/>
        <Experience/>
        <Projects/>
        <Footer/>
      </main>
    </div>
  );
}
