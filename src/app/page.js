import Navbar from "@/components/Navbar";
import LeftSide from "@/components/LeftSide";
import RightSide from "@/components/RightSide";
import Banner from "@/components/Banner";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full h-screen font-mono bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex gap-20 justify-between">
        <div className="hidden xl:inline-flex w-32 h-full fixed left-0">
          <LeftSide />
        </div>
        <div className="mx-auto p-4">
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
        </div>
        <div className="hidden xl:inline-flex w-32 h-full fixed right-0">
          <RightSide />
        </div>
      </div>
    </main>
  );
}
