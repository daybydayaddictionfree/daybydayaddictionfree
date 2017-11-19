import React from 'react';
import MessageList from './MessageList.jsx'
import messages from '../../../sampleData';

const UserPage = () => (
  <div>
    <MessageList messages={messages} />
  </div>
);

export default UserPage;
