import { Request, Response } from "express";
import { CatchAsyncError } from "../../utils/CatchAsyncError";
import { organicPricingServices } from "./organicPrice.service";

const createOrganicPricing = CatchAsyncError(
  async (req: Request, res: Response) => {
    const organicPricing = req.body;

    const result =
      await organicPricingServices.createOrganicPricingIntoDB(organicPricing);

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Organic Pricing Services created successfully",
      data: result,
    });
  },
);

const updateOrganicPricing = CatchAsyncError(
  async (req: Request, res: Response) => {
    const organicPrice = req.body;
    const { id } = req.params;

    const result = await organicPricingServices.updateOrganicPricingIntoDB(
      id,
      organicPrice,
    );

    res.status(201).json({
      success: true,
      statusCode: 201,
      message: "Organic Pricing Services  updated successfully",
      data: result,
    });
  },
);

const getSingleOrganicPricing = CatchAsyncError(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result =
      await organicPricingServices.getSingleOrganicPricingFromDB(id);

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Zero Connection Pricing Services  retrieved successfully",
      data: result,
    });
  },
);

export const organicPricingController = {
  createOrganicPricing,
  updateOrganicPricing,
  getSingleOrganicPricing,
};
