import React, { useState } from "react";
import Expenseitem from "./Expenseitem.js";
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpanseFilter.js";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart from "./ExpensesChart.js";
import './Expenses.css';
import '../UI/Card.css'

function Expenses(props) {

    const [filteredYear, setFiltredYear] = useState();

    const filterChangeHandler = selectedYear => {
        setFiltredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter 
                    selected={filteredYear} 
                    onChangeFilter={filterChangeHandler} 
                />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    );
}

export default Expenses;