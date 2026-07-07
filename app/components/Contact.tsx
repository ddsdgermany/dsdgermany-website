"use client";

export default function Contact() {
  return (
    <section id="iletisim" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-blue-950 mb-6">
            Başvuru ve İletişim
          </h2>

          <p className="text-gray-600 text-lg mb-8">
            Almanya’da iş veya Ausbildung fırsatları için bilgilerinizi gönderin.
            Size en kısa sürede dönüş yapalım.
          </p>

          <div className="space-y-4 text-gray-700">
            <p>📞 Telefon: +90 555 034 16 17</p>
            <p>💬 WhatsApp: +90 555 034 16 17</p>
            <p>📧 E-posta: info@dsdgermany.de</p>
            <p>📧 Destek: support@dsdgermany.de</p>
            <p>📍 Türkiye / Almanya</p>
          </div>
        </div>

        <form
          className="bg-gray-50 p-8 rounded-3xl shadow space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
            window.open(
              "https://wa.me/905550341617?text=Merhaba%20DSD%20Germany,%20başvuru%20yapmak%20istiyorum.",
              "_blank"
            );
          }}
        >
          <input type="text" placeholder="Ad Soyad" className="w-full border border-gray-300 rounded-xl p-4" />
          <input type="email" placeholder="E-posta" className="w-full border border-gray-300 rounded-xl p-4" />
          <input type="tel" placeholder="Telefon / WhatsApp" className="w-full border border-gray-300 rounded-xl p-4" />

          <select className="w-full border border-gray-300 rounded-xl p-4 text-gray-500">
            <option>İlgilendiğiniz hizmet</option>
            <option>Sağlık Personeli</option>
            <option>Lojistik ve Şoförlük</option>
            <option>Teknik Meslekler</option>
            <option>Ausbildung</option>
          </select>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              CV Yükle
            </label>
            <input type="file" accept=".pdf,.doc,.docx" className="w-full border border-gray-300 rounded-xl p-4 bg-white" />
          </div>

          <textarea placeholder="Mesajınız" rows={5} className="w-full border border-gray-300 rounded-xl p-4"></textarea>

          <button type="submit" className="w-full bg-blue-700 text-white font-semibold py-4 rounded-xl hover:bg-blue-800 transition">
            WhatsApp ile Başvuru Gönder
          </button>
        </form>
      </div>
    </section>
  );
}