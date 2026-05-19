"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner(): React.JSX.Element {
  const texts = [
    "Web Development",
    "Enterprise Systems",
    "Digital Transformation",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting) {
      // Typing effect
      if (displayedText.length < currentText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length + 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, wait before deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true);
          setTypingSpeed(50); // Faster deletion
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting effect
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentText.slice(0, displayedText.length - 1));
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setTypingSpeed(100); // Reset typing speed
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }
  }, [displayedText, isDeleting, currentTextIndex, texts, typingSpeed]);
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center ">
          {/* Left side - Text content */}
          {/* Right side - Character image */}
          <div className="flex justify-center lg:justify-end relative w-full lg:w-auto">
            <div className="relative top-10">
              {/* Mobile: Hello text positioned on top of image */}
              <div className="lg:hidden  -top-150 z-10">
                <div className="relative inline-block ">
                  <Image
                    src="/assets/arrow.png"
                    alt="Arrow pointer"
                    width={80}
                    height={80}
                    className="absolute top-5 rotate-z-280"
                    style={{ width: "auto", height: "auto" }}
                  />
                  <div className="relative">
                    <p className="text-white text-lg whitespace-nowrap">
                      Selamat Datang di{" "}
                      <span className="text-purple-400">Atomix Dev</span>
                    </p>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
                </div>
              </div>
              <Image
                src="/logo/logo.png"
                alt="Atomix Dev IT Solution"
                width={300}
                height={300}
                className=" max-w-md absolute"
                style={{ width: "auto", height: "auto" }}
                priority
              />
              <Image
                src="/assets/me-glow.png"
                alt="Atomix Dev IT Solution"
                width={300}
                height={300}
                className="max-w-md "
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
          </div>
          <div className="flex-1 space-y-6 text-center lg:text-left">
            {/* Desktop: Hello text in original position */}
            <div className="hidden lg:inline-block relative">
              <Image
                src="/assets/arrow.png"
                alt="Arrow pointer"
                width={100}
                height={100}
                className="absolute "
                style={{
                  left: "-100px",
                  top: "-50px",
                  width: "auto",
                  height: "auto",
                }}
              />
              <div style={{ bottom: 40, position: "relative" }}>
                <p className="text-white text-lg">
                  Selamat Datang di{" "}
                  <span className="text-purple-400">Atomix Dev</span>
                </p>
              </div>
              <div className="absolute -bottom-2 left-8 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/10"></div>
            </div>
            <div className="">
              <p className="text-2xl">Solusi IT yang</p>
              <h1 className="text-5xl tracking-tight lg:text-7xl font-semibold text-white leading-tight">
                Membangun
                <br />
                masa depan{" "}
                <span className="relative inline-block">
                  <Image
                    src="/assets/circle.png"
                    alt="Circle"
                    width={200}
                    height={200}
                    className="absolute mt-2"
                  />
                  <span className="bg-gradient-to-r from-violet-600 via-violet-400 to-violet-600 bg-clip-text text-transparent">
                    digital
                  </span>
                </span>
                Anda
              </h1>
              <p className="text-md text-white/80 mt-2">
                Atomix Dev IT Solution — mitra teknologi untuk organisasi,
                pemerintahan, dan korporasi.
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-3 pt-15 text-center lg:text-left">
          <p className="text-5xl text-white font-bold">
            Spesialis {displayedText}
            <span className="animate-pulse">|</span>
          </p>
          <p className="text-lg lg:text-xl text-white/90 tracking-wide">
            Pengembangan aplikasi web, sistem enterprise, dan infrastruktur
            digital berperforma tinggi.
          </p>
          <p className="text-lg text-white/80 max-w-2xl mt-8 mx-auto lg:mx-0">
            Kami telah dipercaya oleh instansi pemerintah, organisasi politik,
            startup teknologi, hingga perusahaan korporat untuk merancang,
            membangun, dan mengelola platform digital yang aman, scalable, dan
            berorientasi bisnis.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
            <a
              href="#clients"
              className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-500 text-white font-medium transition-colors"
            >
              Lihat Klien Kami
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-purple-500/50 hover:border-purple-400 text-white font-medium transition-colors"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
