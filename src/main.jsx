import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';


import './index.css';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Home from './pages/Home.jsx';
import Wisata from './pages/Wisata';
import PageLayout from './components/PageLayout';
import WisataDetail from './pages/WisataDetail';
import Aktivitas from './pages/Aktivitas';
import AktivitasList from './pages/AktivitasList';
import Artikel from './pages/Artikel';
import ArtikelDetail from './pages/ArtikelDetail';
import Cerita from './pages/Cerita';
import { AuthProvider } from './hooks/useAuth';
import Profil from './pages/Profil';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
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
        <Route path="/wisata/:id" 
        element={
          <PageLayout>
            <WisataDetail/>
          </PageLayout>
        } />
        <Route path="/aktivitas" 
        element={
          <PageLayout>
            <Aktivitas/>
          </PageLayout>
        } />
        <Route path="/aktivitas/:kategori" 
        element={
          <PageLayout>
            <AktivitasList/>
          </PageLayout>
        } />
        <Route path="/artikel" 
        element={
          <PageLayout>
            <Artikel/>
          </PageLayout>
        } />
        <Route path="/artikel/:id" 
        element={
          <PageLayout>
            <ArtikelDetail/>
          </PageLayout>
        } />
        <Route path="/cerita" 
        element={
          <PageLayout>
            <Cerita/>
          </PageLayout>
        } />
        <Route path="/profil" 
        element={
          <PageLayout>
            <Profil/>
          </PageLayout>
        } />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        {/* <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
    </AuthProvider>
  </React.StrictMode>
);
