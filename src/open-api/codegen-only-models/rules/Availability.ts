import { z } from 'zod';

export const availabilityRule = () => {
  return (data: any, ctx: z.RefinementCtx) => {
    if (!data.localDateTimeStart) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: 'Invalid start date format.',
        path: ['localDateTimeStart'],
      });
    }

    if (!data.localDateTimeEnd) {
      ctx.addIssue({
        code: z.ZodIssueCode.invalid_date,
        message: 'Invalid end date format.',
        path: ['localDateTimeEnd'],
      });
    }
  };
};
