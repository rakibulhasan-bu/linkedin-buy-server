import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { pricingServices } from "./servicesPrize.service";

const createPricing = CatchAsyncError(async (req: Request, res: Response) => {
  const servicePrice = req.body;

  const result = await pricingServices.createPricingIntoDB(servicePrice);
  res.status(201).json({
    success: true,
    statusCode: 201,
    message: "Services Pricing created successfully",
    data: result,
  });
});

const getAllServicePrice = CatchAsyncError(
  async (req: Request, res: Response) => {
    const result = await pricingServices.getAllPricingFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Services Pricing retrieved successfully",
      data: result,
    });
  },
);

export const pricingController = {
  createPricing,
  getAllServicePrice,
};
