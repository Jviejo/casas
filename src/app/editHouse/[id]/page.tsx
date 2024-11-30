'use client'

import { useRouter } from 'next/navigation';
import HouseForm from '@/components/house/HouseForm';
import { House } from '@/types/house';
import { getHouse } from '@/app/actions';
import { useEffect, useState } from 'react';

export default function EditHousePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [house, setHouse] = useState<House | null>(null);

  useEffect(() => {
    const loadHouse = async () => {
      const data = await getHouse(params.id);
      setHouse(data as House);
    };
    loadHouse();
  }, [params.id]);

  const handleSave = async () => {
    router.push('/');
  };

  if (!house) {
    return <div>Cargando...</div>;
  }

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Editar Casa</h1>
      <HouseForm
        house={house}
        onClose={() => router.push('/')}
        onSave={handleSave}
      />
    </main>
  );
} 