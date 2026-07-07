"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-[720px] bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: "url('/germany.jpg')" }}
    >
      <div className="absolute inset-0 bg-blue-950/75"></div>

      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-6 py-36"
      >
        <div className="max-w-3xl">
          <p className="text-yellow-400 font-semibold mb-4">
            Almanya Kariyer ve Eğitim Danışmanlığı
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Almanya’da Güvenilir İş, Kariyer ve Ausbildung Danışmanlığı
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-8">
            Sağlık, lojistik, teknik meslekler ve Ausbildung alanlarında
            Almanya’da çalışmak veya eğitim almak isteyen adaylara başvuru,
            evrak, işveren ve vize sürecinde profesyonel destek sağlıyoruz.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#iletisim"
              className="bg-yellow-400 text-blue-950 font-semibold px-8 py-4 rounded-xl hover:bg-yellow-300 transition text-center"
            >
              Hemen Başvur
            </a>

            <a
              href="#hizmetler"
              className="border border-white/70 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-blue-950 transition text-center"
            >
              Hizmetleri İncele
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              ✓ Güvenilir işveren ağı
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              ✓ Evrak ve vize desteği
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/20">
              ✓ Türkiye / Almanya
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}