import React from "react";

const AnimatedBanner: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden h-32 mt-8">
      <div
        className="absolute inset-0 animate-slide"
        style={{
          backgroundImage: "url('/banner-motos.png')",
          backgroundSize: "contain",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "center",
        }}
      />
      <style>{`
        @keyframes slide {
          0% { background-position: 0 0; }
          100% { background-position: -2000px 0; }
        }
        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnimatedBanner;
