import express from "express";
import { organicPricingController } from "./organicPrice.controller";
import validateRequest from "../../middleware/validateRequest";
import { OrganicPriceValidation } from "./organicPrice.validation";
// import auth from "../../middleware/auth";
// import USER_ROLE from "../user/user.const";

const organicPrizeRoute = express.Router();

organicPrizeRoute.post(
  "/organic-price",
  // auth(USER_ROLE.admin),
  validateRequest(OrganicPriceValidation.organicPriceValidationSchema),
  organicPricingController.createOrganicPricing,
);

organicPrizeRoute.patch(
  "/organic-price/:id",
  // auth(USER_ROLE.admin),
  validateRequest(OrganicPriceValidation.updateOrganicPriceValidationSchema),
  organicPricingController.updateOrganicPricing,
);

organicPrizeRoute.get(
  "/organic-price/:id",
  organicPricingController.getSingleOrganicPricing,
);

export default organicPrizeRoute;
