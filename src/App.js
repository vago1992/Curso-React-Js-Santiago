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
