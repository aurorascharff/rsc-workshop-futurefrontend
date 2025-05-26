'use client';

import { matchSorter } from 'match-sorter';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import ContactButton from './ContactButton';
import type { Contact } from '@prisma/client';

type Props = {
  contacts: Contact[];
};

export default function ContactList({ contacts }: Props) {
  const searchParams = useSearchParams();
  const q = searchParams.get('q') || '';

  const filteredContact = q ? matchSorter(contacts, q, { keys: ['first', 'last'] }) : contacts;

  return (
    <nav className="flex-1 overflow-auto px-8 py-4">
      {filteredContact.length ? (
        <ul>
          {filteredContact.map(contact => {
            return (
              <li key={contact.id} className="mx-1">
                <ContactButton contact={contact} />
              </li>
            );
          })}
        </ul>
      ) : (
        <p>
          <i>No contacts</i>
        </p>
      )}
    </nav>
  );
}
