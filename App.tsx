import * as React from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Cards from './components/Cards'
import './style.css';

export default function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Cards />
    </div>
  );
} 
