import { useLocation } from 'react-router-dom';

const HistorySection = ({
  isHistoryOpen,
  onHistoryToggle,
  chatHistory = [],
}) => {
  const { pathname } = useLocation();
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      {pathname === '/' ? (
        <div className='flex-shrink-0'>
          {/* Floating History Button */}
          <div className='fixed top-4 right-4 z-50'>
            <button
              onClick={onHistoryToggle}
              className='p-2 sm:p-3 bg-[#2563EA] hover:bg-[#1d4ed8] text-white rounded-lg shadow-lg transition-colors duration-200 relative top-10 lg:top-0'
              title='Open History'
            >
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='2'
                viewBox='0 0 24 24'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='text-lg xl:text-xl'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8'></path>
                <path d='M3 3v5h5'></path>
                <path d='M12 7v5l4 2'></path>
              </svg>
            </button>
          </div>

          {/* History Sidebar */}
          <div
            className={`fixed lg:static z-40 top-0 bottom-0 h-screen transition-all duration-300 ${isHistoryOpen ? 'right-0' : '-right-full lg:right-0'} lg:w-16 bg-primary dark:bg-gray-700 dark:text-white`}
          >
            {/* History Header */}
            <div className='flex items-center justify-between py-2 sm:py-4 lg:py-6 px-2 sm:px-4 dark:bg-gray-700 bg-primary border-b border-gray-200 dark:border-gray-600'>
              {isHistoryOpen && (
                <>
                  <h3 className='text-lg font-semibold text-black dark:text-white lg:hidden'>
                    Chat History
                  </h3>
                  <button
                    onClick={onHistoryToggle}
                    className='p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors lg:hidden'
                    title='Close History'
                  >
                    <svg
                      stroke='currentColor'
                      fill='none'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      className='text-lg text-black dark:text-white'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18 6L6 18M6 6l12 12'
                        stroke='currentColor'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* History Content */}
            <div className='flex flex-col h-full overflow-hidden pt-4'>
              <div className='flex-grow overflow-y-auto'>
                <div className='bg-primary dark:bg-gray-700 dark:text-white w-full'>
                  <div className='px-2 sm:px-3 lg:px-4'>
                    {isHistoryOpen && chatHistory.length === 0 && (
                      <div className='text-center text-gray-500 dark:text-gray-400 mt-8'>
                        <svg
                          className='w-12 h-12 mx-auto mb-4 opacity-50'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                          />
                        </svg>
                        <p className='text-sm'>No chat history yet</p>
                      </div>
                    )}

                    {isHistoryOpen && chatHistory.length > 0 && (
                      <div className='space-y-2'>
                        {chatHistory.map((chat, index) => (
                          <div
                            key={index}
                            className='p-3 bg-white dark:bg-gray-600 rounded-lg border border-gray-200 dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-500 cursor-pointer transition-colors'
                          >
                            <div className='flex items-start justify-between'>
                              <div className='flex-1 min-w-0'>
                                <h4 className='text-sm font-medium text-gray-900 dark:text-white truncate'>
                                  {chat.title || 'Untitled Chat'}
                                </h4>
                                <p className='text-xs text-gray-500 dark:text-gray-300 truncate mt-1'>
                                  {chat.lastMessage || 'No messages'}
                                </p>
                                <span className='text-xs text-gray-400 dark:text-gray-400'>
                                  {formatDate(chat.timestamp)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Overlay for History */}
          {isHistoryOpen && (
            <div
              className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
              onClick={onHistoryToggle}
            ></div>
          )}
        </div>
      ) : null}
    </>
  );
};
export default HistorySection;
