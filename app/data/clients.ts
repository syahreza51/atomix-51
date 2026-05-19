export interface Client {
  id: number;
  name: string;
  category: string;
  application: string;
  description: string;
  techStack: string[];
  website?: string;
}

export const clients: Client[] = [
  {
    id: 1,
    name: "KPAM Aman Mandiri",
    category: "Organization",
    application: "Web Portal & Management System",
    description:
      "Pengembangan platform digital untuk manajemen organisasi dan pusat informasi anggota secara terintegrasi.",
    techStack: ["Laravel"],
    website: "https://kpam.co.id",
  },
  {
    id: 2,
    name: "Partai Golkar",
    category: "Political Organization",
    application: "HANOMAN — Command Center Application",
    description:
      "Sistem pusat komando (command center) berbasis web untuk koordinasi, analisis data, dan manajemen strategi organisasi.",
    techStack: ["React.js", "Laravel"],
  },
  {
    id: 3,
    name: "Bareskrim Polri",
    category: "Government / Law Enforcement",
    application: "SIDIK SAKSI ROBINOPS — E-Management System",
    description:
      "Aplikasi manajemen penyidikan dan pengelolaan data saksi internal dengan standar keamanan dan akurasi tingkat tinggi.",
    techStack: ["ASP.NET Core MVC"],
  },
  {
    id: 4,
    name: "Moladin.com",
    category: "Corporate / Startup Tech",
    application: "Enterprise Platform Development",
    description:
      "Berkontribusi dalam pengembangan ekosistem platform digital otomotif nasional untuk mendukung performa tinggi (high-traffic).",
    techStack: ["React.js", "Node.js"],
  },
  {
    id: 5,
    name: "PT Riksa Jaya Swastika",
    category: "Corporate",
    application: "Company Digital Infrastructure",
    description:
      "Pembuatan infrastruktur digital dan platform web korporat dengan performa cepat, aman, dan ramah SEO.",
    techStack: ["Next.js", "Go (Golang)"],
    website: "https://riksajayaswastika.co.id",
  },
];
