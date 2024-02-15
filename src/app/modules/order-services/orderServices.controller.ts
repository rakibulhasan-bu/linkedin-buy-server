import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { OrderServicesServices } from "./orderServices.service";

const createOrderServices = CatchAsyncError(
  async (req: Request, res: Response) => {
    const orderServices = req.body;

    const result =
      await OrderServicesServices.createOrderServicesIntoDB(orderServices);
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "order Services created successfully",
      data: result,
    });
  },
);

const updateOrderServices = CatchAsyncError(
  async (req: Request, res: Response) => {
    const servicePrice = req.body;
    const { id } = req.params;

    const result = await OrderServicesServices.updateOrderServicesIntoDB(
      id,
      servicePrice,
    );
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "order Services updated successfully",
      data: result,
    });
  },
);

const getAllOrderServices = CatchAsyncError(
  async (req: Request, res: Response) => {
    const result = await OrderServicesServices.getAllOrderServicesFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "order Services retrieved successfully",
      data: result,
    });
  },
);

export const orderServicesController = {
  createOrderServices,
  updateOrderServices,
  getAllOrderServices,
};
