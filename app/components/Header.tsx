import Link from "next/link";
import Image from "next/image";

export default function Header(): React.JSX.Element {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#110720]/80 backdrop-blur-sm border-b border-white/10">
      <nav className="px-6 py-4">
        <div className="container mx-auto max-w-6xl flex items-center justify-between h-full">
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          >
           
            <span className="text-lg font-bold text-white hidden sm:block">
              Atomix Dev
            </span>
          </Link>
          <ul className="flex items-center gap-6 sm:gap-8 list-none m-0 p-0">
            <li>
              <Link
                href="#home"
                className="text-white hover:text-purple-400 transition-colors text-sm sm:text-base font-normal"
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-white hover:text-purple-400 transition-colors text-sm sm:text-base font-normal"
              >
                Tentang
              </Link>
            </li>
            <li>
              <Link
                href="#clients"
                className="text-white hover:text-purple-400 transition-colors text-sm sm:text-base font-normal"
              >
                Klien
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="text-white hover:text-purple-400 transition-colors text-sm sm:text-base font-normal"
              >
                Kontak
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
