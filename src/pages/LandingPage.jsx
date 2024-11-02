import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Project from '../components/Project';
import Skill from '../components/Skill';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <About />
      <Skill />
      <Project />
      <Footer />
    </>
  );
}
