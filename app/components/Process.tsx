const steps = [
  {
    number: "01",
    title: "Başvuru",
    text: "Aday bilgilerinizi ve belgelerinizi bizimle paylaşırsınız.",
  },
  {
    number: "02",
    title: "Evrak Kontrolü",
    text: "Diploma, CV, sertifika ve diğer belgeleriniz kontrol edilir.",
  },
  {
    number: "03",
    title: "İşveren Görüşmesi",
    text: "Profilinize uygun işverenlerle görüşme süreci başlatılır.",
  },
  {
    number: "04",
    title: "Almanya Süreci",
    text: "Vize, denklik, iş başlangıcı ve yerleşme sürecinde destek sağlanır.",
  },
];

export default function Process() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Başvuru Süreci
          </h2>
          <p className="text-gray-600 text-lg">
            Almanya kariyer yolculuğunuz 4 kolay adımda başlar.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-white p-8 rounded-3xl shadow border border-gray-100"
            >
              <div className="text-4xl font-bold text-blue-200 mb-4">
                {step.number}
              </div>

              <h3 className="text-xl font-bold text-blue-950 mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}