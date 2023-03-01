import ExpanseDate from './ExpanseDate';
import './Expenseitem.css';

function Expenseitem(props) {
    
    return (
    <div className='expense-item'>
        <ExpanseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.ammount}</div>
        </div>
    </div> );
}

export default Expenseitem;