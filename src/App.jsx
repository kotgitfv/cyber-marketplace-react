import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/header/Header.jsx';
import Hero from './components/layout/hero/Hero.jsx';
import Categories from './components/layout/categories/Categories.jsx'
import ProductPage from './pages/Product/ProductPage.jsx'; 
import Footer from './components/layout/footer/Footer.jsx';
import Products from './components/layout/products/products.jsx';
import Arrivals from './components/layout/arrivals/Arrivals.jsx'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products />
                <Categories />
                <Arrivals />
              </>
            } />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </main>
            <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;



