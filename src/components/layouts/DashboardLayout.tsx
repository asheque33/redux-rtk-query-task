import { useEffect, useState } from 'react';
import SideBar from '../shared/SideBar';
import MainContent from '../dashboard/main/MainContent';
import HistorySection from '../dashboard/history/HistorySection';
import Header from '../shared/Header';
import { Outlet } from 'react-router-dom';
// import ChatInput from "../dashboard/chat/ChatInput";
// import ChatInterface from "../dashboard/chat/ChatInterface";
// import History from "../dashboard/history/HistorySection";
// import Header from "../shared/Header";
// import SideBar from "../shared/SideBar";

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isHistoryOpen, setIsHistoryOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Auto-open sidebar on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
      } else {
        setIsSidebarOpen(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const user = {
    name: 'Guest',
    avatar:
      'https://www.citypng.com/public/uploads/preview/black-user-member-guest-icon-701751695037011q8iwf4mjbn.png',
    welcomeMessage: 'Welcome back',
  };

  const sampleHistory = [
    {
      id: 1,
      title: 'Chart Analysis Discussion',
      lastMessage: 'Create a bar chart for Q4 sales data',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      unreadCount: 2,
    },
    {
      id: 2,
      title: 'Document Transcript',
      lastMessage: 'Transcribe the uploaded audio file',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2),
      unreadCount: 0,
    },
  ];

  return (
    <div
      className={`${isDarkMode ? 'dark' : ''} font-montserrat overflow-hidden`}
    >
      <div className='flex font-montserrat overflow-hidden'>
        {/* Sidebar */}
        <SideBar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          isDarkMode={isDarkMode}
          onThemeToggle={setIsDarkMode}
        />

        <div className='flex-1 flex flex-col bg-white dark:bg-gray-800 dark:text-white min-w-0'>
          {/* Header */}
          <Header
            user={user}
            onSidebarToggle={() => setIsSidebarOpen(!isSidebarOpen)}
          />

          <Outlet />
        </div>
        {/* History Section */}
        <HistorySection
          isHistoryOpen={isHistoryOpen}
          onHistoryToggle={() => setIsHistoryOpen(!isHistoryOpen)}
          chatHistory={sampleHistory}
        />
      </div>
    </div>
  );
};
export default DashboardLayout;
