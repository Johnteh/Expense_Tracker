import {React} from 'react';
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export default function AddTransaction() {
  const { addTransaction } = useContext(GlobalContext)
  const [formData, setFormData] =  useState(
    {
      text:"",
      amount:0

  });

  const{text, amount} = formData;


  

  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
    

  }
  function onSubmit(e){
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 1000000),
      text,
      amount: + amount
    }
    addTransaction(newTransaction);

  }
  return (
    <div>
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={text} id='text' onChange={onChange} placeholder="Enter text..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount"
                >Amount <br />
            </label>
            
            <input type="number" value={amount} id= "amount" onChange={onChange} placeholder="Enter amount..." />
            </div>
            <button className="btn">Add transaction</button>
        </form>
    </>
    </div>
  )
}
