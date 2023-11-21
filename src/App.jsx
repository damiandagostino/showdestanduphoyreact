import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import { MainRoutes } from "./router/MainRouter";

const App = () => {
  return (
    <div>
      <MainRoutes />
    </div>
  );
};

export default App;