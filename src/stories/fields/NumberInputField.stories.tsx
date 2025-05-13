import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import NumberInputField from '../../components/fields/NumberInputField'
import type { Field } from '../../lib/definitions'

const meta: Meta<typeof NumberInputField> = {
    title: 'Form/Fields/NumberInputField',
    component: NumberInputField,
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
            control: 'number',
            description: 'Current value of the input',
        },
        onChange: {
            action: 'onChange',
            description: 'Callback when the input value changes',
        },
    },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        field: { name: 'age', label: 'Age', type: 'number' } as Field,
        value: '',
        onChange: action('onChange'),
    },
}

export const WithValue: Story = {
    args: {
        ...Default.args,
        value: '18',
    },
}

export const WithError: Story = {
    args: {
        ...Default.args,
        error: 'Age must be 0 or more',
    },
}