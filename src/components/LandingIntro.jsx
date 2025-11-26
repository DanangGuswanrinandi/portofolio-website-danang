import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function LandingIntro({ onFinish }) {
  const [show, setShow] = useState(true);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    // Tahap 1: tampil dulu
    setTimeout(() => setCollapse(true), 1500); // 1.5 detik → mulai collapse

    // Tahap 2: exit setelah collapse selesai
    setTimeout(() => {
      setShow(false);
      setTimeout(onFinish, 500);
    }, 2500);

  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-[#5e2eff] z-9999 flex items-center justify-center"
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
              x: 0,   // geser ke kiri navbar-mu
              y: -450,   // geser ke atas navbar-mu
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

            {/* TEKS hilang saat collapse */}
            {!collapse && (
              <motion.h1
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="text-white text-3xl font-bold tracking-wide"
              >
                Danang
              </motion.h1>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
