
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main';
import Home from './components/Home/Home'
import ShowProduct from './components/ShowProduct';
import { AddProvider } from './components/AddContext';
import ProductList from './components/ProductList';
import ErrorPage from './ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <AddProvider>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="show-product/:id" element={<ShowProduct />} />
            <Route path="product-list/:id" element={<ProductList />} />
            <Route path="error" element={<ErrorPage />} />
          </Route>
     
        </Routes>
      </AddProvider>
    </BrowserRouter>
  );
}

export default App;
