import { Briefcase, Code } from "lucide-react";
import { User } from "lucide-react";


export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Computer Science Student & Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm a passionate Computer Science student who loves building things—whether it's
              web applications, AI models, or automation tools. I enjoy taking on
              challenging problems and turning ideas into real, working solutions.
            </p>

            <p className="text-muted-foreground">
              My journey revolves around continuously learning, experimenting, and refining
              my craft. From Java and Python to modern front-end technologies, I aim to
              create digital experiences that are efficient, scalable, and user-friendly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

            <a
            href="/RAKESH REDDY MANDAPATI_resume.pdf"
            download
            className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
            Download CV
           </a>

            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg">Software & Web Development </h4>
                    <p className="text-muted-foreground">
                        {" "}
                        Developing efficient and user-friendly applications using Java, Python, JavaScript, and modern web technologies.
                    </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg"> Machine Learning & Problem Solving </h4>
                    <p className="text-muted-foreground">
                        {" "}
                        Exploring AI and machine learning while solving real-world problems through projects and continuous learning.
                    </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg"> Project Building & Collaboration </h4>
                    <p className="text-muted-foreground">
                        {" "}
                        Skilled in developing academic and personal projects, collaborating in teams, and managing tasks from concept to deployment.
                    </p>
                </div>
              </div>
            </div>
          </div>
          {/* <-- end Right Side grid */}
        </div>
        {/* <-- end main grid */}
      </div>
      {/* <-- end container */}
    </section>
  );
};
