# 🎓 LCM Learning Adventure

An **interactive math learning game** built with **React + Vite** for students in grades 4–7.  
It helps students understand the concept of **LCM (Lowest Common Multiple)** through fun animations, sound effects, and quizzes.  

---

## 🧩 Features

| Feature | Description |
|----------|-------------|
| 🎓 **Animated intro** | Introduces the LCM concept with examples |
| 🎮 **Interactive Game** | Students find the LCM of two numbers |
| ✅ **Correct/Wrong Feedback** | Real-time sounds for right and wrong answers |
| 🎵 **Background Music** | Continuous background theme (toggle on/off) |
| 💡 **Visual Multiples Display** | Highlights common multiples clearly |
| 🧠 **Educational Design** | Makes learning engaging for grades 4–7 |

---

## 🛠️ Tech Stack

- **React + Vite** – Fast and modern frontend framework  
- **Tailwind CSS** – For colorful and responsive UI  
- **Framer Motion** – For smooth animations  
- **JavaScript (ES6)** – Core game logic  
- **HTML5 Audio API** – For background music and sound effects  

---

## 🗂️ Folder Structure

```
lcm-learning-game/
│
├── public/
│   └── sounds/
│       ├── background.mp3     # Background music
│       ├── correct.mp3        # Correct answer sound
│       ├── wrong.mp3          # Wrong answer sound
│       └── victory.mp3        # (Optional) Victory sound
│
├── src/
│   ├── sounds.js              # Central sound manager file
│   ├── App.jsx                # Intro screen + background music
│   ├── Game.jsx               # Interactive game logic
│   ├── main.jsx               # React entry point
│   └── index.css              # Tailwind CSS setup
│
└── index.html
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/lcm-learning-game.git
cd lcm-learning-game
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Then open: 👉 [http://localhost:5173](http://localhost:5173)

---

## 🎮 How to Play

1. 🧠 Read the **intro screen** to learn about LCM.  
2. 🎵 Toggle background music on/off (top-right corner).  
3. ▶ Click **“Start Game”** to begin.  
4. 🔢 Choose the correct **LCM** of two numbers shown.  
5. ✅ Hear a cheerful sound if correct!  
6. ❌ Wrong? Try again! The screen flashes red for a moment.  
7. 🏆 Keep playing to increase your score!

---

## 📦 Dependencies

| Package | Purpose |
|----------|----------|
| `react`, `react-dom` | Core React libraries |
| `vite` | Fast development environment |
| `tailwindcss` | Utility-first CSS styling |
| `framer-motion` | Animations and transitions |
| `postcss`, `autoprefixer` | CSS processing for Tailwind |

---

## 🎵 Sound Management (`src/sounds.js`)

All music and sound effects are stored and exported from a single file:

```js
export const backgroundMusic = "/sounds/background.mp3";
export const correctSound = "/sounds/correct.mp3";
export const wrongSound = "/sounds/wrong.mp3";

export function playSound(src, volume = 1.0) {
  const audio = new Audio(src);
  audio.volume = volume;
  audio.play();
}
```

You can use `playSound(correctSound)` anywhere in your app!

---

## 🌈 Educational Value

This project helps students:
- Understand **multiples and common multiples**
- Identify the **smallest common multiple (LCM)**
- Build **quick mental math skills**
- Learn visually through color + interactivity

---

## 📸 Preview

**Intro Screen**
> Animated explanation of LCM concept with example.

**Game Screen**
> Two number lists with highlighted common multiples.  
> Students choose the correct LCM and receive feedback instantly.

---

## 🧑‍💻 Future Improvements

- 🏆 Add celebration screen with confetti + victory music  
- 📊 Add level progression (Easy → Medium → Hard)  
- 🔢 Add HCF (Highest Common Factor) mode  
- 🌍 Add multilingual voice narration (for younger students)

---

## 👩‍🏫 Credits

Developed by: **Your Name / Team Name**  
Guided by: *Math + Coding Integration Project for Grades 4–7*  
Sounds from: [Pixabay Free Sounds](https://pixabay.com/sound-effects/)  
Framework: [React + Vite](https://vitejs.dev/)  

---

## 🪪 License

This project is open-source under the **MIT License**.  
You are free to modify, share, and use it for educational purposes.
