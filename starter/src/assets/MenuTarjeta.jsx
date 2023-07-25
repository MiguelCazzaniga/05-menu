export const MenuTarjeta = ({img,title,price,desc}) => {
  return (
    <article className='menuTarjeta'>
      <img className='img' src={img} alt='title'></img>
      <div className='menuTitulo'>
        <h5>{title}</h5>
        <p>${price}</p>       
      </div>
      <p className="desc">{desc}</p>
    </article>
  )
}
