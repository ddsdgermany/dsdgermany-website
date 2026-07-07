const features = [
  {
    title: "Deneyimli Danışmanlık",
    text: "Adayların başvuru sürecinden Almanya'da işe başlayana kadar her aşamada destek sağlıyoruz.",
  },
  {
    title: "Güvenilir İşveren Ağı",
    text: "Hastaneler, bakım merkezleri, lojistik firmaları ve teknik sektörlerde güvenilir iş ortaklarımızla çalışıyoruz.",
  },
  {
    title: "Vize ve Denklik Desteği",
    text: "Denklik, çalışma izni, vize ve resmi evrak süreçlerinde profesyonel danışmanlık sunuyoruz.",
  },
  {
    title: "Sürekli İletişim",
    text: "WhatsApp, telefon ve e-posta üzerinden süreç boyunca hızlı ve düzenli iletişim sağlıyoruz.",
  },
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-yellow-400 font-semibold mb-3">
            Neden DSD Germany?
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            Almanya Kariyer Yolculuğunuzda Güvenilir Çözüm Ortağınız
          </h2>

          <p className="text-blue-100 max-w-3xl mx-auto text-lg">
            Her adayın hedefi farklıdır. Bu nedenle tüm süreci size özel planlıyor
            ve Almanya'daki kariyer hedefinize ulaşmanız için yanınızda oluyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item) => (
            <div
              key={item.title}
              className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                ✓ {item.title}
              </h3>

              <p className="text-blue-100 leading-7">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}