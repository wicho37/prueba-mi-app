import Buscador from "../buscador/Buscador"
import Login from "../ingresar/Login"
import Comparar from "../comparar/Comparar"
import ListDeseos from "../listDeseos/ListDeseos"
import ShoppingCart from "../shopingCart/ShopingCart"
import logo from "../../assets/imagenes/logo-especifica.webp"
import style from "./Header.module.css"





const Header = () => {

    return (
        <div className={style.containerHeader}>
            <img className={style.logo} src={logo} alt="logo, drogueria especifica" />
            <div>
                <Buscador/>
            </div>
            <div>
                <Login/>
            </div>
            <div>
                <Comparar/>
            </div>
            <div>
                <ListDeseos/>
            </div>
            <div>
                <ShoppingCart/>
            </div>
        </div>
    )
}

export default (Header)
