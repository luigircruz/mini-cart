import { useState } from "react";
import MainHeader from "./components/MainHeader";
import Product from "./components/Product";
import { CartContext } from "./lib/CartContext";

function App() {
  const [value, setValue] = useState({ quantity: 0, size: null });

  return (
    <CartContext.Provider value={{ value, setValue }}>
      <div className="bg-white text-primary">
        <MainHeader />
        <main className="mx-auto max-w-6xl">
          <Product />
        </main>
      </div>
    </CartContext.Provider>
  );
}

export default App;
