import { useState } from "react"
import { z } from "zod"

function useForm<Schema extends z.ZodObject<z.ZodRawShape>>(
    schema: Schema,
    initialValues: z.infer<Schema> = {} as z.infer<Schema>
) {
    type FormData = z.infer<Schema>
    const [formData, setFormData] = useState<FormData>(initialValues)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as HTMLInputElement
        const updatedValue = type === "checkbox" ? (e.target as HTMLInputElement).checked : value

        setFormData((prev: FormData) => ({
            ...prev,
            [name]: updatedValue,
        }))
    }

    const validate = (data: FormData) => {
        return schema.safeParse(data)
    }

    const resetForm = () => {
        setFormData(initialValues)
    }

    return { formData, handleChange, validate, resetForm }
}

export default useForm
