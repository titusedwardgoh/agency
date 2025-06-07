"use client";
import React from "react";
import Image from "next/image"

export default function Carousel() {
  const items = [
    "/hero_image1.jpeg",
    "/hero_image2.jpeg",
    "/hero_image3.jpeg",
    "/hero_image4.jpeg",
    "/hero_image5.jpeg"
  ];

  const [current, setCurrent] = React.useState(0);
  const timeoutRef = React.useRef(null);

  React.useEffect(() => {
    // Set auto-scroll interval
    timeoutRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(timeoutRef.current); 
  }, []);

  return (
    <div className="relative w-[100vw] aspect-[3/2]">

      {items.map((item, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={item}
            width={1728}
            height={972}
            className="w-full h-full object-cover"
            alt={`Slide ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

