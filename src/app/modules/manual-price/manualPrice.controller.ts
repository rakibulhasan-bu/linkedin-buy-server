import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { manualPricingServices } from "./manualPrice.service";

const createManualPricing = CatchAsyncError(
  async (req: Request, res: Response) => {
    const manualPricing = req.body;

    const result =
      await manualPricingServices.createManualPricingIntoDB(manualPricing);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Manual Pricing Services created successfully",
      data: result,
    });
  },
);

const updateManualPricing = CatchAsyncError(
  async (req: Request, res: Response) => {
    const manualPrice = req.body;
    const { id } = req.params;

    const result = await manualPricingServices.updateManualPricingIntoDB(
      id,
      manualPrice,
    );

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Manual Pricing Services  updated successfully",
      data: result,
    });
  },
);

const getSingleManualPricing = CatchAsyncError(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await manualPricingServices.getSingleManualPricingFromDB(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Manual Pricing Services  retrieved successfully",
      data: result,
    });
  },
);

export const manualPricingController = {
  createManualPricing,
  updateManualPricing,
  getSingleManualPricing,
};
