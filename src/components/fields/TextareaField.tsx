import { FieldProps } from "../../lib/definitions"
import { Styles as S } from '../FormStyles'

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
