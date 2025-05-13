// General Field Types for form fields
type FieldType = 'text' | 'number' | 'checkbox' | 'select' | 'date' | 'textarea'

// Interface for form schema
export interface FormSchema {
    title: string
    fields: Field[]
}

// Base structure for any field type
type BaseField = {
    label: string
    name: string
    required?: boolean
}

// Field Props: Generic for all types of fields
export interface FieldProps<T> {
    field: BaseField & { type: FieldType; options?: string[] } // Field specific props
    value: T
    onChange: (name: string, value: T) => void
    error?: string
}

// Specific Field Types with additional attributes
type TextField = BaseField & { type: 'text' }
type TextareaField = BaseField & { type: 'textarea' }
type NumberField = BaseField & { type: 'number'; min?: number; max?: number }
type CheckboxField = BaseField & { type: 'checkbox' }
type DateField = BaseField & { type: 'date' }
type SelectField = BaseField & { type: 'select'; options?: string[] }

// Union type for all field types
export type Field = TextField | TextareaField | NumberField | CheckboxField | DateField | SelectField