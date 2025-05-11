import { FieldProps } from '../../lib/definitions'
import { Styles as S } from '../FormStyles'

interface Props extends FieldProps<number> {
    error?: string
}

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
                title={`Input for ${field.name}`}
            />
            {error && <S.ErrorText>{error}</S.ErrorText>}
        </div>
    )
}