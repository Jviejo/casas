'use client'

import { House } from '@/types/house';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { deleteHouse } from '@/app/actions';
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

interface HouseListProps {
  initialHouses: House[];
}

export default function HouseList({ initialHouses }: HouseListProps) {
  const [houses, setHouses] = useState<House[]>(initialHouses);

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de que quieres eliminar esta casa?')) {
      await deleteHouse(id);
      setHouses(houses.filter(house => house._id !== id));
    }
  };

  return (
    <div>
      <Link href="/addHouse">
        <Button className="mb-4">
          Añadir Casa
        </Button>
      </Link>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Descripción</TableHead>
            <TableHead>Puntuación</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {houses.map((house) => (
            <TableRow key={house._id}>
              <TableCell>{house.description}</TableCell>
              <TableCell>{house.score}</TableCell>
              <TableCell>
                <Link href={`/editHouse/${house._id}`}>
                  <Button variant="outline" className="mr-2">
                    Editar
                  </Button>
                </Link>
                <Button
                  variant="destructive"
                  onClick={() => house._id && handleDelete(house._id)}
                >
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
} 