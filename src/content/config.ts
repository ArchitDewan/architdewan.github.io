import { defineCollection, z } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(2),
    summary: z.string().min(20).max(180),
    role: z.string().min(2),
    stack: z.array(z.string()).min(1),
    skillsApplied: z.array(z.string()).min(1),
    problem: z.string().min(20).max(220),
    approach: z.string().min(20).max(220),
    outcome: z.string().min(20).max(220),
    repoUrl: z.string().url(),
    liveUrl: z.string().url().optional(),
    caseStudy: z.boolean().default(true),
    featured: z.boolean().default(false),
    homePinned: z.boolean().default(false),
    date: z.coerce.date(),
    coverImage: z.string().optional(),
    visualVariant: z.enum(['incident-timeline', 'api-monitor', 'pr-review', 'classifier-console'])
  })
});

export const collections = {
  projects: projectsCollection
};
