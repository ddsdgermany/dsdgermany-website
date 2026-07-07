export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold">DSD Germany</h2>
          <p className="text-blue-200 mt-3">
            Almanya iş ve kariyer danışmanlığı.
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3">Hizmetler</h3>
          <p className="text-blue-200">Sağlık Personeli</p>
          <p className="text-blue-200">Lojistik & Şoförlük</p>
          <p className="text-blue-200">Teknik Meslekler</p>
          <p className="text-blue-200">Ausbildung</p>
        </div>

        <div>
        <div>
  <h4 className="font-semibold text-lg mb-4">İletişim</h4>
  <p className="text-blue-200">E-posta: info@dsdgermany.de</p>
  <p className="text-blue-200">Destek: support@dsdgermany.de</p>
  <p className="text-blue-200">Telefon: +90 555 034 16 17</p>
  <p className="text-blue-200">Almanya/Türkiye</p>
</div>  
        </div>
      </div>

      <div className="text-center text-blue-300 text-sm mt-10">
        © 2026 DSD Germany. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}