import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Almanya OTA İş İlanları | DSD Germany",
  description:
    "Almanya'da OTA olarak çalışmak isteyen adaylar için iş fırsatları, denklik, Almanca, vize ve işe yerleştirme süreçleri hakkında bilgi alın.",
};

const whatsappUrl =
  "https://wa.me/905550341617?text=Merhaba%2C%20Almanya%20OTA%20i%C5%9F%20ilanlar%C4%B1%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

export default function Page() {
  return (
    <main className="bg-white text-slate-900">
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-700 px-6 py-20 text-white">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 font-semibold text-yellow-300">
            Almanya’da ameliyathane kariyeri
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Almanya OTA İş İlanları
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            Almanya’da ameliyathane teknikeri olarak çalışmak isteyen adaylara
            işveren görüşmeleri, denklik, vize ve işe yerleşme süreçlerinde
            profesyonel destek sağlıyoruz.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-yellow-400 px-7 py-4 font-bold text-slate-900 transition hover:bg-yellow-300"
            >
              WhatsApp ile Başvur
            </a>

            <a
              href="#surec"
              className="rounded-xl border border-white/40 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Süreci İncele
            </a>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <p className="font-semibold text-blue-700">Başvuru şartları</p>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Kimler başvurabilir?
              </h2>

              <p className="mt-5 leading-8 text-slate-600">
                Eğitim, Almanca seviyesi, denklik durumu ve ameliyathane
                tecrübesi işveren seçeneklerini doğrudan etkileyebilir.
                Belgeleriniz incelenerek size uygun yol haritası hazırlanır.
              </p>
            </div>

            <div className="rounded-3xl bg-blue-50 p-8">
              <ul className="space-y-5">
                <li className="flex gap-3">
                  <span className="font-bold text-blue-700">✓</span>
                  Ameliyathane hizmetleri veya OTA eğitimi mezunları
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-700">✓</span>
                  Almanca öğrenen veya B1/B2 seviyesine sahip adaylar
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-700">✓</span>
                  Denklik sürecini başlatmış veya başlatmak isteyenler
                </li>

                <li className="flex gap-3">
                  <span className="font-bold text-blue-700">✓</span>
                  Ameliyathane tecrübesi bulunan adaylar
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-semibold text-blue-700">DSD Germany desteği</p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Hangi konularda destek sağlıyoruz?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-3xl">📄</div>
              <h3 className="mt-5 text-xl font-bold">Denklik süreci</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Eğitim belgelerinizin değerlendirilmesi ve denklik sürecinin
                takibi konusunda yönlendirme sağlanır.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-3xl">🏥</div>
              <h3 className="mt-5 text-xl font-bold">Hastane görüşmeleri</h3>
              <p className="mt-3 leading-7 text-slate-600">
                Profilinize uygun hastane ve ameliyathane pozisyonları için
                görüşme süreci organize edilir.
              </p>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm">
              <div className="text-3xl">✈️</div>
              <h3 className="mt-5 text-xl font-bold">Vize ve yerleşim</h3>
              <p className="mt-3 leading-7 text-slate-600">
                İş sözleşmesinden Almanya’ya giriş ve işe başlangıca kadar
                süreç boyunca destek verilir.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="surec" className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="font-semibold text-blue-700">Başvuru süreci</p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Süreç nasıl ilerliyor?
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Ön başvuru", "Bilgileriniz ve belgeleriniz incelenir."],
              [
                "02",
                "Profil değerlendirmesi",
                "Dil, eğitim ve tecrübenize uygun yol belirlenir.",
              ],
              [
                "03",
                "İşveren görüşmesi",
                "Uygun hastanelerle online görüşme gerçekleştirilir.",
              ],
              [
                "04",
                "İş sözleşmesi",
                "Olumlu görüşme sonrası sözleşme süreci başlatılır.",
              ],
              [
                "05",
                "Denklik ve vize",
                "Resmî işlemler için gerekli yönlendirmeler yapılır.",
              ],
              [
                "06",
                "Almanya’ya başlangıç",
                "Almanya’ya giriş ve işe başlama süreci tamamlanır.",
              ],
            ].map(([number, title, description]) => (
              <article
                key={number}
                className="rounded-3xl border border-slate-200 p-7"
              >
                <span className="text-sm font-bold text-blue-700">
                  {number}
                </span>

                <h3 className="mt-3 text-xl font-bold">{title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="font-semibold text-blue-700">Merak edilenler</p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Sık sorulan sorular
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            <details className="rounded-2xl bg-white p-6">
              <summary className="cursor-pointer font-bold">
                Almanca seviyesi kaç olmalıdır?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                İşveren ve denklik sürecine göre şartlar değişebilir. B1 veya
                B2 Almanca seviyesi adayın seçeneklerini artırır.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-6">
              <summary className="cursor-pointer font-bold">
                Denklik olmadan başvuru yapılabilir mi?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Bazı işverenler denklik süreci devam eden adayları
                değerlendirebilir. Kesin durum adayın belgelerine ve işverenin
                şartlarına göre belirlenir.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-6">
              <summary className="cursor-pointer font-bold">
                Ameliyathane tecrübesi gerekli mi?
              </summary>
              <p className="mt-4 leading-7 text-slate-600">
                Tecrübe, işveren seçeneklerini artırır. Özellikle uzun süreli
                ameliyathane deneyimi bulunan adaylar daha avantajlı olabilir.
              </p>
            </details>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl rounded-3xl bg-blue-950 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Almanya’da OTA kariyerinize başlayın
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-blue-100">
            Eğitim, Almanca ve ameliyathane tecrübenizi paylaşın. Profilinizi
            inceleyerek size uygun seçenekler hakkında bilgi verelim.
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-yellow-400 px-8 py-4 font-bold text-slate-900 transition hover:bg-yellow-300"
          >
            Hemen Başvur
          </a>
        </div>
      </section>
    </main>
  );
}