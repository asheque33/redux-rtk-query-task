import EyeIcon from '@/components/icons/EyeIcon';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { setCredentials } from '@/redux/features/auth/authSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const SignIn = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const dispatch = useDispatch();
  const [login, { isLoading, error }] = useLoginMutation();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async () => {
    if (formData.email && formData.password) {
      try {
        const result = await login({
          email: formData.email,
          password: formData.password,
        }).unwrap();
        navigate('/');
        if (result?.accessToken) {
          dispatch(setCredentials(result));
        }
        toast.success(result?.message || 'User LoggedIn Successfully!');
      } catch (err) {
        console.error('Login failed:', err);
      }
    }
  };
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 text-black'>
      <div className='max-w-md w-full space-y-8'>
        <div className='flex flex-col items-center'>
          <img
            src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nil%20vyaa-01%201-s1lG2XvZDZZWuxbLHlsQtygDfSadsB.png'
            alt='Logo'
            className='h-16 w-auto mb-8'
          />
          <h2 className='text-3xl font-bold text-gray-900'>Hello, Welcome!</h2>
          <p className='mt-2 text-sm text-gray-600 text-center'>
            Please Enter Your Details Below To Continue
          </p>
        </div>

        {error && (
          <div className='bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md'>
            {error?.data?.message ||
              'Login failed. Please check your credentials.'}
          </div>
        )}

        <div className='mt-8 space-y-6'>
          <div className='space-y-4'>
            <div>
              <label
                htmlFor='email'
                className='text-sm font-medium text-gray-700'
              >
                Your Email
              </label>
              <div className='mt-1'>
                <input
                  id='email'
                  type='email'
                  placeholder='Enter Email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm'
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor='password'
                className='text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <div className='mt-1 relative'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter Password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10'
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 flex items-center pr-3'
                >
                  <EyeIcon />
                </button>
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div className='flex items-center'>
                <input
                  id='rememberMe'
                  name='rememberMe'
                  type='checkbox'
                  checked={formData.rememberMe}
                  onChange={handleChange}
                  className='h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded'
                />
                <label
                  htmlFor='rememberMe'
                  className='ml-2 block text-sm text-gray-900'
                >
                  Remember Me
                </label>
              </div>
              <button
                onClick={() => navigate('/forgot-password')}
                className='text-sm font-medium text-blue-600 hover:text-blue-500'
              >
                Forgot Password?
              </button>
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={isLoading || !formData.email || !formData.password}
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? 'Signing in...' : 'Login'}
          </button>

          <div className='text-center'>
            <p className='text-sm text-gray-600'>
              Create account,{' '}
              <button
                onClick={() => navigate('/signup')}
                className='font-medium text-blue-600 hover:text-blue-500'
              >
                sign up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
