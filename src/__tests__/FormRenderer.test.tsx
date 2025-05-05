import '@testing-library/jest-dom'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormRenderer from '../components/FormRenderer' // Adjust import path
import { myFormSchema, schema } from '../lib/schema' // Adjust import path

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

        const ageInput = screen.getByLabelText(/age/i) // or 'Age' depending on the actual label text
        await userEvent.type(ageInput, '30') // Simulate typing '30'

        // Assert that the value of the age input is updated correctly
        expect(ageInput).toHaveValue(30)

        const checkbox = screen.getByRole('checkbox', { name: /subscribe/i }) // case-insensitive matching

        // Simulate clicking the checkbox
        await userEvent.click(checkbox)
        expect(checkbox).toBeChecked() // Now it should be checked

        // Optionally, you can click again and ensure it's unchecked
        await userEvent.click(checkbox)
        expect(checkbox).not.toBeChecked()

        // Find the select (combobox) element by role and label (name)
        const select = screen.getByRole('combobox', { name: /gender/i }) // case-insensitive matching

        // Simulate selecting "Male" from the dropdown
        await userEvent.selectOptions(select, 'Male')

        // Assert that the value of the select has been updated to "Male"
        expect(select).toHaveValue('Male')
    })

    it('renders the DateField and allows date selection', async () => {
        render(<FormRenderer schema={schema} zodSchema={myFormSchema} />)

        const dateLabel = screen.getByText(/Date of Birth/i)
        expect(dateLabel).toBeInTheDocument()

        const dateInput = screen.getByRole('textbox', { name: /Date of Birth/i })
        expect(dateInput).toBeInTheDocument()

        await userEvent.click(dateInput)

        const calendar = await screen.findByRole('dialog', undefined, { timeout: 5000 })
        expect(calendar).toBeInTheDocument()
    })
})