import { TPricing } from "./servicesPrize.interface";
import Pricing from "./servicesPrize.model";

const createPricingIntoDB = async (servicePrice: TPricing) => {
  return await Pricing.create(servicePrice);
};

const getAllPricingFromDB = async () => {
  return await Pricing.find();
};

export const pricingServices = {
  createPricingIntoDB,
  getAllPricingFromDB,
};
