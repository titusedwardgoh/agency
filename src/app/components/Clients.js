"use client";
import React from "react";
import Image from "next/image";

export default function Clients() {
  const clients = [
    { src: "/client1.svg", alt: "client1", width: 57, height: 57 },
    { src: "/client2.svg", alt: "client2", width: 100, height: 37 },
    { src: "/client3.svg", alt: "client3", width: 96, height: 46 },
    { src: "/client4.svg", alt: "client4", width: 149, height: 32 },
    { src: "/client5.svg", alt: "client5", width: 163, height: 35 },
    { src: "/client6.svg", alt: "client6", width: 171, height: 51 },
  ];

  const getVisibleCount = () => {
    if (typeof window === "undefined") return 2; // fallback for SSR
    if (window.innerWidth >= 1280) return clients.length; // xl: show all
    if (window.innerWidth >= 1024) return 5; // lg
    if (window.innerWidth >= 768) return 3;  // md
    return 2; // sm
  };

  // SSR-safe initial state
  const [visibleCount, setVisibleCount] = React.useState(2);
  const [current, setCurrent] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(true);
  const isXL = visibleCount === clients.length;

  // On mount, update visibleCount based on actual window size
  React.useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    if (isXL) {
      setCurrent(0);
      setIsTransitioning(false);
    } else {
      setIsTransitioning(true);
    }
  }, [isXL]);

  const groups = React.useMemo(() => {
    if (isXL) {
      return [clients];
    }

    const temp = [];
    const totalGroups = Math.ceil(clients.length / visibleCount);

    for (let g = 0; g < totalGroups; g++) {
      const group = [];
      for (let i = 0; i < visibleCount; i++) {
        const index = (g * visibleCount + i) % clients.length;
        group.push(clients[index]);
      }
      temp.push(group);
    }

    return temp;
  }, [clients, visibleCount, isXL]);

  const slides = React.useMemo(() => [...groups, ...groups.slice(0, 1)], [groups]);

  // Auto-scroll
  React.useEffect(() => {
    if (isXL) return;

    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setIsTransitioning(true);
    }, 3000);

    return () => clearInterval(interval);
  }, [groups.length, isXL]);

  // Loop back to start
  React.useEffect(() => {
    if (current === groups.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrent(0);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setIsTransitioning(true);
          });
        });
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [current, groups.length]);

  return (
    <div className="relative w-full h-full overflow-hidden bg-primary text-secondary">
      <div
        className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${(current * 100) / slides.length}%)`,
        }}
      >
        {slides.map((group, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-5 py-2 gap-4 h-full"
            style={{ width: `${100 / slides.length}%` }}
          >
            {group.map((client, i) => (
              <Image
                key={i}
                src={client.src}
                alt={client.alt}
                width={client.width}
                height={client.height}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
