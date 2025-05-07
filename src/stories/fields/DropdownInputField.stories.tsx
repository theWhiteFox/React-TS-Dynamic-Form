import type { Meta, StoryObj } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import DropdownInputField from '../../components/fields/DropdownInputField'
import type { Field } from '../../lib/definitions'

const meta: Meta<typeof DropdownInputField> = {
    title: 'Form/Fields/DropdownInputField',
    component: DropdownInputField,
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
        field: { name: 'gender', label: 'Gender', type: 'select', options: ["Male", "Female", "Other"] } as Field,
        value: '',
        onChange: action('onChange'),
    },
}

export const WithValue: Story = {
    args: {
        ...Default.args,
        value: 'Male',
    },
}

export const WithError: Story = {
    args: {
        ...Default.args,
        error: 'Please select a gender',
    },
}