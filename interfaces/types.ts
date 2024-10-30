interface saveVehicleDoc {
  vehicleRegistration: string;
  vehicleModel: number;
  location: { x: number; y: number; z: number };
  heading: number;
  primaryColor: number;
  secondaryColor: number;
  createdAt: Date;
}

interface rentalVehiclesDoc {
  vehicleRentalPrice: number;
  vehicleRegistration: string;
  vehicleModel: number;
  spawnLocation: { x: number; y: number; z: number };
  heading: number;
  primaryColor: number;
  secondaryColor: number;
  isVehicleSpawned: boolean;
  rentalStatus: {
    isVehicleRented: boolean;
    isVehicleEngineOn: boolean;
    vehicleCurrentLocation?: { x: number; y: number; z: number };
    rentedResidentId: string;
    rentedOn?: Date;
    rentedTill?: Date;
  };
  createdAt: Date;
  updatedAt?: Date;
}

interface rentalVehicleBusinessDoc {
  businessTypeId: string;
  businessPermitId: string;
  rentalVehicles: rentalVehiclesDoc[];
  createdAt: Date;
  updatedAt: Date;
  validTill: Date;
}

export { saveVehicleDoc, rentalVehicleBusinessDoc, rentalVehiclesDoc };
