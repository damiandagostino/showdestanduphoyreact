import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { MainRoutes } from "./router/MainRouter";
import { CartProvider } from "./context/CartContext";

const App = () => {
  return (
    <CartProvider>
      <div>
        <MainRoutes />
      </div>
    </CartProvider>
  );
};

export default App;