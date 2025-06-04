import type { menuType } from '../types'
import MenuCard from './MenuCard'

type MenuListProps = {
    menuData: menuType[]
    handleChoose: (selectedMenu:menuType) => void
}
const MenuList = ({menuData,handleChoose}:MenuListProps) => {
  return (
    <div className="flex flex-col gap-2">
     {menuData.map((menu,index)=>{
        return(
          <MenuCard onClick={()=>handleChoose(menu)} handleDelete={()=>{}} key={index+menu.name} displayText={menu.name} moreInfo={menu.type}/>
        )
     })} 
    </div>
  )
}

export default MenuList
