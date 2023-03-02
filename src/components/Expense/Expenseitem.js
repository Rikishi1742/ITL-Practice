import React, { useState } from 'react';

import ExpanseDate from './ExpanseDate';
import './Expenseitem.css';
import Card from '../UI/Card.js';

const Expenseitem = (props) => {

    const [title, setTitle] = useState(props.title);   

    const ClickHandler = () => { 
        setTitle("Updated!!!");  
        console.log(title);
    }

    return (
    <Card className='expense-item'>
        <ExpanseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.ammount}</div>
        </div>
        <button onClick={() => {ClickHandler()}}>Change Title</button>
    </Card> 
    );
}

export default Expenseitem;