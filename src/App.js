import React, { useState } from "react";
import Expenseitem from "./components/Expenseitem.js";
import Expenses from "./components/Expenses.js";


function App() {

  const expenses = [
    { 
      title: 'Car insurense', 
      amount: 294.67, 
      date: new Date(2023, 2, 28) 
    },
    { 
      title: 'TV', 
      amount: 150, 
      date: new Date(2022, 12, 15) 
    },
    { 
      title: 'AK',
      amount: 250, 
      date: new Date(2023, 1, 9) 
    },
    { 
      title: 'Nmap', 
      amount: 20, 
      date: new Date(2022, 2, 28) 
    }
  ];

  return (
    <div className="App">
      <h2>A KAK?!</h2>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
