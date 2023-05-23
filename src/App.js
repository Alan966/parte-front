import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Pages/Home';
import BarProfile from './Components/Organisms/BarProfile';
import Signup from './Components/Pages/Signup';
import Signin from './Components/Pages/Signin';
import Header from './Components/Organisms/Header';
import Nosotros from './Components/Pages/Nosotros';
import ProductsByCategory from './Components/Pages/ProductsbyCategory';
import ProductosBySubcategory from './Components/Pages/ProductosBySubcategory';
import Article from './Components/Pages/Artilce';
import ListArticles from './Components/Pages/ListArtilces';
import Product from './Components/Pages/Product';
import Shipping from './Components/Pages/Carrito';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <BarProfile />
      <Header />
      <Routes>
        <Route  path='/'  element={< Home />}/>
        <Route  path='/signup'  element={< Signup />}/>
        <Route  path='/signin'  element={< Signin />}/>
        <Route path='/7' element={< Nosotros />}/>
        <Route path='/8' element={< ListArticles />}/>
        <Route path='/8/:id_promotion' element={< Article />}/>
        <Route path="/products/:id_category" element={< ProductsByCategory />} />
        <Route path="/products/:id_category/:id_subcategory" element={< ProductosBySubcategory />} />
        <Route path="/product/:id_producto" element={< Product />} />
        <Route path="/shipping" element={< Shipping />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
