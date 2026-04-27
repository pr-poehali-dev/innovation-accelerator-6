const pools = [
  {
    name: "Infinity Pool — Aman Zermatt",
    location: "Церматт, Швейцария",
    description: "Подогреваемый бассейн с видом на Маттерхорн. Плывёшь — и кажется, что уходишь прямо в горизонт.",
    emoji: "🏊",
    temp: "34°C",
  },
  {
    name: "Sky Pool — Lefay Resort",
    location: "Озеро Гарда, Италия",
    description: "Бассейн на краю скалы над итальянскими Альпами. Панорама 180° на горы и озеро одновременно.",
    emoji: "🌅",
    temp: "32°C",
  },
  {
    name: "Outdoor Pool — Chedi Andermatt",
    location: "Андерматт, Швейцария",
    description: "Один из длиннейших открытых бассейнов в Альпах — 35 метров под открытым небом среди снежных вершин.",
    emoji: "❄️",
    temp: "30°C",
  },
  {
    name: "Thermal Pool — Vigilius Mountain Resort",
    location: "Южный Тироль, Италия",
    description: "Деревянный отель без дороги — только канатная дорога. Термальный бассейн среди лиственничного леса.",
    emoji: "🌲",
    temp: "36°C",
  },
  {
    name: "Rock Pool — Explora Patagonia",
    location: "Торрес-дель-Пайне, Чили",
    description: "Бассейн, вырубленный в патагонских скалах с видом на ледники и пики Анд. Дикая природа рядом.",
    emoji: "🦅",
    temp: "38°C",
  },
  {
    name: "Forest Pool — Six Senses Bhutan",
    location: "Паро, Бутан",
    description: "Бассейн среди гималайских сосен на высоте 2200 м. Полное уединение и звук горной реки рядом.",
    emoji: "🏯",
    temp: "35°C",
  },
];

export default function Pools() {
  return (
    <div className="bg-sky-950 px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-sky-400 mb-4">Вода и высота</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-12 leading-tight">
          Бассейны с видом на вершины
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pools.map((pool) => (
            <div
              key={pool.name}
              className="border border-sky-900 p-6 hover:border-sky-400 transition-colors duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{pool.emoji}</div>
                <span className="text-sky-400 text-sm font-medium bg-sky-900 px-2 py-1">{pool.temp}</span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1">{pool.name}</h4>
              <p className="text-xs text-sky-500 mb-3 uppercase tracking-wide">{pool.location}</p>
              <p className="text-sky-200 text-sm leading-relaxed">{pool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
