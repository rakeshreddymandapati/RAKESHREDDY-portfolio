export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-14 text-center">
          My <span className="text-primary">Certifications</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

          {/* MongoDB */}
          <div className="gradient-border p-6 card-hover text-center">
            <h3 className="text-xl font-semibold">
              MongoDB Associate Database Administrator
            </h3>
            <p className="text-muted-foreground mt-1">MongoDB</p>

            <a
              href="public/mongodb-dba.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-xl bg-primary px-6 py-3
                         font-semibold text-primary-foreground
                         hover:opacity-90 transition"
            >
              View Certificate
            </a>
          </div>

          {/* NPTEL */}
          <div className="gradient-border p-6 card-hover text-center">
            <h3 className="text-xl font-semibold">
              Introduction to Machine Learning
            </h3>
            <p className="text-muted-foreground mt-1">
              NPTEL · IIT Madras
            </p>

            <a
              href="public/nptel-ml-iit-madras.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-xl bg-primary px-6 py-3
                         font-semibold text-primary-foreground
                         hover:opacity-90 transition"
            >
              View Certificate
            </a>
          </div>

          {/* Oracle */}
          <div className="gradient-border p-6 card-hover text-center">
            <h3 className="text-xl font-semibold">
              Oracle Generative AI Professional
            </h3>
            <p className="text-muted-foreground mt-1">Oracle</p>

            <a
              href="public/oracle-generative-ai.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-xl bg-primary px-6 py-3
                         font-semibold text-primary-foreground
                         hover:opacity-90 transition"
            >
              View Certificate
            </a>
          </div>

          {/* SkillCraft */}
          <div className="gradient-border p-6 card-hover text-center">
            <h3 className="text-xl font-semibold">
              Web Development Internship
            </h3>
            <p className="text-muted-foreground mt-1">
              SkillCraft Technology
            </p>

            <a
              href="public/skillcraft-certificate.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-xl bg-primary px-6 py-3
                         font-semibold text-primary-foreground
                         hover:opacity-90 transition"
            >
              View Certificate
            </a>
          </div>

          {/* AWS Foundations */}
          <div className="gradient-border p-6 card-hover text-center">
            <h3 className="text-xl font-semibold">
              AWS Academy Graduate – Cloud Foundations
            </h3>
            <p className="text-muted-foreground mt-1">AWS Academy</p>

            <a
              href="public/aws-cloud-foundations.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-xl bg-primary px-6 py-3
                         font-semibold text-primary-foreground
                         hover:opacity-90 transition"
            >
              View Certificate
            </a>
          </div>

          {/* AWS Architecting */}
          <div className="gradient-border p-6 card-hover text-center">
            <h3 className="text-xl font-semibold">
              AWS Academy Graduate – Cloud Architecting
            </h3>
            <p className="text-muted-foreground mt-1">AWS Academy</p>

            <a
              href="public/aws-cloud-architecting.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 block w-full rounded-xl bg-primary px-6 py-3
                         font-semibold text-primary-foreground
                         hover:opacity-90 transition"
            >
              View Certificate
            </a>
          </div>
          {/* Salesforce */}
          <div className="gradient-border p-6 card-hover text-center">
            <h3 className="text-xl font-semibold">
              Salesforce Certified AI Associate
            </h3>
            <p className="text-muted-foreground mt-1">Salesforce</p>

            <a
              href="/salesforce-ai-associate.pdf"
              target="_blank"
              className="mt-6 block w-full rounded-xl bg-primary px-6 py-3 font-semibold
                         text-primary-foreground hover:opacity-90 transition"
            >
              View Certificate
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
