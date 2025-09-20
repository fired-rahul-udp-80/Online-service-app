import React from "react";
import slider1 from "../../assests/home/slider1.jpg";
import slider2 from "../../assests/home/slider2.avif";

export default function HeroSlider() {
  const slides = [
    {
      img: slider1,
      title: "Welcome to Our Website",
      subtitle: "We provide the best services for you",
      btn: "Learn More",
    },
    {
      img: slider2,
      title: "Your Trusted Partner",
      subtitle: "Quality & reliability you can count on",
      btn: "Contact Us",
    },
  ];

  return (
    <div className="relative w-full hidden md:block lg:h-[80vh] overflow-hidden mt-16">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === 0 ? "opacity-100" : "opacity-0"
          }`}
          data-carousel-item
        >
          <img
            src={slide.img}
            className="w-full h-full object-cover"
            alt={slide.title}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white px-5">
            <h1 className="text-3xl md:text-5xl font-bold">{slide.title}</h1>
            <p className="mt-3 text-lg md:text-xl">{slide.subtitle}</p>
            <button className="mt-5 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
              {slide.btn}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
