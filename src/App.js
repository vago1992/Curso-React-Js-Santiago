import './App.css';
import Menu from './componentes/Menu';
import ItemListContainer from './componentes/ItemListContainer';


function App() {
  
  return (
    
    <div className="App">
      {/*
      <Menu item={ItemListContainer}>
      </Menu>  */}
      <Menu/>
      <ItemListContainer/>
      
      

    </div>
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
  console.log(poke)


*/
