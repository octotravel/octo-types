import { z } from 'zod';

export const availabilityCheckBodyRule = () => {
  return (data: any, ctx: z.RefinementCtx) => {
    const { availabilityIds, localDate, localDateStart, localDateEnd } = data;

    if (availabilityIds && (localDate || localDateStart || localDateEnd)) {
      ctx.addIssue({
        path: ['availabilityIds'],
        code: z.ZodIssueCode.custom,
        message: 'cannot use localDate/localDateStart/localDateEnd and availabilityIds in the same request',
      });
    }

    if (localDate && (localDateStart || localDateEnd)) {
      ctx.addIssue({
        path: ['localDate'],
        code: z.ZodIssueCode.custom,
        message: 'cannot use localDate and localDateStart/localDateEnd in the same request',
      });
    }

    if (!((localDateStart && localDateEnd) || localDate || availabilityIds)) {
      ctx.addIssue({
        path: ['localDate'],
        code: z.ZodIssueCode.custom,
        message: 'either localDate, localDateStart/localDateEnd or availabilityIds is required',
      });
    }

    if (availabilityIds && availabilityIds.length > 100) {
      ctx.addIssue({
        path: ['availabilityIds'],
        code: z.ZodIssueCode.custom,
        message: 'cannot request more than 100 availability objects at a time',
      });
    }

    if (localDateStart && localDateEnd) {
      const start = new Date(localDateStart);
      const end = new Date(localDateEnd);
      const maxEnd = new Date(start.getFullYear() + 1, start.getMonth(), start.getDate());

      if (end > maxEnd) {
        ctx.addIssue({
          path: ['localDateEnd'],
          code: z.ZodIssueCode.custom,
          message: 'cannot request more than 1 year of availability',
        });
      }
    }
  };
};
