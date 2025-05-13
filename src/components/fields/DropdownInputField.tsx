import { FieldProps } from '../../lib/definitions'
import { Styles as S } from '../FormStyles'

export default function DropdownInputField({ field, value, onChange, error }: FieldProps<string>) {
    return (
        <div>
            <S.Label htmlFor={field.name}>{field.label}</S.Label>
            <S.Select
                id={field.name}
                name={field.name}
                value={value}
                onChange={(e) => onChange(field.name, e.target.value)}
                title={`Input for ${field.name}`}
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