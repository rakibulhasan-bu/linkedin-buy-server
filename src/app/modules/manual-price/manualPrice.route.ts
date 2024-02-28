import express from "express";
import { manualPricingController } from "./manualPrice.controller";
import validateRequest from "../../middleware/validateRequest";
import { ManualPriceValidation } from "./manualPrice.validation";
// import auth from "../../middleware/auth";
// import USER_ROLE from "../user/user.const";

const manualPrizeRoute = express.Router();

manualPrizeRoute.post(
  "/manual-price",
  // auth(USER_ROLE.admin),
  validateRequest(ManualPriceValidation.manualPriceValidationSchema),
  manualPricingController.createManualPricing,
);

manualPrizeRoute.patch(
  "/manual-price/:id",
  // auth(USER_ROLE.admin),
  validateRequest(ManualPriceValidation.updateManualPriceValidationSchema),
  manualPricingController.updateManualPricing,
);

manualPrizeRoute.get(
  "/manual-price/:id",
  manualPricingController.getSingleManualPricing,
);

export default manualPrizeRoute;
