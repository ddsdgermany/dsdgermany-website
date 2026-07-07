import {
  FaUserNurse,
  FaTruck,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";

const services = [
  {
    icon: <FaUserNurse size={42} />,
    title: "Sağlık Personeli",
    text: "Hemşire ve sağlık çalışanları için Almanya iş süreçlerinde profesyonel destek.",
  },
  {
    icon: <FaTruck size={42} />,
    title: "Lojistik ve Şoförlük",
    text: "Tır şoförü adayları için işveren, evrak ve başvuru süreci desteği.",
  },
  {
    icon: <FaTools size={42} />,
    title: "Teknik Meslekler",
    text: "Teknik meslekler ve mühendislik alanlarında Almanya kariyer fırsatları.",
  },
  {
    icon: <FaGraduationCap size={42} />,
    title: "Ausbildung",
    text: "Almanya’da mesleki eğitim yapmak isteyen adaylara başvuru ve vize desteği.",
  },
];

export default function Services() {
  return (
    <section id="hizmetler" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-950 mb-4">
            Hizmetlerimiz
          </h2>
          <p className="text-gray-600 text-lg">
            Almanya kariyer yolculuğunuzda her adımda yanınızdayız.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-3xl shadow hover:shadow-2xl hover:-translate-y-2 transition duration-300 border border-gray-100"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-50 text-blue-700 mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-blue-950 mb-4">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}