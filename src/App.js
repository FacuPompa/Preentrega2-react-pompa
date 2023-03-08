import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Prueba from "./pages/Prueba";
import NotFound from "./pages/NotFound";
import products  from "./products/products";

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Bienvenidos al Túnel del Cómic"} />}
          />
          {/* URL segments */}
          <Route path="/detalle/:idProducts" element={<ItemDetailContainer />} />
          <Route
            path="/category/:idCategory"
            element={<ItemListContainer greeting={"Bienvenidos"} />}
          />

          <Route path="/prueba" element={<Prueba />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
