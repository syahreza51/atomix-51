import { clients } from "../data/clients";

export default function Experience(): React.JSX.Element {
  return (
    <section id="clients" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-purple-400 text-lg font-medium mb-2">
            Portofolio Klien
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Klien yang Telah Kami Kelola
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Pengalaman membangun sistem digital untuk berbagai sektor — dari
            organisasi, pemerintahan, hingga korporasi dan startup teknologi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {clients.map((client) => (
            <article
              key={client.id}
              className="bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 backdrop-blur-sm rounded-xl p-6 border-t-3 border-purple-700 hover:shadow-2xl hover:shadow-purple-900 transition-shadow"
            >
              <div className="flex gap-4">
                <div className="shrink-0 w-16 h-16 rounded-xl bg-purple-900/50 flex items-center justify-center text-2xl font-bold text-purple-300">
                  {client.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-purple-400 text-xs font-medium uppercase tracking-wide mb-1">
                    {client.category}
                  </p>
                  <h3 className="text-xl font-semibold text-white mb-1">
                    {client.name}
                  </h3>
                  <p className="text-white/90 text-sm font-medium mb-2">
                    {client.application}
                  </p>
                  <p className="text-white/70 text-sm mb-3">
                    {client.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {client.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-xs rounded-full bg-white/10 text-purple-200 border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {client.website && (
                    <a
                      href={client.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors inline-flex items-center gap-1"
                    >
                      Kunjungi Website →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
