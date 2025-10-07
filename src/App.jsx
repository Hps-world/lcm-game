import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Game from "./Game";
import { backgroundMusic } from "./sounds";

export default function App() {
  const [started, setStarted] = useState(false);
  const [musicOn, setMusicOn] = useState(true);
  const audioRef = useRef(null);

  // 🎵 Background music logic
  useEffect(() => {
    const audio = new Audio(backgroundMusic);
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;
    if (musicOn) audio.play();
    return () => audio.pause();
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      musicOn ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [musicOn]);

  if (started) return <Game />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-orange-200 p-6 relative">
      {/* Music toggle */}
      <button
        onClick={() => setMusicOn(!musicOn)}
        className="absolute top-4 right-6 bg-purple-600 text-white px-4 py-2 rounded-full shadow-md text-sm hover:bg-purple-700"
      >
        {musicOn ? "🔊 Music On" : "🔇 Music Off"}
      </button>

      {/* Animated intro */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl bg-white p-8 rounded-2xl shadow-xl"
      >
        <motion.h1
          className="text-4xl font-bold text-purple-700 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          🎓 Welcome to the LCM Learning Adventure!
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Let’s learn <b>Lowest Common Multiple</b> in a fun, musical way! 🌈
        </motion.p>

        {/* Concept explanation */}
        <motion.div
          className="bg-yellow-100 p-4 rounded-xl mb-4 text-gray-800"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p>✨ Example:</p>
          <motion.div
            className="mt-2"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.4 } },
            }}
          >
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Multiples of <b>4</b> ➡ 4, 8, 12, 16, 20
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Multiples of <b>6</b> ➡ 6, 12, 18, 24
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              Common multiples ➡ <b>12, 24...</b>
            </motion.p>
            <motion.p variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
              🎯 The <b>LCM</b> is <b>12</b> — smallest number both share!
            </motion.p>
          </motion.div>
        </motion.div>

        <motion.p
          className="text-md text-gray-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          Ready to play? Let’s start the game! 🕹️
        </motion.p>

        <motion.button
          onClick={() => setStarted(true)}
          className="px-8 py-3 bg-purple-600 text-white rounded-xl text-lg shadow-md"
          initial={{ scale: 0.8 }}
          animate={{
            scale: [1, 1.1, 1],
            transition: { repeat: Infinity, duration: 1.5 },
          }}
          whileHover={{ scale: 1.2 }}
        >
          ▶ Start Game
        </motion.button>
      </motion.div>
    </div>
  );
}
