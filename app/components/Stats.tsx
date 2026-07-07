export default function Stats() {
  const stats = [
    { number: "500+", title: "Yerleştirilen Aday" },
    { number: "50+", title: "İş Ortağı" },
    { number: "15+", title: "Almanya Şehri" },
    { number: "%95", title: "Memnuniyet Oranı" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((item) => (
            <div key={item.title}>
              <h2 className="text-5xl font-bold text-blue-900">
                {item.number}
              </h2>

              <p className="mt-3 text-gray-600 text-lg">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}