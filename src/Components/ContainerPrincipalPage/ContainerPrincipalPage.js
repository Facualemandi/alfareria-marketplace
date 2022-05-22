import React, { useState } from "react";
import { useSearch } from "../../Hooks/useSearch";
import { useItems } from "../../Hooks/useItems";
import AlfareriaSearch from "../AlfareriaSearch/AlfareriaSearch";
import AlfareriaProducts from "../AlfareriaProducts/AlfareriaProducts";
import AlfareriaTitle from "../AlfareriaNav/AlfareriaNav";

const ContainerPrincipalPage = ({totalItemDescription}) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [items, setItems] = useItems();
  const { search, setSearch, newBazar } = useSearch();

  const handleOpenMenu = () => {
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };




  return (
    <>

      <AlfareriaTitle handleOpenMenu={handleOpenMenu} openMenu={openMenu} />
      <AlfareriaSearch handleSearch={handleSearch} search={search} />
      
      <main className="main">
        <AlfareriaProducts
          items={items}
          newBazar={newBazar}
          totalItemDescription={totalItemDescription}
   
        />
      </main>
    </>
  );
};

export default ContainerPrincipalPage;
