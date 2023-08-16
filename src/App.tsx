import './App.scss';
import { Route, Routes, useLocation } from 'react-router';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Catalog from './pages/Catalog';
import ItemPage from './pages/ItemPage';

function App() {
  const location = useLocation()
  return (
    <div className='wrapper'>
     <Header location={location.pathname} size='large' links={["home", "catalog", "bag", "account"]}/>
     <div className='mainWrapper'>
     <Routes>
       <Route path='/home' element={<Home />}/>
       <Route path='/catalog' element={<Catalog />}/>
       <Route path='/catalog/:id' element={<ItemPage/>} />
      </Routes>
     </div>
      <Footer size='large' links={['instagram', 'terms of use', 'privacy & policy', 'about us', 'shipping' ]}/>
    </div>
  );
}

export default App;
