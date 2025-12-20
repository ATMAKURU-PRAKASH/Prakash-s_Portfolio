import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import CodingProfiles from "@/components/CodingProfiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Atmakuru Prakash | Full-Stack Developer & CS Student</title>
        <meta
          name="description"
          content="Aspiring Software Engineer specializing in full-stack web development and cybersecurity. B.Tech student at KL University with expertise in React, Spring Boot, and Java."
        />
        <meta
          name="keywords"
          content="Atmakuru Prakash, Software Developer, Full-Stack Developer, React Developer, Java Developer, KL University, Cybersecurity"
        />
        <meta property="og:title" content="Atmakuru Prakash | Full-Stack Developer" />
        <meta
          property="og:description"
          content="Aspiring Software Engineer specializing in full-stack web development and cybersecurity."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://prakash-portfolio.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <CodingProfiles />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
