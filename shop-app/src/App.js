import './App.css';
import CarouselContainer from './Components/Homepage/Carousel';
import Items from './Components/Homepage/Items';
import HomeFilter from './Components/Homepage/HomeFilter';
import { useState } from 'react';


function App(props) {
  const [rowCount,useChangeRow] = useState(3);
  const SetRow = (noOfRows) => {
    useChangeRow(noOfRows);
  }

  return (
    <>
    <CarouselContainer/>
    <HomeFilter changeRow={SetRow}/>
    <Items rowCount={rowCount}/>
    </>
  );
}

export default App;
