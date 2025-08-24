import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import PersonalProjects from "@/components/PersonalProjects";
import ProfessionalProjects from "@/components/ProfessionalProjects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="px-[28px]">
        <HomeSection />
        <Skills />
        <Experience />
        <ProfessionalProjects />
        <PersonalProjects/>
      </main>
      <Footer />
    </div>
  );
}
