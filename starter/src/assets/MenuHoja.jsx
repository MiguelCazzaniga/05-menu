import { MenuTarjeta } from "./MenuTarjeta"

MenuTarjeta
export const MenuHoja = ({menu}) => {
  
  return (
    <div className='menuHoja'>
      {menu.map((item) => {
        return <MenuTarjeta key={item.id} {...item} ></MenuTarjeta>
      })}
    </div>
  )
}
