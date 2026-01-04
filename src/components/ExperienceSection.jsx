import skillCraftLogo from "../assets/skillcraft-logo (2).png";
import { Award } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto"
    >
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My <span className="text-primary">Experience</span>
      </h2>

      {/* Experience Card */}
      <div className="bg-card/80 backdrop-blur-md border border-border rounded-2xl p-6 md:p-8 shadow-lg">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          
          {/* Left: Logo + Role */}
          <div className="flex items-start gap-5">
            
            {/* Company Logo */}
            <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-center shadow-sm">
              <img
                src={skillCraftLogo}
                alt="SkillCraft Technology"
                className="h-10 md:h-12 object-contain"
              />
            </div>

            {/* Role Info */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold">
                Web Development Intern
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                SkillCraft Technology · March 2025 – April 2025 · Remote
              </p>
            </div>
          </div>

          {/* Certificate Button */}
          <a
            href="public/skillcraft-certificate.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
          >
            <Award size={18} />
            View Certificate
          </a>
        </div>

        {/* Divider */}
        <div className="my-6 h-px bg-border" />

        {/* Experience Points (Perfect Alignment) */}
        <ul className="space-y-4 text-muted-foreground">
          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
            <span>
              Developed responsive and interactive web pages using
              <strong className="text-foreground">
                {" "}HTML, CSS, and JavaScript
              </strong>.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
            <span>
              Built mini full-stack projects using
              <strong className="text-foreground">
                {" "}React.js and Firebase
              </strong>, focusing on clean UI and functionality.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
            <span>
              Collaborated with remote team members to enhance UI/UX and
              implement real-time features.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
            <span>
              Gained hands-on experience in deploying, testing, and debugging
              web applications.
            </span>
          </li>

          <li className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
            <span>
              Received a verified internship certificate after successful
              completion of assigned tasks.
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
