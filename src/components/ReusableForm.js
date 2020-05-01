import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
    const myStyledComponentStyles = {
        backgroundColor: '#49d192',
        fontFamily: 'sans-serif',
        padding: '50px',
        margin: '20px',
        marginLeft: 50,
        marginRight: 50,
        boxShadow: '5px 5px 15px',
        borderRadius: 50,
        textAlign: 'center',
        border: '1px solid cyan',
    borderWidth: 4,
    borderColor: '#8585ad'
    }

  return (
    <React.Fragment>
        <div style={myStyledComponentStyles}>
      <form onSubmit={props.formSubmissionHandler}>
        
          <h1>Fill out the form below</h1>
          
          <hr></hr><br></br>
        <input
          type='text'
          name='names'
          placeholder='Pair Names' required />
        <input
          type='text'
          name='location'
          placeholder='Location' required/>
          <br></br>
          <input
          type='date'
          name='date and time'
          placeholder='0000'  required/>
          <br></br>
        <textarea
          type='text'
          name='issue'
          placeholder='Describe your issue.' required/>
          <br></br>
        <button type='submit'>{props.buttonText}</button>
      </form></div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;