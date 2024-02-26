import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { zeroConnectionPricingServices } from "./zeroConnectionPrize.service";

const createZeroConnectionPricing = CatchAsyncError(
  async (req: Request, res: Response) => {
    const zeroConnectionPricing = req.body;

    const result =
      await zeroConnectionPricingServices.createZeroConnectionPricingIntoDB(
        zeroConnectionPricing,
      );
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Zero Connection Pricing Services created successfully",
      data: result,
    });
  },
);

const updateZeroConnectionPricing = CatchAsyncError(
  async (req: Request, res: Response) => {
    const servicePrice = req.body;
    const { id } = req.params;

    const result =
      await zeroConnectionPricingServices.updateZeroConnectionPricingIntoDB(
        id,
        servicePrice,
      );
    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Zero Connection Pricing Services  updated successfully",
      data: result,
    });
  },
);

const getAllZeroConnectionPricing = CatchAsyncError(
  async (req: Request, res: Response) => {
    const result =
      await zeroConnectionPricingServices.getAllZeroConnectionPricingFromDB();
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Zero Connection Pricing Services  retrieved successfully",
      data: result,
    });
  },
);

export const zeroConnectionPricingController = {
  createZeroConnectionPricing,
  updateZeroConnectionPricing,
  getAllZeroConnectionPricing,
};
