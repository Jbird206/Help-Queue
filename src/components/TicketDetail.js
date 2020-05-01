import React from "react";
import PropTypes from "prop-types";

function TicketDetail(props) {
  const myStyledComponentStyles = {
    backgroundColor: '#f59b42',
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
borderColor: '#8585ad'
    
  }
  const { ticket, onClickingDelete } = props;

  return (
    <React.Fragment>
      <div style={myStyledComponentStyles}>
        <hr></hr>
      <h1>Ticket Detail</h1>
      <h3>
        {ticket.location} - {ticket.names}
      </h3>
      <p>
        <em>{ticket.issue}</em>
      </p>
      <button onClick={props.onClickingEdit}>Update Ticket</button>
      <button onClick={() => onClickingDelete(ticket.id)}>Close Ticket</button>
      <hr />
      </div>
    </React.Fragment>
  );
}

TicketDetail.propTypes = {
  ticket: PropTypes.object,
  onClickingEdit: PropTypes.func,
  onClickingDelete: PropTypes.func,
};

export default TicketDetail;