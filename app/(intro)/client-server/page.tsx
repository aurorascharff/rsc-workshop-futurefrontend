import React from 'react';
import { prisma } from '@/db';
import ClientComponent from './_components/ClientComponent';
import ServerComponent from './_components/ServerComponent';

export default function ClientServerPage() {
  // This function will have a hidden API endpoint created and can be called from the client
  async function mutateData() {
    'use server';

    const result = await prisma.contact.findMany();
    return result[0].first as string;
  }

  return (
    <div>
      ClientServerPage
      <ClientComponent mutateData={mutateData} content={<ServerComponent />}>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
