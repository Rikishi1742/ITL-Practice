import './Expenseitem.css';

function Expenseitem(props)
{

    return (
    <div className='expense-item'>
        <div>{props.date.toISOString()}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.ammount}</div>
        </div>
    </div> );
}

export default Expenseitem;