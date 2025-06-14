import { roboto } from "../layout";
import Image from "next/image";
import Motion from "../components/Animations";
import data from "../data/serviceData";
import LetsTalk from "../components/LetsTalk";

export default function Services() {
  return (
    <div className="bg-primary flex flex-col items-center p-5 gap-3 md:px-10">
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center mb-5 mt-10 w-full max-w-[1600px] px-5 mx-auto md:mt-20">
        <div className="relative w-full max-w-[1600px] h-60 md:h-[30vw] overflow-hidden flex items-center mx-auto">
          <Image
            src="/services_hero.jpg"
            width={1728}
            height={717}
            className="object-cover w-full h-full"
            alt="services hero"
          />
        </div>
        <Motion.Up>
          <p
            className={`text-secondary text-center uppercase tracking-[7px] font-medium text-xs md:text-lg mt-10 md:mt-15 ${roboto.className}`}
          >
            We’re here to help you
          </p>
        </Motion.Up>
        <p className="text-5xl text-secondary mb-30 font-black capitalize sm:text-5xl md:text-6xl lg:text-7xl lg:max-w-5xl xl:text-8xl md:mb-15">
          Grow & stand out from the crowd
        </p>
        <div className="divider divider-secondary w-full"></div>
      </div>

      {/* Service Sections */}
      {data.map((service, index) => {
        const half = Math.ceil(service.subcontent.length / 2);
        const left = service.subcontent.slice(0, half);
        const right = service.subcontent.slice(half);

        return (
          <div key={index} className="w-full max-w-[1600px] px-5 mx-auto">
            <div className="flex flex-col gap-5 mb-5 lg:flex-row">
              {/* Left Title + Description */}
              <div className="flex flex-col gap-2 md:w-xl lg:w-1/2">
                <h1 id={service.id} className="text-secondary font-black text-4xl md:text-5xl lg:text-7xl scroll-mt-35">
                  {service.title}
                </h1>
                <p className="text-secondary text-base md:text-lg font-semibold lg:w-2/3">
                  {service.description}
                </p>
              </div>

              {/* Divider (hidden on large screens) */}
              <div className="hidden md:divider md:divider-secondary lg:hidden"></div>

              {/* Right Columns */}
              <div className="flex flex-col gap-5 md:flex-row lg:w-1/2">
                {[left, right].map((column, i) => (
                  <div key={i} className="flex flex-col gap-5 md:gap-10">
                    {column.map((item, j) => (
                      <div key={j} className="flex flex-col gap-2">
                        <h2 className="text-secondary font-black text-2xl md:text-3xl">
                          {item.subtitle}
                        </h2>
                        <p className="text-secondary text-base font-semibold">
                          {item.subDescription}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {index < data.length - 1 && (
            <div className="divider divider-secondary mt-20"></div>
            )}
          </div>
        );
      })}
      <LetsTalk/>
    </div>
  );
}
