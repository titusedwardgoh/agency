import LetsTalk from "../components/LetsTalk";
import EmployeeCard from "../components/EmployeeCard";
import employeeData from "../data/employeeData";
import Image from "next/image";
import Motion from "../components/Animations/index";
import { roboto } from "../layout";

export default function About() {
  const rows = [];
  const values = [
    "Creativity & Innovation",
    "Integrity & Trust",
    "brand-first Approach",
    "love digital",
    "going the extra mile",
    "Collaboration"
  ];

  for (let i = 0; i < employeeData.length; i += 3) {
    const triple = employeeData.slice(i, i + 3);
    rows.push(triple);
  }

  const valuesEl = values.map((value, index) => {
    const isOddCard = index % 2 === 0;
    const mdHasMdBottomBorder = [4, 5].includes(index);
    const hasBottomBorder = [5].includes(index);
    const largeModeRight = [2, 5].includes(index);
    const largeModeBottom = [3, ,4, 5].includes(index);

    const borderClasses = [
      "border-2 border-[#e23125]",
      hasBottomBorder ? "" : "border-b-0",
      isOddCard ? "md:border-r-0" : "",
      mdHasMdBottomBorder ? "md:border-b-2" : "md:border-b-0", 
      largeModeBottom ? "lg:border-b-2" : "lg:border-b-0", 
      largeModeRight ? "lg:border-r-2" : "lg:border-r-0", 
    ].join(" ");


    return (
      <div
        key={index}
        className={`card bg-primary w-[90vw] md:w-[47%] lg:w-[33%] xl:py-10 ${borderClasses}`}
      >
        <div className="card-body items-center text-center p-10 lg:flex lg:flex-col lg:justify-center">
          <h2 className="card-title text-2xl lg:text-4xl font-black text-secondary capitalize">
            {value}
          </h2>
          <p className="text-secondary text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className="bg-primary flex flex-col items-center p-5 gap-3 md:px-10 xl:pt-30">
      <div className="flex flex-col items-center text-center gap-3 mb-5 mt-20 w-[95vw] max-w-5xl lg:max-w-[95vw] lg:flex-row lg:items-start xl:max-w-[1800px]">
        <p className="text-5xl text-secondary font-black capitalize sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl md:text-left md:px-10 lg:w-[50%] ">
          An award-winning full-stack digital marketing studio
        </p>
        <div className="flex flex-col gap-5 mt-5 lg:mt-0 lg:w-[50%]">
          <p className="text-secondary px-5 font-bold sm:text-lg md:mt-5 md:text-left md:px-10">
            We’re a full-stack digital marketing studio based in the center of New York City. From strategy to implementation, we’re here to help make your brand shine.
          </p>
          <p className="text-secondary px-5 font-bold sm:text-lg md:mt-5 xl:mt-8 md:text-left  md:px-10">
            Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      <div className="my-10 xl:mt-30">
        <Image 
          src="/team1.jpg"
          width={1726}
          height={1150}
          alt="picture of team"    
        />
      </div>

      <div className="flex flex-col items-center text-center gap-5 mt-20 lg:mt-0 lg:mt-30">
        <div>
          <Motion.Up>
            <p className={`text-secondary text-center uppercase tracking-[7px] font-medium text-xs md:text-lg ${roboto.className}`}>
              What Makes us Different
            </p>
          </Motion.Up>
          <p className="text-secondary capitalize font-black text-3xl text-center md:text-5xl md:max-w-160 lg:text-6xl">
            the codes we live by
          </p>
        </div>
        <div className="mx-auto flex flex-wrap justify-center md:w-[90vw] lg:max-w-[1600px] md:pt-10 lg:pt-20">
          {valuesEl}
        </div>
      </div>

      <div className="mt-30 flex flex-col items-center">
        <div>
          <Motion.Up>
            <p className={`text-secondary text-center uppercase tracking-[7px] font-medium text-xs md:text-lg ${roboto.className}`}>
              get to know us
            </p>
          </Motion.Up>
          <p className="text-secondary capitalize font-black text-3xl text-center md:text-5xl md:max-w-160 lg:text-6xl">
            younic is its people
          </p>
        </div>
        <div className="mt-5 md:mt-10 lg:mt-20">
          {rows.map((triple, index) => (
            <div key={index} className="md:flex md:gap-4">
              {triple.map((item, i) => (
                <EmployeeCard
                  key={i}
                  title={item.title}
                  name={item.name}
                  image={item.src.url}
                  width={item.src.width}
                  height={item.src.height}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <LetsTalk />
    </div>
  );
}
