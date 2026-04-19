import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/articles' }),
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
