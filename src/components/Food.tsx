const dishes = [
  {
    name: "Хинкали",
    origin: "Грузия · Кавказ",
    description: "Сочные мешочки из теста с мясом и зеленью — символ грузинских гор. Едят руками, держа за хвостик.",
    emoji: "🥟",
  },
  {
    name: "Момо",
    origin: "Непал · Гималаи",
    description: "Непальские паровые пельмени с начинкой из мяса или овощей — уличная еда Катманду и горных деревень.",
    emoji: "🫕",
  },
  {
    name: "Далбат",
    origin: "Непал · Гималаи",
    description: "Традиционное блюдо треккеров: чечевичный суп с рисом, карри и овощами. Дают добавку бесплатно!",
    emoji: "🍛",
  },
  {
    name: "Шурпа",
    origin: "Узбекистан · Тянь-Шань",
    description: "Наваристый бараний суп с овощами — согревает после долгого дня в горах лучше любого напитка.",
    emoji: "🍲",
  },
  {
    name: "Хачапури по-аджарски",
    origin: "Грузия · Кавказ",
    description: "Лодочка из теста с расплавленным сулугуни и яйцом — классика горных кафе Грузии.",
    emoji: "🫓",
  },
  {
    name: "Цампа",
    origin: "Тибет · Гималаи",
    description: "Обжаренная ячменная мука с маслом яка и чаем — главная еда тибетских пастухов на высоте 4000+ м.",
    emoji: "🌾",
  },
];

export default function Food() {
  return (
    <div className="bg-neutral-950 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Вкусы высокогорья</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12 leading-tight">
          Блюда горной кухни
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dishes.map((dish) => (
            <div
              key={dish.name}
              className="border border-neutral-800 p-6 hover:border-neutral-500 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{dish.emoji}</div>
              <h4 className="text-xl font-bold text-white mb-1">{dish.name}</h4>
              <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide">{dish.origin}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{dish.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
