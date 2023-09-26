export default function Home() {
  const content = [
    {
      title: "Discover Star Wars Movies",
      paragraph:
        "Dive into the galaxy's most epic cinematic adventures. Explore the entire collection of Star Wars movies, from the classic originals to the latest blockbusters. Each film is a masterpiece of storytelling, taking you on a thrilling ride through a galaxy filled with heroes, villains, and unforgettable moments.",
    },
    {
      title: "Meet Iconic Star Wars Characters",
      paragraph:
        "Get to know the characters that have left an indelible mark on pop culture. From Jedi knights to Sith lords, rebels to bounty hunters, our character profiles provide in-depth insights into the personalities, backgrounds, and journeys of your favorite Star Wars icons.",
    },
  ];
  return (
    <main className="flex flex-col items-center p-4">
      <h1 className="text-center text-4xl sm:text-8xl font-bold sm:w-[80%] sm:mt-16">
        Welcome to the Star Wars Universe!
      </h1>
      <div className="flex flex-col mt-16 sm:mt-32 gap-8 sm:gap-16 sm:w-[80%]">
        {content.map((v, i) => (
          <div key={`content_${i}`} className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-4xl font-semibold">{v.title}</h2>
            <p>{v.paragraph}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
