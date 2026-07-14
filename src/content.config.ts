import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    image: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    icon: z.string(),
    features: z.array(z.object({ icon: z.string(), text: z.string() })),
    ctaLabel: z.string(),
    ctaHref: z.string(),
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    badge: z.string(),
    image: z.string(),
    dateLabel: z.string(),
    startDate: z.coerce.date(),
    venue: z.string(),
    duration: z.string(),
    ctaLabel: z.string(),
    ctaHref: z.string(),
    draft: z.boolean().default(false),
  }),
});

// Renamed from wahyuteguh.com's "resources" collection — same shape, "gift" branding.
const gift = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/gift' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // "webapp"  -> interactive tool embedded via iframe
    // "landing" -> download page (ebook, audio, template, etc.)
    type: z.enum(['webapp', 'landing']),
    icon: z.string().default('🌿'),
    appUrl: z.string().optional(),
    downloadUrl: z.string().optional(),
    downloadLabel: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const testimonials = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/testimonials' }),
  schema: z.object({
    name: z.string(),
    batch: z.string(),
    initial: z.string(),
    // Tailwind gradient stops, e.g. "green-400" / "green-600".
    avatarFrom: z.string(),
    avatarTo: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, products, events, gift, testimonials };
