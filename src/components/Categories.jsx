import React from 'react'
import { ListGroupItem } from 'reactstrap'
import { ListGroup } from 'reactstrap'
import { allCategories } from '../utils'

export const Categories = ({selectedCateg,setSelectedCateg}) => {
    console.log(allCategories());
  return (
    <div className="d-flex justify-content-center">
      <ListGroup horizontal>
        {allCategories().map(item=>
        <ListGroupItem key={item} className={selectedCateg==item ? "categ bg-warning text-light": "categ bg-light text-warning "} onClick={()=>setSelectedCateg(item)}>{item}</ListGroupItem>  
          )}
{/* 
        <ListGroupItem>B</ListGroupItem>
        <ListGroupItem>M</ListGroupItem>
        <ListGroupItem>W</ListGroupItem>
         */}
       
      </ListGroup>
    </div>
  )
}
