"use client";
import React from "react";

export default function Reviews() {
  const reviews = [
    {
      name: "Alice Chen",
      title: "Creative Director",
      company: "Lumina Creative Agency",
      review:
        "Working with this team was a breath of fresh air. They understood our vision and executed it flawlessly. Highly recommended!"
    },
    {
      name: "Ravi Patel",
      title: "Product Manager",
      company: "Nimbus Tech",
      review:
        "Their attention to detail and commitment to quality blew us away. The final product was even better than we imagined."
    },
    {
      name: "Samantha Lee",
      title: "Marketing Lead",
      company: "Horizon Marketing Co.",
      review:
        "Timely communication, excellent delivery, and a strong sense of creativity. It’s rare to find such a dependable partner."
    }
  ];

  // Duplicate first slide for seamless looping
  const slides = [...reviews, reviews[0]];

  const [current, setCurrent] = React.useState(0);
  const [isTransitioning, setIsTransitioning] = React.useState(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => prev + 1);
      setIsTransitioning(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  React.useEffect(() => {
    if (current === slides.length - 1) {
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
  }, [current, slides.length]);

  return (
    // Outer container: exactly viewport width, hides overflow
    <div className="relative w-[100vw] mx-auto justify-center bg-primary text-secondary flex items-center overflow-hidden" style={{ maxWidth: "100%" }}>
      <div
        className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
        style={{
          width: `${slides.length * 100}%`,
          transform: `translateX(-${current * 100}%)`
        }}
      >
        {slides.map((review, index) => (
          <div
            key={index}
            className="w-full flex flex-col flex-shrink-0 items-center justify-center text-center px-8 lg:text-left lg:items-start lg:px-0 lg:wrap-anywhere lg:pt-10"
          >
            <p className="w-[80vw] lg:w-full text-lg mb-2 font-bold max-w-xl leading-relaxed mx-auto lg:mx-0 lg:text-4xl">
              {review.review}
            </p>
            <div className="pt-7 ">
              <p className="lg:text-xl lg:font-medium">{review.name}, {review.title}</p>
              <p className="text-sm text-secondary font-extrabold lg:text-lg">{review.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
