import { FieldProps } from "../../lib/definitions"
import { Styles as S } from '../FormStyles'

/**
 * Renders a labeled textarea input field with optional error display.
 *
 * Displays a textarea associated with the provided field metadata, current value, and change handler. Shows an error message below the textarea if one is provided.
 *
 * @param field - Field metadata including name and label.
 * @param value - The current value of the textarea.
 * @param onChange - Callback invoked with the field name and new value when the textarea content changes.
 * @param error - Optional error message to display below the textarea.
 */
export default function TextareaField({ field, value, onChange, error }: FieldProps<string>) {
    return (
        <div>
            <S.Label htmlFor={field.name}>{field.label}</S.Label>
            <S.Textarea
                id={field.name}
                name={field.name}
                value={value}
                onChange={(e: { target: { value: string } }) => onChange(field.name, e.target.value)}
                rows={4}
                placeholder={`Enter ${field.label}`}
            />
            {error && <S.ErrorText>{error}</S.ErrorText>}
        </div>
    )
}
