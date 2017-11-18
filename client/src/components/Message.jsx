import React from 'react';
import messages from '../../../sampleData';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const Message = () => (
  <Card style={{ width: '66%', margin: '5px auto' }}>
    <CardHeader
      title={messages[0].sender}
      subtitle={messages[0].timeStamp}
    />
    <CardText>{messages[0].text}</CardText>
  </Card>
);

export default Message;

// <div className="message">
//   <div>
//     <span className="sender">{messages[0].sender}</span>
//     <span className="timeStamp">{messages[0].timeStamp}</span>
//   </div>
//   <div className="message-body">{messages[0].text}</div>
// </div>
