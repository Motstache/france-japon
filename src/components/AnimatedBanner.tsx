import React from "react";

const AnimatedBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden h-32 mt-8 flex items-end justify-center">
      {/* Fond panoramique qui défile */}
      <div
        className="absolute inset-0 animate-slide"
        style={{
          backgroundImage: "url('/banner-paysage.png')", // fond panoramique
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
        }}
      />

      {/* Motos fixes au premier plan */}
      <div className="relative z-10">
        <img
          src="/moto-silhouettes.png"
          alt="Motos"
          className="h-24 object-contain"
        />
      </div>

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
