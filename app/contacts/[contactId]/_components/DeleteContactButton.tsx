'use client';

import React from 'react';
import Button from '@/components/ui/Button';
import { deleteContact } from '@/data/actions/deleteContact';

type Props = {
  contactId: string;
};

export default function DeleteContactButton({ contactId }: Props) {
  return (
    <form
      action={async () => {
        const response = confirm('Are you sure you want to delete this contact? This action cannot be undone.');
        if (response) {
          await deleteContact(contactId);
        }
      }}
    >
      <Button type="submit" theme="destroy">
        Delete
      </Button>
    </form>
  );
}
