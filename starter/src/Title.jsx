export const Title = ({titulo}) => {
   
  return (
    <div className="tituloGrande">
      <h1> {titulo || "Sin títulos"}</h1>
      <div className="subrayado"></div>
    </div>
  )
}