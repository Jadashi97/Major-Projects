
import './App.css';
import Revenue from './components/Revenue';
import Expenses from './components/Expenses';
import Header from './components/Header';
import Remaining from './components/Remaining';

function App() {
  return (
    <div>
      <Header/>
      <div className='budget'>
        <Revenue/>
        <Expenses/>
        <Remaining/>  
      </div>
    </div>
  );
}

export default App;
