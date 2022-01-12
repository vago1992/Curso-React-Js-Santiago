import './App.css';
import Menu from './componentes/Menu';
import ItemListContainer from './componentes/ItemListContainer';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import CartWidget from './componentes/CartWidget';
import ItemDetailContainer from './componentes/ItemDetailContainer';


function App() {
  
  return (
    <div>
      <Menu/>
      <ItemListContainer/>
      <ItemDetailContainer/>
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



