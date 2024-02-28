import { z } from "zod";

const manualPriceValidationSchema = z.object({
  body: z.object({
    tenConnection: z.object({
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
    fiftyConnection: z.object({
      thirtyDays: z.string(),
      threeMonths: z.string(),
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    hundredConnection: z.object({
      threeMonths: z.string(),
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    twoHundredConnection: z.object({
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    threeHundredConnection: z.object({
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    fiveHundredConnection: z.object({
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
  }),
});

const updateManualPriceValidationSchema = z.object({
  body: z.object({
    tenConnection: z.object({
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
    fiftyConnection: z.object({
      thirtyDays: z.string(),
      threeMonths: z.string(),
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    hundredConnection: z.object({
      threeMonths: z.string(),
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    twoHundredConnection: z.object({
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    threeHundredConnection: z.object({
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    fiveHundredConnection: z.object({
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
  }),
});

export const ManualPriceValidation = {
  manualPriceValidationSchema,
  updateManualPriceValidationSchema,
};
