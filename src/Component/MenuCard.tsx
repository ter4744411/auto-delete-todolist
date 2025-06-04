import { FaLeaf } from 'react-icons/fa';
import { GiFruitBowl } from 'react-icons/gi';


type MenuCardProps = {
  displayText:string;
  moreInfo?:string;
  handleDelete:(deletedMenu:any) => void
} & React.HTMLAttributes<HTMLDivElement>;

const MenuCard = ({displayText,moreInfo,handleDelete,...props}:MenuCardProps) => {

    const icon = moreInfo === 'Fruit' ? <GiFruitBowl /> : moreInfo === 'Vegetable' ? <FaLeaf /> : null;

  return (
    <div {...props} className={`min-w-[120px] p-2 border-2 border-gray-400 rounded-lg flex items-center justify-between hover:bg-blue-500 hover:text-white cursor-pointer hover:border-blue-600 transition-all duration-300`}>
      {icon}
      <span>{displayText}</span>
    </div>
  )
}

export default MenuCard
