import React, { useState } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';

const TaskManager = () => {
  const [messages, setMessages] = useState([]);

  const handleNewUserMessage = (newMessage) => {
    const newMessages = [...messages, { message: newMessage, type: 'user' }];
    setMessages(newMessages);

    // Implement logic to send the message/task to your employee

    // Add response (for demonstration purposes)
    setTimeout(() => {
      const response = 'Task received! We will get it done.';
      const updatedMessages = [...newMessages, { message: response, type: 'response' }];
      setMessages(updatedMessages);
      addResponseMessage(response);
    }, 1000);
  };

  return (
    <div>
      <div style={{ overflowY: 'scroll', height: '400px', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.type}>
            {msg.message}
          </div>
        ))}
      </div>
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Task Assigner"
        subtitle="Online"
        senderPlaceHolder="Type your task here..."
        showCloseButton={false}
        fullScreenMode={false}
        badge={0}
      />
    </div>
  );
};

export default TaskManager;
