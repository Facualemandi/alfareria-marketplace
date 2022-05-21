import { useState } from "react";
import AlfareriaTitle from "./Components/AlfareriaTitle/AlfareriaTitle";
import ilustration from './Images/ilustration.png'


function App() {

  const [openMenu, setOpenMenu] = useState(false)
 
  const handleOpenMenu = () => {
     if(!openMenu){
       setOpenMenu(true)
     }else{
       setOpenMenu(false)
     }
  }

  return (
     <>  
      <img src={ilustration} alt='Alfareria Ceramica' className="img_ilustration"/>
      <AlfareriaTitle handleOpenMenu={handleOpenMenu} openMenu={openMenu}/>
     </>
  );
}

export default App;
