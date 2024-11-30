'use client'

import { useRouter } from 'next/navigation';
import HouseForm from '@/components/house/HouseForm';

export default function AddHousePage() {
  const router = useRouter();

  const handleSave = async () => {
    router.push('/');
  };

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Añadir Nueva Casa</h1>
      <HouseForm
        onClose={() => router.push('/')}
        onSave={handleSave}
      />
    </main>
  );
} 