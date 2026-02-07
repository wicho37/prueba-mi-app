import React from "react";



const Buscador = () => {
  return (
    <div>
      <div>
        
            <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11"
        cy="11"
        r="7"
        stroke="black"
        strokeWidth="2"
      />
      <line
        x1="16"
        y1="16"
        x2="22"
        y2="22"
        stroke="black"
        strokeWidth="2"
      />
    </svg>

      </div>
      <input
        type="text"
        placeholder="Buscar tu producto"
      />
    </div>
  );
};

export default Buscador;
