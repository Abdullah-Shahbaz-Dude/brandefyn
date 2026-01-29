import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Reviews from '../sections/Reviews';
import ScheduleCall from '../sections/ScheduleCall';
import lineImage from '../../assets/lines.png';
import leftLineImage from '../../assets/leftline.svg';
import blurleft from '../../assets/blur-2.svg'
import blurright from '../../assets/blur-3.svg'
import blurHome from '../../assets/blur-home.svg'

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col w-full purple-glow-bg overflow-hidden">
      <Header />
      <main className="flex-grow w-full relative">
        {/* Common Line Images - Appear on all pages */}
        {/* Blur-home image - only show on non-home pages (home page has it in BeforeAfter section) */}
        {location.pathname !== "/" && (
          <img src={blurHome} alt="home blur" className='absolute left-[60%] top-[20%] z-0 object-center pointer-events-none' />
        )}
        <img src={lineImage} alt="Line Image" className="absolute left-[80%] top-[44%] pointer-events-none z-0" />
        <img src={lineImage} alt="Line Image" className="absolute right-[80%] top-[73%] transform rotate-180 pointer-events-none z-0" />
        <img src={leftLineImage} alt="Left Line Image" className="absolute left-[0%] top-[19%] pointer-events-none z-0" />
        <img src={blurleft} alt="left blur" className={`absolute left-[0%] ${location.pathname === "/" ? 'top-[45%]' : 'top-[55%]'} pointer-events-none z-0`} />
        <img src={blurright} alt="right blur" className='absolute right-[0%] top-[80%] pointer-events-none z-0' />
        {/* Footer area blur - positioned to match Figma design */}
        <img src={blurleft} alt="left blur" className='absolute left-[0%] top-[100%] translate-y-[20%] pointer-events-none z-0 opacity-80' />
        {children}
      </main>
      <Reviews />
      <ScheduleCall />
      <Footer />
    </div>
  );
}


