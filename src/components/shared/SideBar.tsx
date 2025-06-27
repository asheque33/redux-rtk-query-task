import { sidebarItems } from '@/data/sidebarItems';
import { useLogOutMutation } from '@/redux/features/auth/authApi';
import { logout } from '@/redux/features/auth/authSlice';
import { useAppDispatch } from '@/redux/hooks';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SideBar = ({ isDarkMode = false, onThemeToggle }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [logOut, { isLoading: isLoggingOut }] = useLogOutMutation();
  const [isLightMode, setIsLightMode] = useState(!isDarkMode);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleLogout = async () => {
    try {
      await logOut().unwrap();

      // Clear Redux state (if not handled in API onQueryStarted)
      dispatch(logout());

      // Clear localStorage (if not handled in API onQueryStarted)
      // localStorage.removeItem('accessToken');
      // localStorage.removeItem('refreshToken');
      // localStorage.removeItem('user');

      // Navigate to public homepage
      navigate('/home');

      // Show success message
      toast.success('Logged out successfully');
    } catch (error) {
      console.error('Logout failed:', error);

      // Even if API fails, clear client state
      dispatch(logout());
      localStorage.clear();
      navigate('/home');

      toast.error('Logout failed, but you have been signed out');
    }
  };

  const handleThemeToggle = () => {
    setIsLightMode(!isLightMode);
    if (onThemeToggle) {
      onThemeToggle(!isLightMode);
    }
  };

  return (
    <div className='flex-shrink-0'>
      {/* Toggle Button */}
      <div className='fixed top-4 left-4 z-50'>
        <button
          onClick={() => setIsSidebarOpen(true)}
          className={`p-2 sm:p-3 bg-[#2563EA] hover:bg-[#1d4ed8] text-white rounded-lg shadow-lg transition-colors duration-200 relative top-10 lg:top-0 ${isSidebarOpen ? 'hidden' : 'block'}`}
          title='Open Menu'
        >
          <svg
            stroke='currentColor'
            fill='currentColor'
            strokeWidth='0'
            viewBox='0 0 448 512'
            className='text-lg sm:text-xl'
            height='1em'
            width='1em'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z'></path>
          </svg>
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed lg:static z-50 top-0 h-screen flex flex-col transition-all duration-300 ${
          isSidebarOpen
            ? 'left-0 w-64 sm:w-72 md:w-80 lg:w-80'
            : '-left-full lg:left-0 lg:w-16'
        } bg-primary dark:bg-gray-700 dark:text-white`}
      >
        {/* Header - Fixed */}
        <div className='flex-shrink-0 flex items-center justify-between py-2 sm:py-4 lg:py-6 px-2 sm:px-4 dark:bg-gray-700 bg-primary border-b border-gray-200 dark:border-gray-600'>
          {isSidebarOpen && (
            <>
              <a href='/home' className='flex items-center lg:hidden'>
                <img
                  className='h-10 w-8 sm:h-12 sm:w-10 md:h-16 md:w-12 lg:h-[60px] lg:w-12'
                  src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nil%20vyaa-01%201-s1lG2XvZDZZWuxbLHlsQtygDfSadsB.png'
                  alt='Logo'
                />
              </a>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className='p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors lg:hidden'
                title='Close Menu'
              >
                <svg
                  stroke='currentColor'
                  fill='none'
                  strokeWidth='0'
                  viewBox='0 0 24 24'
                  className='text-lg xl:text-xl text-black dark:text-white'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.929 5L18.3432 6.41421L12.6863 12.0711L18.3432 17.7279L16.929 19.1421L9.85789 12.0711L16.929 5Z'
                    fill='currentColor'
                  />
                  <path d='M8 19V5H6V19H8Z' fill='currentColor' />
                </svg>
              </button>
            </>
          )}

          <div
            className={`hidden lg:flex justify-between w-full ${isSidebarOpen ? 'lg:flex' : 'lg:hidden'}`}
          >
            <a href='/home'>
              <img
                className='h-10 w-8 sm:h-12 sm:w-10 md:h-16 md:w-12 lg:h-[60px] lg:w-12'
                src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nil%20vyaa-01%201-s1lG2XvZDZZWuxbLHlsQtygDfSadsB.png'
                alt='Logo'
              />
            </a>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className='p-2 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors'
              title='Toggle Menu'
            >
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='0'
                viewBox='0 0 24 24'
                className='text-lg xl:text-xl text-black dark:text-white'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.41421 5L6 6.41421L11.6569 12.0711L6 17.7279L7.41421 19.1421L14.4853 12.0711L7.41421 5Z'
                  fill='currentColor'
                />
                <path
                  d='M16.3432 19V5H18.3432V19H16.3432Z'
                  fill='currentColor'
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className='flex-1 overflow-y-auto px-2 sm:px-3 lg:px-4 pt-4 pb-2'>
          {isSidebarOpen ? (
            <div className='h-full'>
              {/* New Chat Button */}
              <button
                onClick={() => (window.location.href = '/')}
                className='w-full py-2 sm:py-3 px-3 sm:px-4 rounded-md bg-[#2563EA] hover:bg-[#1d4ed8] text-white text-center text-sm sm:text-base font-semibold flex items-center justify-center mb-4 sm:mb-6 transition-colors'
              >
                <span className='text-lg sm:text-xl mr-2'>+</span>
                <span>New Chat</span>
              </button>

              {/* Theme Toggle */}
              <button
                className='relative h-10 sm:h-12 transition-colors duration-300 ease-in-out w-full mb-4 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-md p-2'
                onClick={handleThemeToggle}
              >
                <div className='flex items-center justify-between gap-2 sm:gap-4'>
                  <div className='flex items-center gap-1 sm:gap-2 dark:text-white text-black'>
                    <svg
                      stroke='currentColor'
                      fill='none'
                      strokeWidth='0'
                      viewBox='0 0 24 24'
                      className='text-xl sm:text-2xl lg:text-3xl'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z'
                        fill='currentColor'
                      />
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z'
                        fill='currentColor'
                      />
                    </svg>
                    <p className='text-xs sm:text-sm lg:text-base'>
                      {isLightMode ? 'Light' : 'Dark'}
                    </p>
                  </div>

                  <div className='relative flex items-center w-12 sm:w-16 lg:w-20 h-6 sm:h-8 lg:h-10 rounded-full bg-gradient-to-r from-blue-400 to-gray-300 p-1'>
                    <div
                      className={`absolute inset-y-1 ${isLightMode ? 'left-1' : 'right-1'} w-6 sm:w-8 lg:w-10 rounded-full transition-all duration-300 flex items-center justify-center ${isLightMode ? 'opacity-100 bg-blue-400' : 'opacity-50 bg-gray-400'}`}
                    >
                      {isLightMode ? (
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          className='sm:text-sm lg:text-base text-white'
                          height='12'
                          width='12'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22zm0 368a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22zm113.14-321.14a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44zM108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45zM464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44zm-368 0H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44zm307.08 147.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56zM142.86 164.86a21.89 21.89 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55zM256 358a102 102 0 1 1 102-102 102.12 102.12 0 0 1-102 102z' />
                        </svg>
                      ) : (
                        <svg
                          stroke='currentColor'
                          fill='currentColor'
                          strokeWidth='0'
                          viewBox='0 0 512 512'
                          className='sm:text-sm lg:text-sm text-white'
                          height='10'
                          width='10'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path d='M264 480A232 232 0 0 1 32 248c0-94 54-178.28 137.61-214.67a16 16 0 0 1 21.06 21.06C181.07 76.43 176 104.66 176 136c0 110.28 89.72 200 200 200 31.34 0 59.57-5.07 81.61-14.67a16 16 0 0 1 21.06 21.06C442.28 426 358 480 264 480z' />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </button>

              {/* Navigation */}
              <nav className='space-y-1 sm:space-y-2'>
                {sidebarItems.map((item, index) => (
                  <a
                    key={index}
                    className='flex items-center px-2 sm:px-3 lg:px-4 py-2 sm:py-3 transition-colors text-xs sm:text-sm lg:text-base rounded-md dark:bg-transparent dark:text-white text-black hover:bg-gray-100 dark:hover:bg-gray-600'
                    href={item.href}
                  >
                    {item.icon}
                    <span className='ml-2 sm:ml-3 truncate'>{item.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          ) : (
            <div className='hidden lg:flex flex-col items-center space-y-4'>
              {sidebarItems.map((item, index) => (
                <a
                  key={index}
                  title={item.label}
                  className='p-3 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-600'
                  href={item.href}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Fixed Bottom Logout Section */}
        <div className='flex-shrink-0 border-t border-gray-200 dark:border-gray-600'>
          {isSidebarOpen ? (
            <div className='p-4'>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className='flex items-center justify-between w-full text-red-600 hover:text-red-700 text-xs sm:text-sm lg:text-base transition-colors p-2 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20'
              >
                <span>Logout</span>
                <svg
                  stroke='currentColor'
                  fill='none'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-base sm:text-lg lg:text-xl'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
                  <polyline points='16 17 21 12 16 7' />
                  <line x1='21' x2='9' y1='12' y2='12' />
                </svg>
              </button>
            </div>
          ) : (
            <div className='hidden lg:flex justify-center p-4'>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className='p-3 text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors'
                title='Logout'
              >
                <svg
                  stroke='currentColor'
                  fill='none'
                  strokeWidth='2'
                  viewBox='0 0 24 24'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className='text-xl'
                  height='1em'
                  width='1em'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' />
                  <polyline points='16 17 21 12 16 7' />
                  <line x1='21' x2='9' y1='12' y2='12' />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className='fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden'
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default SideBar;
