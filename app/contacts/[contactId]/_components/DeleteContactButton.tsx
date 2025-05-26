'use client';

import React, { useTransition } from 'react';

import SubmitButton from '@/components/ui/SubmitButton';
import { deleteContact } from '@/data/actions/deleteContact';

type Props = {
  contactId: string;
};

export default function DeleteContactButton({ contactId }: Props) {
  const [isPending, startTransition] = useTransition();

  return (
    <form
      action={() => {
        const response = confirm('Are you sure you want to delete this contact? This action cannot be undone.');
        if (response) {
          startTransition(async () => {
            await deleteContact(contactId);
          });
        }
      }}
    >
      <SubmitButton loading={isPending} type="submit" theme="destroy">
        Delete
      </SubmitButton>
    </form>
  );
}
