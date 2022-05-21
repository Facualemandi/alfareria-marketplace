import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ContainerPrincipalPage from "./Components/ContainerPrincipalPage/ContainerPrincipalPage";
import DescriptionProduct from "./Components/DescriptionProduct/DescriptionProduct";
import { useItems } from "./Hooks/useItems";

function App() {
  const [items] = useItems();
  const [product, setProduct] = useState([])


  let navDes = useNavigate();

  const totalItemDescription = (el) => {
    setProduct(el)
  };


  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ContainerPrincipalPage
              totalItemDescription={totalItemDescription}
            />
          }
        />

        <Route path="/description/:id" element={<DescriptionProduct product={product}/>} />
      </Routes>
    </>
  );
}

export default App;
