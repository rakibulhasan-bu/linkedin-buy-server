import { Schema, model } from "mongoose";
import { ConnectionType } from "./manualPrice.interface";

// Define types
type DurationType =
  | "sevenDays"
  | "fifteenDays"
  | "thirtyDays"
  | "threeMonths"
  | "sixMonths"
  | "oneYear"
  | "fourYear"
  | "tenYear"
  | "moreThanTenYear";

type PricingValue = string;

interface ConnectionPricing extends Record<DurationType, PricingValue> {}

interface ManualPricing extends Record<ConnectionType, ConnectionPricing> {}

// Define Mongoose schema
const NinePricingSchema = new Schema<ConnectionPricing>({
  sevenDays: { type: String, required: true },
  fifteenDays: { type: String, required: true },
  thirtyDays: { type: String, required: true },
  threeMonths: { type: String, required: true },
  sixMonths: { type: String, required: true },
  oneYear: { type: String, required: true },
  fourYear: { type: String, required: true },
  tenYear: { type: String, required: true },
  moreThanTenYear: { type: String, required: true },
});

const SevenPricingSchema = new Schema<ConnectionPricing>({
  thirtyDays: { type: String, required: true },
  threeMonths: { type: String, required: true },
  sixMonths: { type: String, required: true },
  oneYear: { type: String, required: true },
  fourYear: { type: String, required: true },
  tenYear: { type: String, required: true },
  moreThanTenYear: { type: String, required: true },
});

const SixPricingSchema = new Schema<ConnectionPricing>({
  threeMonths: { type: String, required: true },
  sixMonths: { type: String, required: true },
  oneYear: { type: String, required: true },
  fourYear: { type: String, required: true },
  tenYear: { type: String, required: true },
  moreThanTenYear: { type: String, required: true },
});

const FivePricingSchema = new Schema<ConnectionPricing>({
  sixMonths: { type: String, required: true },
  oneYear: { type: String, required: true },
  fourYear: { type: String, required: true },
  tenYear: { type: String, required: true },
  moreThanTenYear: { type: String, required: true },
});

const FourPricingSchema = new Schema<ConnectionPricing>({
  oneYear: { type: String, required: true },
  fourYear: { type: String, required: true },
  tenYear: { type: String, required: true },
  moreThanTenYear: { type: String, required: true },
});

const ThreePricingSchema = new Schema<ConnectionPricing>({
  fourYear: { type: String, required: true },
  tenYear: { type: String, required: true },
  moreThanTenYear: { type: String, required: true },
});

const ManualPricingSchema = new Schema<ManualPricing>(
  {
    tenConnection: NinePricingSchema,
    fiftyConnection: SevenPricingSchema,
    hundredConnection: SixPricingSchema,
    twoHundredConnection: FivePricingSchema,
    threeHundredConnection: FourPricingSchema,
    fiveHundredConnection: ThreePricingSchema,
  },
  { timestamps: true },
);

const ManualPricing = model("ManualPricing", ManualPricingSchema);

export default ManualPricing;
