import About from "./about/page";
import Contact from "./contact/page";
import Main from "./home/page";
import Projects from "./projects/page";
import Services from "./services/page";
import SkillsSection from "./skills/page";

export default function Home() {
  return (
    <>
    <Main/>
    <About/>
    <SkillsSection/>
    <Services/>
    <Projects/>
    <Contact/>
    </>
  );
}
