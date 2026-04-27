import { useState } from "react";

export default function Banner() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSent(true);
    }
  };

  return (
    <div className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-neutral-900 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 mb-8">
          <div>
            <p className="uppercase text-xs tracking-widest text-neutral-400 mb-3">Приложение для путешественников</p>
            <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight mb-4">
              Горы ждут.<br />Ты готов?
            </h2>
            <p className="text-neutral-400 text-base max-w-md">
              Скачай ГОРА бесплатно — маршруты, офлайн-карты и погода всегда под рукой.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <button className="bg-white text-black px-8 py-4 uppercase tracking-wide text-sm font-medium hover:bg-neutral-200 transition-colors duration-300 cursor-pointer">
              App Store
            </button>
            <button className="border border-white text-white px-8 py-4 uppercase tracking-wide text-sm font-medium hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer">
              Google Play
            </button>
          </div>
        </div>

        <div className="border border-neutral-200 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2">Узнай первым о запуске</h3>
            <p className="text-neutral-500 text-sm">Оставь email — пришлём уведомление, когда приложение выйдет.</p>
          </div>
          {sent ? (
            <div className="text-green-600 font-medium text-lg shrink-0">Отлично! Мы напишем тебе ✓</div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Твой email"
                className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors w-full sm:w-64"
              />
              <button
                type="submit"
                className="bg-neutral-900 text-white px-8 py-3 uppercase tracking-wide text-sm font-medium hover:bg-neutral-700 transition-colors duration-300 cursor-pointer whitespace-nowrap"
              >
                Подписаться
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
