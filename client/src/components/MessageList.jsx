import React from 'react';
import Message from './Message.jsx';

const MessageList = props => (
  <div>
    {props.messages.map(item => <Message message={item} key={item._id} />)}
  </div>
);

export default MessageList;
