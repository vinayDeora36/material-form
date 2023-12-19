// FormFields.js


import React, { useRef } from 'react';
import Component1 from './component1';
import { addUser } from '../service/api';

function FormFields() {

  const component1Ref = useRef();

  const handleSubmit = async(e) => {
    e.preventDefault();

    const valuesComponent1 = component1Ref.current.getValues();
    
    await addUser(valuesComponent1);
    console.log(valuesComponent1)
  };

  return (
    <form onSubmit={handleSubmit}>
      <Component1 ref={component1Ref} />
      <button type="submit">Submit</button>     
    </form>
  );
}

export default FormFields;



