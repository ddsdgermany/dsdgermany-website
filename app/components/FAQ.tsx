const faqs = [
  {
    question: "Almanya’da çalışmak için Almanca şart mı?",
    answer:
      "Evet, çoğu meslek için Almanca seviyesi önemlidir. Sağlık alanında genellikle B1/B2 seviyesi beklenir. Ausbildung için de mesleğe göre Almanca şartları değişebilir.",
  },
  {
    question: "Başvuru için hangi belgeler gerekiyor?",
    answer:
      "Genellikle CV, diploma, sertifikalar, pasaport, dil belgesi ve mesleki belgeler gerekir. Başvuru alanına göre gerekli belgeler değişebilir.",
  },
  {
    question: "Ausbildung başvurusu yapabilir miyim?",
    answer:
      "Evet. Almanya’da mesleki eğitim yapmak isteyen adaylara uygun alan seçimi, başvuru, işveren ve vize sürecinde destek sağlıyoruz.",
  },
  {
    question: "Süreç ne kadar sürer?",
    answer:
      "Süreç adayın mesleğine, belgelerine, Almanca seviyesine ve vize durumuna göre değişir. Evraklar tamamlandığında süreç daha hızlı ilerler.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold mb-3">
            Sık Sorulan Sorular
          </p>

          <h2 className="text-4xl font-bold text-blue-950">
            Merak Ettikleriniz
          </h2>
        </div>

        <div className="space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}