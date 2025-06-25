import { PiStarFour, PiStarFourFill } from "react-icons/pi";
export default function Home() {
  return (
    <>
      <div className="flex justify-center relative flex-col items-center h-screen w-6/7">
        <div className="absolute top-0 left-0 z-50 h-screen overflow-hidden w-full">
          <div className="absolute inset-0 opacity-50 pointer-events-none">
            {[...Array(20)].map((_, i) => {
              const size = Math.random() * 6 + 2;
              const color = i % 3 === 0 ? "#FFb147" : "#B86ADF";

              return (
                <div
                  key={i}
                  className="absolute rounded-full animate-float"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    top: `${Math.random() * 100}%`,
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 15 + 10}s`,
                    animationDelay: `${Math.random() * 5}s`,
                    transform: `rotate(${Math.random() * 360}deg)`,
                    color: color,
                    filter: `drop-shadow(0 0 4px ${color}) drop-shadow(0 0 8px ${color})`,
                  }}
                >
                  {i % 2 === 0 ? <PiStarFour /> : <PiStarFourFill />}
                </div>
              );
            })}
          </div>
        </div>
        <div className="">
          <h2 className="self-baseline">My Name Is</h2>
          <h1 className="text-8xl font-[michroma]">ARIF BASHA</h1>
          <h2 className="w-full text-right">Tech Enthusiast</h2>
        </div>
      </div>
    </>
  );
}

