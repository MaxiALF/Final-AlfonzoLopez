import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContextProvider } from './context/CartContext';
import { CartContainer } from './components/CartContainer/CartContainer';
import './App.css'
import { Footer } from './components/Footer/Footer';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
      <CartContextProvider>
        <div className="App">
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path= '/' element= {<ItemListContainer greeting = 'todos nuestros productos' />} />
              <Route path= '/category/:cid' element={<ItemListContainer greeting = 'todos nuestros productos'/>} />
              <Route path= '/detail/:pid' element={ <ItemDetailContainer />} />
              <Route path= '/cart' element={ <CartContainer />} />
              <Route path= '/checkout' element={ <Checkout/> } />  
              <Route path= '*' element={<h1>404 NOT FOUND</h1>} />
            </Routes> 
          </BrowserRouter>
          <Footer/>
        </div>
        </CartContextProvider>
  ) 
}  

export default App