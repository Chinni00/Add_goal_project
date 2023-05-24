import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid , setIsValid] = useState(true);

  

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length==0){
      setIsValid(false);
      return '';
    }
    else if(enteredValue.trim().length>0){
      setIsValid(true);
      props.onAddGoal(enteredValue);
    }
    
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color:isValid ? 'black': 'red'}} >Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button style={{background:isValid ? 'black': 'red'}} type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
