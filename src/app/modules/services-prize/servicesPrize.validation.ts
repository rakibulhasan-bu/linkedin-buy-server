import { z } from "zod";

const PricingValidationSchema = z.object({
  body: z.object({
    sharePrize: z.string(),
    connectionPrize: z.string(),
    followersPrize: z.string(),
    commentsPrize: z.string(),
    reactionsPrize: z.string(),
    likesPrize: z.string(),
  }),
});

const updatePricingValidationSchema = z.object({
  body: z.object({
    sharePrize: z.string(),
    connectionPrize: z.string(),
    followersPrize: z.string(),
    commentsPrize: z.string(),
    reactionsPrize: z.string(),
    likesPrize: z.string(),
  }),
});

export const pricingValidation = {
  PricingValidationSchema,
  updatePricingValidationSchema,
};
