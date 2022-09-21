import React, {useState} from "react";

function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [submittedData, setSubmittedData] = useState([]);
  const [errors, setErrors] = useState([]);

  function onFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function onLastNameChange(e) {
    setLastName(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();
    switch(true) {
    case (firstName.length > 0 && lastName.length > 0):
      const formData = {
        firstName: firstName,
        lastName : lastName
      };
      const dataArr = [
        ...submittedData,
        formData
      ];
      setSubmittedData(dataArr);
      setFirstName('');
      setLastName('');
      setErrors([]);
      break;
    case (firstName.length <= 0 && lastName.length <= 0) :
      setErrors(['Please enter name!']);
      break;
    case (firstName.length <= 0):
      setErrors(['First name is required!']);
      break;
    case (lastName.length <= 0):
      setErrors(['Last name is required!'])
    } 
  }

  const displayData = submittedData.map((data, index) => {
    return (
      <div key={index}>
        {data.firstName} {data.lastName}
      </div>
    )
  })

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input type="text" onChange={onFirstNameChange} value={firstName}/>
        <input type="text" onChange={onLastNameChange} value={lastName}/>
        <button type="submit">Submit</button>
      </form>
      {errors.length > 0
      ? errors.map((error, index) => (
          <p key={index} style={{ color: "red" }}>
            {error}
          </p>
        ))
      : null}
      <h3>Submissions</h3>
      {displayData}
    </div>
  );
}

export default Form;
