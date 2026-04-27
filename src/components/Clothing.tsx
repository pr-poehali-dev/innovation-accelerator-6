const clothes = [
  {
    name: "Папаха",
    origin: "Кавказ",
    description: "Высокая меховая шапка из каракуля — символ достоинства и статуса у народов Кавказа. Носят мужчины.",
    emoji: "🎩",
  },
  {
    name: "Чоха",
    origin: "Грузия · Кавказ",
    description: "Традиционный грузинский кафтан с газырями на груди. Надевают на праздники и торжественные события.",
    emoji: "🥻",
  },
  {
    name: "Дагли",
    origin: "Непал · Гималаи",
    description: "Тёплый двубортный жакет непальских горцев из шерсти яка — защищает от ветра и мороза на высоте.",
    emoji: "🧥",
  },
  {
    name: "Чуба",
    origin: "Тибет · Гималаи",
    description: "Длинный халат тибетцев из шерсти яка. Днём носят на плечах, ночью укрываются как одеялом.",
    emoji: "👘",
  },
  {
    name: "Пату",
    origin: "Пакистан · Каракорум",
    description: "Большой шерстяной плащ пуштунских горцев — универсальная одежда, подстилка и одеяло одновременно.",
    emoji: "🧣",
  },
  {
    name: "Андийская бурка",
    origin: "Дагестан · Кавказ",
    description: "Войлочный плащ без рукавов — защищает от дождя, снега и ветра. Делается вручную из овечьей шерсти.",
    emoji: "🪡",
  },
];

export default function Clothing() {
  return (
    <div className="bg-stone-100 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-600 mb-4">Наследие народов</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Традиционная одежда горных народов
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clothes.map((item) => (
            <div
              key={item.name}
              className="bg-white border border-stone-200 p-6 hover:border-neutral-900 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h4 className="text-xl font-bold text-neutral-900 mb-1">{item.name}</h4>
              <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide">{item.origin}</p>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
