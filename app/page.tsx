import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/UI/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-clip flex-col items-center mx-auto sm:px-10 px-5">
     <div className="max-w-7xl w-full"> 
     <FloatingNav navItems={navItems} />
     <Hero/>
     <Grid/>
     <RecentProjects/>
     <Experience/>
     <Approach/>
     <Footer/>
     </div>
    </main>
  );
}