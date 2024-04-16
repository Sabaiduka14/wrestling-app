import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/team" element={<Team />}/>
      </Routes>
      <Footer />
    </main>
  )
}
