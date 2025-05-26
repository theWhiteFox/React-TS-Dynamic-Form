import { useContext } from 'react'
import { FormContext, FormContextProps } from '../context/form-types'

// Custom hook for consuming the form context
export const useFormContext = (): FormContextProps => {
    const context = useContext(FormContext)
    if (!context) {
        throw new Error("useFormContext must be used within a FormProvider")
    }
    return context
}       