import shoppingCart from "../../assets/imagenes/cart-shopping-solid (2).svg"
import styles from "./ShopingCart.module.css";

const ShopingCart = () => {
  return (
    <div className={styles.container}>
      <img
        src={shoppingCart}
        className={styles.shopingCart}
        alt="Carrito de compras"
      />
      <span className={styles.counter}>0</span>
    </div>
  );
};

export default ShopingCart;

