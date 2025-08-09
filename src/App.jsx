import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import { Outlet } from 'react-router';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar/>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;