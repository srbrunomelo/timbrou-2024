'use client';

import { useDocumentDrawer } from '@payloadcms/ui/elements/DocumentDrawer'

export function ImageField() {
  const [Drawer, Trigger, { openDrawer}] = useDocumentDrawer({ 
    collectionSlug: 'media',
   })
  return (
    <>
      <Trigger>
        <button type='button'>Open</button>
      </Trigger>
      <Drawer
      />
    </>
  )
}
