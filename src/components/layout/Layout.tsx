import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import Reviews from '../sections/Reviews';
import lineImage from '../../assets/lines.png';
import leftLineImage from '../../assets/leftline.svg';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col w-full purple-glow-bg">
      <Header />
      <main className="flex-grow w-full relative">
        {/* Common Line Images - Appear on all pages */}
        <img src={lineImage} alt="Line Image" className="absolute left-[80%] top-[44%] pointer-events-none z-0" />
        <img src={lineImage} alt="Line Image" className="absolute right-[80%] top-[73%] transform rotate-180 pointer-events-none z-0" />
        <img src={leftLineImage} alt="Left Line Image" className="absolute left-[0%] top-[19%] pointer-events-none z-0" />
        {children}
      </main>
      <Reviews />
      <Footer />
    </div>
  );
}


