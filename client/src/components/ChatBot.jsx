import React, { useState } from "react";

import { FiSend } from "react-icons/fi";
import { IoMdChatbubbles } from "react-icons/io";
import { MdCancel } from "react-icons/md";

import userAvatar from "../assets/vectors/chat-human.avif";
import botAvatar from "../assets/vectors/chat-robot.avif";
import { handleAudio } from "../utils/helper";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { role: "user", content: input };
      setMessages([...messages, userMessage]);
      setInput(""); // Clear input field immediately
      setLoading(true); // Show loading spinner

      try {
        const response = await fetch("http://localhost:8000/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: input,
            history: messages,
          }),
        });

        const data = await response.json();
        const botMessage = { role: "bot", content: data.response };
        setMessages((prevMessages) => {
          const newMessages = [...prevMessages, userMessage, botMessage];
          handleAudio(botMessage.content); // Read the bot message aloud
          return newMessages;
        });
      } catch (error) {
        console.error("Error fetching response:", error);
      } finally {
        setLoading(false); // Hide loading spinner
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-5 right-5">
      <div
        className={`flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-blue-600 text-2xl text-white shadow-lg ${isOpen ? "hidden" : ""}`}
        onClick={toggleChatbot}
      >
        <IoMdChatbubbles className="text-3xl text-white" />
      </div>
      <div
        className={`fixed bottom-20 right-5 flex h-96 w-80 flex-col justify-between rounded-lg bg-white shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "flex" : "hidden"}`}
      >
        <div className="flex items-center justify-between rounded-t-lg bg-blue-600 p-3 text-white">
          <span className="font-semibold">Sahayak</span>
          <button onClick={toggleChatbot} className="filter-white text-xl">
            <MdCancel className="text-2xl text-white" />
          </button>
        </div>
        <div className="flex flex-1 flex-col overflow-y-auto bg-gray-100 p-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mb-2 flex items-start ${msg.role === "user" ? "self-end" : "self-start"}`}
            >
              {msg.role === "bot" && (
                <img
                  src={botAvatar}
                  alt="Bot Avatar"
                  className="mr-2 h-8 w-8 rounded-full"
                />
              )}
              <div
                className={`max-w-xs rounded p-3 ${msg.role === "user" ? "bg-blue-600 text-white" : "bg-gray-300"}`}
              >
                {msg.content}
              </div>
              {msg.role === "user" && (
                <img
                  src={userAvatar}
                  alt="User Avatar"
                  className="ml-2 h-8 w-8 rounded-full"
                />
              )}
            </div>
          ))}
          {loading && (
            <div className="self-center p-3">
              <div className="loader"></div>
            </div>
          )}
        </div>
        <div className="flex border-t border-gray-300 p-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 rounded border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button
            onClick={sendMessage}
            className="ml-2 rounded-lg bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700"
          >
            <FiSend className="text-2xl text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
