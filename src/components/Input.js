import { useEffect } from "react";
import useInput from "../hooks/hooks";
import "./../index.css"
const Input = (props) => {
  const {
    value:enteredValue,
    enteredInputIsValid:enteredValueIsValid,
    InputIsInvalid:enetedInputIsInvalid,
    onChangeHandler:onValueChangeHandler,
    onBlurHandler:onValueBlurHandler,
    reset:FirstNameReset
  }=useInput((val)=>{return val.trim()!==""});

  useEffect(()=>{
    if(props.reset.reset==1){
        props.reset.changeReset(false);
        FirstNameReset()
    }

  },[props.reset,FirstNameReset])

  return (
    <div className={`form-control ${(enetedInputIsInvalid)&&"invalid"}`}>
        <label htmlFor='fname'>First Name</label>
        <input
            type='text' 
            id='fname' 
            onChange={onValueChangeHandler} 
            onBlur={onValueBlurHandler}
            value={enteredValue}
            />
        {enetedInputIsInvalid&&<p className="error-text">First Name must not be empty</p>}
    </div>
  );
};

export default Input;
