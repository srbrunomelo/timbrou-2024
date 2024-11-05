import { Sidebar } from './sidebar';
import { Header } from './header';

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className='grid grid-cols-[auto_1fr] h-screen w-screen md:grid-cols-[220px_1fr]'>
      <Sidebar />
      <div className='flex flex-col h-screen max-w-[100vw] md:max-w-[calc(100vw-220px)] overflow-y-auto'>
        <Header />
        <div className='flex-1 bg-muted/40 px-5 py-2'>{children}</div>
      </div>
    </div>
  );
}
