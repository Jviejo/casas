'use client'

import { House } from '@/types/house';
import { addHouse, updateHouse } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useState } from 'react';

interface HouseFormProps {
  house?: House | null;
  onClose: () => void;
  onSave: (house: House) => void;
}

export default function HouseForm({ house, onClose, onSave }: HouseFormProps) {
  const [formData, setFormData] = useState<House>(house || {
    description: '',
    // CALIDAD DE VIDA INTERIOR
    officeSpace: false,
    soundInsulation: 0,
    internetQuality: 0,
    
    // LUZ Y CONFORT TÉRMICO
    naturalLight: 0,
    naturalVentilation: 0,
    climatization: 0,
    
    // DISTRIBUCIÓN Y ESPACIO
    workRestSeparation: false,
    movementSpace: false,
    versatileSpaces: false,
    
    // INSTALACIONES
    electricalOutlets: 0,
    electricalInstallation: 0,
    mobileSignal: 0,
    
    // ENTORNO INMEDIATO
    noiseLevel: 0,
    hasBalcony: false,
    
    // ASPECTOS ADICIONALES
    customLighting: false,
    ergonomicFurniture: false,
    professionalSetup: false,
    relaxationAreas: false,
    screenReflectionFree: false,
    plantsSpace: false,
    
    // TRABAJO REMOTO
    electricalPower: false,
    fiberOptic: false,
    internetBackup: false,
    neighborWorkStyle: false,
    nearbyCoworking: false,
    privateVideocalls: false,
    storageSpace: false,
    
    // UBICACIÓN Y TRANSPORTE
    metroDistance: 0,
    busLines: 0,
    groceryStores: false,
    parkingAvailable: false,
    bikeLines: false,
    greenAreas: false,
    
    // SEGURIDAD Y ENTORNO
    neighborhoodSecurity: 0,
    streetLighting: 0,
    trafficNoise: 0,
    neighborhoodLife: 0,
    commercialActivity: false,
    
    // COMUNIDAD Y EDIFICIO
    doorman: false,
    communityFees: 0,
    neighborQuality: 0,
    buildingMaintenance: 0,
    communityAreas: false,
    elevatorAvailable: false,
    buildingAge: 0,
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

  const renderCheckboxField = (
    id: keyof House,
    label: string,
    points?: string
  ) => (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={id}
        checked={formData[id] as boolean}
        onCheckedChange={(checked) => 
          setFormData({...formData, [id]: checked})
        }
      />
      <Label htmlFor={id}>{label} {points && <span className="text-sm text-muted-foreground">({points})</span>}</Label>
    </div>
  );

  const renderSliderField = (
    id: keyof House,
    label: string,
    points?: string
  ) => (
    <div className="space-y-2">
      <Label htmlFor={id}>{label} {points && <span className="text-sm text-muted-foreground">({points})</span>}</Label>
      <Slider
        id={id}
        min={0}
        max={1}
        step={0.1}
        value={[formData[id] as number]}
        onValueChange={([value]) => 
          setFormData({...formData, [id]: value})
        }
      />
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-4">
      <Card>
        <CardHeader>
          <CardTitle>Información General</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="description">Descripción</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Calidad de Vida Interior (3 puntos)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderCheckboxField('officeSpace', '¿Hay una habitación/espacio específico para oficina?', '1 punto')}
          {renderSliderField('soundInsulation', '¿Cómo es el aislamiento acústico?', '1 punto')}
          {renderSliderField('internetQuality', '¿La conexión a internet es buena en la zona?', '1 punto')}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Luz y Confort Térmico (2.5 puntos)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderSliderField('naturalLight', '¿Tiene luz natural abundante?', '1 punto')}
          {renderSliderField('naturalVentilation', '¿Buena ventilación natural?', '0.75 puntos')}
          {renderSliderField('climatization', '¿Sistema de climatización eficiente?', '0.75 puntos')}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Distribución y Espacio (2 puntos)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderCheckboxField('workRestSeparation', '¿Permite separar zona de trabajo de zona de descanso?', '0.75 puntos')}
          {renderCheckboxField('movementSpace', '¿Hay espacio para moverse/estirar durante pausas?', '0.5 puntos')}
          {renderCheckboxField('versatileSpaces', '¿Espacios versátiles para cambiar de ambiente?', '0.75 puntos')}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Instalaciones (1.5 puntos)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderSliderField('electricalOutlets', '¿Suficientes enchufes y puntos de conexión?', '0.5 puntos')}
          {renderSliderField('electricalInstallation', '¿Instalación eléctrica preparada para equipos?', '0.5 puntos')}
          {renderSliderField('mobileSignal', '¿Buena cobertura móvil?', '0.5 puntos')}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Entorno Inmediato (1 punto)</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderSliderField('noiseLevel', '¿Hay ruidos molestos que puedan interferir con llamadas?', '0.5 puntos')}
          {renderCheckboxField('hasBalcony', '¿Tienes acceso a terraza/balcón para pausas?', '0.5 puntos')}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Aspectos Adicionales</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderCheckboxField('customLighting', 'Posibilidad de personalizar la iluminación')}
          {renderCheckboxField('ergonomicFurniture', 'Espacio para mobiliario ergonómico')}
          {renderCheckboxField('professionalSetup', 'Capacidad para crear un setup profesional')}
          {renderCheckboxField('relaxationAreas', 'Zonas cercanas para desconectar en pausas')}
          {renderCheckboxField('screenReflectionFree', 'Orientación que evite reflejos en pantallas')}
          {renderCheckboxField('plantsSpace', 'Posibilidad de tener plantas')}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Características para Trabajo Remoto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderCheckboxField('electricalPower', '¿La potencia eléctrica contratada soportará equipos adicionales?')}
          {renderCheckboxField('fiberOptic', '¿Se puede instalar fibra óptica de alta velocidad?')}
          {renderCheckboxField('internetBackup', '¿Hay alternativas de conexión a internet (4G/5G) como backup?')}
          {renderCheckboxField('neighborWorkStyle', '¿Los vecinos también trabajan desde casa?')}
          {renderCheckboxField('nearbyCoworking', '¿Hay espacios de coworking cercanos como alternativa?')}
          {renderCheckboxField('privateVideocalls', '¿La distribución permite videollamadas sin mostrar zonas privadas?')}
          {renderCheckboxField('storageSpace', '¿Hay suficiente espacio de almacenaje para equipamiento profesional?')}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ubicación y Transporte</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="metroDistance">Distancia al metro (metros)</Label>
            <Input
              id="metroDistance"
              type="number"
              value={formData.metroDistance}
              onChange={(e) => setFormData({...formData, metroDistance: Number(e.target.value)})}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="busLines">Número de líneas de bus cercanas</Label>
            <Input
              id="busLines"
              type="number"
              value={formData.busLines}
              onChange={(e) => setFormData({...formData, busLines: Number(e.target.value)})}
            />
          </div>
          {renderCheckboxField('groceryStores', '¿Hay tiendas de alimentación cercanas?')}
          {renderCheckboxField('parkingAvailable', '¿Hay parking disponible?')}
          {renderCheckboxField('bikeLines', '¿Hay carriles bici cercanos?')}
          {renderCheckboxField('greenAreas', '¿Hay zonas verdes cercanas?')}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Seguridad y Entorno</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderSliderField('neighborhoodSecurity', 'Nivel de seguridad del barrio')}
          {renderSliderField('streetLighting', 'Iluminación de la calle')}
          {renderSliderField('trafficNoise', 'Nivel de ruido por tráfico')}
          {renderSliderField('neighborhoodLife', 'Vida de barrio/ambiente')}
          {renderCheckboxField('commercialActivity', '¿Hay actividad comercial en la zona?')}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Comunidad y Edificio</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {renderCheckboxField('doorman', '¿Tiene portero físico?')}
          <div className="space-y-2">
            <Label htmlFor="communityFees">Gastos de comunidad mensuales (€)</Label>
            <Input
              id="communityFees"
              type="number"
              value={formData.communityFees}
              onChange={(e) => setFormData({...formData, communityFees: Number(e.target.value)})}
            />
          </div>
          {renderSliderField('neighborQuality', 'Calidad del vecindario')}
          {renderSliderField('buildingMaintenance', 'Mantenimiento del edificio')}
          {renderCheckboxField('communityAreas', '¿Tiene zonas comunes?')}
          {renderCheckboxField('elevatorAvailable', '¿Tiene ascensor?')}
          <div className="space-y-2">
            <Label htmlFor="buildingAge">Edad del edificio (años)</Label>
            <Input
              id="buildingAge"
              type="number"
              value={formData.buildingAge}
              onChange={(e) => setFormData({...formData, buildingAge: Number(e.target.value)})}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end space-x-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancelar
        </Button>
        <Button type="submit">
          {house ? 'Actualizar' : 'Añadir'} Casa
        </Button>
      </div>
    </form>
  );
} 