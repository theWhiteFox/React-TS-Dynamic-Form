import { FieldProps } from '../../lib/definitions'
import { Styles as S } from '../FormStyles'

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
                title={`Input for ${field.name}`}
            />
            {error && <S.ErrorText>{error}</S.ErrorText>}
        </div>
    )
}