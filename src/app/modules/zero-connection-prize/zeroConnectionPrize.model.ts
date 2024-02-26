import { Schema, model } from "mongoose";
import { TZeroConnectionPricing } from "./zeroConnectionPrize.interface";

const zeroConnectionPricingSchema = new Schema<TZeroConnectionPricing>(
  {
    sevenDays: { type: String, required: true },
    fifteenDays: { type: String, required: true },
    thirtyDays: { type: String, required: true },
    threeMonths: { type: String, required: true },
    sixMonths: { type: String, required: true },
    oneYear: { type: String, required: true },
    fourYear: { type: String, required: true },
    tenYear: { type: String, required: true },
    moreThanTenYear: { type: String, required: true },
  },
  { timestamps: true },
);

const ZeroConnectionPricing = model(
  "ZeroConnectionPricing",
  zeroConnectionPricingSchema,
);

export default ZeroConnectionPricing;
