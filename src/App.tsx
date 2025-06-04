import { useEffect, useState } from 'react'
import './App.css'
import Wrapper from './Component/Wrapper'
import { getMenuData } from './service/utils'
import type { menuType } from './types'
import MenuList from './Component/MenuList'
import MenuBucket from './Component/MenuBucket'

function App() {

  const [menu,setMenu] = useState<menuType[]>([])
  const [fruit,setFruit] = useState<menuType[]>([])
  const [veg,setVeg] = useState<menuType[]>([])

  useEffect(()=>{
    loadMenu()
  },[])

  const loadMenu = async () => {
      const res = await getMenuData();
      setMenu(res)
  }

  const handleChoose = (selectedMenu:menuType) => {
    
    if(selectedMenu.type === 'Fruit'){
      setFruit([...fruit,selectedMenu])
    }
    if(selectedMenu.type === 'Vegetable'){
      setVeg([...veg,selectedMenu])
    }

    setMenu(prev => prev.filter(item => item.name !== selectedMenu.name));
    setTimeout(() => {
      if (selectedMenu.type === 'Fruit') {
        setFruit(prev => prev.filter(item => item.name !== selectedMenu.name));
      } else if (selectedMenu.type === 'Vegetable') {
        setVeg(prev => prev.filter(item => item.name !== selectedMenu.name));
      }
  
      setMenu(prev => [...prev, selectedMenu]);
    }, 5000);
    
  }

  const handleDelete = (deletedMenu:menuType) => {
    console.log(deletedMenu)
    if(deletedMenu.type === 'Fruit'){
      setFruit(fruit.filter(item => item.name !== deletedMenu.name));
    }
    if(deletedMenu.type === 'Vegetable'){
      setVeg(veg.filter(item => item.name !== deletedMenu.name));
    }
    setMenu([...menu,deletedMenu]);
  }

  return (
    <Wrapper>
      <MenuList menuData={menu} handleChoose={handleChoose}/>
      <MenuBucket itemList={fruit} handleDelete={handleDelete} header="Fruit"/>
      <MenuBucket itemList={veg} handleDelete={handleDelete} header="Vegetable"/>
    </Wrapper>
  )
}

export default App
