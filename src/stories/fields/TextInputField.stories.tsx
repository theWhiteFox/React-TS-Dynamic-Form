import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import TextInputField from '../../components/fields/TextInputField'
import type { Field } from '../../lib/definitions'

const meta: Meta<typeof TextInputField> = {
    title: 'Form/Fields/TextInputField',
    component: TextInputField,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        field: {
            control: 'object',
            description: 'Configuration for the text input field',
        },
        value: {
            control: 'text',
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
        field: { name: 'name', label: 'Name', type: 'text', required: true } as Field,
        value: '',
        onChange: action('onChange'),
        error: undefined,
    },
}

export const WithValue: Story = {
    args: {
        ...Default.args,
        value: 'Stephen',
    },
}

export const RequiredField: Story = {
    args: {
        ...Default.args,
        field: { ...Default.args?.field, required: true } as Field,
        error: 'Required',
    },
}