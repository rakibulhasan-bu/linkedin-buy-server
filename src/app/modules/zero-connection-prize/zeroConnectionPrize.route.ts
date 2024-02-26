import express from "express";
import { zeroConnectionPricingController } from "./zeroConnectionPrize.controller";
import validateRequest from "../../middleware/validateRequest";
import { ZeroConnectionPricingValidation } from "./zeroConnectionPrize.validation";
// import auth from "../../middleware/auth";
// import USER_ROLE from "../user/user.const";

const zeroConnectionPrizeRoute = express.Router();

zeroConnectionPrizeRoute.post(
  "/zero-connection-price",
  // auth(USER_ROLE.admin),
  validateRequest(
    ZeroConnectionPricingValidation.ZeroConnectionPricingValidationSchema,
  ),
  zeroConnectionPricingController.createZeroConnectionPricing,
);

zeroConnectionPrizeRoute.patch(
  "/zero-connection-price/:id",
  // auth(USER_ROLE.admin),
  validateRequest(
    ZeroConnectionPricingValidation.updateZeroConnectionPricingValidationSchema,
  ),
  zeroConnectionPricingController.updateZeroConnectionPricing,
);

zeroConnectionPrizeRoute.get(
  "/zero-connection-price",
  zeroConnectionPricingController.getAllZeroConnectionPricing,
);

export default zeroConnectionPrizeRoute;
