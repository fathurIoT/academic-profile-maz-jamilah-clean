import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Career from "./components/Career";
import Research from "./components/Research";
import Grants from "./components/Grants";
import Publications from "./components/Publications";
import Innovation from "./components/Innovation";
import Awards from "./components/Awards";
import Teaching from "./components/Teaching";
import Memberships from "./components/Memberships";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Profile />
      <Education />
      <Career />
      <Research />
      <Grants />
      <Publications />
      <Innovation />
      <Awards />
      <Teaching />
      <Memberships />
      <Contact />
      <Footer />
    </>
  );
}
