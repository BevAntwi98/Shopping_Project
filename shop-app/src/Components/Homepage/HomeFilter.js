import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import { useState } from 'react';

const rowCounts = [2,3,4,5,6,7,8];

const HomeFilter = ({changeRow}) => {
  return (
  
  <div>
      <RowSelector changeValue={changeRow}></RowSelector>

  </div>
  
  );
};


const RowSelector = ({changeValue}) => {
  return (
    <DropdownButton id="dropdown-basic-button" title="Items Per Row">
        {rowCounts.map(rC => (<Dropdown.Item onClick={() => changeValue(rC)}>{rC}</Dropdown.Item>))}
        
    </DropdownButton>

  );
};


export default HomeFilter;
