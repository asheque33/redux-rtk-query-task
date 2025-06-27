import SubscriptionModal from '@/components/subscription/SubscriptionModal';
import React, { useState } from 'react';

const ManageSubscription = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={`${isDarkMode ? 'dark' : ''} font-montserrat`}>
      <div className='flex-1 overflow-hidden'>
        <div className='min-h-screen bg-white text-black dark:bg-gray-800 dark:text-white p-8'>
          <h1 className='text-4xl font-bold mb-12'>Manage Subscription</h1>

          <div className='max-w-3xl mx-auto space-y-6'>
            <div className='p-6 bg-white rounded-lg border-2 border-blue-500 dark:bg-gray-700 dark:border-blue-500'>
              <div className='grid grid-cols-1 gap-6'>
                <div className='p-4 border rounded-lg bg-gray-100 dark:bg-gray-600'>
                  <input
                    type='text'
                    disabled
                    className='w-full bg-transparent text-black dark:text-white'
                    placeholder='Purchase Date'
                    value='individual'
                  />
                </div>

                <div className='p-4 border rounded-lg bg-gray-100 dark:bg-gray-600'>
                  <input
                    type='text'
                    disabled
                    className='w-full bg-transparent text-black dark:text-white'
                    placeholder='Expiry Date'
                    value='July 02, 2025 13:47:11'
                  />
                </div>
              </div>
              {showModal && (
                <SubscriptionModal onClose={() => setShowModal(false)} />
              )}
              <div className='mt-8 grid grid-cols-2 gap-6'>
                <button
                  onClick={() => setShowModal(true)}
                  className='py-4 px-6 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors dark:bg-green-600 dark:hover:bg-green-700'
                >
                  Upgrade Subscription
                </button>

                <button className='py-4 px-6 bg-red-500 text-white rounded-lg text-lg font-semibold hover:bg-red-600 transition-colors dark:bg-red-600 dark:hover:bg-red-700'>
                  Cancel Subscription
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSubscription;
