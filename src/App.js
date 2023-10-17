import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/home/Home'
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/header/Header';
import Home2 from './component/home2/Home2';
import Series from './component/series/Series'
import Comic from './component/comic/Comic'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home2/:id' element={<Home2 />}/>
          <Route path='/comic/:id' element={<Comic />} />
          <Route path='/series/:id' element={<Series />} />
        </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
