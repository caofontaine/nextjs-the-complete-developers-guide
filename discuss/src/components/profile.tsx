'use client';

import { useSession } from 'next-auth/react';

export default function Profile() {
  const session = useSession();

  if (session.data?.user) {
    return <div>From cleint: user is signed in</div>
  }

  return <div>From cleint: user is NOT signed in</div>
}