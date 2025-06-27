import React from 'react';

const CaseUseSection = () => {
  const caseStudies = [
    {
      title: 'Primary Care',
      description:
        'Dr SJ M.D reduced her documentation time by 52%, allowing her to see 3 more patients daily while finishing her charts before leaving the office.',
      quote:
        "This AI tool streamlines a tedious process, reduces 'click fatigue,' and helps me reclaim some sanity.",
      author: 'Dr. SJ, MD',
    },
    {
      title: 'Emergency Medicine',
      description:
        'Our ED department implemented Clin Tech, resulting in more thorough documentation and a 70% decrease in chart completion time during high-volume periods. Our nurses love it.',
      quote: null,
      author: 'Emergency Department (ED) Nurse Manager',
    },
    {
      title: 'Behavioral Health',
      description: null,
      quote:
        "Chartwright has been transformative for our clinic. Our therapists were drowning in documentation; We've slashed average charting time to under 3 minutes per patient, freeing up hours for direct care. More importantly, we've seen a significant reduction in documentation errors and compliance flags. It's not just faster; it's smarter documentation.",
      author: 'Clinical Director, Behavioral Health Practice',
    },
    {
      title: 'Case Management',
      description: null,
      quote:
        "Honestly, with the number of patients I manage, documentation felt like a constant, losing battle. But this AI feels like getting an assistant. It takes my detailed notes and instantly creates the clear, customized charts I need. I'm getting hours back each week – hours I can now spend directly with patients, tackling barriers, not just typing.",
      author: 'Social Worker/Case Manager',
    },
  ];

  return (
    <section
      id='case-use'
      className='py-12 md:py-24 px-10 min-h-[400px] bg-[#0f172a]'
    >
      <h2 className='text-[2.074rem] font-bold mb-8 text-[#60a5fa] text-center tracking-tight'>
        Case Use
      </h2>
      <div className='max-w-[1000px] mx-auto'>
        <p className='mb-4 text-white'>
          See how healthcare providers across specialties are transforming their
          practice with Clin Technologies:
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1200px] w-full mx-auto mt-8'>
        {caseStudies.map((caseStudy, index) => (
          <div
            key={index}
            className='bg-[rgba(30,58,138,0.3)] rounded-xl p-8 border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl'
          >
            <h3 className='text-[1.44rem] font-semibold text-[#60a5fa] mt-0 mb-4'>
              {caseStudy.title}
            </h3>

            {caseStudy.description && (
              <p className='text-white mb-4'>{caseStudy.description}</p>
            )}

            {caseStudy.quote && (
              <p className='italic text-white mb-2 mt-6 pl-4 border-l-[3px] border-[rgba(96,165,250,0.3)]'>
                "{caseStudy.quote}"
              </p>
            )}

            <p className='italic text-right text-[#94a3b8] mt-2.5 text-[0.833rem] font-medium'>
              — {caseStudy.author}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseUseSection;
