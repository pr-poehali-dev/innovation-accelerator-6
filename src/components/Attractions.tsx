const attractions = [
  {
    name: "Эльбрус",
    location: "Кабардино-Балкария, Россия",
    description: "Высочайшая вершина Европы (5642 м). Потухший вулкан с ледниками, альпийскими лугами и захватывающими панорамами.",
    emoji: "🏔️",
  },
  {
    name: "Водопад Учан-Су",
    location: "Крым, Россия",
    description: "Самый высокий водопад Крыма — падает с высоты 98 метров сквозь густой сосновый лес Ай-Петринской яйлы.",
    emoji: "💧",
  },
  {
    name: "Долина Чегем",
    location: "Кабардино-Балкария, Россия",
    description: "Живописное ущелье с водопадами, древними башнями и термальными источниками среди отвесных скал.",
    emoji: "🌊",
  },
  {
    name: "Пещера Новоафонская",
    location: "Абхазия",
    description: "Одна из крупнейших пещер мира с подземным озером, сталактитами и залами высотой до 97 метров.",
    emoji: "🦇",
  },
  {
    name: "Смотровая Дарьяльского ущелья",
    location: "Северная Осетия, Россия",
    description: "«Ворота Кавказа» — узкое ущелье реки Терек с вертикальными скалами высотой до 1000 метров.",
    emoji: "👁️",
  },
  {
    name: "Озеро Рица",
    location: "Абхазия",
    description: "Горное озеро на высоте 950 м с ярко-бирюзовой водой в окружении елей и заснеженных вершин.",
    emoji: "🏞️",
  },
];

export default function Attractions() {
  return (
    <div className="bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-600 mb-4">Природные чудеса</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Места, которые захватывают дух
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {attractions.map((item) => (
            <div
              key={item.name}
              className="group border border-neutral-200 p-6 hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.emoji}</div>
              <h4 className="text-xl font-bold text-neutral-900 mb-1">{item.name}</h4>
              <p className="text-xs text-neutral-500 mb-3 uppercase tracking-wide">{item.location}</p>
              <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
