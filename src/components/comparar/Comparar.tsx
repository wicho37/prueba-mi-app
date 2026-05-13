import userIcon from "../../assets/imagenes/icono-comparar.png";
import style from "./Comparar.module.css"


const IconoBuscar = () => {
  return (
    <div>
      <div>
        <button className="botonComparar" >
           <div className={style.imgComparar}>
            <img src={userIcon} alt="comparar" />
        </div>
        <div className={style.textComparar}>
            <p>Comparar</p>
        </div>
        </button> 
        
      </div>
       
    </div>
    
    
  );
};

export default IconoBuscar;
