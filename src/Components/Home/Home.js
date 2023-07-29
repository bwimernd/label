import React, {useState} from 'react';
import ProductOne from '../Data/ProductOne';
import ProductTwo from '../Data/ProductTwo';
import Label from '../Label/Label';
import Interactive from '../Interactive/Interactive';

function Home() {
    const [nutrition, setNutrition] = useState(ProductOne);
    const [inputValue, setInputValue] = useState('');

  function handleChange(event) {
    setInputValue(event.target.value);
  }
  return (
    <>
    <div>
        <h1>Static</h1>
        <Label nutrition={ProductOne} value={inputValue}/>
    </div>
    <div>
        <h1>Interactive</h1>
        <Interactive nutrition={ProductTwo} value={inputValue} />
    </div>
    </>
  );
}

export default Home;