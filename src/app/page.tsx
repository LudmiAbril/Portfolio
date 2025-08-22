import Footer from "@/components/Footer";
import HomeSection from "@/components/HomeSection";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="px-[28px]">
        <HomeSection />
      </main>
      <Footer />
    </div>
  );
}
