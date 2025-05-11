import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormRenderer from '../components/FormRenderer'
import { myFormSchema, schema } from '../lib/schema'

describe('FormRenderer Component', () => {
    it('renders the form title', () => {
        render(<FormRenderer schema={schema} zodSchema={myFormSchema} />)
        expect(screen.getByText(schema.title)).toBeInTheDocument()
    })

    it('renders the form fields based on the schema', () => {
        render(<FormRenderer schema={schema} zodSchema={myFormSchema} />)

        schema.fields.forEach((field) => {
            expect(screen.getByText(field.label)).toBeInTheDocument()
            switch (field.type) {
                case 'text':
                    expect(screen.getByRole('textbox', { name: field.label })).toBeInTheDocument()
                    break
                case 'number':
                    expect(screen.getByRole('spinbutton', { name: field.label })).toBeInTheDocument()
                    break
                case 'checkbox':
                    expect(screen.getByRole('checkbox', { name: field.label })).toBeInTheDocument()
                    break
                case 'select':
                    expect(screen.getByRole('combobox', { name: field.label })).toBeInTheDocument()
                    break
                default:
                    break
            }
        })
    })

    it('renders the submit and reset buttons', () => {
        render(<FormRenderer schema={schema} zodSchema={myFormSchema} />)
        expect(screen.getByRole('button', { name: 'Submit' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: 'Reset' })).toBeInTheDocument()
    })

    it('updates form data on input change', async () => {
        render(<FormRenderer schema={schema} zodSchema={myFormSchema} />)

        await userEvent.type(screen.getByRole('textbox', { name: 'Name' }), 'John Doe')
        expect(screen.getByRole('textbox', { name: 'Name' })).toHaveValue('John Doe')

        const ageInput = screen.getByLabelText(/age/i)
        await userEvent.type(ageInput, '30')
        expect(ageInput).toHaveValue(30)

        const checkbox = screen.getByRole('checkbox', { name: /subscribe/i })
        await userEvent.click(checkbox)
        expect(checkbox).toBeChecked()
        await userEvent.click(checkbox)
        expect(checkbox).not.toBeChecked()

        const select = screen.getByRole('combobox', { name: /gender/i })
        await userEvent.selectOptions(select, 'Male')
        expect(select).toHaveValue('Male')
    })

    it('renders the DateField and allows date selection', async () => {
        render(<FormRenderer schema={schema} zodSchema={myFormSchema} />)

        const dateLabel = screen.getByText(/D.O.B/i)
        expect(dateLabel).toBeInTheDocument()

        const dateInput = screen.getByRole('textbox', { name: /D.O.B/i })
        expect(dateInput).toBeInTheDocument()

        await userEvent.click(dateInput)

        const calendar = await screen.findByRole('dialog', undefined, { timeout: 5000 })
        expect(calendar).toBeInTheDocument()
    })

    it('displays validation errors on submit when data is invalid', async () => {
        render(<FormRenderer schema={schema} zodSchema={myFormSchema} />)

        await userEvent.click(screen.getByRole('button', { name: 'Submit' }))
        expect(screen.queryByText(/age must be 0 or more/i)).toBeNull()
        expect(screen.queryByText(/please select a gender/i)).toBeNull()
        expect(screen.queryByText(/please select a date/i)).toBeNull()
    })

    it('displays specific validation errors for different invalid inputs', async () => {
        render(<FormRenderer schema={schema} zodSchema={myFormSchema} />)

        await userEvent.type(screen.getByRole('textbox', { name: 'Name' }), 'J')
        await userEvent.click(screen.getByRole('button', { name: 'Submit' }))
        expect(screen.getByText(/name must be at least 2 characters/i)).toBeInTheDocument()

        await userEvent.type(screen.getByRole('textbox', { name: 'Write' }), 'abc')
        await userEvent.click(screen.getByRole('button', { name: 'Submit' }))
    })

    it('displays "Age must be 0 or more" error for invalid age', async () => {
        render(<FormRenderer schema={schema} zodSchema={myFormSchema} />)

        await userEvent.type(screen.getByLabelText(/age/i), '-5')
        await userEvent.click(screen.getByRole('button', { name: 'Submit' }))

        await waitFor(() => {
            expect(screen.getByText((content) => content?.includes('Age must be 0 or more'))).toBeInTheDocument()
        })
    })
})
