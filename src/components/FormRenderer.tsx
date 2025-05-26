import { createContext, FormEvent, useState, ReactNode } from "react"
import { useFormContext } from "../hooks/useFormHook"
import { z } from 'zod'
import { Field, FormSchema } from '../lib/definitions'
import TextField from './fields/TextInputField'
import AgeNumberField from "./fields/NumberInputField"
import SubscribeCheckboxField from "./fields/CheckboxInputField"
import SelectField from "./fields/DropdownInputField"
import { Styles as S } from './FormStyles'
import { HiOutlineUser, HiGlobe } from 'react-icons/hi'
import useForm from "../hooks/useForm"
import DateField from "./fields/DateField"
import TextareaField from "./fields/TextareaField"
import { IconContext } from "react-icons"
import { uiSchema } from "../lib/schema"

// 1. Define the shape of the data that will be provided by the context 
interface FormContextProps {
    formData: Record<string, unknown>
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void
    validate: (data: Record<string, unknown>) => z.SafeParseReturnType<unknown, unknown>
    resetForm: () => void
    schema: FormSchema
}

// Create a context to share form data and handlers across components
// undefined is used as the default value to indicate that the context is not initialized
const FormContext = createContext<FormContextProps | undefined>(undefined)

export const FormProvider = ({ schema, zodSchema, children }: { schema: FormSchema; zodSchema: z.ZodObject<z.ZodRawShape>; children: ReactNode }) => {
    const { formData, handleChange, validate, resetForm: resetFromState, errors } = useForm(zodSchema)

    const value = {
        formData,
        handleChange,
        errors,
        validate,
        resetForm: resetFromState,
        schema
    }
    return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export default function FormRenderer() {
    const { formData, handleChange, validate, resetForm: resetFormState, errors } = useFormContext()

    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const result = validate(formData)

        if (!result.success) {
            setSubmitted(false)
            return
        }

        setSubmitted(true)
    }

    const resetForm = () => {
        resetFormState()
        setSubmitted(false)
    }

    const renderField = (field: Field) => {
        const errorMessage = errors?.formErrors?.fieldErrors?.[field.name]?.[0]
        const value = (() => {
            const raw = formData[field.name as keyof typeof formData]

            switch (field.type) {
                case 'checkbox':
                    return Boolean(raw)
                case 'number':
                    return raw === undefined ? '' : Number(raw)
                case 'text':
                    return String(raw ?? '')
                case 'textarea':
                    return String(raw ?? '')
                case 'date':
                    return raw instanceof Date
                        ? raw.toISOString().split('T')[0]  // ✅ format to YYYY-MM-DD
                        : raw ?? ''
                case 'select':
                    return String(raw ?? '')
                default:
                    return ''
            }
        })()

        const fieldComponents = {
            text: TextField,
            number: AgeNumberField,
            checkbox: SubscribeCheckboxField,
            select: SelectField,
            textarea: TextareaField,
            date: DateField
        } as Record<string, React.ComponentType<{ field: Field; value: string | number | boolean; onChange: (name: string, value: string | number | boolean) => void; error?: string }>>

        const Component = fieldComponents[field.type as keyof typeof fieldComponents]

        if (!Component) return null

        return (
            <Component
                key={field.name}
                field={field}
                value={value as string | number | boolean}
                onChange={(name: string, value: string | number | boolean) =>
                    handleChange(name, value)
                }
                error={errorMessage}
            />
        )
    }

    return (
        <S.FormContainer>
            <S.StyledForm onSubmit={handleSubmit}>
                <IconContext.Provider value={{ color: 'blue', size: '20px' }}>
                    <a href="https://www.thewhitefoxdev.blog/blog/React-TS-Dynamic-Form" title="Learn more Blog Post">
                        <HiGlobe />
                    </a>
                </IconContext.Provider>
                <S.UserIconWrapper size="2.5em">
                    <HiOutlineUser size={42} />
                </S.UserIconWrapper>
                <h2>{uiSchema.title}</h2>
                <S.FieldWrapper>{uiSchema.fields.map(renderField)}</S.FieldWrapper>
                <S.SubmitRow>
                    <S.Button type="submit" $variant="submit">Submit</S.Button>
                    <S.Button type="button" $variant="reset" onClick={resetForm}>
                        Reset
                    </S.Button>
                </S.SubmitRow>
                {submitted && (
                    <S.JsonOutput>
                        {JSON.stringify(formData, null, 2)}
                    </S.JsonOutput>
                )}
            </S.StyledForm>
        </S.FormContainer>
    )
}