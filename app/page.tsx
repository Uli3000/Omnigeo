import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const continents = [
    {
      name: "Europe",
      description: "44 Paisses • Alta Densidad de Aprendizaje",
      image: "/europe.jpg",
      size: "md:col-span-2 lg:col-span-2",
      height: "h-80 md:h-96",
    },
    {
      name: "Africa",
      description: "54 ESTADOS SOVERANOS",
      image: "/africa.jpg",
      size: "md:col-span-1 lg:col-span-1",
      height: "h-80 md:h-96",
    },
    {
      name: "Asia",
      description: "EL CONTINENTE MAS LARGO",
      image: "/asia.jpg",
      size: "md:col-span-1 lg:col-span-1",
      height: "h-80 md:h-80",
    },
    {
      name: "Americas",
      description: "HEMISFERIO OCCIDENTAL",
      image: "/americas.jpg",
      size: "md:col-span-1 lg:col-span-1",
      height: "h-80 md:h-80",
    },
    {
      name: "Oceania",
      description: "ISLAS DEL PACIFICO",
      image: "/oceania.jpg",
      size: "md:col-span-1 lg:col-span-1",
      height: "h-80 md:h-80",
    },
  ];

  const totalCountries = 195;

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#11131B" }}>
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Explora las
            <br />
            <span className="bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Profundidades de la Tierra.
            </span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 auto-rows-min">
          {continents.map((continent) => (
            <div
              key={continent.name}
              className={`group relative ${continent.size} ${continent.height} rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10`}
            >
              <Image
                src={continent.image}
                alt={continent.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/70 transition-all duration-500" />
              
              <div className="relative h-full flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {continent.name}
                </h3>
                <p className="text-slate-300 text-sm mb-6 uppercase tracking-wide">
                  {continent.description}
                </p>
                
                <div className="flex gap-3">
                  <button className="relative px-5 py-2 text-sm font-medium text-white rounded-lg overflow-hidden group/study">
                    <Link href={`/study/${continent.name.toLocaleLowerCase()}`}>
                      <div className="absolute inset-0 bg-linear-to-r from-blue-500/70 to-cyan-500/70 backdrop-blur-sm transition-all duration-300 group-hover/study:from-blue-500 group-hover/study:to-cyan-500" />
                      <div className="absolute inset-0 bg-linear-to-r from-blue-400 to-cyan-400 opacity-0 group-hover/study:opacity-100 transition-opacity duration-300" />
                      <span className="relative">Study Mode</span>
                    </Link>
                  </button>
                  
                  <button className="relative px-5 py-2 text-sm font-medium text-white rounded-lg overflow-hidden group/quiz">
                    <Link href={`/quiz/${continent.name.toLocaleLowerCase()}`}>
                      <div className="absolute inset-0 bg-linear-to-r from-purple-500/70 to-pink-500/70 backdrop-blur-sm transition-all duration-300 group-hover/quiz:from-purple-500 group-hover/quiz:to-pink-500" />
                      <div className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-400 opacity-0 group-hover/quiz:opacity-100 transition-opacity duration-300" />
                      <span className="relative">Quiz Mode</span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col items-center gap-2">
            <div className="text-slate-500 text-xs uppercase tracking-wider">Paises Totales</div>
            <div className="text-4xl md:text-5xl font-bold text-white bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text">
              {totalCountries}
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}