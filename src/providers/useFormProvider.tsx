// src/providers/useFormProvider.tsx
import { ReactNode } from 'react'
import { z } from 'zod'
import useForm from '../hooks/useForm'
import { FormContextProps, FormContext } from '../context/form-types'
import { FormSchema } from '../lib/definitions'


// Define the props for the FormProvider component
interface FormProviderProps {
    schema: FormSchema
    zodSchema: z.ZodObject<z.ZodRawShape>
    children: ReactNode
}

export const FormProvider = ({ schema, zodSchema, children }: FormProviderProps) => {
    const { formData, handleChange: internalHandleChange, validate, resetForm: resetFromState, errors } = useForm(zodSchema)

    // Wrapper to match the context's handleChange signature
    const handleChange = (name: string, value: unknown) => {
        internalHandleChange({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>)
    }

    const value: FormContextProps = {
        formData,
        handleChange,
        validate,
        resetForm: resetFromState,
        errors,
        schema
    }

    return <FormContext.Provider value={value}> {children} </FormContext.Provider>
}