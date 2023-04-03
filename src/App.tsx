import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage";
import HomePage from "./components/HomePage";
import ProductList from "./components/ProductList";
import { IProduct } from "./interfaces/product";
import { getProducts, removeProducts } from "./api/product";
import RootLayout from "./components/RootLayout";
import AdminLayout from "./components/AdminLayout";
import SignIn from "./pages/signin";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getProducts();
      setProducts(data);
    })();
  }, []);
  console.log(products);
  const onHandleRemove = async (id) => {
    const { data } = await removeProducts(id);
    console.log(data);
  };
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<SignIn />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route
            path="products"
            element={
              <ProductList onRemove={onHandleRemove} products={products} />
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
