import { z } from 'zod';

export const createIssueSchema = z.object({
  title: z
    .string({ error: 'Title is required' })
    .min(1)
    .max(255, { error: 'Title is too long' }),
  description: z.string({ error: 'Description is required' }).min(1),
});
