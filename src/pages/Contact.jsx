import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Contact() {
  return (
    <main className="w-full h-screen mt-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

      <div className="flex flex-col lg:flex-row w-full h-auto gap-12 lg:gap-48 justify-center">
        <form className="w-full h-auto ">
          <label htmlFor="name">Username</label>
          <Input className="my-2" placeholder="Username" id="name" />
          <label htmlFor="email">Username</label>
          <Input className="my-2" type="email" placeholder="Email" id="email" />
          <label htmlFor="insta">Instagram</label>
          <Input className="my-2" placeholder="Instagram" id="insta" />
          <label htmlFor="msg">Message</label>
          <Input className="my-2"placeholder="Message" id="msg" />
          <Button className="w-full my-2">Send Message</Button>
        </form>
        <div className="w-full h-auto">
          <img
            src="https://cdn.britannica.com/94/215294-050-C5E44A29/Frank-Molinaro-Frank-Chamizo-Marquez-Italy-bronze-medal-match-freestyle-wrestling-2016-Olympic-Games.jpg"
            className="w-[650px] rounded-lg object-cover"
          />
        </div>
      </div>
    </main>
  );
}
