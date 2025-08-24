import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import ProfesionalProjects from "@/components/ProfesionalProjects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="w-full">
      <Navbar />
      <main className="px-[28px]">
        <HomeSection />
        <Skills />
        <Experience />
        <ProfesionalProjects />
      </main>
      <Footer />
    </div>
  );
}
