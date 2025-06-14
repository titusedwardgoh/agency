import { roboto } from "../layout";
import Image from "next/image";
import LetsTalk from "../components/LetsTalk";
import WorkCard from "../components/WorkCard";
import workData from "../data/workData";

export default function Work() {
  const rows = [];

  for (let i = 0; i < workData.length; i += 2) {
    const pair = workData.slice(i, i + 2); // get 2 items at a time
    rows.push(pair);
  }

  return (
    <div className="bg-primary flex flex-col items-center p-5 gap-3 md:px-10">
      <div className="flex flex-col items-center text-center gap-3 mb-5 mt-20 w-[95vw] max-w-5xl">
        <p className="text-5xl text-secondary font-black capitalize sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
          explore Our work
        </p>
        <p className="text-secondary font-bold sm:text-lg md:mt-5 lg:md-7 xl:mt-8">
          Check out some of the amazing projects we’ve helped bring to life
        </p>
      </div>

      {rows.map((pair, index) => (
        <div key={index} className="md:flex">
          {pair.map((item, i) => (
            <WorkCard
              key={i}
              title={item.title}
              description={item.description}
              image={item.src.url}
              width={item.src.width}
              height={item.src.height}
              slug={item.slug}
            />
          ))}
        </div>
      ))}

      <LetsTalk />
    </div>
  );
}
