import {
  useResendOTPMutation,
  useVerifyOTPMutation,
} from '@/redux/features/auth/authApi';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const VerificationCode = () => {
  const [resendOTP] = useResendOTPMutation();
  const [verifyOTP] = useVerifyOTPMutation();
  const [otpValues, setOtpValues] = useState(['', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const [error, setError] = useState('');

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // Mock states for demo
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const userEmail = 'ahm****@yahoo.com';

  // Mask email for display
  const getMaskedEmail = (email) => {
    if (!email) return 'user@example.com';
    return email; // Return as is for demo
  };

  // Start resend cooldown
  useEffect(() => {
    if (resendCooldown > 0) {
      const timer = setTimeout(() => {
        setResendCooldown(resendCooldown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [resendCooldown]);

  // Handle OTP input change
  const handleInputChange = (index, value) => {
    // Only allow numeric input
    if (!/^\d*$/.test(value)) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
    setError('');

    // Auto focus next input
    if (value && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  // Handle backspace and navigation
  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otpValues[index] && index > 0) {
      inputRefs[index - 1].current?.focus();
    }

    if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs[index - 1].current?.focus();
    }

    if (e.key === 'ArrowRight' && index < 3) {
      inputRefs[index + 1].current?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '');
    const newOtpValues = [...otpValues];

    for (let i = 0; i < 4 && i < pastedData.length; i++) {
      newOtpValues[i] = pastedData[i];
    }

    setOtpValues(newOtpValues);

    // Focus the appropriate input
    const nextEmptyIndex = newOtpValues.findIndex((val) => !val);
    const focusIndex = nextEmptyIndex === -1 ? 3 : nextEmptyIndex;
    inputRefs[focusIndex].current?.focus();
  };

  // Submit OTP
  const handleSubmit = async () => {
    const otpCode = otpValues.join('');

    if (otpCode.length !== 4) {
      setError('Please enter complete OTP');
      return;
    }

    setIsSubmitting(true);
    setIsVerifying(true);
    setError('');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Mock verification logic
      if (otpCode === '1234') {
        alert('OTP verified successfully! Redirecting to dashboard...');
        // Here you would normally navigate to dashboard
      } else {
        setError('Invalid OTP. Please try again.');
        setOtpValues(['', '', '', '']);
        inputRefs[0].current?.focus();
      }
    } catch (err) {
      console.error('OTP verification failed:', err);
      setError('Invalid OTP. Please try again.');
      setOtpValues(['', '', '', '']);
      inputRefs[0].current?.focus();
    } finally {
      setIsSubmitting(false);
      setIsVerifying(false);
    }
  };

  // Resend OTP
  const handleResendOTP = async () => {
    if (resendCooldown > 0) return;

    setIsResending(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setResendCooldown(60); // 60 seconds cooldown
      setError('');
      setOtpValues(['', '', '', '']);
      inputRefs[0].current?.focus();
      alert('OTP sent successfully!');
    } catch (err) {
      console.error('Resend OTP failed:', err);
      setError('Failed to resend OTP. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  // Check if form is valid
  const isFormValid = otpValues.every((val) => val !== '');

  return (
    <div className='flex-1 flex flex-col bg-white dark:bg-gray-800 dark:text-white min-w-0'>
      <div className='flex-1 overflow-hidden'>
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col items-center'>
              <img
                src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Nil%20vyaa-01%201-s1lG2XvZDZZWuxbLHlsQtygDfSadsB.png'
                alt='Logo'
                className='h-16 w-auto mb-8'
              />
              <h2 className='text-3xl font-bold text-gray-900 dark:text-white'>
                OTP Verification
              </h2>
              <p className='mt-2 text-sm text-gray-600 dark:text-gray-300'>
                Enter OTP Sent To {getMaskedEmail(userEmail)}
              </p>
            </div>

            {error && (
              <div className='bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-md text-center'>
                {error}
              </div>
            )}

            <div className='mt-8 space-y-6'>
              <div className='flex justify-center gap-4'>
                {otpValues.map((value, index) => (
                  <input
                    key={index}
                    ref={inputRefs[index]}
                    id={`code-${index}`}
                    type='text'
                    inputMode='numeric'
                    maxLength='1'
                    value={value}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={handlePaste}
                    className='w-16 h-16 text-center text-2xl font-medium border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100 dark:bg-gray-700 text-black dark:text-white'
                    autoComplete='off'
                  />
                ))}
              </div>

              <button
                type='button'
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting || isVerifying}
                className='w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
              >
                {isSubmitting || isVerifying ? 'Verifying...' : 'Submit'}
              </button>

              <div className='text-center'>
                <p className='text-sm text-gray-600 dark:text-gray-300'>
                  Didn't receive the code?{' '}
                  <button
                    type='button'
                    onClick={handleResendOTP}
                    disabled={resendCooldown > 0 || isResending}
                    className='font-medium text-blue-600 hover:text-blue-500 disabled:opacity-50 disabled:cursor-not-allowed'
                  >
                    {isResending
                      ? 'Sending...'
                      : resendCooldown > 0
                        ? `Resend OTP (${resendCooldown}s)`
                        : 'Resend OTP'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
