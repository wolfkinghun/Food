import React, { useEffect, useState } from 'react'
import { data } from '../data'


export const Menus = ({selectedCateg}) => {
  const [menus,setMenus]=useState(null)

  useEffect(()=>{
    setMenus(selectedCateg=='all' ? data : data.filter(obj=>obj.category==selectedCateg))
  },[selectedCateg])

  menus && console.log(menus);
  return (
    <div className="menuitem" align="center">
     {menus && menus.map(obj=>
        <div className="item_menu">
        <div key={obj.id}>
        <h3>{obj.title}</h3>
        <img className="img-thumbnail img-fluid img " src={'images/'+obj.img} alt="tutel" />
        <div>{obj.desc}</div>
        </div>
        <div align="right">{obj.price}</div>
        </div>
      )}
    
    </div>
  )
}
