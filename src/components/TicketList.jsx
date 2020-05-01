import React from "react";
import Ticket from "./Ticket";
import PropTypes from "prop-types";

// remove const masterTicketList = [ ... ]. We no longer want these.



function TicketList(props) { 
  const myStyledComponentStyles = {
    backgroundColor: '#b3ecff',
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
  return (
    
    <React.Fragment>
      <div style={myStyledComponentStyles}>
      <hr />
      {props.ticketList.map((ticket, index) => // Loop through the list passed down from TicketControl.
        <Ticket 
        whenTicketClicked={props.onTicketSelection}
        names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          id={ticket.id}
          key={index} />
      )}</div>
    </React.Fragment>
  );
}

// Add propTypes for ticketList.
TicketList.propTypes = {
  ticketList: PropTypes.array,
  onTicketSelection: PropTypes.func,
};

export default TicketList;
