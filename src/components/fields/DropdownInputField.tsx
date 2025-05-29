import { FieldProps } from '../../lib/definitions'
import { Styles as S } from '../FormStyles'

/**
 * Renders a labeled dropdown input field with selectable options and optional error display.
 *
 * @param field - Field configuration, including name, label, and available options.
 * @param value - The currently selected value.
 * @param onChange - Callback invoked with the field name and new value when selection changes.
 * @param error - Optional error message to display below the dropdown.
 *
 * @returns A React element representing the dropdown input field.
 */
export default function DropdownInputField({ field, value, onChange, error }: FieldProps<string>) {
    return (
        <div>
            <S.Label htmlFor={field.name}>{field.label}</S.Label>
            <S.Select
                id={field.name}
                name={field.name}
                value={value}
                onChange={(e) => onChange(field.name, e.target.value)}
                title={`Input for ${field.label}`}
            >
                <S.Option value="">-- Select --</S.Option>
                {field.options?.map((option) => (
                    <S.Option key={option} value={option}>
                        {option}
                    </S.Option>
                ))}
            </S.Select>
            {error && <S.ErrorText>{error}</S.ErrorText>}
        </div>
    )
}