import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';


import './index.css';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Wisata from './pages/Wisata';
import PageLayout from './components/layouts/PageLayout';
import WisataDetail from './pages/WisataDetail';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" 
        element={
          <PageLayout>
            <Home />
          </PageLayout>
        } />
        <Route path="/wisata" 
        element={
          <PageLayout>
            <Wisata/>
          </PageLayout>
        } />
        <Route path="/wisata/detail/:id" 
        element={
          <PageLayout>
            <WisataDetail/>
          </PageLayout>
        } />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
