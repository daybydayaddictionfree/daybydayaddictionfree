import { Card, CardHeader, CardText } from 'material-ui/Card';
import React from 'react';

const Message = props => (
  <Card style={{ width: '66%', margin: '5px auto' }}>
    <CardHeader
      title={props.message.name}
      subtitle={props.message.timestamp}
    />
    <CardText>{props.message.text}</CardText>
  </Card>
);

export default Message;
