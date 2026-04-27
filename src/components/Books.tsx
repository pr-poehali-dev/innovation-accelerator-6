const books = [
  {
    title: "В горы, к звёздам",
    author: "Анатолий Букреев",
    description: "Легендарный альпинист рассказывает о восхождениях на высочайшие вершины мира и о том, что движет людьми, идущими в горы.",
    emoji: "⛰️",
  },
  {
    title: "Эверест. Смертельное восхождение",
    author: "Джон Кракауэр",
    description: "Документальный рассказ о трагедии на Эвересте в 1996 году — один из самых пронзительных текстов о горах.",
    emoji: "🏔️",
  },
  {
    title: "Горы в моём сердце",
    author: "Вальтер Бонатти",
    description: "Итальянский альпинист описывает свои одиночные экспедиции и философию жизни в горах.",
    emoji: "🌄",
  },
  {
    title: "Touching the Void",
    author: "Джо Симпсон",
    description: "История выживания в Андах — один из самых невероятных и вдохновляющих рассказов о силе человеческого духа.",
    emoji: "🧗",
  },
  {
    title: "Дикая природа Кавказа",
    author: "Михаил Голубев",
    description: "Путеводитель по лучшим маршрутам Кавказских гор с описанием природы, флоры и фауны региона.",
    emoji: "🌿",
  },
  {
    title: "Семь вершин",
    author: "Кид Мун",
    description: "Путешествие на все семь высочайших вершин континентов — захватывающий дневник приключений и открытий.",
    emoji: "🗻",
  },
];

export default function Books() {
  return (
    <div className="bg-white px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-600 mb-4">Библиотека путешественника</h3>
        <h2 className="text-3xl lg:text-5xl font-bold text-neutral-900 mb-12 leading-tight">
          Книги, которые зовут в горы
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.title}
              className="border border-neutral-200 p-6 hover:border-neutral-900 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{book.emoji}</div>
              <h4 className="text-lg font-bold text-neutral-900 mb-1">{book.title}</h4>
              <p className="text-sm text-neutral-500 mb-3 uppercase tracking-wide">{book.author}</p>
              <p className="text-neutral-700 text-sm leading-relaxed">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
