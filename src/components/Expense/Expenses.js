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
                <Expenseitem 
                    title={props.items[0].title} 
                    ammount={props.items[0].amount} 
                    date={props.items[0].date} 
                />
                <Expenseitem 
                    title={props.items[1].title} 
                    ammount={props.items[1].amount} 
                    date={props.items[1].date} 
                />
                <Expenseitem 
                    title={props.items[2].title} 
                    ammount={props.items[2].amount} 
                    date={props.items[2].date} 
                />
                <Expenseitem 
                    title={props.items[3].title} 
                    ammount={props.items[3].amount} 
                    date={props.items[3].date} 
                />
            </Card>
        </div>
    );
}

export default Expenses;