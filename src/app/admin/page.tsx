'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to TinaCMS admin
    window.location.href = '/admin/index.html';
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Cargando panel de administración...</h1>
        <p className="text-gray-600">Redirigiendo a TinaCMS...</p>
      </div>
    </div>
  );
}
