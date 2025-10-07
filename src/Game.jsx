import { useState } from "react";
import { correctSound, wrongSound, playSound } from "./sounds";

function getMultiples(num, limit = 50) {
  const arr = [];
  for (let i = num; i <= limit; i += num) arr.push(i);
  return arr;
}

function getLCM(a, b) {
  let max = Math.max(a, b);
  while (true) {
    if (max % a === 0 && max % b === 0) return max;
    max++;
  }
}

export default function Game() {
  const [num1, setNum1] = useState(4);
  const [num2, setNum2] = useState(6);
  const [selected, setSelected] = useState(null);
  const [message, setMessage] = useState("");
  const [score, setScore] = useState(0);
  const [flashColor, setFlashColor] = useState("");

  const correctLCM = getLCM(num1, num2);
  const multiples1 = getMultiples(num1);
  const multiples2 = getMultiples(num2);

  const nextRound = () => {
    const a = Math.floor(Math.random() * 8) + 2;
    const b = Math.floor(Math.random() * 8) + 2;
    setNum1(a);
    setNum2(b);
    setSelected(null);
    setMessage("");
    setFlashColor("");
  };

  const handleSelect = (choice) => {
    setSelected(choice);

    if (choice === correctLCM) {
      playSound(correctSound);
      setFlashColor("bg-green-200");
      setMessage(`✅ Correct! The LCM of ${num1} and ${num2} is ${choice}.`);
      setScore(score + 1);
      setTimeout(() => {
        setFlashColor("");
        nextRound();
      }, 1500);
    } else {
      playSound(wrongSound);
      setFlashColor("bg-red-200");
      setMessage("❌ Oops! Try again!");
      setTimeout(() => setFlashColor(""), 1000);
    }
  };

  return (
    <div
      className={`min-h-screen ${flashColor} transition-all duration-300 flex flex-col items-center justify-center p-6 text-center`}
    >
      <h1 className="text-3xl font-bold text-purple-700 mb-4">🧮 LCM Game</h1>
      <p className="text-lg text-gray-800 mb-2">Score: {score}</p>

      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-lg">
        <h2 className="text-2xl mb-3 font-semibold text-purple-800">
          Find the LCM of {num1} and {num2}
        </h2>

        {/* Multiples visualization */}
        <div className="flex justify-around mb-4">
          <div>
            <h3 className="font-bold text-blue-600 mb-2">
              Multiples of {num1}:
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {multiples1.slice(0, 6).map((m) => (
                <span
                  key={m}
                  className={`px-3 py-1 rounded-full ${
                    multiples2.includes(m)
                      ? "bg-yellow-300 font-bold"
                      : "bg-blue-100"
                  }`}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-green-600 mb-2">
              Multiples of {num2}:
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {multiples2.slice(0, 6).map((m) => (
                <span
                  key={m}
                  className={`px-3 py-1 rounded-full ${
                    multiples1.includes(m)
                      ? "bg-yellow-300 font-bold"
                      : "bg-green-100"
                  }`}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Answer buttons */}
        <div className="grid grid-cols-2 gap-4 mt-4">
          {[correctLCM, correctLCM + 2, correctLCM + 4, correctLCM + 6]
            .sort(() => Math.random() - 0.5)
            .map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                className={`p-4 text-xl rounded-xl shadow-md transition ${
                  selected === opt
                    ? "bg-purple-600 text-white"
                    : "bg-purple-400 text-white hover:bg-purple-500"
                }`}
              >
                {opt}
              </button>
            ))}
        </div>

        <p className="mt-4 text-lg font-semibold text-gray-800">{message}</p>
      </div>
    </div>
  );
}
