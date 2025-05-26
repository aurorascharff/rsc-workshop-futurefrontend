'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
};

export default function ClientComponent({ children, content }: Props) {
  // Without "use client" we cannot use onClick, useEffect, useState, etc.
  return (
    <div className="rounded border-2 border-blue-500 p-4">
      {children}
      {content}
      <button
        onClick={() => {
          return alert('This button does nothing!');
        }}
      >
        Click me
      </button>
    </div>
  );
}
