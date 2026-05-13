import usuario from "../../assets/imagenes/iono persona.svg"
import style from "./Ingresar.module.css"



const Ingresar = () => {
  return (
    <div className={style.ingreso}>
      <button className={style.botonIngresar}>
        <div>
          <img src={usuario} alt="usuario" />
        </div>
        <div className={style.clickIngresar}>
           <span>Ingresar</span>
        </div>
      </button>
    </div>
  )
}

export default Ingresar