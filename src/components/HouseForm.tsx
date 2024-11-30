'use client'

import { House } from '@/types/house';
import { addHouse, updateHouse } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useState } from 'react';

interface HouseFormProps {
  house?: House | null;
  onClose: () => void;
  onSave: (house: House) => void;
}

export default function HouseForm({ house, onClose, onSave }: HouseFormProps) {
  const [formData, setFormData] = useState<House>(house || {
    description: '',
    officeSpace: false,
    soundInsulation: 0,
    internetQuality: 0,
    naturalLight: 0,
    naturalVentilation: 0,
    climatization: 0,
    workRestSeparation: false,
    movementSpace: false,
    versatileSpaces: false,
    electricalOutlets: 0,
    electricalInstallation: 0,
    mobileSignal: 0,
    noiseLevel: 0,
    hasBalcony: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (house?._id) {
      await updateHouse(house._id, formData);
    } else {
      await addHouse(formData);
    }
    
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="description">Descripción</Label>
        <Input
          id="description"
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="officeSpace"
          checked={formData.officeSpace}
          onCheckedChange={(checked) => 
            setFormData({...formData, officeSpace: checked as boolean})
          }
        />
        <Label htmlFor="officeSpace">¿Tiene espacio para oficina?</Label>
      </div>

      {/* Añadir campos similares para todas las propiedades */}

      <div className="flex space-x-2">
        <Button type="submit">
          {house ? 'Actualizar' : 'Añadir'} Casa
        </Button>
        <Button type="button" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
      </div>
    </form>
  );
} 