import React, { useState } from "react";
import Expenseitem from "./Expenseitem.js";
import './Expenses.css';
import '../UI/Card.css'
import Card from "../UI/Card.js";
import ExpensesFilter from "./ExpanseFilter.js";

function Expenses(props) {

    const [filterYear, setFiltredYear] = useState();

    const filterChangeHandler = selectedYear => {
        setFiltredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filterYear} onChangeFilter={filterChangeHandler} />
                {props.items.map(expense => (
                    <Expenseitem 
                        key={expense.id}
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date}
                    />))}
                
            </Card>
        </div>
    );
}

export default Expenses;