'use server';

import { redirect } from 'next/navigation';
import { prisma } from '@/db';
import { slow } from '@/utils/slow';
import { contactSchema } from '@/validations/contactSchema';

export async function updateContact(contactId: string, formData: FormData) {
  await slow();

  const data = Object.fromEntries(formData);
  const result = contactSchema.safeParse(data);

  if (!result.success) {
    throw new Error('Invalid contact data');
  }

  await prisma.contact.update({
    data: result,
    where: {
      id: contactId,
    },
  });

  redirect(`/contacts/${contactId}`);
}
