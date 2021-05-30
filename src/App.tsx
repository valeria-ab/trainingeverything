import React, {useState} from 'react';
import './App.css';
import {Accordion} from './components/Accordion/Accordion';
import {OnOff} from './components/OnOff/OnOff';
import Rating, {RatingValueType} from "./components/Rating/Rating";
import UncontrolledRating from "./components/UncontrolledRating/UncontrolledRating";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnoff/UncontrolledOnOff";

function App() {
  let [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
  let [on, setOn] = useState<boolean>(false)
  return (
      <div className="App">
        <Accordion titleValue={"Users"}
                   collapsed={accordionCollapsed}
                   onChange={ () => {setAccordionCollapsed(!accordionCollapsed)} }
                   onClick={() => console.log('some item was clicked')}
                   items={[{title: "Micky", value: 1}, {title: "Helena", value: 2}, {title: "Rob", value: 3}]}
        />
        <UncontrolledAccordion
            titleValue={"Menu"}
        />
        <Rating value={ratingValue} onClick={setRatingValue} />
        <UncontrolledRating  onChange={() => console.log('rating changed')}/>
        <OnOff onChange={setOn} on={on}/>
        <UncontrolledOnOff onChange={setOn}/>
      </div>
  );
}

export default App;