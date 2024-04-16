import { Apple, Copyright, Dumbbell, Play } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <main className="mt-[300px] lg:mt-0 w-full h-auto my-4 px-6">
      <div className="my-12 w-full h-0.5 bg-black"></div>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="mb-3">
          <Link to={"/"} className="flex gap-1 font-bold text-xl md:text-3xl">
            <Dumbbell size={30} />
            Wrestling
          </Link>
        </div>
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Meet The Team</h1>
          <p className="font-semibold cursor-pointer mt-1">Our Story</p>
          <p className="font-semibold cursor-pointer mt-1">Job Opportunities</p>
          <p className="font-semibold cursor-pointer mt-1">Medial Kit</p>
          <p className="font-semibold cursor-pointer mt-1">Membership Plans</p>
        </div>
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Get Assistance</h1>
          <p className="font-semibold cursor-pointer mt-1">Our Story</p>
          <p className="font-semibold cursor-pointer mt-1">Job Opportunities</p>
          <p className="font-semibold cursor-pointer mt-1">Medial Kit</p>
          <p className="font-semibold cursor-pointer mt-1">Membership Plans</p>
        </div>
        <div className="mb-4">
          <h1 className="text-2xl font-bold">Engage With Us</h1>
          <p className="font-semibold cursor-pointer mt-1">Our Story</p>
          <p className="font-semibold cursor-pointer mt-1">Job Opportunities</p>
          <p className="font-semibold cursor-pointer mt-1">Medial Kit</p>
          <p className="font-semibold cursor-pointer mt-1">Membership Plans</p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold mb-4">Download Our App</h1>
          <Button className="flex gap-2 font-semibold mb-2 py-6 rounded-lg">
            <Apple />
            Apple Store
          </Button>
          <Button className="flex gap-2 font-semibold rounded-lg py-6">
            <Play />
            Google Play
          </Button>
        </div>
      </div>
      <div className="my-12 w-full h-0.5 bg-black"></div>
      <div className="w-full h-auto md:flex justify-between py-2 items-center">
        <div>
          <Link to={"/"} className="flex gap-1 font-bold text-xl md:text-3xl">
            <Dumbbell size={30} />
            Wrestling
          </Link>
        </div>
        <div>
          <h1 className="md:flex my-4 font-semibold text-lg items-center gap-1">
            <div className="flex gap-1">
              <Copyright />
              2024 saba.idukashvili
            </div>
            All Rights Reserved
          </h1>
        </div>
      </div>
    </main>
  );
}
