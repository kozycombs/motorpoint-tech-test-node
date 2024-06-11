import { handleGetVehicles, handleGetVehiclesMake } from "../controllers/vehicle.controller";
import { Router } from "express";

const router = Router();

router.get("/", handleGetVehicles).get("/make", handleGetVehiclesMake);

export default router;
