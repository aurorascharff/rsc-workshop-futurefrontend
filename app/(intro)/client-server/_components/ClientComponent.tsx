'use client';

import React from 'react';

type Props = {
  children: React.ReactNode;
  content: React.ReactNode;
  mutateData: () => Promise<string>;
};

export default function ClientComponent({ mutateData, children, content }: Props) {
  // Without "use client" we cannot use onClick, useEffect, useState, etc.
  return (
    <div className="rounded border-2 border-blue-500 p-4">
      {children}
      {content}
      <button
        onClick={async () => {
          const result = await mutateData();
          return alert(result);
        }}
      >
        Click me
      </button>
    </div>
  );
}
