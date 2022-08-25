
import './App.css';
import Revenue from './components/Revenue';
import Expenses from './components/Expenses';
import Header from './components/Header';
import Remaining from './components/Remaining';
import dummyList from './dummyList';
import CreateArea from './components/CreateArea';
import ExpenseItems from './components/ExpenseItems';
import { useState } from 'react';


function Entry(item){
  return(
    <ExpenseItems 
        key={item.id}
        name={item.name}
        cost={item.cost}
    />
  )
}

function App() {
   
  const [cost, setCost] = useState([]);


  const [isEditing, setIsEditing] = useState(false);
  const [currentCost, setCurrentCost] = useState({});

  function addCost(newExpense){

    setCost((previousExpense)=>{
      return [...previousExpense, newExpense]
    });

  }

  // USE THE FILTER FUNCTION TO FILTER THROGH THE LIST AND ONLY RETURN IF INDEX IS NOT EQUALS 
  //USE THE SET FUNCTION TO DECLARE THE FUNCTION
  function deleteCost(id){
    // console.log("Delete me!")

    setCost((prevCost)=>{
      return prevCost.filter((item, index)  =>{
        return index !== id;
      }
      )
    })
  }

  // SOLVE THE EDIT BUTTON
  function handleEditInput(e){
    
    setCurrentCost({
      ...currentCost, text: e.target.value
    })

    console.log(currentCost)
  }

  return (
    <div className='budget'>
      <Header/>
      <div >
        <Revenue/>
        <Expenses/>
        <Remaining/>
        <>
        {dummyList.map(Entry)}
        </>
      </div>
      <div className='list'>
        {cost.map((item, index)=>{
                return(
                    <div>
                        <ExpenseItems 
                            Key={index}
                            id={index}
                            name={item.name}
                            cost={item.cost}
                            onDelete={deleteCost}
                        />
                    </div>
                )
        })}
        <CreateArea onAdd={addCost}/>
        <br/>
      </div>
    </div>
  );
}

export default App;
