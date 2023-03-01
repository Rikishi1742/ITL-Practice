import React, { useState } from "react";

import Expenseitem from "./components/Expenseitem.js";

function App() {

  const expenses = [
    { title: 'Car insurense', amount: 294.67, date: new Date(2023, 2, 28) },
    { title: 'TV', amount: 150, date: new Date(2022, 12, 15) },
    { title: 'AK', amount: 250, date: new Date(2023, 1, 9) },
    { title: 'Nmap', amount: 20, date: new Date(2022, 2, 28) }
  ];

  return (
    <div className="App">
      <h2>Strujachim!</h2>
      <Expenseitem title={expenses[0].title} ammount={expenses[0].amount} date={expenses[0].date}></Expenseitem>
      <Expenseitem title={expenses[1].title} ammount={expenses[1].amount} date={expenses[1].date}></Expenseitem>
      <Expenseitem title={expenses[2].title} ammount={expenses[2].amount} date={expenses[2].date}></Expenseitem>
      <Expenseitem title={expenses[3].title} ammount={expenses[3].amount} date={expenses[3].date}></Expenseitem>
    </div>
  );
}

export default App;
