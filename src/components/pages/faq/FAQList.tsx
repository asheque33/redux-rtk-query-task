import { faqData } from '@/data/faq';
import { useState } from 'react';

const FAQList = ({ isDarkMode = false }) => {
  const [openItem, setOpenItem] = useState(null);

  const toggleItem = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  const formatAnswer = (answer, itemId) => {
    // Handle special formatting for specific items
    if (itemId === 4) {
      return (
        <>
          You can always review and adjust the output. If something doesn't
          align with your expectations, simply provide feedback through the
          system. Our AI learns continuously to improve accuracy and precision
          over time.
          <br />
          <br />
          For example:
          <ul className='list-disc pl-6 space-y-2'>
            <li>
              "The SOAP note was too generic. Please include more detail about
              the patient's symptoms and clinical reasoning."
            </li>
            <li>
              "This chart includes terms we don't use in our clinic. Please
              adjust the language to match our documentation style."
            </li>
          </ul>
        </>
      );
    }

    if (itemId === 5) {
      return (
        <>
          We offer a suite of AI-powered tools to enhance every part of your
          clinical documentation:
          <ul className='list-disc pl-6 space-y-2'>
            <li>
              <strong>TranscriptX:</strong> Accurate medical transcriptions of
              clinical encounters.
            </li>
            <li>
              <strong>Chartwright:</strong> Converts raw input into fully
              formatted charts with customization.
            </li>
            <li>
              <strong>Redactify:</strong> Redacts patient identifiers to support
              compliance and data protection.
            </li>
            <li>
              <strong>Validify:</strong> Reviews charts for coding accuracy,
              documentation gaps, and regulatory compliance.
            </li>
          </ul>
        </>
      );
    }

    if (itemId === 8) {
      return (
        <>
          We're happy to help! Please reach out through our support page or
          email us directly at <strong>support@clintechso.com</strong>. Our team
          is ready to assist with setup, customization, or general inquiries.
        </>
      );
    }

    // Default formatting with line breaks preserved
    return answer;
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className='flex-1 overflow-hidden'>
        <div>
          <div>
            <h2 className='text-xl font-semibold mb-6 text-center dark:text-white'>
              FAQ
            </h2>
            <div className='space-y-4 max-w-3xl mx-auto dark:text-white h-[calc(100vh-175px)] overflow-y-auto'>
              {faqData.map((item) => {
                const isOpen = openItem === item.id;
                return (
                  <div
                    key={item.id}
                    className='border-2 border-black dark:border-white rounded-lg p-8 transition-shadow duration-300 hover:shadow-lg dark:text-white'
                  >
                    <div
                      className='flex justify-between items-center cursor-pointer'
                      onClick={() => toggleItem(item.id)}
                    >
                      <h3 className='text-base md:text-lg font-semibold text-gray-900 dark:text-white'>
                        {item.question}
                      </h3>
                      <span className='text-2xl text-gray-500 dark:text-white'>
                        {isOpen ? '-' : '+'}
                      </span>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'h-full' : 'max-h-0'
                      }`}
                    >
                      <div className='mt-4 text-sm md:text-base text-gray-600 whitespace-pre-line dark:text-white'>
                        {formatAnswer(item.answer, item.id)}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FAQList;
