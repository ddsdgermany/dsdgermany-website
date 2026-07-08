export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/905550341617?text=Merhaba%20DSD%20Germany,%20Almanya%20iş%20başvurusu%20hakkında%20bilgi%20almak%20istiyorum."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl hover:bg-green-600 transition font-bold"
    >
      <span className="text-2xl">💬</span>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}