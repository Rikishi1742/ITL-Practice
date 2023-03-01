import Expenseitem from "./Expenseitem";
import './Expenses.css';

function Expenses() {
    return (
        <div className="expenses">
            <Expenseitem 
                title={expenses[0].title} 
                ammount={expenses[0].amount} 
                date={expenses[0].date} 
            />
            <Expenseitem 
                title={expenses[0].title} 
                ammount={expenses[0].amount} 
                date={expenses[0].date} 
            />
            <Expenseitem 
                title={expenses[0].title} 
                ammount={expenses[0].amount} 
                date={expenses[0].date} 
            />
            <Expenseitem 
                title={expenses[0].title} 
                ammount={expenses[0].amount} 
                date={expenses[0].date} 
            />
        </div>
    );
}

export default Expenses;