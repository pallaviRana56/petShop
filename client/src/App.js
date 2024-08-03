import {BrowserRouter,Routes,Route,Navigate,Outlet} from 'react-router-dom';
import {Navbar,Home,About,Contact,SignUp,Login,OurServices,Categories, ViewDeatails} from './components/AllComponents'
import { useState } from 'react';

function App() {

  const PrivateRoute = ({isAuth, ...props})=>{
        return isAuth ? <><Navbar/><Outlet/></>:<Navigate to ='/Login'/>
  }

  const [isAuth, isUserAuth] = useState(false)

  return (
  
    <BrowserRouter>
    
    <Routes>
      <Route path='/SignUp' element={<SignUp/>}/>
      <Route path='/Login' element={<Login isUserAuth={isUserAuth}/>}/>
      <Route path='/*' element={<h1>Page not Found</h1>}/>

      <Route path='/' element={<PrivateRoute isAuth={isAuth}/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/ViewDeatails/:id' element={<ViewDeatails/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/OurServices' element={<OurServices/>}/>
      <Route path='/Categories' element={<Categories/>}/>
      </Route>
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
