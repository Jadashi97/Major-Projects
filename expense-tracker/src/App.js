
import './App.css';
import Revenue from './components/Revenue';
import Expenses from './components/Expenses';
import Header from './components/Header';
import Remaining from './components/Remaining';
import expenseList from './expenseList';
// import ListOfExpenses from './components/ListOfExpenses';
import CreateArea from './components/CreateArea';
import ExpenseItems from './components/ExpenseItems';
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
        {/* <ListOfExpenses/> */}
        {cost.map((item, index)=>{
                return(
                    <div>
                        <ExpenseItems 
                            key={index}
                            id={index}
                            name={item.name}
                            cost={item.cost}
                        />
                    </div>
                )
            })}
        <br/>
        <CreateArea onAdd={addCost}/>
      </div>
    </div>
  );
}

export default App;
