import usuario from "../../assets/imagenes/iono persona.svg"



const Ingresar = () => {
  return (
    <div>
      <button>
        <div>
          <img src={usuario} alt="usuario" />
        </div>
        <div>
           <span>Ingresar</span>
        </div>
      </button>
    </div>
  )
}

export default Ingresar