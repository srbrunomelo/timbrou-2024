'use client';

import { SideBar } from '@repo/ui/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SidebarItems } from './consts';
import { Badge } from '@repo/ui/badge';
import { translate } from '@/shared/locale';
import { AppLogo, AppName } from '@/shared/consts/app';

export const Sidebar = () => {
  const path = usePathname();

  const renderItems = () => {
    return SidebarItems.map((item) => (
      <Link href={item.href} key={item.name}>
        <SideBar.Content.Item active={path === item.href}>
          <SideBar.Content.Item.Icon label={item.name}>
            <item.icon className='size-5' />
          </SideBar.Content.Item.Icon>
          <SideBar.Content.Item.Text>
            {item.name}
            {item.badge && (
              <Badge className='ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full'>
                {item.badge}
              </Badge>
            )}
          </SideBar.Content.Item.Text>
        </SideBar.Content.Item>
      </Link>
    ));
  };
  return (
    <SideBar className='h-screen'>
      <SideBar.Header>
        <Link
          href='/app/dashboard'
          className='flex items-center gap-2 font-semibold'
        >
          <AppLogo className='h-6 w-6' />
          <span>{AppName}</span>
        </Link>
      </SideBar.Header>
      <SideBar.Content>{renderItems()}</SideBar.Content>
      <div className='mt-auto p-4 mx-auto'>
        <span className='text-meld text-xs'>Desenvolvido por B D DONNICI</span>
      </div>
    </SideBar>
  );
};
