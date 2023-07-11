import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = (props) => {
    const {  dispatch } = useContext(AppContext);
    
const setCurrency = (mValue) => {
        console.log("VAL:"+mValue);
        dispatch({
            type: 'CHG_CURRENCY',
            payload: mValue
        });
        
    }

    return (  
    <div className='alert alert-success' style={{padding: 10,backgroundColor: '#99ff99'}}>
                        Currency<select  style={{padding: 7,backgroundColor: '#99ff99', border: 'none'}} className="custom-select" id="inputCur" onChange={(event) => setCurrency(event.target.value)}>
                            <option value="$" name="dollar">$ Dollar</option>
                            <option value="£" name="pound">£ Pound</option>
                            <option value="€" name="euro">€ Euro</option>
                            <option value="₹" name="euro">₹ Ruppee</option>
                         </select>
    </div>
      );
       
}
export default Currency;