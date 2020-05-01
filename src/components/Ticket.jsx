import React from "react";
import PropTypes from "prop-types";

function Ticket(props) {
  const myStyledComponentStyles = {
    backgroundColor: '#ff5c33',
    fontFamily: 'sans-serif',
    padding: '50px',
    margin: '50px',
    marginLeft: 50,
    marginRight: 50,
    boxShadow: '5px 5px 15px',
    borderRadius: 50,
    textAlign: 'center',
    border: '1px solid cyan',
borderWidth: 2,
borderColor: 'cyan'
  }
  return (

    <React.Fragment>
      <div style={myStyledComponentStyles}>
      <div onClick={() => props.whenTicketClicked(props.id)}>
      <h3>
        {props.location} - {props.names}
      </h3>
      <p>
        <em>{props.issue}</em>
      </p>
      <hr /></div>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  names: PropTypes.string,
  location: PropTypes.string,
  issue: PropTypes.string,
};

export default Ticket;
