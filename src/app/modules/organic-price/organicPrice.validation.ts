import { z } from "zod";

const organicPriceValidationSchema = z.object({
  body: z.object({
    fiftyConnection: z.object({
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    fiveHundredConnection: z.object({
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    hundredConnection: z.object({
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    nineConnection: z.object({
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    oneThousandConnection: z.object({
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    tenConnection: z.object({
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
    twoHundredConnection: z.object({
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    twoThousandConnection: z.object({
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
  }),
});

const updateOrganicPriceValidationSchema = z.object({
  body: z.object({
    fiftyConnection: z.object({
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    fiveHundredConnection: z.object({
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    hundredConnection: z.object({
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    nineConnection: z.object({
      sixMonths: z.string(),
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    oneThousandConnection: z.object({
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    tenConnection: z.object({
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
    twoHundredConnection: z.object({
      oneYear: z.string(),
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
    twoThousandConnection: z.object({
      fourYear: z.string(),
      tenYear: z.string(),
      moreThanTenYear: z.string(),
    }),
  }),
});

export const OrganicPriceValidation = {
  organicPriceValidationSchema,
  updateOrganicPriceValidationSchema,
};
