import { Schema, model } from "mongoose";
import { TPricing } from "./servicesPrize.interface";

const pricingSchema = new Schema<TPricing>(
  {
    sharePrize: { type: String, required: true },
    connectionPrize: { type: String, required: true },
    followersPrize: { type: String, required: true },
    commentsPrize: { type: String, required: true },
    reactionsPrize: { type: String, required: true },
    likesPrize: { type: String, required: true },
  },
  { timestamps: true },
);

const Pricing = model("Pricing", pricingSchema);

export default Pricing;
