import whatsapp from "../../assets/imagenes/whatsapp.svg"
import facebook from '../../assets/imagenes/facebook.svg'
import twitter from "../../assets/imagenes/twitter.svg"
import style from "./RedesSociales.module.css"



const RedesSociales = () => {
   return (
      <div className={style.contentRedes}>
         <div className={style.redes}>
            <img src={whatsapp} alt="WhatsApp" width={30} />
         </div>
         <div className={style.redes}>
            <img src={facebook} alt="Facebook" width={30} />
         </div>
         <div className={style.redes}>
            <img src={twitter} alt="Twitter" width={30} />
         </div>
      </div>
   )
}

export default RedesSociales