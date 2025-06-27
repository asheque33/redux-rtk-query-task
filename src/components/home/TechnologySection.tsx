import React from 'react';

const TechnologySection = () => {
  const techFeatures = [
    {
      icon: '🧠',
      title: 'Sophisticated Natural Language Processing',
      description:
        'At the core of our platform is an advanced foundation model. This enables our system to grasp the nuances of clinical conversations — understanding context, recognizing intent, and accurately interpreting medical terminology. This deep comprehension allows the AI to generate clear, concise, and contextually relevant medical notes automatically.',
    },
    {
      icon: '🔄',
      title: 'Learning Mode & Personalization',
      description:
        "Our AI doesn't rely on generic templates. We initiate the process by learning directly from your specific cases and workflows. The system intelligently refines its understanding and output based on your ongoing feedback. With each processed case, its accuracy and alignment with your unique clinical documentation needs become increasingly precise, ensuring a truly personalized solution.",
    },
    {
      icon: null,
      title: 'Robust Data Privacy & Security',
      description:
        "Protecting sensitive health information is paramount. Our AI solutions are architected with a security-first approach, incorporating principles like 'zero trust'. We utilize robust security measures, including comprehensive encryption (both at rest and in transit) and strict, role-based access controls, to ensure data integrity and confidentiality, limiting access exclusively to authorized personnel.",
      badges: [
        { icon: '🔒', text: 'HIPAA COMPLIANT', color: '#10b981' },
        { icon: '📝', text: 'BUSINESS ASSOCIATE AGREEMENT', color: '#818cf8' },
      ],
    },
  ];

  return (
    <section
      id='technology'
      className='py-12 md:py-24 px-10 min-h-[400px] bg-[#0f172a]'
    >
      <h2 className='text-[2.074rem] font-bold mb-8 text-[#60a5fa] text-center tracking-tight'>
        Our Technology
      </h2>
      <div className='max-w-[1000px] mx-auto'>
        <p className='mb-4 text-white'>
          At Clin Technologies, we've built our platform on groundbreaking AI
          technology specifically designed for healthcare. Our solutions use the
          latest advancements in natural language processing and machine
          learning to create a system that truly understands the complexities of
          medical documentation.
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] w-full mx-auto mt-[50px]'>
        {techFeatures.map((feature, index) => (
          <div
            key={index}
            className='bg-[rgba(30,58,138,0.3)] rounded-xl p-[35px] border border-[rgba(96,165,250,0.2)] shadow-xl transition-all duration-500 relative overflow-hidden hover:translate-y-[-10px] hover:shadow-2xl'
          >
            {feature.badges ? (
              <div className='flex gap-[15px] flex-wrap'>
                {feature.badges.map((badge, badgeIndex) => (
                  <div
                    key={badgeIndex}
                    className='inline-flex items-center py-[6px] px-[15px] rounded-[25px] mb-5 border transition-all duration-300'
                    style={{
                      backgroundColor: `${badge.color}1a`,
                      borderColor: `${badge.color}4d`,
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = `${badge.color}33`;
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = `${badge.color}1a`;
                    }}
                  >
                    <span
                      className='mr-[10px] text-[18px]'
                      style={{ color: badge.color }}
                    >
                      {badge.icon}
                    </span>
                    <span className='text-white font-semibold text-[0.833rem] tracking-[0.05em]'>
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <div className='flex justify-center items-center w-[70px] h-[70px] bg-[rgba(59,130,246,0.1)] rounded-full mb-5 transition-all duration-300 hover:scale-110 hover:bg-[rgba(59,130,246,0.2)]'>
                <div className='text-[30px] text-[#60a5fa]'>{feature.icon}</div>
              </div>
            )}
            <h3 className='text-[1.728rem] font-semibold text-[#60a5fa] mt-0 mb-5 border-b border-[rgba(96,165,250,0.3)] pb-4'>
              {feature.title}
            </h3>
            <p className='text-white'>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;
