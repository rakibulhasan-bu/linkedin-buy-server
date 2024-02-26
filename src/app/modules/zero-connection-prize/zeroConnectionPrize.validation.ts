import { z } from "zod";

const ZeroConnectionPricingValidationSchema = z.object({
  body: z.object({
    sevenDays: z.string(),
    fifteenDays: z.string(),
    thirtyDays: z.string(),
    threeMonths: z.string(),
    sixMonths: z.string(),
    oneYear: z.string(),
    fourYear: z.string(),
    tenYear: z.string(),
    moreThanTenYear: z.string(),
  }),
});

const updateZeroConnectionPricingValidationSchema = z.object({
  body: z.object({
    sevenDays: z.string(),
    fifteenDays: z.string(),
    thirtyDays: z.string(),
    threeMonths: z.string(),
    sixMonths: z.string(),
    oneYear: z.string(),
    fourYear: z.string(),
    tenYear: z.string(),
    moreThanTenYear: z.string(),
  }),
});

export const ZeroConnectionPricingValidation = {
  ZeroConnectionPricingValidationSchema,
  updateZeroConnectionPricingValidationSchema,
};
