"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative min-h-[850px] bg-cover bg-center text-white flex items-center"
      style={{ backgroundImage: "url('/germany.jpg')" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-blue-950/60"></div>

      <motion.div
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative max-w-7xl mx-auto px-8 py-40 w-full"
      >
        <div className="max-w-4xl">
          <span className="inline-block bg-yellow-400 text-blue-950 font-bold px-5 py-2 rounded-full mb-6">
            🇩🇪 Almanya Kariyer ve Eğitim Danışmanlığı
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
            Almanya’da Güvenilir İş,
            <br />
            Kariyer ve Ausbildung
            <br />
            Danışmanlığı
          </h1>

          <p className="text-xl md:text-2xl leading-9 text-blue-100 max-w-3xl mb-10">
            Sağlık, lojistik, teknik meslekler ve Ausbildung alanlarında
            Almanya'da çalışmak veya eğitim almak isteyen adaylara başvuru,
            evrak, işveren ve vize süreçlerinde profesyonel danışmanlık
            sağlıyoruz.
          </p>

          <div className="flex flex-wrap gap-5 mb-12">
            <a
              href="#contact"
              className="rounded-2xl bg-yellow-400 px-10 py-5 text-lg font-bold text-blue-950 shadow-xl transition hover:scale-105 hover:bg-yellow-300"
            >
              Hemen Başvur
            </a>

            <a
              href="#services"
              className="rounded-2xl border-2 border-white px-10 py-5 text-lg font-bold text-white transition hover:bg-white hover:text-blue-900"
            >
              Hizmetleri İncele
            </a>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <div className="mb-3 text-3xl">🤝</div>
              <h3 className="mb-2 font-bold">Güvenilir İşverenler</h3>
              <p className="text-sm text-blue-100">
                Almanya genelinde güvenilir işveren ağı.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <div className="mb-3 text-3xl">📄</div>
              <h3 className="mb-2 font-bold">Denklik & Vize</h3>
              <p className="text-sm text-blue-100">
                Evrak, denklik ve vize süreçlerinde destek.
              </p>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
              <div className="mb-3 text-3xl">🌍</div>
              <h3 className="mb-2 font-bold">Türkiye & Almanya</h3>
              <p className="text-sm text-blue-100">
                Süreciniz boyunca iki ülkede danışmanlık.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}