const Header = ({ user }) => {
  return (
    <div className='flex-shrink-0'>
      <div className='w-full ml-auto'>
        <header className='bg-primary dark:bg-gray-700 dark:text-white text-black p-2 sm:p-3 lg:p-4 flex items-center justify-between z-0 max-h-24'>
          {/* User Profile Section */}
          <a className='flex items-center flex-1 min-w-0' href='/editProfile'>
            <img
              src={user.avatar}
              alt='Profile'
              className='w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full object-cover flex-shrink-0'
            />
            <div className='flex flex-col items-start ml-2 sm:ml-3 lg:ml-4 min-w-0 flex-1'>
              <span className='font-bold text-sm sm:text-base md:text-lg lg:text-xl truncate max-w-full'>
                {user.name}
              </span>
              <span className='hidden md:block text-xs lg:text-sm text-gray-600 dark:text-gray-300 truncate max-w-full'>
                {user.welcomeMessage}
              </span>
            </div>
          </a>
        </header>
      </div>
    </div>
  );
};

export default Header;
