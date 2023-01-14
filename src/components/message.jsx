import React from "react";

export const Message = (props) => {
  console.log(props);
  console.log(props.header);
  console.log(props.text);
  console.log(props.children);
  return (
    <div>
      <div className="text-center">
        {props.header ? <h3 className="message-header"> {props.header}</h3> : null }
        <div className="message-body">
          {props.text ? props.text : props.children}
        </div>
      </div>
    </div>
  );
};

// export const Message = props => <div className="text-center">
//      <h3 className="message-header">Thank You</h3>
//     <div class="message-body"> We will reply to your message in next 24h. Have a nice day! ;-) </div>
// </div>