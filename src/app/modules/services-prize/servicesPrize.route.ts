import express from "express";
import { pricingController } from "./servicesPrize.controller";
import validateRequest from "../../middleware/validateRequest";
import { pricingValidation } from "./servicesPrize.validation";
// import auth from "../../middleware/auth";
// import USER_ROLE from "../user/user.const";

const servicePriceRoute = express.Router();

servicePriceRoute.post(
  "/services-price",
  // auth(USER_ROLE.admin),
  validateRequest(pricingValidation.PricingValidationSchema),
  pricingController.createPricing,
);

servicePriceRoute.patch(
  "/services-price/:id",
  // auth(USER_ROLE.admin),
  validateRequest(pricingValidation.updatePricingValidationSchema),
  pricingController.updatePricing,
);

servicePriceRoute.get("/services-price", pricingController.getAllServicePrice);

export default servicePriceRoute;
