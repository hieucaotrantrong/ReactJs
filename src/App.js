
import NavBar from './components/navbar';
import Home from './components/Home';
import Products from './components/Products';
import { Routes, Route } from 'react-router-dom'
import Product from './components/Product';
import Checkout from './components/Checkout'
import Contact from './components/Contact'
import About from './components/About'
import Footer from './components/Footer';
import Login from './components/Buttons/Login';
import Cart from './components/Cart';
import Singin from './components/Buttons/Singin';
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/products/:id' element={<Product />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/singin' element={<Singin />} />
      </Routes>
      <Footer />
    </>
  );
}
export default App;
