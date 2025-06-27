import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, CreditCard, Check } from 'lucide-react';
import { toast } from 'sonner';

const StripeCheckout = () => {
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [cardholderName, setCardholderName] = useState('');
  const [country, setCountry] = useState('');
  const [saveInfo, setSaveInfo] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      toast.success('Payment processed successfully!');
    }, 2000);
  };

  const formatCardNumber = (value) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  const formatExpiry = (value) => {
    return value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1 / $2');
  };

  return (
    <div className='min-h-screen bg-gray-50 flex justify-center'>
      <div className='w-full max-w-4xl bg-white shadow-lg'>
        {/* Header */}
        <header className='border-b border-gray-200 px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
              <button
                onClick={() => (window.location.href = '/manageSubscription')}
                className='flex items-center text-gray-600 hover:text-gray-800'
              >
                <ArrowLeft className='w-4 h-4 mr-2' />
                <span className='text-sm font-medium'>Back</span>
                <div className='ml-3 flex items-center'>
                  <div className='w-8 h-8 bg-gray-100 rounded flex items-center justify-center mr-2'>
                    <div className='w-4 h-4 bg-gray-400 rounded'></div>
                  </div>
                  <span className='text-sm font-medium text-gray-800'></span>
                </div>
              </button>
              <div className='bg-orange-100 text-orange-800 px-3 py-1 rounded text-xs font-bold uppercase'>
                Test Mode
              </div>
            </div>
          </div>
        </header>

        <div className='flex flex-col lg:flex-row'>
          {/* Order Summary */}
          <div className='lg:w-1/2 p-6 bg-gray-50 border-r border-gray-200'>
            <div className='mb-6'>
              <h2 className='text-gray-500 text-base font-medium mb-2'>
                Subscribe to ALI- Company Plan
              </h2>
              <div className='flex items-baseline'>
                <span className='text-4xl font-bold text-gray-900'>
                  $650.00
                </span>
                <span className='text-gray-500 text-sm ml-2'>per month</span>
              </div>
            </div>

            {/* Order Details */}
            <div className='border-t border-gray-200 pt-6'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h3 className='text-sm font-medium text-gray-900'>
                    ALI- Company Plan
                  </h3>
                  <div className='text-xs text-gray-400 mt-1'>
                    <span>Qty 10</span>
                    <span className='ml-4'>Billed monthly</span>
                  </div>
                </div>
                <div className='text-right'>
                  <div className='text-sm font-medium text-gray-900'>
                    $650.00
                  </div>
                  <div className='text-xs text-gray-400'>$65.00 each</div>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className='lg:w-1/2 p-6'>
            {/* Express Checkout */}
            <div className='mb-6'>
              <div className='bg-gray-100 rounded-lg p-4 text-center text-gray-500 text-sm mb-4'>
                Express checkout options would appear here
              </div>
              <div className='relative'>
                <hr className='border-gray-200' />
                <span className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-3 text-gray-400 text-sm'>
                  Or
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* Email */}
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-gray-600 mb-1'
                >
                  Email
                </label>
                <input
                  type='email'
                  id='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='email@example.com'
                  className='w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                />
              </div>

              {/* Card Information */}
              <div>
                <label className='block text-sm font-medium text-gray-600 mb-1'>
                  Card information
                </label>
                <div className='space-y-0 border border-gray-300 rounded-md overflow-hidden'>
                  {/* Card Number */}
                  <div className='relative'>
                    <input
                      type='text'
                      value={cardNumber}
                      onChange={(e) =>
                        setCardNumber(formatCardNumber(e.target.value))
                      }
                      placeholder='1234 1234 1234 1234'
                      className='w-full px-3 py-3 border-0 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      maxLength='19'
                      required
                    />
                    <div className='absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1'>
                      <img
                        src='https://js.stripe.com/v3/fingerprinted/img/visa-729c05c240c4bdb47b03ac81d9945bfe.svg'
                        alt='Visa'
                        className='h-4'
                      />
                      <img
                        src='https://js.stripe.com/v3/fingerprinted/img/mastercard-4d8844094130711885b5e41b28c9848f.svg'
                        alt='Mastercard'
                        className='h-4'
                      />
                      <img
                        src='https://js.stripe.com/v3/fingerprinted/img/amex-a49b82f46c5cd6a96a6e418a6ca1717c.svg'
                        alt='Amex'
                        className='h-4'
                      />
                    </div>
                  </div>

                  <div className='flex'>
                    {/* Card Expiry */}
                    <input
                      type='text'
                      value={cardExpiry}
                      onChange={(e) =>
                        setCardExpiry(formatExpiry(e.target.value))
                      }
                      placeholder='MM / YY'
                      className='flex-1 px-3 py-3 border-0 border-t border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                      maxLength='7'
                      required
                    />
                    {/* CVC */}
                    <div className='flex-1 relative'>
                      <input
                        type='text'
                        value={cardCvc}
                        onChange={(e) =>
                          setCardCvc(e.target.value.replace(/\D/g, ''))
                        }
                        placeholder='CVC'
                        className='w-full px-3 py-3 border-0 border-t border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500'
                        maxLength='4'
                        required
                      />
                      <div className='absolute right-3 top-1/2 transform -translate-y-1/2'>
                        <CreditCard className='w-4 h-4 text-gray-400' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cardholder Name */}
              <div>
                <label
                  htmlFor='cardholderName'
                  className='block text-sm font-medium text-gray-600 mb-1'
                >
                  Cardholder name
                </label>
                <input
                  type='text'
                  id='cardholderName'
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                  placeholder='Full name on card'
                  className='w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
                  required
                />
              </div>

              {/* Country */}
              <div>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium text-gray-600 mb-1'
                >
                  Country or region
                </label>
                <div className='relative'>
                  <select
                    id='country'
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className='w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white'
                    required
                  >
                    <option value=''>Select country</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='GB'>United Kingdom</option>
                    <option value='AU'>Australia</option>
                    <option value='DE'>Germany</option>
                    <option value='FR'>France</option>
                    <option value='BD'>Bangladesh</option>
                  </select>
                  <ChevronDown className='absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none' />
                </div>
              </div>

              {/* Save Info Checkbox */}
              <div className='flex items-start space-x-3'>
                <button
                  type='button'
                  onClick={() => setSaveInfo(!saveInfo)}
                  className={`flex-shrink-0 w-5 h-5 border-2 rounded flex items-center justify-center transition-colors ${
                    saveInfo
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : 'border-gray-300 bg-white'
                  }`}
                >
                  {saveInfo && <Check className='w-3 h-3' />}
                </button>
                <div>
                  <label className='text-sm font-medium text-gray-600 cursor-pointer'>
                    Save my information for faster checkout
                  </label>
                  <p className='text-sm text-gray-400 mt-1'>
                    Pay faster on this site and everywhere Link is accepted.
                  </p>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type='submit'
                disabled={loading}
                className={`w-full py-4 px-6 rounded-md font-medium text-white transition-colors ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}
              >
                {loading ? (
                  <div className='flex items-center justify-center'>
                    <div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2'></div>
                    Processing...
                  </div>
                ) : (
                  'Subscribe'
                )}
              </button>

              {/* Terms */}
              <p className='text-xs text-gray-500 text-center'>
                By confirming your subscription, you allow us to charge you for
                future payments in accordance with their terms. You can always
                cancel your subscription.
              </p>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className='border-t border-gray-200 px-6 py-4'>
          <div className='flex items-center justify-center space-x-6 text-xs text-gray-400'>
            <div className='flex items-center'>
              <span>Powered by </span>
              <svg className='ml-1 h-3' viewBox='0 0 33 15' fill='currentColor'>
                <path d='M32.956 7.925c0-2.313-1.12-4.138-3.261-4.138-2.15 0-3.451 1.825-3.451 4.12 0 2.719 1.535 4.092 3.74 4.092 1.075 0 1.888-.244 2.502-.587V9.605c-.614.307-1.319.497-2.213.497-.876 0-1.653-.307-1.753-1.373h4.418c0-.118.018-.588.018-.804zm-4.463-.859c0-1.02.624-1.445 1.193-1.445.55 0 1.138.424 1.138 1.445h-2.33z' />
              </svg>
            </div>
            <a href='#' className='hover:text-gray-600'>
              Terms
            </a>
            <a href='#' className='hover:text-gray-600'>
              Privacy
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default StripeCheckout;
