import Approch from "@/components/Approch";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
   <main className=" relative flex items-center justify-center flex-col bg-black-100 overflow-clip  mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav navItems={navItems}/>
         <Hero/>
         <Grid/>
         <RecentProjects/>
         <Clients/>
         <Experience/>
         <Approch/>
         <Footer/>
      </div>
   </main>
  );
}
