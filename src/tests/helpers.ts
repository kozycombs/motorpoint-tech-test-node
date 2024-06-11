import { agent as _request } from "supertest";
import app from "../index";

export const request = _request(app);
