import { FieldProps } from '../../lib/definitions'
import { Styles as S } from '../FormStyles'

/**
 * Renders a labeled text input field with optional error display for use in forms.
 *
 * Displays a label, a styled text input, and an error message if provided. The input value and change handler are controlled via props.
 *
 * @param field - Field metadata including name and label.
 * @param value - Current value of the input.
 * @param onChange - Callback invoked with the field name and new value when the input changes.
 * @param error - Optional error message to display below the input.
 */
export default function TextInputField({ field, value, onChange, error }: FieldProps<string>) {
    return (
        <div>
            <S.Label htmlFor={field.name}>{field.label}</S.Label>
            <S.CustomInput
                id={field.name}
                type="text"
                name={field.name}
                value={value}
                onChange={(e) => onChange(field.name, e.target.value)}
                placeholder={`Enter ${field.name}`}
                title={`Input for ${field.label}`}
            />
            {error && <S.ErrorText>{error}</S.ErrorText>}
        </div>
    )
}