import wihsList from "../../assets/imagenes/icono lista de deseos.png";
import style from "./ListDeseos.module.css"







const ListDeseos = () => {
  
  return (
    <div>
      <button className={style.wishList}>
         <div className={style.container2}>
            <img src={wihsList} alt="lista de deseos" />
            <span className={style.counter2}>0</span>
        </div>
        <div className={style.clickWishList}>
            <span>Lista de Deseos</span>
        </div>
      </button>
       
    </div>
    
    
  );
};

export default ListDeseos;
