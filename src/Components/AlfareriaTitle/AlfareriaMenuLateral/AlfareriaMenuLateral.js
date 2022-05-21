import React from 'react'
import '../AlfareriaMenuLateral/AlfareriaMenuLateral.css'

const AlfareriaMenuLateral = ({openMenu}) => {
  return (
     <>
       <nav className='lateral_menu'>
             <ul className={`container_menu ${openMenu && 'is-active'}`}>
                 <li>Sobre Nosotros/as</li>
                 <li>Inicio</li>
                 <li>Contactanos</li>
                 <li>Productos</li>
             </ul>
       </nav>
     </>
  )
}

export default AlfareriaMenuLateral