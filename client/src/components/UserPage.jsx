import React from 'react';
import MessageList from './MessageList.jsx'
import messages from '../../../sampleData';
import ProgressBar from './ProgressBar.jsx';

const UserPage = () => (
  <div>
    <ProgressBar />
    <MessageList messages={messages} />
  </div>
);

export default UserPage;
