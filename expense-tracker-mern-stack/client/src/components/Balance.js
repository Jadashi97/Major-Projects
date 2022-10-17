import React, {useContext} from "react";
import numberWithCommas from "../utils/format"; // this is from utils folder with way to add commas in nums

import { GlobalContext } from '../context/GlobalState';


export default function Balance(){
    const {transactions} = useContext(GlobalContext);

    const amounts = transactions.map(transaction => transaction.amount)

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    return(
        <>
            <h4>My Balance</h4>
            <h1>${numberWithCommas(total)}</h1>
        </>
    )
}