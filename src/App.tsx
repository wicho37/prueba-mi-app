import Header from "./components/Header/Header"
import RedesSociales from "./components/redesSociales/RedesSociales"
import Topbar from "./components/Topbar/Topbar"
import style from "./App.module.css"


function App() {
       

  return (
    <div>
      <div>
        <div className={style.containerApptx}>
          <RedesSociales />
          <Topbar />
        </div>

        <div>
          <Header />
        </div>



      </div>
    </div>
  )
}

export default App
