import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="px-[28px]">
        <HomeSection />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}
