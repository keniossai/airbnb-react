import * as React from 'react';
import Navbar from './components/Navbar'
import Main from './components/Main'
import Cards from './components/Cards'
import data from './data'
import './style.css';

export default function App() {

  const cards = data.map(item => {
    return(
      <Cards
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div>
      <Navbar />
      <Main />
      <section className='card-list'>
        {cards}
      </section>
    </div>
  );
} 
