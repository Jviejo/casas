import { getHouses } from './actions';
import HouseList from '@/components/HouseList';

export default async function Home() {
  const houses = await getHouses();
  
  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Lista de Casas</h1>
      <HouseList initialHouses={houses} />
    </main>
  );
}
