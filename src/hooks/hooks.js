import { useState } from "react";
const useInput=(validationMethod)=>{
    const [enteredInput,setEnteredInput]=useState("");
    const [wasTouched,setTouched]=useState(false);
  
    const enteredInputIsValid=(validationMethod(enteredInput));
    const InputIsInvalid=!enteredInputIsValid&&wasTouched;

    const onChangeHandler=(event)=>{
        setEnteredInput(event.target.value);
    }
    const onBlurHandler=(event)=>{
      setTouched(true);
    }
    const reset=()=>{
        setEnteredInput("");
        setTouched(false);
    }
    return {
        value:enteredInput,
        enteredInputIsValid,
        InputIsInvalid,
        onChangeHandler,
        onBlurHandler,
        reset
    }
}
export default useInput