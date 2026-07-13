"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-950 to-blue-800 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="mb-4 text-5xl font-bold">
            Almanya Başvuru Formu
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-blue-100">
            Bilgilerinizi doldurun. Ekibimiz başvurunuzu inceleyerek sizinle
            en kısa sürede iletişime geçecektir.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-white p-10 shadow-2xl"
        >

          <form className="grid gap-6 md:grid-cols-2">

            <input
              type="text"
              placeholder="Ad Soyad"
              className="rounded-xl border p-4 text-black outline-none focus:border-blue-600"
            />

            <input
              type="tel"
              placeholder="Telefon"
              className="rounded-xl border p-4 text-black outline-none focus:border-blue-600"
            />

            <input
              type="email"
              placeholder="E-posta"
              className="rounded-xl border p-4 text-black outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Ülke"
              className="rounded-xl border p-4 text-black outline-none focus:border-blue-600"
            />

            <input
              type="text"
              placeholder="Meslek"
              className="rounded-xl border p-4 text-black outline-none focus:border-blue-600"
            />

            <select className="rounded-xl border p-4 text-black">
              <option>Almanca Seviyesi</option>
              <option>A1</option>
              <option>A2</option>
              <option>B1</option>
              <option>B2</option>
              <option>C1</option>
              <option>C2</option>
            </select>

            <select className="rounded-xl border p-4 text-black">
              <option>Denklik Durumu</option>
              <option>Başlamadım</option>
              <option>Devam Ediyor</option>
              <option>Tamamlandı</option>
            </select>

            <input
              type="number"
              placeholder="Mesleki Deneyim (Yıl)"
              className="rounded-xl border p-4 text-black outline-none focus:border-blue-600"
            />

            <div className="md:col-span-2">
              <label className="mb-2 block font-semibold text-gray-700">
                CV Yükle (PDF / DOCX)
              </label>

              <input
                type="file"
                className="w-full rounded-xl border p-4 text-black"
              />
            </div>

            <textarea
              rows={6}
              placeholder="Eklemek istediğiniz not..."
              className="md:col-span-2 rounded-xl border p-4 text-black outline-none focus:border-blue-600"
            />

            <button
              type="submit"
              className="md:col-span-2 rounded-2xl bg-gradient-to-r from-blue-700 to-blue-900 py-5 text-xl font-bold text-white transition hover:scale-[1.02]"
            >
              🚀 Başvuruyu Gönder
            </button>

          </form>

        </motion.div>

      </div>
    </section>
  );
}