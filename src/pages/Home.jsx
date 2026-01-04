import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import {Navbar} from "../components/Navbar"
import { HeroSection } from "../components/HeroSection";
import {AboutSection} from "../components/AboutSection"
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { Contact } from "lucide-react";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import ExperienceSection from "../components/ExperienceSection";
import EducationSection from "../components/EducationSection";
import CertificationsSection from "../components/CertificationsSection";


export const Home=()=>{
    return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
       {/*Theme Toggle */}
        <ThemeToggle />
       {/* Backgorund Effort */}
        <StarBackground />
       {/* Navbar */}
         <Navbar />
       {/* Main Content */}
         <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
          <CertificationsSection />
          <SkillsSection/>
          <ProjectsSection/>
          <ContactSection/>
         </main>
       {/* Footer */}
       <Footer />
    </div>
    );
};