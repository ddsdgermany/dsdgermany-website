import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Almanya Hemşire İş İlanları | DSD Germany",
  description:
    "Almanya'da hemşire olarak çalışmak isteyenler için iş fırsatları, denklik ve vize desteği.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-5xl font-bold mb-6">
        Almanya Hemşire İş İlanları
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        DSD Germany olarak Almanya'da çalışmak isteyen hemşirelere
        denklik, iş bulma ve vize süreçlerinde destek sağlıyoruz.
      </p>

      <a
        href="https://wa.me/905550341617"
        className="inline-block rounded-xl bg-blue-600 px-6 py-3 text-white font-semibold"
      >
        WhatsApp ile Başvur
      </a>
    </main>
  );
}