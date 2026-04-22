import userIcon from "../../assets/imagenes/icono-comparar.png";
import style from "./Comparar.module.css"


const IconoBuscar = () => {
  return (
    <div>
        <div className={style.imgcomparar}>
            <img src={userIcon} alt="comparar" />
        </div>
        <div>
            <p>Comparar</p>
        </div>
    </div>
    
    
  );
};

export default IconoBuscar;
