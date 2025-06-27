import React, { useState } from 'react';

const ChatInterface = ({ isDarkMode = false }) => {
  const [activeTab, setActiveTab] = useState('Chartwright');
  const [messages, setMessages] = useState([]);

  const tabs = [
    { id: 'Chartwright', label: 'Chartwright' },
    { id: 'TranscriptX', label: 'TranscriptX' },
    { id: 'Redactify', label: 'Redactify' },
    { id: 'Validify', label: 'Validify' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    // You can add logic here to load different chat contexts for different tabs
  };

  return (
    <div className="flex-1 overflow-hidden">
      <div className="flex flex-col h-[calc(100vh-26px)] lg:h-[calc(100vh-96px)]">
        <div className="flex-1 flex flex-col bg-white dark:bg-gray-800 dark:text-white overflow-hidden relative">
          
          {/* Tab Navigation */}
          <div className="absolute left-1/4 lg:top-6 top-8 grid grid-cols-2 lg:flex lg:space-x-4 gap-4 z-10">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`py-2 px-4 border rounded-lg text-black bg-white border-gray-300 hover:bg-gray-100 focus:outline-none transition-colors ${
                  activeTab === tab.id 
                    ? '!bg-blue-500 text-white border-blue-500' 
                    : '!bg-white !text-black hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Chat Container */}
          <div className="chat-container flex-1 overflow-y-auto p-4 space-y-4 mt-8">
            {messages.length === 0 ? (
              // Welcome Screen
              <div className="flex items-center justify-center h-full text-gray-500">
                <div className="p-8 text-center">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#15427A] mb-4">
                    Hello,
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl dark:text-gray-300">
                    How Can I Help You Today
                  </p>
                  <p className="text-sm sm:text-base text-gray-400 mt-2">
                    Currently using: <span className="font-semibold text-blue-600">{activeTab}</span>
                  </p>
                </div>
              </div>
            ) : (
              // Chat Messages
              <div className="space-y-4">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-xs lg:max-w-md xl:max-w-lg px-4 py-2 rounded-lg ${
                        message.isUser
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
                      }`}
                    >
                      <p className="text-sm sm:text-base">{message.text}</p>
                      <span className="text-xs opacity-70 mt-1 block">
                        {message.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;