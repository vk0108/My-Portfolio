import { useCallback, useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Quests from "./components/Quests";
import Projects from "./components/Projects";
import Trophies from "./components/Trophies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Ambience from "./components/Ambience";
import { useKonami } from "./hooks";
import "./styles/components.css";

export default function App() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("kv-theme") || "dark"
  );
  const [cheat, setCheat] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("kv-theme", theme);
  }, [theme]);

  const unlock = useCallback(() => {
    setCheat(true);
    document.documentElement.classList.add("cheat");
    setTimeout(() => setCheat(false), 4200);
  }, []);

  useKonami(unlock);

  return (
    <>
      <Ambience />
      <Nav theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Quests />
        <Projects />
        <Trophies />
        <Contact />
      </main>
      <Footer />

      {cheat && (
        <div className="cheat-toast" role="status">
          <span className="cheat-toast__icon">★</span>
          <div>
            <strong>CHEAT CODE ACCEPTED</strong>
            <span>Infinite curiosity unlocked.</span>
          </div>
        </div>
      )}
    </>
  );
}
