import './App.scss'
import { Route, Routes, useLocation } from 'react-router'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Catalog from './pages/Catalog'
import ItemPage from './pages/ItemPage'
import Account from './pages/Account'
import { useAppDispatch } from './redux/redux'
import * as React from 'react'
import { fetchAuthMe } from './redux/slices/authSlice'

function App() {
  const location = useLocation()
  const dispatch = useAppDispatch()
  React.useEffect(() => {
    dispatch(fetchAuthMe())
  },[])
  return (
    <div className='wrapper'>
     <Header location={location.pathname} size='large' links={["home", "catalog", "cart", "account"]}/>
     <div className='mainWrapper'>
     <Routes>
       <Route path='/' element={<Home />}/>
       <Route path='/catalog' element={<Catalog />}/>
       <Route path='/catalog/:id' element={<ItemPage/>} />
       <Route path='/account' element={<Account/>}/>
      </Routes>
     </div>
      <Footer size='large' links={['instagram', 'terms of use', 'privacy & policy', 'about us', 'shipping' ]}/>
    </div>
  )
}

export default App
