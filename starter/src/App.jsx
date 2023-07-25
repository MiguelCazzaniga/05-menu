import { useState } from "react";
import { Title } from "./Title";
import { MenuHoja } from "./assets/MenuHoja";
import Opciones from "./assets/Opciones";
import menu from "./data"

const App = () => {
  const titulo="Our Menu"

  const menuOpciones=new Set(menu.map((item)=>item.category))
  const opciones=['All',...menuOpciones]

  const [lista,setLista]=useState(menu)

  const filtraOpcion=(category)=>{
    if (category==="All"){
      setLista(menu);
      return
    }
    const nuevaLista=menu.filter((item)=>item.category===category)
    setLista(nuevaLista)
    }
    
  return (
    <main>
      <div className="frente">
        <Title titulo={titulo}></Title>
        <Opciones opciones={opciones} filtraOpcion={filtraOpcion}></Opciones>
      </div>
      <MenuHoja menu={lista}></MenuHoja>
    </main>
  )
};
export default App;
