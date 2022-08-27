
import './App.css';
import Revenue from './components/Revenue';
import Expenses from './components/Expenses';
import Header from './components/Header';
import Remaining from './components/Remaining';
import dummyList from './dummyList';
import CreateArea from './components/CreateArea';
import ExpenseItems from './components/ExpenseItems';
import EditForm from './components/EditForm';
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
  function handleEditInputChange(e){
    
    setCurrentCost({
      ...currentCost, text: e.target.value
    })

    console.log(currentCost)
  }

  //handling the edit form when submit

  function handleEditFormSubmit(e){
    e.preventDefault();

    handleUpdateCost(currentCost.id, currentCost)
  }

  //handle for cost update

  function handleUpdateCost(id, updatedCost){

    const updatedItem = cost.map((cost) => {
      return cost.id === id ? updatedCost : cost;
    });
    setIsEditing(false);
    setCost(updatedItem);
  }

  function handleUpdateClick(){
    setIsEditing(true);

    setCurrentCost({...cost})
  }

  return (
    <div className='budget'>
      <Header/>
      <div className='budget-2' >
        <Revenue/>
        <Expenses/>
        <Remaining/>
        <>
        {dummyList.map(Entry)}
        </>
      </div>
      <div className='list'>
        {isEditing ? (
          <EditForm
            currentCost={currentCost}
            setIsEditing={setIsEditing}
            onEditInputChange={handleEditInputChange}
            onEditFormSubmit={handleEditFormSubmit}
          />
        ) : (
          <CreateArea onAdd={addCost}/>
        )}
        <br/>
        {cost.map((item, index)=>{
                return(
                    <div>
                        <ExpenseItems 
                            Key={index}
                            id={index}
                            name={item.name}
                            cost={item.cost}
                            onDelete={deleteCost}
                            onEditClick={handleUpdateClick}
                        />
                    </div>
                )
        })}
      </div>
    </div>
  );
}

export default App;
