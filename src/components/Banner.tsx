export default function Banner() {
  return (
    <div className="bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto bg-neutral-900 p-8 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
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
    </div>
  );
}
