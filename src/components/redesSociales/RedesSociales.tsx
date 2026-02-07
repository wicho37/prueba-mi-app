import whatsapp from "../../assets/imagenes/whatsapp.svg"
import facebook from '../../assets/imagenes/facebook.svg'
import twitter from "../../assets/imagenes/twitter.svg"



const RedesSociales = () => {
   return (
      <div>
         <div>
            <img src={whatsapp} alt="WhatsApp" width={50} />
         </div>
         <div>
            <img src={facebook} alt="Facebook" width={50} />
         </div>
         <div>
            <img src={twitter} alt="Twitter" width={50} />
         </div>
      </div>
   )
}

export default RedesSociales