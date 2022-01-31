import './App.css';
import CarouselContainer from './Components/Homepage/Caraousel';
import Header from './Components/Homepage/Header';
import Items from './Components/Homepage/Items';
import HomeFilter from './Components/Homepage/HomeFilter';
import { useState } from 'react';


function App() {
  const [rowCount,useChangeRow] = useState(2);

  const SetRow = (noOfRows) => {
    useChangeRow(noOfRows);
  }

  return (
    <>
    <Header name="Store"/>
    <CarouselContainer/>
    <HomeFilter changeRow={SetRow}/>
    <Items rowCount={rowCount}/>
    </>
    

  );
}

export default App;
