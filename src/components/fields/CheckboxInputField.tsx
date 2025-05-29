import { FieldProps } from '../../lib/definitions'
import { Styles as S } from '../FormStyles'

/**
 * Renders a styled checkbox input field with label and optional error message.
 *
 * @param field - Field metadata including name and label.
 * @param value - Whether the checkbox is checked.
 * @param onChange - Callback invoked with the field name and new checked state when the checkbox value changes.
 * @param error - Optional error message to display below the input.
 */
export default function CheckboxInputField({ field, value, onChange, error }: FieldProps<boolean>) {
    return (
        <div>
            <S.Label htmlFor={field.name}>{field.label}</S.Label>
            <S.Input
                id={field.name}
                type="checkbox"
                name={field.name}
                checked={value === true}
                onChange={(e) => onChange(field.name, e.target.checked)}
                title={`Input for ${field.label}`}
            />
            {error && <S.ErrorText>{error}</S.ErrorText>}
        </div>
    )
}