import { useEffect, useRef } from 'react';
import Logo from '../icons/Logo';
const BannerSection = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        this.opacity = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-15px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.8;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes scrollDown {
          0% {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
          50% {
            opacity: 0.5;
          }
          100% {
            opacity: 1;
            transform: translateX(-50%) translateY(20px);
          }
        }

        .float-1 {
          animation: float 25s infinite alternate;
        }
        .float-2 {
          animation: float 20s 2s infinite alternate;
        }
        .float-3 {
          animation: float 15s 1s infinite alternate;
        }

        .fade-in-up-1 {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.2s;
        }
        .fade-in-up-2 {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.5s;
        }
        .fade-in-up-3 {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 0.8s;
        }
        .fade-in-up-4 {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 1.1s;
        }
        .fade-in-up-5 {
          animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards 1.4s;
        }

        .scroll-indicator {
          animation: fadeIn 1s forwards 2s;
        }
        .scroll-dot {
          animation: scrollDown 2s infinite;
        }
      `}</style>

      <div className='relative top-[60px] left-0 w-full h-[calc(100vh-60px)] bg-[#0a1022] z-10 overflow-hidden shadow-2xl'>
        {/* Particles Canvas */}
        <canvas
          ref={canvasRef}
          className='absolute top-0 left-0 w-full h-full'
        />

        {/* Gradient Overlay */}
        <div className='absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(10,16,34,0)_0%,rgba(10,16,34,0.8)_80%,rgba(10,16,34,1)_100%)] z-2'></div>

        {/* Floating Orbs */}
        <div className='absolute top-0 left-0 w-full h-full pointer-events-none z-3'>
          <div className='absolute top-[-50px] left-[-100px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)] opacity-50 float-1'></div>
          <div className='absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)] opacity-50 float-2'></div>
          <div className='absolute top-[20%] right-[15%] w-[150px] h-[150px] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.4)_0%,rgba(59,130,246,0.3)_50%,rgba(37,99,235,0)_100%)] opacity-50 float-3'></div>
        </div>

        {/* Mouse Glow Effect */}
        <div className='absolute w-[250px] h-[250px] rounded-full bg-[radial-gradient(circle,rgba(59,130,246,0.3)_0%,rgba(59,130,246,0)_70%)] pointer-events-none z-2 opacity-0 transition-opacity duration-300 blur-xl'></div>

        {/* Main Content */}
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-11 w-[90%] max-w-[1200px]'>
          {/* Logo */}
          <div className='mb-[30px] transform translate-y-0 opacity-0 fade-in-up-1'>
            {/* <div className='w-[120px] h-[120px] mx-auto mb-[15px]'> */}
            <Logo size={120} className='mx-auto mb-[15px]' />
            {/* </div> */}
          </div>

          {/* Main Heading */}
          <h1 className='text-[2.986rem] md:text-[2.986rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] via-[#3b82f6] to-[#2563eb] m-0 tracking-tight opacity-0 transform translate-y-[20px] fade-in-up-2'>
            Clin Technologies
          </h1>

          {/* Subtitle */}
          <p className='text-[1.728rem] md:text-[1.728rem] font-normal text-[#94a3b8] mt-[10px] mb-0 tracking-normal opacity-0 transform translate-y-[20px] fade-in-up-3'>
            Revolutionizing clinical documentation through{' '}
            <span className='text-[#f59e0b] font-semibold'>
              HIPAA COMPLIANT
            </span>{' '}
            advanced artificial intelligence, giving healthcare providers more
            time for what truly matters — patient care. try it for{' '}
            <span className='text-[#f59e0b] font-semibold'>FREE</span> today
          </p>

          {/* Description */}
          <p className='text-[1.44rem] text-[#e2e8f0] max-w-[700px] mx-auto mt-[30px] leading-normal opacity-0 transform translate-y-[20px] fade-in-up-4'>
            Our sophisticated AI platform intelligently processes clinical
            conversations, creating accurate documentation that integrates with
            your existing EMR system.
          </p>

          {/* Buttons */}
          <div className='mt-[40px] opacity-0 transform translate-y-[20px] fade-in-up-5 flex justify-center gap-5 md:flex-row flex-col'>
            <a
              className='bg-transparent border-2 border-[#3b82f6] text-white px-8 py-4 rounded-full hover:bg-[rgba(59,130,246,0.1)] transition-colors shadow-[0_5px_15px_rgba(37,99,235,0.2)] inline-block text-center'
              href='/login'
            >
              Login
            </a>
            <a
              className='bg-gradient-to-r from-[#3b82f6] to-[#2563eb] text-white px-8 py-4 rounded-full hover:translate-y-[-3px] hover:shadow-[0_8px_20px_rgba(37,99,235,0.5)] transition-all shadow-[0_5px_15px_rgba(37,99,235,0.4)] relative overflow-hidden z-1 inline-block text-center'
              href='/signUp'
            >
              Signup
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className='absolute bottom-[30px] left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 scroll-indicator'>
          <div className='w-[24px] h-[38px] border-2 border-[rgba(148,163,184,0.5)] rounded-[12px] relative'>
            <div className='absolute top-[6px] left-1/2 transform -translate-x-1/2 w-[6px] h-[6px] bg-[#60a5fa] rounded-full scroll-dot'></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSection;
