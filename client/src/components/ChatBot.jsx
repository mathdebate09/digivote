import React, { useState } from 'react';
import { MdCancel } from "react-icons/md";
import { IoMdChatbubbles } from "react-icons/io";
import { FiSend } from "react-icons/fi";
import botAvatar from "../assets/vectors/chat-robot.avif";
import userAvatar from "../assets/vectors/chat-human.avif";
import { handleAudio } from "../utils/helper"

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', content: input };
      setMessages([...messages, userMessage]);
      setInput(''); // Clear input field immediately
      setLoading(true); // Show loading spinner

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
        setMessages((prevMessages) => {
          const newMessages = [...prevMessages, userMessage, botMessage];
          handleAudio(botMessage.content); // Read the bot message aloud
          return newMessages;
        });
      } catch (error) {
        console.error('Error fetching response:', error);
      } finally {
        setLoading(false); // Hide loading spinner
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div
        className={`w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer text-2xl text-white shadow-lg ${isOpen ? 'hidden' : ''}`}
        onClick={toggleChatbot}
      >
        <IoMdChatbubbles className="text-white text-3xl" />
      </div>
      <div
        className={`fixed bottom-20 right-5 w-80 h-96 bg-white rounded-lg shadow-lg flex flex-col justify-between transition-transform duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}
      >
        <div className="bg-blue-600 text-white p-3 rounded-t-lg flex justify-between items-center">
          <span className="font-semibold">Sahayak</span>
          <button onClick={toggleChatbot} className="text-xl filter-white"><MdCancel className="text-white text-2xl"/></button>
        </div>
        <div className="p-3 flex-1 overflow-y-auto bg-gray-100 flex flex-col">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex items-start mb-2 ${msg.role === 'user' ? 'self-end' : 'self-start'}`}
            >
              {msg.role === 'bot' && (
                <img src={botAvatar} alt="Bot Avatar" className="w-8 h-8 rounded-full mr-2" />
              )}
              <div
                className={`p-3 rounded max-w-xs ${msg.role === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-300'}`}
              >
                {msg.content}
              </div>
              {msg.role === 'user' && (
                <img src={userAvatar} alt="User Avatar" className="w-8 h-8 rounded-full ml-2" />
              )}
            </div>
          ))}
          {loading && (
            <div className="self-center p-3">
              <div className="loader"></div>
            </div>
          )}
        </div>
        <div className="flex p-3 border-t border-gray-300">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={sendMessage}
            className="ml-2 p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <FiSend className="text-2xl text-white"/>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
