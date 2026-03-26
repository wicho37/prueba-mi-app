import style from "./topbar.module.css"



import { useState, useEffect } from "react";

const Topbar = () => {
  const textos = [
    "Este es el primer párrafo que se mostrará.",
    "Este es el segundo párrafo que aparece después.",
    "Este es el tercer párrafo del carrusel."
  ];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  const textosLoop = [...textos, textos[0]]; // clon

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  const handleTransitionEnd = () => {
    if (index === textos.length) {
      // estamos en el clon
      setTransition(false);
      setIndex(0);
    }
  };

  useEffect(() => {
    if (!transition) {
      // reactivar transición después del salto invisible
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  return (
    <div className={style.topbarContainer}>

      <div className={style.carruselTexto}>
        <div
          className={style.slides}
          onTransitionEnd={handleTransitionEnd}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: transition ? "transform 0.3s ease-in-out" : "none"
          }}
        >
          {textosLoop.map((texto, i) => (
            <p key={i} className={style.slide}>
              {texto}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;