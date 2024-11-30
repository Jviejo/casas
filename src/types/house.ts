export interface House {
  _id?: string;
  description: string;
  
  // CALIDAD DE VIDA INTERIOR (3 puntos)
  officeSpace: boolean;           // 1 punto
  soundInsulation: number;        // 1 punto
  internetQuality: number;        // 1 punto
  
  // LUZ Y CONFORT TÉRMICO (2.5 puntos)
  naturalLight: number;           // 1 punto
  naturalVentilation: number;     // 0.75 puntos
  climatization: number;          // 0.75 puntos
  
  // DISTRIBUCIÓN Y ESPACIO (2 puntos)
  workRestSeparation: boolean;    // 0.75 puntos
  movementSpace: boolean;         // 0.5 puntos
  versatileSpaces: boolean;       // 0.75 puntos
  
  // INSTALACIONES (1.5 puntos)
  electricalOutlets: number;      // 0.5 puntos
  electricalInstallation: number; // 0.5 puntos
  mobileSignal: number;          // 0.5 puntos
  
  // ENTORNO INMEDIATO (1 punto)
  noiseLevel: number;            // 0.5 puntos
  hasBalcony: boolean;           // 0.5 puntos
  
  // ASPECTOS ADICIONALES
  customLighting: boolean;
  ergonomicFurniture: boolean;
  professionalSetup: boolean;
  relaxationAreas: boolean;
  screenReflectionFree: boolean;
  plantsSpace: boolean;
  
  // TRABAJO REMOTO
  electricalPower: boolean;
  fiberOptic: boolean;
  internetBackup: boolean;
  neighborWorkStyle: boolean;
  nearbyCoworking: boolean;
  privateVideocalls: boolean;
  storageSpace: boolean;
  
  // UBICACIÓN Y TRANSPORTE
  metroDistance: number;         // Distancia a la estación de metro más cercana (metros)
  busLines: number;             // Número de líneas de bus cercanas
  groceryStores: boolean;       // Tiendas de alimentación cercanas
  parkingAvailable: boolean;    // Disponibilidad de parking
  bikeLines: boolean;           // Carriles bici cercanos
  greenAreas: boolean;          // Zonas verdes cercanas
  
  // SEGURIDAD Y ENTORNO
  neighborhoodSecurity: number; // Nivel de seguridad del barrio (0-1)
  streetLighting: number;      // Iluminación de la calle (0-1)
  trafficNoise: number;        // Nivel de ruido por tráfico (0-1)
  neighborhoodLife: number;    // Vida de barrio/ambiente (0-1)
  commercialActivity: boolean; // Actividad comercial en la zona
  
  // COMUNIDAD Y EDIFICIO
  doorman: boolean;           // Portero físico
  communityFees: number;      // Gastos de comunidad mensuales
  neighborQuality: number;    // Calidad del vecindario (0-1)
  buildingMaintenance: number; // Mantenimiento del edificio (0-1)
  communityAreas: boolean;    // Zonas comunes
  elevatorAvailable: boolean; // Disponibilidad de ascensor
  buildingAge: number;        // Edad del edificio en años
  
  score?: number;
} 