import { Briefcase, Check, Gem, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion as m } from "framer-motion";

export default function Pricing() {
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center lg:mt-[50px] mt-[300px]">
      <div className="w-full h-[25%] mt-12 text-center">
        <h1 className="text-4xl font-bold">Check Our Membership Plans</h1>
      </div>
      <div className="px-4 mt-[40px] flex items-center flex-col lg:flex-row gap-8">
        <div className="flex flex-col px-6 py-6 rounded-[20px] w-[310px] md:w-[400px] h-[310px] bg-[#f2e2cd]">
          <div className="flex justify-between">
            <p className="font-bold text-2xl">Standard</p>
            <Briefcase />
          </div>
          <h1 className="my-4 font-semibold text-3xl">$19/month</h1>
          <ul className="flex flex-col mb-12">
            <m.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: "0.5" }}
              className="font-semibold gap-1 flex mb-1"
            >
              <Check />
              Weekly Technique sessions
            </m.li>
            <m.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: "0.5", delay: "0.5" }}
              className="font-semibold gap-1 flex mb-1"
            >
              <X />
              Weekly Technique sessions
            </m.li>
            <m.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: "0.5", delay: "1" }}
              className="font-semibold gap-1 flex"
            >
              <Check />
              Weekly Technique sessions
            </m.li>
          </ul>
          <Button variant="outline" className="rounded-full w-64">
            Join Now
          </Button>
        </div>
        <div className="-mt-2 flex flex-col px-6 py-6 text-white w-[330px] md:w-[400px] rounded-[20px] h-[330px] bg-[#de8c21]">
          <div className="flex justify-between">
            <p className="font-bold text-2xl">Premium</p>
            <Gem />
          </div>
          <h1 className="my-4 font-semibold text-3xl">$29/month</h1>
          <ul className="flex flex-col mb-12">
            <m.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: "0.5" }}
              className="font-semibold gap-1 flex mb-1"
            >
              <Check />
              Weekly Technique sessions
            </m.li>
            <m.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: "0.5", delay: "0.5" }}
              className="font-semibold gap-1 flex mb-1"
            >
              <X />
              Weekly Technique sessions
            </m.li>
            <m.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: "0.5", delay: "1" }}
              className="font-semibold gap-1 flex"
            >
              <Check />
              Weekly Technique sessions
            </m.li>
          </ul>
          <div className="flex justify-center">
            <Button variant="outline" className="text-black rounded-full w-64">
              Join Premium
            </Button>
          </div>
        </div>
        <div className="flex flex-col px-6 py-6 rounded-[20px] w-[310px] md:w-[400px] h-[310px] bg-[#f2e2cd]">
          <div className="flex justify-between">
            <p className="font-bold text-2xl">Pro</p>
            <Briefcase />
          </div>
          <h1 className="my-4 font-semibold text-3xl">$49/month</h1>
          <ul className="flex flex-col mb-12">
            <m.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: "0.5" }}
              className="font-semibold gap-1 flex mb-1"
            >
              <Check />
              Weekly Technique sessions
            </m.li>
            <m.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: "0.5", delay: "0.5" }}
              className="font-semibold gap-1 flex mb-1"
            >
              <X />
              Weekly Technique sessions
            </m.li>
            <m.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: "0.5", delay: "1" }}
              className="font-semibold gap-1 flex"
            >
              <Check />
              Weekly Technique sessions
            </m.li>
          </ul>
          <div className="flex justify-end">
            <Button variant="outline" className="rounded-full w-64">
              Join Now
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
