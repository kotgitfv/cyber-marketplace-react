import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/header/Header.jsx';
import Hero from './components/layout/hero/Hero.jsx';
import ProductPage from './pages/ProductPage.jsx'; 
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header /> 

        <main>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/product" element={<ProductPage />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;




// в случае глюка: ctrl + shift + P >  Restart Extension Host

// после изменений :  git add .
// git commit -m "описание того что изменил"
// git push