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

// 1. Define the shape of the data that will be provided by the context 
// export interface FormContextProps {
//     formData: Record<string, unknown>
//     handleChange: (name: string, value: string | number | boolean) => void
//     validate: (data: Record<string, unknown>) => z.SafeParseReturnType<unknown, unknown>
//     resetForm: () => void
//     schema: FormSchema
//     errors: z.ZodError | null
// }
