import React from 'react';

const SolutionsSection = () => {
  const solutions = [
    {
      icon: '✓',
      title: 'Validify',
      description:
        'Mitigate compliance risk with powerful AI that optimizes chart reviews for accuracy, integrity, coding, and compliance. Validify automatically identifies documentation gaps, ensures coding accuracy, and maintains regulatory compliance.',
      color: '#10b981',
      bgColor: 'rgba(16,185,129,0.1)',
    },
    {
      icon: '⊘',
      title: 'Redactify',
      description:
        'Effortlessly redact HIPAA identifiers from text, documents, and structured data with Redactify – automating your compliance workflow. Protect sensitive patient information while maintaining clinical context.',
      color: '#f59e0b',
      bgColor: 'rgba(245,158,11,0.1)',
    },
    {
      icon: '🗣️',
      title: 'TranscriptX',
      description:
        'Spend less time documenting. TranscriptX dictates highly accurate medical transcriptions of patient encounters into text, understanding complex medical terminology and clinical context for superior accuracy.',
      color: '#3b82f6',
      bgColor: 'rgba(59,130,246,0.1)',
    },
    {
      icon: '📝',
      title: 'Chartwright',
      description:
        'Your best friend with charting – turn any normal text into a high-quality chart, delivered exactly how healthcare professionals need it with extensive customization options to match your workflow and documentation standards.',
      color: '#ec4899',
      bgColor: 'rgba(236,72,153,0.1)',
    },
  ];

  return (
    <section
      id='features'
      className='py-12 md:py-24 px-10 min-h-[400px] bg-[#0f172a]'
    >
      <h2 className='text-[2.074rem] font-bold mb-8 text-[#60a5fa] text-center tracking-tight'>
        Our Solutions
      </h2>
      <div className='max-w-[1000px] mx-auto text-center mb-8'>
        <p className='text-white'>
          Our comprehensive suite of AI-powered solutions transforms every
          aspect of healthcare documentation:
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] w-full mx-auto'>
        {solutions.map((solution, index) => (
          <div
            key={index}
            className='bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl border-t-[3px]'
            style={{ borderTopColor: solution.color }}
          >
            <div
              className='inline-flex items-center justify-center w-[70px] h-[70px] rounded-full mb-5 transition-all duration-300 text-[32px] hover:scale-110'
              style={{
                backgroundColor: solution.bgColor,
                color: solution.color,
              }}
            >
              {solution.icon}
            </div>
            <h3 className='text-[1.44rem] font-semibold text-[#60a5fa] mt-0 mb-4'>
              {solution.title}
            </h3>
            <p className='text-white'>{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SolutionsSection;
