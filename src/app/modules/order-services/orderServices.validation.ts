import { z } from "zod";

const orderServicesValidationSchema = z.object({
  body: z.object({
    commentsPostLink: z.string().optional(),
    connectionsPostLink: z.string().optional(),
    email: z.string().email(),
    followersPostLink: z.string().optional(),
    likesPostLink: z.string().optional(),
    reactionsPostLink: z.string().optional(),
    sharePostLink: z.string().optional(),
    skype: z.string().optional(),
    telegram: z.string().optional(),
    whatsApp: z.string().optional(),
    share: z.union([z.number(), z.string()]).optional(),
    connections: z.union([z.number(), z.string()]).optional(),
    followers: z.union([z.number(), z.string()]).optional(),
    comments: z.union([z.number(), z.string()]).optional(),
    reactions: z.union([z.number(), z.string()]).optional(),
    likes: z.union([z.number(), z.string()]).optional(),
    totalPrize: z.union([z.number(), z.string()]),
  }),
});

const updateOrderServicesValidationSchema = z.object({
  body: z.object({
    commentsPostLink: z.string(),
    connectionsPostLink: z.string(),
    email: z.string().email(),
    followersPostLink: z.string(),
    likesPostLink: z.string(),
    reactionsPostLink: z.string(),
    sharePostLink: z.string(),
    skype: z.string(),
    telegram: z.string(),
    whatsApp: z.string(),
    share: z.number(),
    connections: z.number(),
    followers: z.number(),
    comments: z.number(),
    reactions: z.number(),
    likes: z.number(),
    totalPrize: z.string(),
  }),
});

export const orderServicesValidation = {
  orderServicesValidationSchema,
  updateOrderServicesValidationSchema,
};
