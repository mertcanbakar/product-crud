// COMPONENTS
import Header from "./components/Header";
import AdminPanel from "./components/AdminPanel";
import Products from "./components/Products";
import Footer from "./components/Footer";
import { useTheme } from "./store/app/hooks";
import { useEffect, useState } from "react";
import DialogForm from "./modal/DialogForm";
import { useModal } from "./store/modal/hooks";
import MessageBox from "./modal/MessageBox";

function App() {
  const theme = useTheme();
  const modal = useModal();
  const [products, setProducts] = useState([]);
  const [messageBox, setMessageBox] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="app">
      {modal && (
        <DialogForm
          data={data}
          setData={setData}
          products={products}
          setProducts={setProducts}
        />
      )}
      {messageBox && (
        <MessageBox
          data={data}
          setMessageBox={setMessageBox}
          setData={setData}
          products={products}
          setProducts={setProducts}
        />
      )}
      <Header />
      <AdminPanel />
      <Products
        products={products}
        setProducts={setProducts}
        setData={setData}
        setMessageBox={setMessageBox}
      />
      <Footer />
    </div>
  );
}

export default App;
