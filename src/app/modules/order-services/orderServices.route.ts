import express from "express";
import { orderServicesController } from "./orderServices.controller";
import validateRequest from "../../middleware/validateRequest";
import { orderServicesValidation } from "./orderServices.validation";
// import auth from "../../middleware/auth";
// import USER_ROLE from "../user/user.const";

const orderServicesRoute = express.Router();

orderServicesRoute.post(
  "/order-services",
  // auth(USER_ROLE.admin),
  validateRequest(orderServicesValidation.orderServicesValidationSchema),
  orderServicesController.createOrderServices,
);

orderServicesRoute.patch(
  "/order-services/:id",
  // auth(USER_ROLE.admin),
  validateRequest(orderServicesValidation.updateOrderServicesValidationSchema),
  orderServicesController.updateOrderServices,
);

orderServicesRoute.get(
  "/order-services",
  orderServicesController.getAllOrderServices,
);

export default orderServicesRoute;
