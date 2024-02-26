import { TZeroConnectionPricing } from "./zeroConnectionPrize.interface";
import ZeroConnectionPricing from "./zeroConnectionPrize.model";

const createZeroConnectionPricingIntoDB = async (
  zeroConnectionPrice: TZeroConnectionPricing,
) => {
  return await ZeroConnectionPricing.create(zeroConnectionPrice);
};

const updateZeroConnectionPricingIntoDB = async (
  id: string,
  payload: Partial<TZeroConnectionPricing>,
) => {
  return await ZeroConnectionPricing.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const getAllZeroConnectionPricingFromDB = async () => {
  return await ZeroConnectionPricing.find();
};

export const zeroConnectionPricingServices = {
  createZeroConnectionPricingIntoDB,
  updateZeroConnectionPricingIntoDB,
  getAllZeroConnectionPricingFromDB,
};
