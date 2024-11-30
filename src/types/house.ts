export interface House {
  _id?: string;
  description: string;
  
  // CALIDAD DE VIDA INTERIOR
  officeSpace: boolean;           // 1 punto
  soundInsulation: number;        // 1 punto
  internetQuality: number;        // 1 punto
  
  // LUZ Y CONFORT TÉRMICO
  naturalLight: number;           // 1 punto
  naturalVentilation: number;     // 0.75 puntos
  climatization: number;          // 0.75 puntos
  
  // DISTRIBUCIÓN Y ESPACIO
  workRestSeparation: boolean;    // 0.75 puntos
  movementSpace: boolean;         // 0.5 puntos
  versatileSpaces: boolean;       // 0.75 puntos
  
  // INSTALACIONES
  electricalOutlets: number;      // 0.5 puntos
  electricalInstallation: number; // 0.5 puntos
  mobileSignal: number;          // 0.5 puntos
  
  // ENTORNO INMEDIATO
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
  
  score?: number;
} 