import { FormSchema } from "./definitions"
import { z } from 'zod'

export const myFormSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    age: z
        .coerce
        .number()
        .min(0, "Age must be 0 or more")
        .max(120, "Age must be 120 or less")
        .optional(),
    subscribe: z.boolean().default(false),
    gender: z.enum(["Male", "Female", "Other"]).optional(),
    date: z.coerce.date().optional(),
    words: z.string().min(5, { message: "Please write at least 5 characters." }).optional()
})

export const schema: FormSchema = {
    title: "User Registration",
    fields: [
        { label: "Name", type: "text", name: "name", required: true },
        { label: "Age", type: "number", name: "age" },
        { label: "Subscribe", type: "checkbox", name: "subscribe" },
        { label: "Gender", type: "select", name: "gender", options: ["Male", "Female", "Other"] },
        { label: "D.O.B", type: "date", name: "date" },
        { label: "Write", type: "text", name: "words" }
    ]
}
