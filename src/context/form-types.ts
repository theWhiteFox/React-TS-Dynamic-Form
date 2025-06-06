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

/**
+ * React context for form state management and validation.
+ * Must be used within a FormProvider to access form functionality.
+ */
export const FormContext = createContext<FormContextProps | undefined>(undefined)