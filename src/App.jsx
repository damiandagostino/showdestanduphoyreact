
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '/src/index.css'
import CartWidgetComponent from './components/CartWidgetComponent/CartWidgetComponent';
import NavBarComponent from './components/NavbarComponent/NavBarComponent';
import ItemListContainer from './components/ItemListConteiner/ItemListConteiner';

function App() {
  return(
    <div>
    <NavBarComponent/>
    <ItemListContainer greeting="Bienvenidos a Show de Stand Up Hoy"/>
    </div>
  );
}

export default App
