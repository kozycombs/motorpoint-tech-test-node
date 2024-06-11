import fs from "fs";
import path from "path";

export type Vehicle = {
  make: string;
  model: string;
  trim: string;
  colour: string;
  price: number;
  co2_level: number;
  transmission: string;
  fuel_type: string;
  engine_size: number;
  date_first_reg: string;
  mileage: number;
};

class VehicleRepository {
  private _vehicles: Vehicle[];

  constructor() {
    const file = fs.readFileSync(
      path.join(__dirname, "..", "repositories", "vehicles.json"),
      "utf8"
    );
    this._vehicles = JSON.parse(file);
  }

  getAll(): Vehicle[] {
    return this._vehicles;
  }
}

export default VehicleRepository;
