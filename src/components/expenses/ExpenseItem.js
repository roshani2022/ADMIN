import React from 'react';
import ExpenseDetail from './ExpenseDetail';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
//import Card from './Card';
const  ExpenseItem = (props) => {
  // return React.createElement(
  //   'div',{className:'Expense-item'},
  //   React.createElement(ExpenseDate,{date:props.date}),
  //   React.createElement('div',{}),
  //   React.createElement('h1',{},'Expense1'),
  //   React.createElement('h1',{},'Expense1'),
  // );

  // return React.createElement(
  //   'div',{className:'Expense-item'},
  //   React.createElement(ExpenseDate,{date:props.date}),
  //   React.createElement('div',{className:'Expense-item_description'}),
  //   React.createElement(ExpenseDetail,{amount:props.amount, location:props.location , title:props.title})
  // );

  return (
    <div className="expense-item">
      <ExpenseDate date= {props.date}/>
      <div className="expense-item__description">
      <ExpenseDetail amount={props.amount}  location={props.location}   title={props.title} />
        
      </div>
    </div>
  );
}
export default ExpenseItem;
