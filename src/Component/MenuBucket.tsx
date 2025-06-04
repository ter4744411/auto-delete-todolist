import type { menuType } from '../types'
import MenuCard from './MenuCard'

type MenuBucketProps = {
    itemList:menuType[];
    handleDelete:(deletedMenu:any) => void
    header:string
}

const MenuBucket = ({itemList,handleDelete,header}:MenuBucketProps) => {
  return (
    <div className="w-full h-full flex flex-col border-2 rounded-lg border-gray-400">
        <div className="border-b-2 border-gray-400 py-4 text-center">{header}</div>
        <div className="p-4 flex flex-col gap-2">
            {itemList.map((menu,index)=>{
            return(
            <MenuCard onClick={()=>handleDelete(menu)} handleDelete={handleDelete} key={index+menu.name} displayText={menu.name} moreInfo={menu.type}/>
            )})}
        </div>
    </div>
  )
}

export default MenuBucket
