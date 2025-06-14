import Image from "next/image";
import Link from "next/link";
import { roboto } from "../layout";

export default function Projects() {
  const items = [
    { src: "/Mask-Group-1.jpeg", title: "Marie" },
    { src: "/Mask-Group-2.jpeg", title: "Softy" },
    { src: "/Mask-Group-3.jpeg", title: "Cela" },
    { src: "/Mask-Group-4.jpeg", title: "Omi" },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-[90vw] sm:w-[22vw] sm:h-[25rem] lg:h-[40rem] lg:max-w-[400px] h-[30rem] overflow-hidden group"
        >
          {/* Image */}
          <Link 
            href={`/work/${item.title.toLowerCase()}`}
            >
          <Image
            src={item.src}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-1000 group-hover:scale-110 cursor-pointer"
          />
          {/* Red overlay */}
          <div className="absolute inset-0 bg-red-600 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10"></div>

          {/* Title */}
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <h2 className={`text-white text-lg font-bold opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000 uppercase tracking-[7px] ${roboto.className}`}>
              {item.title}
            </h2>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
