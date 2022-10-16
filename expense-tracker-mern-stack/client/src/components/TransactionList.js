import React,{useContext, useEffect} from 'react';
import Transaction from './Transaction';


import { GlobalContext } from '../context/GlobalState';

export default function TransactionList() {

  const {transactions, getTransactions} = useContext(GlobalContext) //destructure transaction & getTransactions from the Global context

  useEffect(()=>{
    getTransactions();

    // the line below prevents react from throwing an error---- try deleting next line to see the error
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
          {transactions.map((transaction) => (<Transaction key={transaction.id} transaction={transaction}/>))}
      </ul>
    </div>
  )
}
