import { Boxes, Flame, Moon } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full h-screen mt-12">
      <div className="flex flex-col items-center">
        <m.img
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: "0.6", delay: "0.8" }}
          src="https://cdn-icons-png.flaticon.com/512/94/94107.png"
          className="w-[250px]"
          alt="Team Logo"
        />
        <h1 className="max-w-[300px] md:max-w-[400px] text-center text-4xl md:text-5xl mb-8 font-bold my-4">
          Meet Our Team and Get Fit
        </h1>
        <Link to={"/team"}>
          <Button className="mt-5 w-40 md:w-64 rounded-full">Discover</Button>
        </Link>
      </div>
      <div className="grid bg-primary px-4 gap-2 py-4 items-center mt-24 text-white w-full lg:h-48 grid-cols-1 lg:grid-cols-3 shadow-lg">
        <div className="mt-3 w-full h-full md:gap-4 grid grid-cols-1 md:grid-cols-2 items-center">
          <m.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: "0.9" }}
          >
            <Boxes
              size={100}
              className="mx-auto md:mr-0 md:ml-auto mb-4 md:mb-0"
            />
          </m.div>
          <div className="text-center md:text-left">
            <h1 className="font-bold text-lg my-2">Positive Vibes Only</h1>
            <p className="font-semibold">
              Join us for a fun and challenging wrestling experience.
            </p>
          </div>
        </div>
        <div className="w-full h-full md:gap-4 grid grid-cols-1 md:grid-cols-2 items-center">
          <m.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: "0.9", delay: "0.9" }}
          >
            <Moon
              size={100}
              className="mx-auto md:mr-0 md:ml-auto mb-4 md:mb-0"
            />
          </m.div>
          <div className="text-center md:text-left">
            <h1 className="font-bold text-lg my-2">Rest And Recover</h1>
            <p className="font-semibold">
              Get the best sleep after a tough training session.
            </p>
          </div>
        </div>
        <div className="w-full h-full md:gap-4 grid grid-cols-1 md:grid-cols-2 items-center">
          <m.div             initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: "0.9", delay: "1.8" }}>
          <Flame
            size={100}
            className="mx-auto md:mr-0 md:ml-auto mb-4 md:mb-0"
          />
          </m.div>
          <div className="text-center md:text-left">
            <h1 className="font-bold text-lg my-2">Stay Calm Under Pressure</h1>
            <p className="font-semibold">
              Stay focused and positive during matches.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
