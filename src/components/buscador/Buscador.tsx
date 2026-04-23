import style from "./Buscador.module.css"
import lente from "../../assets/imagenes/lupa.png" 



const Buscador = () => {
  
  return (
    <div className={style.buscador}>
      <input
        type="text"
        placeholder="Buscar producto"
      />
      <button className={style.btnBuscar}>
        <img src={lente} alt="buscar" />
      </button>
    </div>
  );
};

export default Buscador;
