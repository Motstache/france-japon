import React from "react";

const AnimatedBanner: React.FC = () => {
  return (
    <div className="relative w-screen overflow-hidden aspect-[2/1] max-h-32 mt-8">
      {/* Fond panoramique qui défile */}
      <div
        className="absolute inset-0 animate-slide"
        style={{
          backgroundImage: "url('/banner-paysage.png')",
          backgroundSize: "cover",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom center",
        }}
      />

      {/* Motos fixes centrées */}
      <img
        src="/moto-silhouettes.png"
        alt="Motos"
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2
          translate-y-2 sm:translate-y-3 md:translate-y-4 lg:translate-y-5
          h-[30%] sm:h-[35%] md:h-[40%] lg:h-[45%]
          object-contain z-10
        "
      />

      <style>{`
        @keyframes slide {
          0% { background-position: 0 bottom; }
          100% { background-position: -2000px bottom; }
        }
        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBanner;
