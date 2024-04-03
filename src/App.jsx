
import './App.css'
import {  Route, BrowserRouter,Routes } from 'react-router-dom'



import Footer from './globals/components/footer/Footer'
import Navbar from './globals/components/navbar/Navbar'
import { Provider } from 'react-redux'
import store from './store/store'
import Cart from './pages/cart/Cart'
import Login from './pages/auth/login/Login'
import Home from './pages/home/Home'
import Register from './pages/auth/register/Register'


function App() {


  return (
   <>
   <Provider store= {store}>
   {/* <Navbar/>
     <RouterProvider router = {router}/>
     <Footer/>     */}
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}/>
      <Route path='/cart' element={<Cart/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
   </Provider>
    
   </>
  )
}

export default App
