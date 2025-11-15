// src/content.config.ts

import { defineCollection, z } from "astro:content";

const articlesCollection = defineCollection({
// If the articles are .md or .mdx, you don't specify the type.
  schema: z.object({
    title: z.string(),
    date: z.date(),
    excerpt: z.string().optional()
  })
});

export const collections = {
  articles: articlesCollection,
// Omit pages and templates so Astro ignores them and doesn't expect files there.
};