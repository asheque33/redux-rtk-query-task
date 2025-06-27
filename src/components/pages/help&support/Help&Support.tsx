import { useSendSupportRequestMutation } from '@/redux/features/terms&support/terms&supportApi';
import React, { useState } from 'react';
import { toast } from 'sonner';

const HelpSupportPage = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [support, { isLoading }] = useSendSupportRequestMutation();
  const [formData, setFormData] = useState({
    email: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.description) {
      toast.error('Please fill both fields');
      return;
    }
    try {
      const result = await support({
        email: formData.email,
        query: formData.description,
      }).unwrap();

      setFormData({ email: '', description: '' });
    } catch (error) {
      console.error('Submit error:', error);
    }
  };

  return (
    <div
      className={`${isDarkMode ? 'dark' : ''} min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}
    >
      <div className={`${isDarkMode ? 'dark' : ''}`}>
        <div className='flex-1 overflow-hidden'>
          <div className='px-4 lg:px-20 mt-4'>
            <div>
              <h2 className='text-xl font-semibold mb-6 dark:text-white'>
                Help &amp; Support
              </h2>

              <div className='space-y-4'>
                <div>
                  <label className='block text-sm font-medium text-gray-700 dark:text-white mb-1'>
                    Your Email
                  </label>
                  <input
                    type='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    className='w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white focus:border-transparent dark:border-gray-600'
                    placeholder='Enter Email'
                  />
                </div>

                <div>
                  <label className='block text-sm font-medium text-gray-700 dark:text-white mb-1'>
                    Description
                  </label>
                  <textarea
                    name='description'
                    rows='4'
                    value={formData.description}
                    onChange={handleInputChange}
                    className='w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white dark:border-gray-600'
                    placeholder='Enter your query or feedback'
                  />
                </div>

                <div className='flex justify-end'>
                  <button
                    type='submit'
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className={`w-40 text-center py-2 px-4 bg-[#2563EA] text-white font-medium rounded-md transition-colors ${
                      isLoading
                        ? 'opacity-50 cursor-not-allowed'
                        : 'hover:bg-[#1d4ed8] focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                    }`}
                  >
                    {isLoading ? (
                      <div className='flex items-center justify-center'>
                        <svg
                          className='animate-spin -ml-1 mr-2 h-4 w-4 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                        >
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'
                          ></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                          ></path>
                        </svg>
                        Sending...
                      </div>
                    ) : (
                      'Send'
                    )}
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

export default HelpSupportPage;
