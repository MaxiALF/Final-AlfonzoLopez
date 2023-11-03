import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'
import ItemCount from './components/ItemCount/ItemCount'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div classNme="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path= '/' element= {<ItemListContainer/>} />
          <Route path= '/category/:categoryId' element={<ItemDetailContainer/>}/>
          <Route path= '/item/itemId' element={ <ItemDetailContainer/>} />
          <Route path= '*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
