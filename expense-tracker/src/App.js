
import './App.css';
import Revenue from './components/Revenue';
import Expenses from './components/Expenses';
import Header from './components/Header';
import Remaining from './components/Remaining';
import ListOfExpenses from './components/ListOfExpenses';
import CreateArea from './components/CreateArea';
import { useState } from 'react';

function App() {
   
  const [cost, setCost] = useState([])

  function addCost(newExpense){

    setCost((previousExpense)=>{
      return [...previousExpense, newExpense]
    });

  }

  return (
    <div>
      <Header/>
      <div className='budget'>
        <Revenue/>
        <Expenses/>
        <Remaining/>
      </div>
      <div className='list'>
        <ListOfExpenses/>
        <br/>
        <CreateArea onAdd={addCost}/>
      </div>
    </div>
  );
}

export default App;
