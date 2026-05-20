import userIcon from "../../assets/imagenes/icono-comparar.png";
import style from "./Comparar.module.css"


const IconoBuscar = () => {
  return (
    <div>
      <div>
        <button className={style.botonComparar}>
           <div className={style.container1}>
            <img src={userIcon} alt="comparar" />
            <span className={style.counter1}>0</span>
        </div>
        <div className={style.clickComparar}>
            <p>Comparar</p>
        </div>
        </button> 
        
      </div>
       
    </div>
    
    
  );
};

export default IconoBuscar;
