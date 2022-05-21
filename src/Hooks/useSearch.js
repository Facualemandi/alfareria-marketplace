import React, { useState } from 'react'
import { useItems } from './useItems'

export const useSearch = () => {
    const [search, setSearch] = useState('')
    const[items, setItems] = useItems()

    let newBazar = []
    if(search.length < 1){
         newBazar = items
  
    }else{
        newBazar = items.filter(el =>
         el.name.toLowerCase().includes(search.toLocaleLowerCase())
          )
    }

    return  {
        search,
        setSearch,
        newBazar
    }
}
