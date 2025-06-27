import EyeIcon from '@/components/icons/EyeIcon';
import { useSignupMutation } from '@/redux/features/auth/authApi';
import {
  selectIsAuthenticated,
  selectPendingOTP,
  setCredentials,
} from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch();
  const [signup, { isLoading }] = useSignupMutation();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const pendingOTPVerification = useAppSelector(selectPendingOTP);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error('Password do not match!');
      return;
    }
    if (!formData.email || !formData.password) {
      toast.error('Please fill all fields!');
      return;
    }
    if (formData.email && formData.password) {
      try {
        const result = await signup({
          email: formData.email,
          password: formData.password,
        }).unwrap();
        dispatch(setCredentials(result));
        navigate('/verificationCode');
        toast.success(result.message);
      } catch (err) {
        toast.error(
          err?.data?.error?.message ||
            err?.data?.message ||
            'Signup Failed. Please try again.'
        );
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
          <h2 className='text-3xl font-bold text-gray-900'>Create account</h2>
          <p className='mt-2 text-sm text-gray-600 text-center'>
            Enter The Email Address Associated With Your Account. We'll Send You
            An OTP To Your Email.
          </p>
        </div>

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
                New Password
              </label>
              <div className='mt-1 relative'>
                <input
                  id='password'
                  type={showPassword ? 'text' : 'password'}
                  placeholder='Enter New Password'
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

            <div>
              <label
                htmlFor='confirmPassword'
                className='text-sm font-medium text-gray-700'
              >
                Confirm Password
              </label>
              <div className='mt-1 relative'>
                <input
                  id='confirmPassword'
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder='Enter Confirm Password'
                  name='confirmPassword'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10 ${
                    formData.confirmPassword &&
                    formData.password !== formData.confirmPassword
                      ? 'border-red-300'
                      : 'border-gray-300'
                  }`}
                  required
                />
                <button
                  type='button'
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className='absolute inset-y-0 right-0 flex items-center pr-3'
                >
                  <EyeIcon />
                </button>
              </div>
              {formData.confirmPassword &&
                formData.password !== formData.confirmPassword && (
                  <p className='mt-1 text-sm text-red-600'>
                    Passwords do not match
                  </p>
                )}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={
              isLoading || formData.password !== formData.confirmPassword
            }
            className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
          >
            {isLoading ? 'Creating Account...' : 'Sign Up'}
          </button>

          <div className='text-center'>
            <p className='text-sm text-gray-600'>
              Already have an account?{' '}
              <button
                onClick={() => navigate && navigate('/login')}
                className='font-medium text-blue-600 hover:text-blue-500'
              >
                Login
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
