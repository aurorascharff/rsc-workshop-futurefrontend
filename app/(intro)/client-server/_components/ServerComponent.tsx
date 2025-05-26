import React from 'react';
import { prisma } from '@/db';

// Server components can be async
export default async function ServerComponent() {
  console.log('ServerComponent rendered');

  // We can access our database here because we are on the server
  const data = await prisma.contact.findMany();

  return (
    <div className="rounded border-2 border-red-500 p-4">
      ServerComponent
      {data[0].first}
    </div>
  );
}
