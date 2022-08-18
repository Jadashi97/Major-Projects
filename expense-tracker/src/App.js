
import './App.css';
import Revenue from './components/Revenue';
import Expenses from './components/Expenses';
import Header from './components/Header';
import Remaining from './components/Remaining';
import ListOfExpenses from './components/ListOfExpenses';

function App() {
  return (
    <div>
      <Header/>
      <div className='budget'>
        <Revenue/>
        <Expenses/>
        <Remaining/>  
      </div>
      <ListOfExpenses/>
    </div>
  );
}

export default App;
