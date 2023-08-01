import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ItemListContainer } from './containers/ItemListContainer/ItemListContainer'
import { ItemDetailContainer } from './containers/ItemDetailContainer/ItemDetailContainer'
import { Signup } from './components/Signup/Signup'
import { Login } from './components/Login/Login'
import { Profile } from './components/Profile/Profile'
import Layout from './context/Layout'







export const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:category' element={<ItemListContainer />}/>
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='*' element={<h1>404 Not Found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
  )
}