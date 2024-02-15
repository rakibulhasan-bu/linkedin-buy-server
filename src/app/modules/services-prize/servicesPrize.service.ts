import { TPricing } from "./servicesPrize.interface";
import Pricing from "./servicesPrize.model";

const createPricingIntoDB = async (servicePrice: TPricing) => {
  return await Pricing.create(servicePrice);
};

const updatePricingIntoDB = async (id: string, payload: Partial<TPricing>) => {
  return await Pricing.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const getAllPricingFromDB = async () => {
  return await Pricing.find();
};

export const pricingServices = {
  createPricingIntoDB,
  updatePricingIntoDB,
  getAllPricingFromDB,
};
