import { NextFunction, Request, Response } from "express";
import VehicleRepository, { Vehicle } from "../repositories/vehicle-repository";

export async function handleGetVehicles(req: Request, res: Response, next: NextFunction) {
  try {
    const { make, model } = req.query;
    const vehicles = new VehicleRepository();
    let allVehicles: Vehicle[] = vehicles.getAll();

    if (make) {
      allVehicles = allVehicles.filter(
        (vehicle) => vehicle.make.toLowerCase() === `${make}`.toLowerCase()
      );
    }
    if (model) {
      allVehicles = allVehicles.filter(
        (vehicle) => vehicle.model.toLowerCase() === `${model}`.toLowerCase()
      );
    }

    res.status(200).json(allVehicles);
  } catch (err) {
    next(err);
  }
}

export async function handleGetVehiclesMake(req: Request, res: Response, next: NextFunction) {
  try {
    const makes: any = {};
    const vehicles = new VehicleRepository();
    let allVehicles: Vehicle[] = vehicles.getAll();
    for (const vehicle of allVehicles) {
      makes[vehicle.make] = "true";
    }
    const allVehicleMakes = Object.keys(makes).sort();
    res.status(200).json(allVehicleMakes);
  } catch (err) {
    next(err);
  }
}
