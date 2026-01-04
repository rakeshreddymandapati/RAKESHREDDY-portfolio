import vitapLogo from "../assets/vitap-logo.png";
import sriChaitanyaLogo from "../assets/srichaitanya-logo.png";
import scholarsLogo from "../assets/scholars-logo.png";

export default function EducationSection() {
  return (
    <section id="education" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          My <span className="text-primary">Education</span>
        </h2>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* B.Tech – VIT AP */}
          <div className="gradient-border p-6 card-hover text-center">
            <div className="flex justify-center mb-5">
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <img
                  src={vitapLogo}
                  alt="VIT-AP University"
                  className="h-14 object-contain"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold leading-snug">
              Bachelor of Technology (B.Tech)
              <br />
              Computer Science & Engineering
            </h3>

            <p className="text-muted-foreground mt-2">
              VIT-AP University
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              2023 – 2027 · Vijayawada, Andhra Pradesh
            </p>

            <p className="mt-4 text-primary font-semibold">
              GPA: 8.33 / 10
            </p>
          </div>

          {/* Intermediate – Sri Chaitanya */}
          <div className="gradient-border p-6 card-hover text-center">
            <div className="flex justify-center mb-5">
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <img
                  src={sriChaitanyaLogo}
                  alt="Sri Chaitanya Junior College"
                  className="h-14 object-contain"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold">
              Intermediate (Class 12)
              <br />
              MPC (Maths, Physics, Chemistry)
            </h3>

            <p className="text-muted-foreground mt-2">
              Sri Chaitanya Junior College
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              2021 – 2023 · Vijayawada, Andhra Pradesh
            </p>

            <p className="mt-4 text-primary font-semibold">
              Score: 84.5%
            </p>
          </div>

          {/* Secondary – Scholars School */}
          <div className="gradient-border p-6 card-hover text-center">
            <div className="flex justify-center mb-5">
              <div className="bg-white rounded-xl p-3 shadow-sm">
                <img
                  src={scholarsLogo}
                  alt="Scholars School"
                  className="h-14 object-contain"
                />
              </div>
            </div>

            <h3 className="text-lg font-semibold">
              Secondary (Class 10)
            </h3>

            <p className="text-muted-foreground mt-2">
              Scholars School
            </p>

            <p className="text-sm text-muted-foreground mt-1">
              2020 – 2021 · Piduguralla, Andhra Pradesh
            </p>

            <p className="mt-4 text-primary font-semibold">
              GPA: 10 / 10
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
