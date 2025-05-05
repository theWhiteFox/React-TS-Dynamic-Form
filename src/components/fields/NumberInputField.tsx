import { FieldProps } from '../../lib/definitions'
import { Styles as S } from '../FormStyles'

export default function NumberInputField({ field, value, onChange }: FieldProps<number>) {
    return (
        <div>
            <S.Label htmlFor={field.name}>{field.label}</S.Label>
            <S.SmallInput
                id={field.name}
                type="number"
                min="0"
                name={field.name}
                value={value}
                onChange={(e) => onChange(field.name, Number(e.target.value))}
                aria-label={field.label}
                placeholder={`Enter ${field.name}`}
                title={`Input for ${field.name}`}
            />
        </div>
    )
}