import { TOrderServices } from "./orderServices.interface";
import OrderServices from "./orderServices.model";

const createOrderServicesIntoDB = async (orderServices: TOrderServices) => {
  return await OrderServices.create(orderServices);
};

const updateOrderServicesIntoDB = async (
  id: string,
  payload: Partial<TOrderServices>,
) => {
  return await OrderServices.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const getAllOrderServicesFromDB = async () => {
  return await OrderServices.find();
};

export const OrderServicesServices = {
  createOrderServicesIntoDB,
  updateOrderServicesIntoDB,
  getAllOrderServicesFromDB,
};
