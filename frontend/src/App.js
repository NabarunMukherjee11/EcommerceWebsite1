
import './App.css';
import Navbar  from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login_SignUP from './pages/Login_Signup';
import men_banner from './components/Assets/men-banner.jpg'
import women_banner from './components/Assets/womenbanner.jpg'
import kid_banner from './components/Assets/kidsbanner.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
          <Routes>
          <Route path='/' element={<Shop/>}/>
            <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
            <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
            <Route path='/product' element={<Product/>}>
              <Route path=':productId' element={<Product/>}/>
            </Route>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/login' element={<Login_SignUP/>}/>
          </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
