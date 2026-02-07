import Buscador from "../buscador/Buscador"
import Login from "../ingresar/Login"
import Comparar from "../comparar/Comparar"
import ListDeseos from "../listDeseos/ListDeseos"
import ShoppingCart from "../shopingCart/ShopingCart"





const Header = () => {

    return (
        <div >
            <img src="" alt="" />
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
