import React, { useState } from 'react';

const UserManagement = () => {
  const [email, setEmail] = useState('');
  const [users, setUsers] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError('Please enter a valid email address');
      return;
    }

    // Check if user already exists
    if (users.find((user) => user.email === email)) {
      setError('User with this email is already invited');
      return;
    }

    setIsSubmitting(true);
    setError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Add user to the list
      const newUser = {
        id: Date.now(),
        email: email,
        status: 'Pending',
        invitedAt: new Date().toLocaleDateString(),
      };

      setUsers((prev) => [...prev, newUser]);
      setEmail('');
    } catch (err) {
      setError('Failed to send invitation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const removeUser = (userId) => {
    setUsers((prev) => prev.filter((user) => user.id !== userId));
  };

  const resendInvite = async (userId) => {
    // Simulate resend invitation
    console.log('Resending invitation for user:', userId);
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''} font-montserrat`}>
      <div className='flex-1 overflow-hidden'>
        <div className='p-6 lg:px-20 w-full mx-auto bg-primary text-black dark:bg-gray-800 dark:text-white min-h-screen'>
          <h1 className='text-2xl font-bold mb-6 dark:text-white'>
            User Management
          </h1>

          {/* Invite Form */}
          <form className='flex gap-4 mb-8' onSubmit={handleSubmit}>
            <input
              type='email'
              placeholder='Invite others by email'
              className='flex-1 px-4 py-2 border-2 border-blue-100 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-600 dark:text-white dark:border-gray-500'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type='submit'
              disabled={isSubmitting}
              className='px-8 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors dark:bg-blue-600 dark:hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2'
            >
              <svg
                stroke='currentColor'
                fill='currentColor'
                strokeWidth='0'
                viewBox='0 0 640 512'
                height='1em'
                width='1em'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0-16-7.2-16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z'></path>
              </svg>
              {isSubmitting ? 'Inviting...' : 'Invite'}
            </button>
          </form>

          {/* Error Message */}
          {error && (
            <div className='mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded-lg dark:bg-red-800 dark:border-red-600 dark:text-red-200'>
              {error}
            </div>
          )}

          {/* Users List or Empty State */}
          {users.length === 0 ? (
            <div className='text-center py-8 bg-white dark:bg-gray-700 rounded-lg'>
              <p className='text-gray-500 dark:text-gray-300'>
                No users have been invited yet.
              </p>
            </div>
          ) : (
            <div className='bg-white dark:bg-gray-700 rounded-lg overflow-hidden'>
              <div className='px-6 py-4 bg-gray-50 dark:bg-gray-600 border-b dark:border-gray-500'>
                <h2 className='text-lg font-semibold text-gray-900 dark:text-white'>
                  Invited Users ({users.length})
                </h2>
              </div>

              <div className='divide-y divide-gray-200 dark:divide-gray-600'>
                {users.map((user) => (
                  <div
                    key={user.id}
                    className='px-6 py-4 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors'
                  >
                    <div className='flex items-center space-x-4'>
                      <div className='w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold'>
                        {user.email.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <p className='text-sm font-medium text-gray-900 dark:text-white'>
                          {user.email}
                        </p>
                        <div className='flex items-center space-x-2 text-xs text-gray-500 dark:text-gray-400'>
                          <span>Invited on {user.invitedAt}</span>
                          <span>•</span>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${
                              user.status === 'Pending'
                                ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                                : 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                            }`}
                          >
                            {user.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className='flex items-center space-x-2'>
                      <button
                        onClick={() => resendInvite(user.id)}
                        className='px-3 py-1 text-xs text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium'
                      >
                        Resend
                      </button>
                      <button
                        onClick={() => removeUser(user.id)}
                        className='p-1 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300'
                        title='Remove user'
                      >
                        <svg
                          stroke='currentColor'
                          fill='none'
                          strokeWidth='2'
                          viewBox='0 0 24 24'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          className='w-4 h-4'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <polyline points='3,6 5,6 21,6'></polyline>
                          <path d='m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2'></path>
                          <line x1='10' y1='11' x2='10' y2='17'></line>
                          <line x1='14' y1='11' x2='14' y2='17'></line>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
