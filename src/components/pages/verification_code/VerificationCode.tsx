import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  useVerifyOTPMutation,
  useResendOTPMutation,
} from '@/redux/features/auth/authApi';
import {
  setCredentials,
  selectCurrentUser,
} from '@/redux/features/auth/authSlice';
import { toast } from 'sonner';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';

const VerificationCode = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [verifyOTP, { isLoading: isVerifying }] = useVerifyOTPMutation();
  const [resendOTP, { isLoading: isResending }] = useResendOTPMutation();

  const currentUser = useAppSelector(selectCurrentUser);
  const userEmail = currentUser?.email || 'user@example.com';

  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Email masking
  const getMaskedEmail = (email) => {
    if (!email?.includes('@')) return 'user@example.com';
    const [localPart, domain] = email.split('@');
    const visibleChars = localPart.substring(0, 3);
    const hiddenChars = '*'.repeat(Math.max(0, localPart.length - 3));
    return `${visibleChars}${hiddenChars}@${domain}`;
  };

  // Handle input change
  const handleInputChange = (index, value) => {
    if (!/^\d*$/.test(value)) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  // Handle keyboard navigation
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }
  };

  const handleSubmit = async () => {
    const otpCode = otpValues.join('');

    if (otpCode.length !== 4) {
      toast.error('Please enter complete OTP');
      return;
    }

    try {
      const response = await verifyOTP({
        otp: otpCode,
        email: userEmail,
      }).unwrap();
      navigate('/');
      toast.success('OTP verified successfully');
    } catch (err) {
      toast.error(err?.data?.message || 'Invalid OTP');
      setOtpValues(['', '', '', '']);
      inputRefs[0].current?.focus();
    }
  };

  const handleResendOTP = async () => {
    try {
      await resendOTP(userEmail).unwrap();
      setOtpValues(['', '', '', '']);
      inputRefs[0].current?.focus();
      toast.success('OTP sent successfully');
    } catch (err) {
      toast.error(err?.data?.message || 'Failed to resend OTP');
    }
  };

  const isFormValid = otpValues.every((val) => val !== '');

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4'>
      <div className='max-w-md w-full space-y-8'>
        {/* Header */}
        <div className='text-center'>
          <img
            src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nil%20vyaa-01%201-s1lG2XvZDZZWuxbLHlsQtygDfSadsB.png'
            alt='Logo'
            className='h-16 w-auto mx-auto mb-8'
          />
          <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
            OTP Verification
          </h2>
          <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
            Enter OTP sent to {getMaskedEmail(userEmail)}
          </p>
        </div>

        {/* OTP Inputs */}
        <div className='flex justify-center gap-4'>
          {otpValues.map((value, index) => (
            <input
              key={index}
              ref={inputRefs[index]}
              type='text'
              inputMode='numeric'
              maxLength='1'
              value={value}
              onChange={(e) => handleInputChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className='w-16 h-16 text-center text-2xl font-medium border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white'
              autoComplete='off'
            />
          ))}
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          disabled={!isFormValid || isVerifying}
          className='w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          {isVerifying ? 'Verifying...' : 'Submit'}
        </button>

        {/* Resend Link */}
        <div className='text-center'>
          <p className='text-sm text-gray-600 dark:text-gray-300'>
            Didn't receive the code?{' '}
            <button
              onClick={handleResendOTP}
              disabled={isResending}
              className='font-medium text-blue-600 hover:text-blue-500 disabled:opacity-50'
            >
              {isResending ? 'Sending...' : 'Resend OTP'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
