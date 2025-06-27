import Header from '@/components/shared/Header';
import { useGetUserProfileQuery } from '@/redux/features/user/userApi';
import { useState } from 'react';

const tabs = [
  { id: 'Chartwright', label: 'Chartwright' },
  { id: 'TranscriptX', label: 'TranscriptX' },
  { id: 'Redactify', label: 'Redactify' },
  { id: 'Validify', label: 'Validify' },
];
const DashboardHome = () => {
  const { data, isFetching } = useGetUserProfileQuery(undefined);
  console.log(data, 'dashboard home get profile');
  const [activeTab, setActiveTab] = useState('Chartwright');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const [isRecording, setIsRecording] = useState(false);
  const handleSendMessage = (message) => {
    const newMessage = {
      text: message,
      isUser: true,
      timestamp: new Date().toLocaleTimeString(),
    };
    setMessages((prev) => [...prev, newMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = {
        text: `I understand you're using ${activeTab}. How can I help you with "${message}"?`,
        isUser: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleSubmit = () => {
    if (message.trim()) {
      if (onSendMessage) {
        onSendMessage(message.trim());
      }
      setMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
  };

  return (
    <div>
      {/* Chat Content */}
      <div className='flex-1 overflow-hidden'>
        <div className='flex flex-col h-[calc(100vh-26px)] lg:h-[calc(100vh-96px)]'>
          <div className='flex-1 flex flex-col bg-white dark:bg-gray-800 dark:text-white overflow-hidden relative'>
            {/* Tab Navigation */}
            <div className='absolute left-1/4 lg:top-6 top-8 grid grid-cols-2 lg:flex lg:space-x-4 gap-4'>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`py-2 px-4 border rounded-lg text-black bg-white border-gray-300 hover:bg-gray-100 focus:outline-none ${
                    activeTab === tab.id
                      ? '!bg-blue-500 text-white'
                      : '!bg-white !text-black'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Chat Container */}
            <div className='chat-container flex-1 overflow-y-auto p-4 space-y-4 mt-8'>
              {messages.length === 0 ? (
                // Welcome Screen
                <div className='flex items-center justify-center h-full text-gray-500'>
                  <div className='p-8'>
                    <h1 className='text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#3B82F6] via-[#2563EB] to-[#15427A]'>
                      Hello,
                    </h1>
                    <p className='text-2xl'>How Can I Help You Today</p>
                  </div>
                </div>
              ) : (
                // Chat Messages
                <div className='space-y-4'>
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
                        <p className='text-sm sm:text-base'>{message.text}</p>
                        <span className='text-xs opacity-70 mt-1 block'>
                          {message.timestamp}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Chat Input */}
            <div className='p-4 flex items-center border-t sticky bg-white dark:bg-gray-800'>
              {/* File Upload Button */}
              <button
                type='button'
                className='p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 relative'
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  className='text-3xl'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill='none'
                    strokeLinecap='round'
                    strokeMiterlimit='10'
                    strokeWidth='32'
                    d='M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74'
                  />
                </svg>
              </button>

              {/* Hidden File Input */}
              <input
                type='file'
                className='hidden'
                accept='.txt,.doc,.docx,.pdf,.html,.jpg,.jpeg,.png,.gif,.svg,.webp'
              />

              {/* Message Input */}
              <textarea
                placeholder='Type your message (Shift + Enter for new line)'
                autoComplete='off'
                rows='1'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className='flex-1 mx-2 p-3 py-5 border dark:border-gray-600 dark:placeholder:text-gray-100 rounded-lg resize-none focus:outline-none focus:ring focus:border-indigo-500 dark:bg-gray-700 dark:text-white placeholder:text-sm text-black'
                style={{ overflow: 'hidden' }}
              />

              {/* Voice Record Button */}
              <button
                type='button'
                onClick={handleVoiceToggle}
                className={`p-2 transition-colors ${
                  isRecording
                    ? 'text-red-500 hover:text-red-600'
                    : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                }`}
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 384 512'
                  className='text-2xl'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z' />
                </svg>
              </button>

              {/* Send Button */}
              <button
                type='button'
                onClick={handleSubmit}
                disabled={!message.trim()}
                className={`ml-2 p-3 rounded-full cursor-pointer text-white ${
                  !message.trim() ? 'cursor-not-allowed opacity-50' : ''
                }`}
              >
                <svg
                  stroke='currentColor'
                  fill='currentColor'
                  strokeWidth='0'
                  viewBox='0 0 512 512'
                  className='text-3xl text-black dark:text-white'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='m16 464 480-208L16 48v160l320 48-320 48z' />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardHome;
