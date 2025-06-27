import React, { useState } from 'react';

const EditProfile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [profileData, setProfileData] = useState({
    fullName: '',
    subscriptionType: 'free_trial',
    profileImage:
      'https://www.citypng.com/public/uploads/preview/black-user-member-guest-icon-701751695037011q8iwf4mjbn.png',
  });

  const handleEditProfile = () => {
    // Handle edit profile logic
    alert('Edit Profile clicked!');
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} font-montserrat`}>
      <div className='flex-1 overflow-hidden'>
        <div className='px-10 lg:px-20'>
          <div>
            <div className='flex flex-col md:flex-row gap-8 pt-20'>
              {/* Profile Image Section */}
              <div className='flex flex-col items-center space-y-4'>
                <div className='relative dark:text-white text-black'>
                  <img
                    src={profileData.profileImage}
                    alt='Profile'
                    className='w-48 h-48 rounded-full object-cover'
                  />
                  <label className='absolute bottom-2 right-2 p-2 rounded-full bg-white shadow-lg  dark:bg-gray-700 dark:text-white opacity-50 cursor-not-allowed'>
                    <svg
                      stroke='currentColor'
                      fill='currentColor'
                      strokeWidth='0'
                      viewBox='0 0 512 512'
                      className='w-5 h-5'
                      height='1em'
                      width='1em'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <circle cx='256' cy='280' r='63'></circle>
                      <path d='M440 96h-88l-32-32H192l-32 32H72c-22.092 0-40 17.908-40 40v272c0 22.092 17.908 40 40 40h368c22.092 0 40-17.908 40-40V136c0-22.092-17.908-40-40-40zM256 392c-61.855 0-112-50.145-112-112s50.145-112 112-112 112 50.145 112 112-50.145 112-112 112z'></path>
                    </svg>
                    <input
                      type='file'
                      className='hidden'
                      disabled
                      accept='image/*'
                    />
                  </label>
                </div>
              </div>

              {/* Form Section */}
              <div className='flex-1 space-y-6 dark:text-white text-black'>
                {/* Full Name Field */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1 dark:text-white'>
                    Full Name
                  </label>
                  <input
                    type='text'
                    placeholder='Please enter your full name.'
                    disabled
                    className='w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 dark:bg-gray-700'
                    value={profileData.fullName}
                  />
                </div>

                {/* Subscription Type Field */}
                <div>
                  <label className='block text-sm font-medium text-gray-700 mb-1 dark:text-white'>
                    Subscription Type
                  </label>
                  <input
                    type='text'
                    disabled
                    className='w-full px-4 py-3 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-50 dark:bg-gray-700 dark:text-white'
                    value={profileData.subscriptionType}
                  />
                </div>

                {/* Edit Profile Button */}
                <div className='flex gap-4'>
                  <button
                    onClick={handleEditProfile}
                    className='w-40 text-center py-3 px-4 rounded-full text-white font-medium bg-gradient-to-r from-blue-500 to-indigo-600'
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
