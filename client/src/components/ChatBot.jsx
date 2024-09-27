import React, { useState } from 'react';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', content: input };
      setMessages([...messages, userMessage]);

      try {
        const response = await fetch('http://localhost:8000/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            message: input,
            history: messages,
          }),
        });

        const data = await response.json();
        const botMessage = { role: 'bot', content: data.response };
        setMessages([...messages, userMessage, botMessage]);
      } catch (error) {
        console.error('Error fetching response:', error);
      }

      setInput(''); // Clear input field
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div
        className={`w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center cursor-pointer text-2xl text-white ${isOpen ? 'hidden' : ''}`}
        onClick={toggleChatbot}
      >
        💬
      </div>
      <div
        className={`fixed bottom-20 right-5 w-72 h-96 bg-white rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}
      >
        <div className="bg-blue-500 text-white p-2 rounded-t-lg flex justify-between items-center">
          <span>Chatbot</span>
          <button onClick={toggleChatbot}>✖</button>
        </div>
        <div className="p-2 flex-1 overflow-y-auto bg-gray-100">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-2 rounded mb-1 ${msg.role === 'user' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300 self-start'}`}
            >
              {msg.content}
            </div>
          ))}
        </div>
        <div className="flex p-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={sendMessage}
            className="ml-2 p-2 bg-blue-500 text-white rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
