import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col  w-full">
      <Header />
      <main className="flex-grow w-full">{children}</main>
      <Footer />
    </div>
  );
}


