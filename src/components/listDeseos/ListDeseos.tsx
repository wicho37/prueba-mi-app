import wihsList from "../../assets/imagenes/icono lista de deseos.png";
import style from "./ListDeseos.module.css"







const ListDeseos = () => {
  
  return (
    <div>
        <div className={style.wishlist}>
            <img src={wihsList} alt="lista de deseos" />
        </div>
        <div>
            <p>Lista de Deseos</p>
        </div>
    </div>
    
    
  );
};

export default ListDeseos;
