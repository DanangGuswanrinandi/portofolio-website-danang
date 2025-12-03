import { useRef, useState } from 'react';

const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(132, 0, 255, 0.40)'
}) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();

    setPosition(prev => ({
      x: prev.x + (e.clientX - rect.left - prev.x) * 0.10,
      y: prev.y + (e.clientY - rect.top - prev.y) * 0.10
    }));
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative rounded-3xl p-8 overflow-hidden 
      backdrop-blur-2xl bg-[rgba(6,0,16,0.65)]
      border border-[#2a0050]/40 shadow-[0_0_32px_4px_rgba(132,0,255,0.28)]
      transition-all duration-500 ease-[cubic-bezier(.22,1,.36,1)]
      ${className}`}
    >
      {/* SPOTLIGHT */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700 ease-out"
        style={{
          opacity,
          background: `
            radial-gradient(
              circle at ${position.x}px ${position.y}px,
              rgba(132, 0, 255, 0.18) 0%,
              rgba(132, 0, 255, 0.12) 35%,
              rgba(132, 0, 255, 0.06) 60%,
              rgba(132, 0, 255, 0.03) 80%,
              transparent 100%
            )`
        }}
      />
      {children}
    </div>
  );
};

export default SpotlightCard;
