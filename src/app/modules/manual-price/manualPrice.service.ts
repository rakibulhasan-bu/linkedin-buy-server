import { TManualPrice } from "./manualPrice.interface";
import ManualPricing from "./manualPrice.model";

const createManualPricingIntoDB = async (manualPrice: TManualPrice) => {
  return await ManualPricing.create(manualPrice);
};

const updateManualPricingIntoDB = async (
  id: string,
  payload: Partial<TManualPrice>,
) => {
  return await ManualPricing.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const getAllManualPricingFromDB = async () => {
  return await ManualPricing.find();
};

const getSingleManualPricingFromDB = async (id: string) => {
  return await ManualPricing.findById(id);
};

export const manualPricingServices = {
  createManualPricingIntoDB,
  updateManualPricingIntoDB,
  getAllManualPricingFromDB,
  getSingleManualPricingFromDB,
};
