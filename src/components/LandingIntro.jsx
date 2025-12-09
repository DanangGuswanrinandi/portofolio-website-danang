import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingIntro({ onFinish }) {
  const [show, setShow] = useState(true);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    setTimeout(() => setCollapse(true), 1500);
    setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 500);
    }, 2500);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-[#5e2eff] z-9999 flex flex-col items-center justify-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
          {/* WRAPPER INTRO */}
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
              y: -20
            }}
            animate={{
              scale: collapse ? 0.6 : 1,
              width: collapse ? 70 : 260,
              height: collapse ? 70 : 80,
              opacity: 1,
              y: collapse ? -120 : 0,
              transition: {
                duration: 0.7,
                ease: "easeInOut"
              }
            }}
            exit={{
              x: 0,
              y: -450,
              scale: 0.6,
              opacity: 0,
              transition: { duration: 0.8, ease: "easeInOut" }
            }}
            className="
              bg-[#1b1327]/60 backdrop-blur-xl 
              shadow-[0_0_35px_#a78bfa] 
              border border-[#8b5cf6]
              rounded-full flex items-center justify-center gap-4 overflow-hidden
            "
          >
            {/* LOGO D */}
            <div className="w-14 h-14 rounded-full bg-[#5e2eff] flex items-center justify-center shadow-[0_0_15px_#5e2eff]">
              <span className="text-white font-bold text-3xl">D</span>
            </div>

            {/* TEKS Danang dengan AnimatePresence agar exit smooth */}
              <AnimatePresence>
                {!collapse && (
                  <motion.h1
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{
                      opacity: 0,
                      x: -20,
                      y: -5,
                      transition: { duration: 0.4, ease: "easeOut" }
                    }}
                    className="text-white text-4xl fw-bold tracking-wide pt-2"
                  >
                    Danang
                  </motion.h1>
                )}
              </AnimatePresence>
          </motion.div>

          {/* ⚠️ TEXT — Typing Dots Animation */}
          {!collapse && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
              exit={{ opacity: 0 }}
              className="mt-6 text-white/90 text-sm font-medium tracking-wide flex items-center"
            >
              <span>Use Desktop for Better Experience</span>
          
              {/* Dots Animation */}
              <motion.span
                className="inline-block ml-1"
                variants={{
                  animate: {
                    opacity: [0, 1, 0],
                    transition: { repeat: Infinity, duration: 1.2 }
                  }
                }}
                animate="animate"
              >
                ...
              </motion.span>
            </motion.div>
          )}

        </motion.div>
      )}
    </AnimatePresence>
  );
}
