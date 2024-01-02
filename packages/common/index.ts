import { z } from "zod";

export const loginZod = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});
export const userZod = z.object({
    id: z.string().optional(),
    username: z.string().min(3, "Username must be at least 3").max(40, "Username must be less than 40"),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
    email: z.string().email(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export const createPostInput = z.object({
    title: z.string().min(3, "title must be of 3 characters minimum"),
    body: z.string().min(6, "body must be of 6 characters minimum"),
});

export const updatePostInput = z.object({
    title: z.string().min(3, "title must be of 3 characters minimum").optional(),
    body: z.string().min(6, "body must be of 6 characters minimum").optional(),
})

export type loginType = z.infer<typeof loginZod>;
export type userType = z.infer<typeof userZod>;