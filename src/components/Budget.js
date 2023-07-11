import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = (props) => {
    //const { budget } = useContext(AppContext);
    const { dispatch, expenses, budget, currency } = useContext(AppContext);
    //  const [budget, setBudget] = useState('');

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

const setBudget = (mValue) => {
    //console.log(mValue);

    if(mValue > 20000) {
        alert("The budget cannot be greater than 20000€");
        //setBudget("");
        return;
    }
    if(mValue < totalExpenses) {
        alert("The budget "+mValue+" cannot be lower than the spending "+totalExpenses+"!");
        //setBudget("");
        return;
    }
    dispatch({
        type: 'SET_BUDGET',
        payload: mValue
    });

}
return (
    <div className='alert alert-secondary'>
        Budget:{currency}<input
            id='newbudget'
            keyboardType='numeric'
            step='10'
            max="20000"
            class='quantity'
            required='required'
            type='number'
            value={budget}
            onChange={event=> setBudget(event.target.value)}
            style={{width: 150, height: 20}}
            >
        </input>
    </div>
);
};

export default Budget;
