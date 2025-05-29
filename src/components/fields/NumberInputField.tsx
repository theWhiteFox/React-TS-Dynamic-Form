import { FieldProps } from '../../lib/definitions'
import { Styles as S } from '../FormStyles'

interface Props extends FieldProps<number> {
    error?: string
}

/**
 * Renders a labeled numeric input field with optional error display.
 *
 * Displays a label, a number input, and an error message if provided. The input value is controlled and updates via the supplied `onChange` callback.
 *
 * @param field - Field metadata including name and label.
 * @param value - The current numeric value of the input.
 * @param onChange - Callback invoked with the field name and new numeric value when the input changes.
 * @param error - Optional error message to display below the input.
 */
export default function NumberInputField({ field, value, onChange, error }: Props) {
    return (
        <div>
            <S.Label htmlFor={field.name}>{field.label}</S.Label>
            <S.SmallInput
                id={field.name}
                type="number"
                name={field.name}
                value={value}
                onChange={(e) => onChange(field.name, Number(e.target.value))}
                aria-label={field.label}
                placeholder={`Enter ${field.name}`}
                title={`Input for ${field.label}`}
            />
            {error && <S.ErrorText>{error}</S.ErrorText>}
        </div>
    )
}