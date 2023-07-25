const Opciones = ({opciones,filtraOpcion}) => {
  return (
    <div className="botonera">
    {opciones.map((item)=>{
        return(<button key={item} onClick={()=>{filtraOpcion(item)}} className="btn">{item}</button>)
    })}
    </div>
  )
}
export default Opciones