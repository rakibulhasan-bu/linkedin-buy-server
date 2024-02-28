import { Schema, model } from "mongoose";
import { ConnectionType } from "./organicPrice.interface";

// Define types
type DurationType =
  | "sixMonths"
  | "oneYear"
  | "fourYear"
  | "tenYear"
  | "moreThanTenYear";
type PricingValue = string;

interface ConnectionPricing extends Record<DurationType, PricingValue> {}

interface OrganicPricing extends Record<ConnectionType, ConnectionPricing> {}

// Define Mongoose schema
const SixPricingSchema = new Schema<ConnectionPricing>({
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

const OrganicPricingSchema = new Schema<OrganicPricing>(
  {
    fiftyConnection: SixPricingSchema,
    fiveHundredConnection: FourPricingSchema,
    hundredConnection: SixPricingSchema,
    nineConnection: SixPricingSchema,
    oneThousandConnection: ThreePricingSchema,
    tenConnection: SixPricingSchema,
    threeHundredConnection: FourPricingSchema,
    twoHundredConnection: FourPricingSchema,
    twoThousandConnection: ThreePricingSchema,
  },
  { timestamps: true },
);

const OrganicPricing = model("OrganicPricing", OrganicPricingSchema);

export default OrganicPricing;
