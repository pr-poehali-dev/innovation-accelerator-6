const hotels = [
  {
    name: "Whitepod Eco-Luxury Hotel",
    location: "Швейцарские Альпы, Швейцария",
    description: "Уникальные геодезические купола на склоне горы с панорамным видом на Альпы. Экологичный люкс среди нетронутой природы.",
    stars: "★★★★★",
    emoji: "⛺",
  },
  {
    name: "Cheval Blanc Courchevel",
    location: "Куршевель, Франция",
    description: "Легендарный отель прямо на горнолыжной трассе. Мишленовский ресторан, спа и лучший вид на французские Альпы.",
    stars: "★★★★★",
    emoji: "🏨",
  },
  {
    name: "Everest View Hotel",
    location: "Намче-Базар, Непал",
    description: "Самый высокогорный отель мира (3962 м) с прямым видом на Эверест. Незабываемое утро с чаем и главной вершиной планеты.",
    stars: "★★★★",
    emoji: "🗻",
  },
  {
    name: "Rooms Hotel Kazbegi",
    location: "Казбеги, Грузия",
    description: "Стильный дизайн-отель у подножия горы Казбек. Панорамные окна, местная кухня и вид на древний монастырь Гергети.",
    stars: "★★★★",
    emoji: "🏔️",
  },
  {
    name: "Aman Zermatt",
    location: "Церматт, Швейцария",
    description: "Ультра-люксовый отель с видом на Маттерхорн. Бесконечный бассейн, частный доступ к трассам и альпийское спа.",
    stars: "★★★★★",
    emoji: "🌨️",
  },
  {
    name: "The Oberoi Wildflower Hall",
    location: "Шимла, Индия",
    description: "Бывшая резиденция лорда Китченера в Гималаях на высоте 2250 м. Кедровые леса, конные прогулки и индийская роскошь.",
    stars: "★★★★★",
    emoji: "🌿",
  },
];

export default function Hotels() {
  return (
    <div className="bg-neutral-900 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Где остановиться</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12 leading-tight">
          Лучшие горные отели мира
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div
              key={hotel.name}
              className="border border-neutral-700 p-6 hover:border-white transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{hotel.emoji}</div>
              <div className="text-yellow-400 text-xs mb-2">{hotel.stars}</div>
              <h4 className="text-lg font-bold text-white mb-1">{hotel.name}</h4>
              <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide">{hotel.location}</p>
              <p className="text-neutral-400 text-sm leading-relaxed">{hotel.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
