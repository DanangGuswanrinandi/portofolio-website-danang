import { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';

const DEFAULT_ITEMS = [];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

export default function Carousel({
  items = DEFAULT_ITEMS,  // <-- items eksternal dipakai langsung
  baseWidth = 200,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const el = containerRef.current;
      el.addEventListener("mouseenter", () => setIsHovered(true));
      el.addEventListener("mouseleave", () => setIsHovered(false));
      return () => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      };
    }
  }, [pauseOnHover]);

  // autoplay
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev =>
          prev === carouselItems.length - 1 ? (loop ? 0 : prev) : prev + 1
        );
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, carouselItems.length, pauseOnHover]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex(prev =>
        Math.min(prev + 1, carouselItems.length - 1)
      );
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex(prev =>
        Math.max(prev - 1, 0)
      );
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden p-4 rounded-3xl border border-[#222]"
      style={{ width: `${baseWidth}px` }}
    >
      <motion.div
        className="flex"
        drag="x"
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(currentIndex * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationComplete={handleAnimationComplete}
      >
        {carouselItems.map((item, index) => {
          const range = [
            -(index + 1) * trackItemOffset,
            -index * trackItemOffset,
            -(index - 1) * trackItemOffset
          ];
          const rotateY = useTransform(x, range, [90, 0, -90], { clamp: false });

          return (
            <motion.div
              key={index}
              className="relative shrink-0 flex flex-col justify-end 
              overflow-hidden cursor-grab active:cursor-grabbing 
              rounded-xl border border-[#222]"
              style={{
                width: itemWidth,
                height: "150px",
                rotateY: rotateY,
                background: item.image ? "white" : "#222"
              }}
              transition={effectiveTransition}
            >
              {item.image && (
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title ?? ""}
                    className="object-contain w-full h-full p-6"
                  />
                </div>
              )}

              {!item.image && (
                <div className="p-5 z-10">
                  <div className="font-black text-lg text-white">{item.title}</div>
                  <p className="text-sm text-white">{item.description}</p>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>

      {/* indicators */}
      <div className="flex w-full justify-center mt-4">
        <div className="flex w-[150px] justify-between px-8">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`h-2 w-2 rounded-full cursor-pointer ${
                currentIndex % items.length === index ? "bg-white" : "bg-[#555]"
              }`}
              animate={{ scale: currentIndex % items.length === index ? 1.2 : 1 }}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
