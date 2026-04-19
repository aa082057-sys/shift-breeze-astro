import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.string(),
    keyword: z.string(),
    relatedKeywords: z.array(z.string()).default([]),
    eyecatch: z.string().optional(),
    wordCount: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
