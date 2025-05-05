import { FormEvent, useState } from "react"
import { z } from 'zod'
import { Field, FormSchema } from "../lib/definitions"
import TextField from './fields/TextInputField'
import AgeNumberField from "./fields/NumberInputField"
import SubscribeCheckboxField from "./fields/CheckboxInputField"
import SelectField from "./fields/DropdownInputField"
import { Styles as S } from './FormStyles'
import { HiOutlineUser } from 'react-icons/hi'
import useForm from "../hooks/useForm"
import DateField from "./fields/DateField"
import TextareaField from "./fields/TextareaField"

interface Props {
    schema: FormSchema
    zodSchema: z.ZodObject<z.ZodRawShape>
}

export default function FormRenderer({ schema, zodSchema }: Props) {
    const { formData, handleChange, validate, resetForm: resetFormState } = useForm(zodSchema)
    const [errors, setErrors] = useState<Record<string, string>>({})
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const result = validate(formData)

        if (!result.success) {
            const zodErrors = result.error.format()
            const newErrors: Record<string, string> = {}

            for (const key in zodErrors) {
                if (key !== "_errors" && zodErrors[key]?._errors?.length) {
                    newErrors[key] = zodErrors[key]._errors[0]
                }
            }

            setErrors(newErrors)
            setSubmitted(false)
            return
        }

        setErrors({})
        setSubmitted(true)
    }

    const resetForm = () => {
        resetFormState()
        setErrors({})
        setSubmitted(false)
    }

    const renderField = (field: Field) => {
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
                value={value}
                onChange={(name: string, value: string | number | boolean) =>
                    handleChange({ target: { name, value } } as React.ChangeEvent<HTMLInputElement>)
                }
                error={errors[field.name]}
            />
        )
    }

    return (
        <S.FormContainer>
            <S.StyledForm onSubmit={handleSubmit}>
                <S.UserIconWrapper size="2.5em">
                    <HiOutlineUser size={42} />
                </S.UserIconWrapper>
                <h2>{schema.title}</h2>
                <S.FieldWrapper>{schema.fields.map(renderField)}</S.FieldWrapper>
                <S.SubmitRow>
                    <S.SubmitButton type="submit">Submit</S.SubmitButton>
                    <S.ResetButton type="button" onClick={resetForm}>
                        Reset
                    </S.ResetButton>
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