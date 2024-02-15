import { Schema, model } from "mongoose";
import { TPricing } from "./servicesPrize.interface";

const pricingSchema = new Schema<TPricing>(
  {
    sharePrize: { type: Number, required: true },
    connectionPrize: { type: Number, required: true },
    followersPrize: { type: Number, required: true },
    commentsPrize: { type: Number, required: true },
    reactionsPrize: { type: Number, required: true },
    likesPrize: { type: Number, required: true },
  },
  { timestamps: true },
);

const Pricing = model("Pricing", pricingSchema);

export default Pricing;
