import ExpanseDate from './ExpanseDate';
import './Expenseitem.css';
import Card from './Card';

function Expenseitem(props) {
    
    return (
    <Card className='expense-item'>
        <ExpanseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.ammount}</div>
        </div>
    </Card> 
    );
}

export default Expenseitem;