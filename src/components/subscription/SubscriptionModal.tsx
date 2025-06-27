import { planData } from '@/data/subscriptionItems';
import { X, Check, Zap } from 'lucide-react';

const SubscriptionModal = ({ onClose }) => {
  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4'>
      <div className='bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='p-6'>
          {/* Header */}
          <div className='flex justify-between items-center mb-6'>
            <h2 className='text-2xl font-bold text-gray-900 dark:text-white'>
              Choose Your Plan
            </h2>
            <button
              onClick={onClose}
              className='text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white transition-colors'
            >
              <X className='text-xl' />
            </button>
          </div>

          {/* Plans Grid */}
          <div className='grid md:grid-cols-2 gap-8'>
            {planData.map((plan) => (
              <div
                key={plan.id}
                className={`border rounded-xl p-6 transition-all hover:shadow-md relative ${
                  plan.highlighted
                    ? 'border-blue-500 ring-2 ring-blue-500'
                    : 'border-gray-200 dark:border-gray-700 hover:border-blue-500'
                }`}
              >
                {/* Best Value Badge */}
                {plan.bestValue && (
                  <div className='absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold'>
                    Best value
                  </div>
                )}

                {/* Plan Badge */}
                <div
                  className={`${plan.badgeColor} px-3 py-1 rounded-full text-sm font-medium w-fit mb-4`}
                >
                  {plan.badge}
                </div>

                {/* Price */}
                <div className='flex items-baseline mb-4'>
                  <span className='text-3xl font-semibold text-gray-900 dark:text-white'>
                    $
                  </span>
                  <span className='text-5xl font-bold text-gray-900 dark:text-white'>
                    {plan.price}
                  </span>
                </div>

                {/* Description */}
                <p className='text-gray-600 dark:text-gray-300 mb-6'>
                  {plan.description}
                </p>

                {/* Buy Button */}
                <button
                  onClick={() => {
                    window.location.href = '/checkout/stripe';
                  }}
                  className='w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 mb-6 transition-colors disabled:opacity-70'
                >
                  <Zap className='w-4 h-4' />
                  Buy now
                </button>

                {/* Features List */}
                <ul className='space-y-3'>
                  {plan.features.map((feature, index) => (
                    <li key={index} className='flex items-start gap-2'>
                      <Check className='text-blue-500 mt-1 flex-shrink-0 w-4 h-4' />
                      <span className='text-gray-700 dark:text-gray-300'>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionModal;
