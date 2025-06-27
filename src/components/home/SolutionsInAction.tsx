import React, { useState } from 'react';

const SolutionsInAction = () => {
  const [activeTab, setActiveTab] = useState('TranscriptX');
  const [isExpanded, setIsExpanded] = useState(false);

  const solutions = ['TranscriptX', 'Chartwright', 'Redactify', 'Validify'];

  const demos = {
    TranscriptX: {
      title: 'Voice to Documentation',
      description:
        'Convert patient conversations into accurate medical notes instantly.',
      features: [
        'Real-time transcription',
        'Medical terminology recognition',
        'Context-aware processing',
      ],
    },
    Chartwright: {
      title: 'Smart Chart Generation',
      description: 'Transform any text into professional medical charts.',
      features: [
        'Customizable templates',
        'Workflow integration',
        'Quality assurance',
      ],
    },
    Redactify: {
      title: 'HIPAA Compliance Made Easy',
      description:
        'Automatically redact sensitive information while preserving clinical context.',
      features: ['Automated PHI detection', 'Bulk processing', 'Audit trails'],
    },
    Validify: {
      title: 'Chart Review & Validation',
      description: 'AI-powered chart review for accuracy and compliance.',
      features: [
        'Compliance checking',
        'Documentation gaps detection',
        'Coding accuracy',
      ],
    },
  };

  return (
    <section
      id='solutions-in-action'
      className='py-12 md:py-24 px-10 min-h-[400px] bg-[#0f172a]'
    >
      <h2 className='text-[2.074rem] font-bold mb-8 text-[#60a5fa] text-center tracking-tight'>
        See Our Solutions in Action
      </h2>

      <div className='max-w-[1200px] mx-auto'>
        <div
          className={`transition-all duration-500 ${
            isExpanded ? 'expanded' : 'collapsed'
          }`}
        >
          {/* Navigation Tabs */}
          <div className='flex justify-center flex-wrap gap-4 mb-8'>
            {solutions.map((solution) => (
              <button
                key={solution}
                onClick={() => setActiveTab(solution)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeTab === solution
                    ? 'bg-[#3b82f6] text-white shadow-lg'
                    : 'bg-[rgba(30,58,138,0.3)] text-[#94a3b8] hover:bg-[rgba(59,130,246,0.1)] hover:text-white'
                }`}
              >
                {solution}
              </button>
            ))}
          </div>

          {/* Expand/Collapse Toggle */}
          <div className='text-center mb-8'>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className='bg-[rgba(30,58,138,0.3)] border border-[rgba(96,165,250,0.2)] text-[#60a5fa] px-6 py-3 rounded-full hover:bg-[rgba(59,130,246,0.1)] transition-all duration-300'
            >
              {isExpanded ? 'Click to collapse demo' : 'Click to expand demo'}
            </button>
          </div>

          {/* Demo Content */}
          {isExpanded && (
            <div className='bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl'>
              <div className='text-center'>
                <h3 className='text-[1.728rem] font-semibold text-[#60a5fa] mb-4'>
                  {demos[activeTab].title}
                </h3>
                <p className='text-white mb-6 text-lg'>
                  {demos[activeTab].description}
                </p>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-8'>
                  {demos[activeTab].features.map((feature, index) => (
                    <div
                      key={index}
                      className='bg-[rgba(59,130,246,0.1)] rounded-lg p-4 border border-[rgba(96,165,250,0.2)]'
                    >
                      <p className='text-white font-medium'>{feature}</p>
                    </div>
                  ))}
                </div>

                <div className='mt-8'>
                  <button className='bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-8 py-3 rounded-full hover:translate-y-[-2px] hover:shadow-lg transition-all'>
                    Try {activeTab} Demo
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SolutionsInAction;
