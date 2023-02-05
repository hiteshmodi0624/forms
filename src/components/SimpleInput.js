import useInput from "../hooks/hooks";
import "./../index.css"
const SimpleInput = (props) => {
  const {
    value:enteredName,
    enteredInputIsValid:enteredNameIsValid,
    InputIsInvalid:NameInputIsInvalid,
    onChangeHandler:onNameChangeHandler,
    onBlurHandler:onNameBlurHandler,
    reset:NameReset
  }=useInput((val)=>{return val.trim()!==""});
  let FormIsValid=false;
  if(enteredNameIsValid)
    FormIsValid=true;
  const FormSubmitHandler=(event)=>{
    event.preventDefault();
    if(!FormIsValid)
      return;
    else
      NameReset();
  }
  return (
    <form onSubmit={FormSubmitHandler}>
      <div className={`form-control ${(NameInputIsInvalid)&&"invalid"}`}>
        <label htmlFor='name'>Your Name</label>
        <input
            type='text' 
            id='name' 
            onChange={onNameChangeHandler} 
            onBlur={onNameBlurHandler}
            value={enteredName}
            />
        {NameInputIsInvalid&&<p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={!FormIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
