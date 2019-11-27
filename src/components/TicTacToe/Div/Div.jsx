import React from "react";
import ChildDiv from "./ChildDiv/ChildDiv";

const Div = ({ name, child }) => {
let test = (event) => {console.log(event, 'asda')}
  return (
    <div key={`${name}`} className='box'>
      {[...Array(parseInt(child))].map((el,i) => {
          return (
        <ChildDiv  key={el} width={i} value={'yle'}></ChildDiv>
       ) })}
    </div>
  );
};
export default Div;
