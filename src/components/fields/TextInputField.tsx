import { FieldProps } from '../../lib/definitions'
import { Styles as S } from '../FormStyles'

export default function TextInputField({ field, value, onChange, error }: FieldProps<string>) {
    return (
        <S.FormRow>
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
        </S.FormRow>
    )
}