import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import DateField from '../../components/fields/DateField'
import type { Field } from '../../lib/definitions'

const meta: Meta<typeof DateField> = {
    title: 'Form/Fields/DateField',
    component: DateField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        field: {
            control: 'object',
            description: 'Configuration for the number input field',
        },
        value: {
            control: 'date',
            description: 'Current value of the input',
        },
        onChange: {
            action: 'onChange',
            description: 'Callback when the input value changes',
        },
        error: {
            control: 'text',
            description: 'Optional error message',
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        field: { name: 'date', label: 'D.O.B', type: 'date' } as Field,
        value: '',
        onChange: action('onChange'),
        error: '',
        dateFormat: 'dd-MM-yyyy'
    },
}

export const WithValue: Story = {
    args: {
        ...Default.args,
        value: '2025-05-13',
    },
}

export const WithError: Story = {
    args: {
        ...Default.args,
        error: 'Age must be 120 or less',
    },
}