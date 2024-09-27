
import { Menus } from './components/Menus'
import { StickyHeader } from './components/StickyHeader'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { useState } from 'react';
import { allCategories } from './utils';



function App() {
  const [selectedCateg,setSelectedCateg]=useState(allCategories()[0])
  //console.log(selectedCateg);
  return (
    <>
      <div className="container shadow">
        <StickyHeader selectedCateg={selectedCateg} setSelectedCateg={setSelectedCateg}/>
        <div className="menus">
          <Menus selectedCateg={selectedCateg}/>
        </div>
        
      </div>
      
    </>
  )
}

export default App
