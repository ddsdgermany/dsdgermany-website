import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Almanya İş İlanları | DSD Germany",
  description:
    "Almanya'da hemşire, OTA, fizyoterapist, tır şoförü ve Ausbildung alanlarında güncel kariyer fırsatlarını inceleyin.",
};

const jobs = [
  {
    title: "Hemşire",
    description:
      "Hastane, klinik ve bakım kuruluşlarında hemşirelik kariyer fırsatları.",
    href: "/almanya-hemsire-is-ilanlari",
    icon: "🩺",
  },
  {
    title: "OTA",
    description:
      "Ameliyathane teknikeri ve ameliyathane personeli için iş fırsatları.",
    href: "/almanya-ota-is-ilanlari",
    icon: "🏥",
  },
  {
    title: "Fizyoterapist",
    description:
      "Rehabilitasyon merkezleri ve kliniklerde fizyoterapist pozisyonları.",
    href: "/almanya-fizyoterapist-is-ilanlari",
    icon: "💪",
  },
  {
    title: "Tır Şoförü",
    description:
      "Lojistik ve taşımacılık firmalarında profesyonel şoförlük fırsatları.",
    href: "/almanya-tir-soforu-is-ilanlari",
    icon: "🚛",
  },
  {
    title: "Ausbildung",
    description:
      "Almanya'da mesleki eğitim ve kariyer başlangıcı fırsatları.",
    href: "/almanya-ausbildung",
    icon: "🎓",
  },
];

export default function JobsPage() {
  return (
    <main className="bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-semibold text-yellow-300">
            Almanya’da kariyer fırsatları
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Almanya İş İlanları
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Eğitim, deneyim ve Almanca seviyenize uygun güncel iş ve Ausbildung
            fırsatlarını inceleyin.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-6xl gap-7 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <article
              key={job.title}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl">{job.icon}</div>

              <h2 className="mt-5 text-2xl font-bold">{job.title}</h2>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {job.description}
              </p>

              <Link
                href={job.href}
                className="mt-7 inline-flex font-bold text-blue-700 hover:text-blue-900"
              >
                İlanları incele →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-blue-950 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Size uygun pozisyonu birlikte bulalım
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Mesleğinizi, Almanca seviyenizi ve deneyiminizi paylaşın. Size
            uygun iş seçenekleri hakkında bilgi verelim.
          </p>

          <a
            href="https://wa.me/905550341617"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 hover:bg-yellow-300"
          >
            WhatsApp ile Başvur
          </a>
        </div>
      </section>
    </main>
  );
}