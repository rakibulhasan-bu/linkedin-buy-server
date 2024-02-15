import { z } from "zod";

const PricingValidationSchema = z.object({
  body: z.object({
    sharePrize: z.number(),
    connectionPrize: z.number(),
    followersPrize: z.number(),
    commentsPrize: z.number(),
    reactionsPrize: z.number(),
    likesPrize: z.number(),
  }),
});

const updatePricingValidationSchema = z.object({
  body: z.object({
    sharePrize: z.number().optional(),
    connectionPrize: z.number().optional(),
    followersPrize: z.number().optional(),
    commentsPrize: z.number().optional(),
    reactionsPrize: z.number().optional(),
    likesPrize: z.number().optional(),
  }),
});

export const pricingValidation = {
  PricingValidationSchema,
  updatePricingValidationSchema,
};
