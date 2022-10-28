import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Pawacoin     =  lazy(() => import('./pages/pawacoin/Pawacoin'));
const Faq     =  lazy(() => import('./pages/faq/Faq'));
const Home    =  lazy(() => import('./pages/home/Home'));
const Contact =  lazy(() => import('./pages/contact/Contact'));
const Blog    =  lazy(() => import('./pages/blog/Blog'));
const Service =  lazy(() => import('./pages/services/Services'));

function App() {
  return (

  
      <BrowserRouter>      
        <Suspense fallback={<p>Loading</p>}>
        
          <Routes>
            <Route path='/p' element={<Pawacoin/>}/>
            <Route path='/s' element={<Service/>}/>
            <Route path='/f' element={<Faq/>}/>
            <Route path='/m' element={<Blog/>}/>
            <Route path='/c' element={<Contact/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/*'element={<Home/>} />
          </Routes>

        </Suspense>
    </BrowserRouter>
    
  );
}

export default App;