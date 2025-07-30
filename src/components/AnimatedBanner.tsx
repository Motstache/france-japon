import React from "react";

const AnimatedBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden h-32 mt-8">
      {/* Fond panoramique qui défile */}
      <div
        className="absolute inset-0 animate-slide"
        style={{
          backgroundImage: "url('/banner-paysage.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom",
        }}
      />

      {/* Motos fixes, légèrement descendues */}
      <img
        src="/moto-silhouettes.png"
        alt="Motos"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-2 h-24 object-contain z-10"
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
