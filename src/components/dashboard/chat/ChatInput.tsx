import React, { useState, useRef } from 'react';

const ChatInput = ({ 
  onSendMessage, 
  onFileUpload, 
  onVoiceRecord,
  isDarkMode = false,
  disabled = false 
}) => {
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const fileInputRef = useRef(null);
  const textareaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      if (onSendMessage) {
        onSendMessage(message.trim());
      }
      setMessage('');
      // Reset textarea height
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleTextareaChange = (e) => {
    setMessage(e.target.value);
    
    // Auto-resize textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const handleFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0 && onFileUpload) {
      onFileUpload(files);
    }
    // Reset file input
    e.target.value = '';
  };

  const handleVoiceToggle = () => {
    setIsRecording(!isRecording);
    if (onVoiceRecord) {
      onVoiceRecord(!isRecording);
    }
  };

  return (
    <div className="p-4 flex items-center border-t sticky bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-600">
      {/* File Upload Button */}
      <button
        type="button"
        onClick={handleFileSelect}
        className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 relative transition-colors"
        title="Attach file"
      >
        <svg 
          stroke="currentColor" 
          fill="currentColor" 
          strokeWidth="0" 
          viewBox="0 0 512 512" 
          className="text-3xl" 
          height="1em" 
          width="1em" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            fill="none" 
            strokeLinecap="round" 
            strokeMiterlimit="10" 
            strokeWidth="32" 
            d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74"
          />
        </svg>
      </button>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        className="hidden"
        accept=".txt,.doc,.docx,.pdf,.html,.jpg,.jpeg,.png,.gif,.svg,.webp"
        multiple
        onChange={handleFileChange}
      />

      {/* Message Input */}
      <textarea
        ref={textareaRef}
        placeholder="Type your message (Shift + Enter for new line)"
        autoComplete="off"
        rows="1"
        value={message}
        onChange={handleTextareaChange}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        className="flex-1 mx-2 p-3 py-5 border dark:border-gray-600 dark:placeholder:text-gray-100 rounded-lg resize-none focus:outline-none focus:ring focus:border-indigo-500 dark:bg-gray-700 dark:text-white placeholder:text-sm text-black min-h-[52px] max-h-32"
        style={{ overflow: 'hidden' }}
      />

      {/* Voice Record Button */}
      <button
        type="button"
        onClick={handleVoiceToggle}
        className={`p-2 transition-colors ${
          isRecording 
            ? 'text-red-500 hover:text-red-600' 
            : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
        }`}
        title={isRecording ? 'Stop recording' : 'Start voice recording'}
      >
        <svg 
          stroke="currentColor" 
          fill="currentColor" 
          strokeWidth="0" 
          viewBox="0 0 384 512" 
          className="text-2xl" 
          height="1em" 
          width="1em" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M192 0C139 0 96 43 96 96l0 160c0 53 43 96 96 96s96-43 96-96l0-160c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 89.1 66.2 162.7 152 174.4l0 33.6-48 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l72 0 72 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0 0-33.6c85.8-11.7 152-85.3 152-174.4l0-40c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 40c0 70.7-57.3 128-128 128s-128-57.3-128-128l0-40z" />
        </svg>
      </button>

      {/* Send Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={disabled || !message.trim()}
        className={`ml-2 p-3 rounded-full transition-colors ${
          disabled || !message.trim()
            ? 'cursor-not-allowed opacity-50'
            : 'cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700'
        }`}
        title="Send message"
      >
        <svg 
          stroke="currentColor" 
          fill="currentColor" 
          strokeWidth="0" 
          viewBox="0 0 512 512" 
          className="text-3xl text-black dark:text-white" 
          height="1em" 
          width="1em" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="m16 464 480-208L16 48v160l320 48-320 48z" />
        </svg>
      </button>
    </div>
  );
};

export default ChatInput;