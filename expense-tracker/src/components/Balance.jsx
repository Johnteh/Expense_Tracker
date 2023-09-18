import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

export default function Balance() {
  const { transactions } = useContext(GlobalContext)

  // const amounts = transactions.map(transaction => transaction.amount);
  const total = transactions.reduce((acc, item) => (acc += item.amount), 0);
  return (
    <>
    <h4>Your Balance</h4>
    <h1>${total}</h1>
    </>
  )
}
