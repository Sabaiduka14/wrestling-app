import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

export default function Navbar() {
  return (
    <main>
      <Link to={"/contact"}>
        <m.div initial={{opacity: 0, y: -200}} animate={{opacity: 1, y: 0}} transition={{ease: "easeInOut", duration: "0.8"}} className="cursor-pointer w-full py-2 text-center text-white border-b bg-primary font-bold text-lg md:text-xl">
          Explore Our Wrestling Programs
        </m.div>
      </Link>
      <header className="shadow w-full py-3 md:px-8 px-5 flex justify-between items-center">
        <Link to={"/"} className="flex gap-1 font-bold text-xl md:text-3xl">
          <Dumbbell size={30} />
          Wrestling
        </Link>
        <nav className="flex">
          <ul className="flex gap-6 font-semibold text-lg">
            <li>
              <Link to={"/team"} className="cursor-pointer">
                Team
              </Link>
            </li>
            <li>
              <Link to={"/contact"} className="cursor-pointer">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden lg:flex gap-1 md:gap-3">
          <Button>Learn More</Button>
        </div>
      </header>
    </main>
  );
}
