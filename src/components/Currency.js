import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = (props) => {
    const { currency } = useContext(AppContext);
    return (
        <div className='alert alert-success' style={{padding: 10,backgroundColor: '#99ff99'}}>
     <Dropdown>
      <Dropdown.Toggle variant="error" id="dropdown-basic" style={{backgroundColor: '#99ff99', border: 'none'}}>
      Currency ({currency})
      </Dropdown.Toggle>
 
      <Dropdown.Menu style={{backgroundColor: '#99ff99'}}>
        <Dropdown.Item href="#/action-1">$ Dollar</Dropdown.Item>
        <Dropdown.Item href="#/action-2">£ Pound</Dropdown.Item>
        <Dropdown.Item href="#/action-3">€ Euro</Dropdown.Item>
        <Dropdown.Item href="#/action-3">₹ Ruppee</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

      </div>
      );
}
export default Currency;