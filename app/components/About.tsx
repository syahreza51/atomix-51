import Image from "next/image";

const services = [
  {
    title: "Pengembangan Web & Portal",
    description:
      "Platform manajemen, portal organisasi, dan sistem informasi terintegrasi.",
  },
  {
    title: "Sistem Enterprise",
    description:
      "Aplikasi skala besar dengan keamanan tinggi untuk pemerintahan dan korporasi.",
  },
  {
    title: "Infrastruktur Digital",
    description:
      "Website korporat berperforma tinggi, SEO-friendly, dan arsitektur modern.",
  },
  {
    title: "Command Center & Analytics",
    description:
      "Dashboard koordinasi, analisis data, dan manajemen strategi real-time.",
  },
];

const techStack = [
  "React.js",
  "Next.js",
  "Laravel",
  "Node.js",
  "Go",
  "ASP.NET Core",
];

export default function About(): React.JSX.Element {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-purple-400 text-lg font-medium mb-2">
            Tentang Kami
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Atomix Dev IT Solution
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto leading-relaxed">
            Atomix Dev adalah perusahaan pengembangan solusi teknologi informasi
            yang berfokus pada pembuatan sistem digital berkualitas tinggi.
            Kami membantu klien dari berbagai industri — organisasi, partai
            politik, instansi pemerintahan, startup, hingga korporasi — dalam
            transformasi digital yang aman, scalable, dan berdampak bisnis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 transition-colors"
            >
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-white/70 text-sm">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="text-white/80 mb-4">Teknologi yang kami kuasai</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full bg-purple-900/40 text-purple-200 text-sm border border-purple-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <Image
          src="/assets/illustration.png"
          alt="Teknologi Atomix Dev"
          width={800}
          height={800}
          className="object-cover mx-auto"
          style={{ width: "auto", height: "auto" }}
        />
      </div>
    </section>
  );
}
