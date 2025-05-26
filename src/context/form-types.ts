import { createContext } from "react"
import { z } from "zod"
import { FormSchema } from "../lib/definitions"

export interface FormContextProps {
    formData: Record<string, unknown>
    handleChange: (name: string, value: unknown) => void
    validate: (data: Record<string, unknown>) => z.SafeParseReturnType<unknown, unknown>
    resetForm: () => void
    errors: z.ZodError | null
    schema: FormSchema
}

// Create the context with an initial value of undefined
export const FormContext = createContext<FormContextProps | undefined>(undefined)