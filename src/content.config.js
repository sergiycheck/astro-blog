import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
	loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/data/blog-posts" }),
	schema: z.object({
		postMain: z.boolean(),
		title: z.string(),
		parentSlug: z.string().optional(),
		slug: z.string(),
		publishDate: z.union([z.string(), z.date()]),
		description: z.string(),
	}),
});

export const collections = { posts };