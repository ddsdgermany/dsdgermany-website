export default function Testimonials() {
  const reviews = [
    {
      name: "Ayşe K.",
      job: "Hemşire",
      text: "DSD Germany sayesinde Almanya'da çok kısa sürede iş buldum. Tüm süreç boyunca yanımdaydılar.",
    },
    {
      name: "Mehmet T.",
      job: "Tır Şoförü",
      text: "Code 95 ve evrak işlemlerinde profesyonel destek aldım. Her şey planlandığı gibi ilerledi.",
    },
    {
      name: "Elif D.",
      job: "Ausbildung Adayı",
      text: "Başvuru sürecinden vizeye kadar her aşamada destek aldım. Kesinlikle tavsiye ederim.",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-4">
          Adaylarımız Ne Diyor?
        </h2>

        <p className="text-center text-gray-600 mb-14">
          Bizimle çalışan adayların deneyimleri.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition"
            >
              <div className="text-yellow-400 text-xl mb-4">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="text-gray-700 leading-7 mb-6">
                "{review.text}"
              </p>

              <h3 className="font-bold text-blue-900">
                {review.name}
              </h3>

              <p className="text-gray-500">
                {review.job}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}