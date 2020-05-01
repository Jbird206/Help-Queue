import React from "react";

function Header(props) {
  const myStyledComponentStyles = {
    backgroundColor: '#42f5da',
    fontFamily: 'sans-serif',
    padding: '50px',
    margin: '10px',
    width: '300px',
    marginLeft: 50,
    marginRight: 50,
    boxShadow: '5px 5px 15px',
    borderRadius: 10,
    textAlign: 'center',
    border: '1px solid cyan',
borderWidth: 2,
borderColor: '#8585ad'
    
  }
  return (
    <center><div style={myStyledComponentStyles}>
      <h1>Help Queue!</h1>
     <em><p>Create a ticket so we can assist you.</p></em>
    </div></center>
    
  );
}


export default Header;
