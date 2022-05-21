import React from 'react'
import '../AlfareriaMenuLateral/AlfareriaMenuLateral.css'
import { BiHomeAlt } from 'react-icons/bi';
import { IoMdContacts } from 'react-icons/io';
import { GrContact } from 'react-icons/gr';
import { BsCart3 } from 'react-icons/bs';

const AlfareriaMenuLateral = ({openMenu}) => {
  return (
     <>
       <nav className='lateral_menu'>
             <ul className={`container_menu ${openMenu && 'is-active'}`}>
                 <li><BiHomeAlt className='icon_menu_lateral'/> Inicio</li>
                 <li> <IoMdContacts className='icon_menu_lateral'/>Nosotros/as</li>
                 <li> <GrContact className='icon_menu_lateral'/> Contactanos</li>
                 <li> <BsCart3 className='icon_menu_lateral'/> Productos</li>
             </ul>
       </nav>
     </>
  )
}

export default AlfareriaMenuLateral