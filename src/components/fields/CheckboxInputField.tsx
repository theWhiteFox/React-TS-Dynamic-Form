import { FieldProps } from '../../lib/definitions'
import { Styles as S } from '../FormStyles'

export default function CheckboxInputField({ field, value, onChange, error }: FieldProps<boolean>) {
    return (
        <S.FormRow>
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
        </S.FormRow>
    )
}