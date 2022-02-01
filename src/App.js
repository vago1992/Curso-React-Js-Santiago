import './App.css';
import Menu from './componentes/Menu';
import ItemListContainer from './componentes/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import CartWidget from './componentes/CartWidget';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { CartContexProvider } from './context/cartContext';


function App() {
  
  return (
    <div>
      <CartContexProvider >

        <BrowserRouter className="App">

          <Menu/>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}/>
            <Route exact path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
            <Route exact path="/Cart/:idCategoria" element={<CartWidget/>}/>
            <Route exact path="/detalle" element={<ItemDetailContainer/>}/>
            <Route exact path="/detalle/:idDetalle" element={<ItemDetailContainer/>}/>

          </Routes>

        
        </BrowserRouter>
      </CartContexProvider>



    </div>
    
    /*
    <BrowserRouter className="App">
   
      <Menu/>
      <Routes>
        <Route exact path="/CartWidget/:idCategoria" element={<CartWidget/>}/>
        <Route exact path="/" element={ <ItemListContainer/>}/>


       
      </Routes>    
      <ItemDetailContainer/>
  
      

    </BrowserRouter>*/
    
  );
}

export default App;


/*
  const [poke,setPoke]=useState([])
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=20&limit=10")
    .then(resp=>resp.json)

    .then(resp=>setPoke(resp.results))

  }, [])
  console.log(poke)*/



