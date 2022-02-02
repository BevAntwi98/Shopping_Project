import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useState } from 'react';

import '../../Design/HomepageCards.css'

const rowCounts = [3,4];

const HomeFilter = ({changeRow}) => {
  return (
  
  <div>
      <RowSelector changeValue={changeRow}></RowSelector>

  </div>
  
  );
};


const RowSelector = ({changeValue}) => {
  return (
    <DropdownButton className='ddown' id="dropdown-basic-button ddown" title="Items Per Row">
        {rowCounts.map(rC => (<Dropdown.Item onClick={() => changeValue(rC)}>{rC}</Dropdown.Item>))}
        
    </DropdownButton>

  );
};


export default HomeFilter;
