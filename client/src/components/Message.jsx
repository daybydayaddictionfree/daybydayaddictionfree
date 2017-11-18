import React from 'react';
import messages from '../../../sampleData';

const Message = () => (
  <div>
    <h1>Message Here</h1>
    <div>{messages[0].sender} {messages[0].timeStamp}</div>
    <div>{messages[0].text}</div>
  </div>
);

export default Message;
