import React, { useState } from 'react';

import ExpanseDate from './ExpanseDate';
import './Expenseitem.css';
import Card from '../UI/Card.js';

const Expenseitem = (props) => {

    const [title, setTitle] = useState(props.title);   

    /* Legacy код, нигде не юзается да и вообще нахуй не нужен
    const ClickHandler = () => { 
        setTitle("Updated!!!");  
        console.log(title);
    }
    */

    return (
    <Card className='expense-item'>
        <ExpanseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
    </Card> 
    );
}

export default Expenseitem;