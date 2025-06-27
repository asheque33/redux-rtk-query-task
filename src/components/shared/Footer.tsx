import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      text: 'Terms of Use',
      href: '/terms',
    },
    {
      text: 'Privacy Policy',
      href: '/privacy',
    },
  ];

  return (
    <>
      <style>{`
        .footer-link:hover .underline-animation {
          width: 100%;
        }

        .underline-animation {
          position: absolute;
          width: 0;
          height: 1px;
          background-color: #60a5fa;
          bottom: -4px;
          left: 0;
          transition: all 0.3s ease;
        }
      `}</style>

      <footer className='bg-[#1e293b] py-[30px] px-10 border-t border-[rgba(96,165,250,0.2)]'>
        <div className='pt-8 flex flex-col md:flex-row justify-between items-center'>
          {/* Footer Links */}
          <div className='flex gap-[30px] flex-wrap mb-4 md:mb-0'>
            {footerLinks.map((link, index) => (
              <a
                key={index}
                className='footer-link text-[#94a3b8] no-underline text-[0.833rem] font-medium tracking-normal transition-colors duration-300 relative hover:text-white'
                href={link.href}
              >
                {link.text}
                <span className='underline-animation'></span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className='text-[#64748b] text-[0.833rem]'>
            <p className='m-0'>
              © 2025 Clin Technologies. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
