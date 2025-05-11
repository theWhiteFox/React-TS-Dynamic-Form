import { useState } from "react"
import { z } from "zod"

function useForm<Schema extends z.ZodObject<z.ZodRawShape>>(
    schema: Schema,
    initialValues: z.infer<Schema> = {} as z.infer<Schema>
) {
    type FormData = z.infer<Schema>
    const [formData, setFormData] = useState<FormData>(initialValues)
    const [errors, setErrors] = useState<z.ZodError<FormData> | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as HTMLInputElement
        const updatedValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value

        setFormData((prev: FormData) => ({
            ...prev,
            [name]: updatedValue,
        }))
    }

    const validate = (data: FormData) => {
        const result = schema.safeParse(data)
        if (!result.success) {
            setErrors(result.error) // Directly set the ZodError object
        } else {
            setErrors(null)
        }
        return result
    }

    const resetForm = () => {
        setFormData(initialValues)
        setErrors(null)
    }

    return { formData, handleChange, validate, resetForm, errors }
}

export default useForm
