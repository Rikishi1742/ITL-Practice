import Expenseitem from "./Expenseitem";
import './Expenses.css';
import '../UI/Card.css'
import Card from "../UI/Card.js";

function Expenses(props) {
    return (
        <Card className="expenses">
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
    );
}

export default Expenses;