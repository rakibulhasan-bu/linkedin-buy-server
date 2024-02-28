import { TOrganicPrice } from "./organicPrice.interface";
import ZeroConnectionPricing from "./organicPrice.model";

const createOrganicPricingIntoDB = async (
  zeroConnectionPrice: TOrganicPrice,
) => {
  return await ZeroConnectionPricing.create(zeroConnectionPrice);
};

const updateOrganicPricingIntoDB = async (
  id: string,
  payload: Partial<TOrganicPrice>,
) => {
  return await ZeroConnectionPricing.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const getAllOrganicPricingFromDB = async () => {
  return await ZeroConnectionPricing.find();
};

const getSingleOrganicPricingFromDB = async (id: string) => {
  return await ZeroConnectionPricing.findById(id);
};

export const organicPricingServices = {
  createOrganicPricingIntoDB,
  updateOrganicPricingIntoDB,
  getAllOrganicPricingFromDB,
  getSingleOrganicPricingFromDB,
};
