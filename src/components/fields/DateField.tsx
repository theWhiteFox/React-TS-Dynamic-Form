import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { FieldProps } from '../../lib/definitions'
import { Styles as S } from '../FormStyles'

export default function DateField({ field, value, onChange, error }: FieldProps<string>) {
    const [selectedDate, setSelectedDate] = useState<Date | null>(value ? new Date(value) : null)

    useEffect(() => {
        setSelectedDate(value ? new Date(value) : null)
    }, [value])

    const handleChange = (date: Date | null) => {
        setSelectedDate(date)
        const formattedDate = date ? formatDate(date) : ''
        onChange(field.name, formattedDate)
    }

    const formatDate = (date: Date): string => {
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        return `${year}-${month}-${day}`
    }

    return (
        <div>
            <S.Label htmlFor={field.name}>{field.label}</S.Label>
            <DatePicker
                id={field.name}
                selected={selectedDate}
                onChange={handleChange}
                dateFormat="dd-MM-yyyy"
                maxDate={new Date()}
                placeholderText={`Select ${field.label}`}
                showMonthDropdown
                showYearDropdown
                dropdownMode="select"
                customInput={<S.CustomInput />}
            />
            {error && <S.ErrorText>{error}</S.ErrorText>}
        </div>
    )
}