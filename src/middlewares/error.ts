import { Request, Response } from "express";

export default function errorMiddleware(err: any, req: Request, res: Response) {
  res.status(500).send({ message: err.message });
}
