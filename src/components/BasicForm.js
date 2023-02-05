import useInput from "../hooks/hooks";
const BasicForm = (props) => {
  const {
    value:enteredFirstName,
    enteredInputIsValid:enteredFirstNameIsValid,
    InputIsInvalid:FirstNameInputIsInvalid,
    onChangeHandler:onFirstNameChangeHandler,
    onBlurHandler:onFirstNameBlurHandler,
    reset:FirstNameReset
  }=useInput((val)=>{return val.trim()!==""});
  const {
    value:enteredSecondName,
    enteredInputIsValid:enteredSecondNameIsValid,
    InputIsInvalid:SecondNameInputIsInvalid,
    onChangeHandler:onSecondNameChangeHandler,
    onBlurHandler:onSecondNameBlurHandler,
    reset:SecondNameReset
  }=useInput((val)=>{return val.trim()!==""});
  const {
    value:enteredEmail,
    enteredInputIsValid:enteredEmailIsValid,
    InputIsInvalid:EmailInputIsInvalid,
    onChangeHandler:onEmailChangeHandler,
    onBlurHandler:onEmailBlurHandler,
    reset:EmailReset
  }=useInput((val)=>{return val.includes('@')});

  let FormIsValid=false;
  if(enteredFirstNameIsValid&&enteredSecondNameIsValid&&enteredEmailIsValid)
    FormIsValid=true;
  const FormSubmitHandler=(event)=>{
    event.preventDefault();
    if(!FormIsValid)
      return;
    else{
      FirstNameReset();
      SecondNameReset();
      EmailReset();
    }
  }
  return (
    <form onSubmit={FormSubmitHandler}>
      <div className='control-group'>
        <div className={`form-control ${(FirstNameInputIsInvalid)&&"invalid"}`}>
          <label htmlFor='fname'>First Name</label>
          <input
              type='text' 
              id='fname' 
              onChange={onFirstNameChangeHandler} 
              onBlur={onFirstNameBlurHandler}
              value={enteredFirstName}
              />
          {FirstNameInputIsInvalid&&<p className="error-text">Please enter first name.</p>}
        </div>
        <div className={`form-control ${(SecondNameInputIsInvalid)&&"invalid"}`}>
          <label htmlFor='sname'>Second Name</label>
          <input
              type='text' 
              id='sname' 
              onChange={onSecondNameChangeHandler} 
              onBlur={onSecondNameBlurHandler}
              value={enteredSecondName}
              />
          {SecondNameInputIsInvalid&&<p className="error-text">Please enter second name.</p>}
        </div>
      </div>
      <div className={`form-control ${(EmailInputIsInvalid)&&"invalid"}`}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
              type='email' 
              id='email' 
              onChange={onEmailChangeHandler} 
              onBlur={onEmailBlurHandler}
              value={enteredEmail}
              />
          {EmailInputIsInvalid&&<p className="error-text">Please enter valid email.</p>}
      </div>
      <div className='form-actions'>
      <button disabled={!FormIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
