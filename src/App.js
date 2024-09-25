
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './Main';
import Home from './components/Home'
import ShowProduct from './components/ShowProduct';

function App() {
  return (
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Main/>}>
  <Route index element={<Home/>}/>
  <Route path="show-product" element={<ShowProduct/>}/>
  </Route>
  
 </Routes>
 </BrowserRouter>
  );
}

export default App;
