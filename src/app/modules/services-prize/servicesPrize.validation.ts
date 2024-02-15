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

export const pricingValidation = {
  PricingValidationSchema,
};
